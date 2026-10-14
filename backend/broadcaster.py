"""
In-Memory SSE Pub/Sub Event Broadcaster
Manages per-game and global real-time event queues for HTTP SSE streaming.
"""

from __future__ import annotations

import asyncio
import logging
from typing import Dict, Set

logger = logging.getLogger("PriceTracker.Broadcaster")


class PriceEventBroadcaster:
    def __init__(self):
        self._game_subscribers: Dict[int, Set[asyncio.Queue]] = {}
        self._global_subscribers: Set[asyncio.Queue] = set()
        self._lock = asyncio.Lock()

    async def subscribe_game(self, game_id: int) -> asyncio.Queue:
        queue: asyncio.Queue = asyncio.Queue(maxsize=100)
        async with self._lock:
            if game_id not in self._game_subscribers:
                self._game_subscribers[game_id] = set()
            self._game_subscribers[game_id].add(queue)
        logger.info(f"SSE: Client subscribed to game {game_id}. Active: {len(self._game_subscribers[game_id])}")
        return queue

    async def unsubscribe_game(self, game_id: int, queue: asyncio.Queue):
        async with self._lock:
            if game_id in self._game_subscribers:
                self._game_subscribers[game_id].discard(queue)
                if not self._game_subscribers[game_id]:
                    del self._game_subscribers[game_id]
        logger.info(f"SSE: Client unsubscribed from game {game_id}")

    async def subscribe_global(self) -> asyncio.Queue:
        queue: asyncio.Queue = asyncio.Queue(maxsize=200)
        async with self._lock:
            self._global_subscribers.add(queue)
        return queue

    async def unsubscribe_global(self, queue: asyncio.Queue):
        async with self._lock:
            self._global_subscribers.discard(queue)

    async def broadcast(self, game_id: int, payload: dict):
        """Pushes an event payload to both specific game listeners and global feed listeners."""
        async with self._lock:
            game_queues = list(self._game_subscribers.get(game_id, []))
            global_queues = list(self._global_subscribers)

        all_targets = set(game_queues + global_queues)
        for q in all_targets:
            try:
                q.put_nowait(payload)
            except asyncio.QueueFull:
                logger.warning(f"SSE queue overflow for game {game_id}. Dropping old event.")


broadcaster = PriceEventBroadcaster()
