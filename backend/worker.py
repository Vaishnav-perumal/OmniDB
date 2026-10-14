"""
The 325-Game Optimization Background Worker
Continuously loops through the 325 games in a polite round-robin pattern.
Checks storefronts, records price drops, and broadcasts updates via SSE.
"""

from __future__ import annotations

import asyncio
from datetime import datetime, timezone
import logging
from typing import Dict, List, Optional
import httpx

try:
    from .models import GameRecord, PlatformPrice
    from .adapters import STORE_ADAPTERS
    from .broadcaster import broadcaster
except (ImportError, ValueError):
    from models import GameRecord, PlatformPrice
    from adapters import STORE_ADAPTERS
    from broadcaster import broadcaster

logger = logging.getLogger("PriceTracker.Worker")


async def check_game_prices(
    client: httpx.AsyncClient,
    game: GameRecord,
    notify_on_change: bool = True
) -> List[PlatformPrice]:
    """
    Checks all configured platforms for a single game in parallel.
    Returns list of updated PlatformPrice records.
    """
    tasks = []
    platform_names = []

    for plat_name, ident in game.platform_identifiers.items():
        adapter = STORE_ADAPTERS.get(plat_name)
        if adapter and ident:
            platform_names.append(plat_name)
            tasks.append(adapter.fetch_price(client, ident))

    if not tasks:
        return []

    results = await asyncio.gather(*tasks, return_exceptions=True)
    updated_prices: List[PlatformPrice] = []

    for plat_name, res in zip(platform_names, results):
        if isinstance(res, PlatformPrice):
            old_price = game.prices.get(plat_name)
            price_dropped = old_price is None or res.current_price < old_price.current_price

            game.prices[plat_name] = res
            updated_prices.append(res)

            # Recompute lowest price & max discount
            all_current = [p.current_price for p in game.prices.values()]
            all_discounts = [p.discount_percent for p in game.prices.values()]
            if all_current:
                game.lowest_price = min(all_current)
            if all_discounts:
                game.max_discount = max(all_discounts)

            game.last_live_check = datetime.now(timezone.utc).isoformat()

            if price_dropped and notify_on_change:
                logger.info(f"Price dip detected for '{game.title}' on {plat_name}: ${res.current_price}")
                await broadcaster.broadcast(game.id, {
                    "event": "price_update",
                    "game_id": game.id,
                    "title": game.title,
                    "platform": plat_name,
                    "current_price": f"${res.current_price:.2f}",
                    "original_price": f"${res.original_price:.2f}",
                    "discount_percent": f"-{res.discount_percent}%",
                    "is_historical_low": res.is_historical_low,
                    "drm_type": res.drm_type or "Digital",
                    "store_url": res.store_url or "",
                    "timestamp": res.updated_at
                })

    return updated_prices


class RoundRobinPriceWorker:
    """
    Asynchronous Worker for the 325-Game Catalog:
    Sweeps 1 game every 2 seconds (~10.8 minutes per complete sweep).
    Completely isolated so that any storefront failure never crashes the worker.
    """
    def __init__(self, catalog: Dict[int, GameRecord], interval_seconds: float = 2.0):
        self.catalog = catalog
        self.interval = interval_seconds
        self.is_running = False
        self._task: Optional[asyncio.Task] = None

    async def start(self):
        self.is_running = True
        self._task = asyncio.create_task(self._run_loop())
        logger.info(f"Worker started: polling 325 games every {self.interval}s.")

    async def stop(self):
        self.is_running = False
        if self._task:
            self._task.cancel()
            try:
                await self._task
            except asyncio.CancelledError:
                pass
        logger.info("Worker stopped.")

    async def _run_loop(self):
        game_ids = list(self.catalog.keys())
        idx = 0

        headers = {"User-Agent": "OmniGameTracker/1.0 (+https://isthereanydeal-clone.local)"}
        async with httpx.AsyncClient(headers=headers, timeout=10.0) as client:
            while self.is_running:
                try:
                    if not game_ids:
                        await asyncio.sleep(5)
                        continue

                    current_id = game_ids[idx]
                    idx = (idx + 1) % len(game_ids)

                    game = self.catalog.get(current_id)
                    if game:
                        await check_game_prices(client, game, notify_on_change=True)

                    await asyncio.sleep(self.interval)

                except asyncio.CancelledError:
                    break
                except Exception as e:
                    logger.error(f"Worker loop error: {e}", exc_info=False)
                    await asyncio.sleep(5.0)
