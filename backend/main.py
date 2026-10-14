"""
FastAPI Live Price Tracker Server
SSE Streaming, 325-Game Polling Engine, and On-Demand Ultra-Live Fetching
"""

from __future__ import annotations

import asyncio
from contextlib import asynccontextmanager
from datetime import datetime, timezone
import json
import logging
import os
from typing import AsyncGenerator
from fastapi import FastAPI, BackgroundTasks, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse, StreamingResponse
from fastapi.templating import Jinja2Templates
import httpx

try:
    from .models import GameRecord
    from .dataset import build_325_curated_catalog
    from .broadcaster import broadcaster
    from .worker import RoundRobinPriceWorker, check_game_prices
except (ImportError, ValueError):
    from models import GameRecord
    from dataset import build_325_curated_catalog
    from broadcaster import broadcaster
    from worker import RoundRobinPriceWorker, check_game_prices

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
logger = logging.getLogger("PriceTracker.Main")

# 1. Initialize the 325-game catalog in memory
CATALOG = build_325_curated_catalog()
worker = RoundRobinPriceWorker(catalog=CATALOG, interval_seconds=2.0)

# Setup templates directory
templates_dir = os.path.join(os.path.dirname(__file__), "templates")
templates = Jinja2Templates(directory=templates_dir)


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Manages background task lifecycle."""
    logger.info("Initializing 325-game price tracker engine...")
    await worker.start()
    yield
    logger.info("Shutting down worker...")
    await worker.stop()


app = FastAPI(
    title="OmniDB - Live Video Game Price Tracker",
    description="IsThereAnyDeal-style live streaming engine for 325 curated titles.",
    version="1.0.0",
    lifespan=lifespan
)

# Dynamic CORS configuration for Vercel & local development
allowed_origins_env = os.environ.get("ALLOWED_ORIGINS", "*")
if allowed_origins_env.strip() == "*":
    origins = ["*"]
    allow_credentials = False
else:
    origins = [o.strip() for o in allowed_origins_env.split(",") if o.strip()]
    allow_credentials = True

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_origin_regex=r"^https://.*\.vercel\.app$",
    allow_credentials=allow_credentials,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
async def health_check():
    """Health check endpoint for Render service monitoring."""
    return {
        "status": "ok",
        "service": "omnidb-price-tracker",
        "catalog_size": len(CATALOG),
        "timestamp": datetime.now(timezone.utc).isoformat()
    }


# ============================================================================
# BACKGROUND ON-DEMAND ULTRA-LIVE WORKER
# ============================================================================

async def trigger_ultra_live_fetch(game_id: int):
    """
    On-Demand Fetcher:
    Immediately queries live storefronts for this specific title.
    Includes a 45-second debounce cooldown to protect storefront rate limits.
    """
    game = CATALOG.get(game_id)
    if not game:
        return

    now = datetime.now(timezone.utc)
    if game.last_live_check:
        try:
            last_dt = datetime.fromisoformat(game.last_live_check)
            if (now - last_dt).total_seconds() < 45.0:
                logger.info(f"Ultra-live fetch for game {game_id} skipped (recently checked).")
                return
        except Exception:
            pass

    logger.info(f"Triggering on-demand live fetch for '{game.title}' (ID: {game_id})")
    headers = {"User-Agent": "OmniGameTracker/1.0 (+https://isthereanydeal-clone.local)"}
    async with httpx.AsyncClient(headers=headers, timeout=6.0) as client:
        await check_game_prices(client, game, notify_on_change=True)


# ============================================================================
# HTTP & TEMPLATE ENDPOINTS
# ============================================================================

@app.get("/", response_class=HTMLResponse)
async def home_redirect():
    """Redirect to the first game detail view."""
    return f"""
    <!DOCTYPE html>
    <html>
    <head><meta http-equiv="refresh" content="0; url=/game/1"></head>
    <body style="background:#020617;color:white;font-family:sans-serif;padding:2rem;">
        Redirecting to <a href="/game/1" style="color:#10b981;">Game #1 (Elden Ring)</a>...
    </body>
    </html>
    """


@app.get("/game/{game_id}", response_class=HTMLResponse)
async def render_game_card(game_id: int, request: Request):
    """Serves the HTMX game card for a specific game."""
    game = CATALOG.get(game_id)
    if not game:
        raise HTTPException(status_code=404, detail=f"Game with ID {game_id} not found in 325-game catalog")

    return templates.TemplateResponse("game_card.html", {"request": request, "game": game})


@app.get("/api/games")
async def list_all_games():
    """Returns catalog list of all 325 games with summary pricing."""
    return {
        "total_games": len(CATALOG),
        "data": [
            {
                "id": g.id,
                "ugdb_id": g.ugdb_id,
                "title": g.title,
                "slug": g.slug,
                "lowest_price": g.lowest_price,
                "max_discount": g.max_discount,
                "platforms_tracked": list(g.prices.keys()),
                "last_live_check": g.last_live_check
            }
            for g in CATALOG.values()
        ]
    }


@app.get("/api/games/{game_id}")
async def get_game_data(game_id: int, background_tasks: BackgroundTasks):
    """
    1. Immediately serves the cached local price from memory (< 5ms).
    2. Enqueues an ultra-live background task to fetch latest live prices.
    """
    game = CATALOG.get(game_id)
    if not game:
        raise HTTPException(status_code=404, detail="Game not found")

    # Dispatch ultra-live fetch non-blockingly
    background_tasks.add_task(trigger_ultra_live_fetch, game_id)

    return {
        "id": game.id,
        "ugdb_id": game.ugdb_id,
        "title": game.title,
        "slug": game.slug,
        "lowest_price": game.lowest_price,
        "max_discount": game.max_discount,
        "prices": {k: v.model_dump() for k, v in game.prices.items()},
        "last_live_check": game.last_live_check
    }


# ============================================================================
# SERVER-SENT EVENTS (SSE) STREAMING ROUTE
# ============================================================================

@app.get("/api/stream/games/{game_id}")
async def sse_game_stream(game_id: int, request: Request):
    """
    Server-Sent Events endpoint streaming live price dips for a specific game.
    Streams HTMX-compatible HTML component swaps directly to the client.
    """
    game = CATALOG.get(game_id)
    if not game:
        raise HTTPException(status_code=404, detail="Game not found")

    queue = await broadcaster.subscribe_game(game_id)

    async def event_generator() -> AsyncGenerator[str, None]:
        try:
            # Initial SSE handshake
            yield ": connected\n\n"

            while True:
                # Detect client disconnect
                if await request.is_disconnected():
                    break

                try:
                    payload = await asyncio.wait_for(queue.get(), timeout=15.0)

                    platform_name = payload["platform"]
                    curr_price = payload["current_price"]
                    orig_price = payload["original_price"]
                    disc = payload["discount_percent"]
                    is_low = payload.get("is_historical_low", False)
                    drm = payload.get("drm_type", "Digital Store")
                    url = payload.get("store_url", "")

                    badge_html = (
                        '<span class="bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-black uppercase px-1.5 py-0.5 rounded">All-Time Low!</span>'
                        if is_low else ''
                    )

                    # Dynamic HTML component directly swapped by HTMX
                    html_snippet = f"""
                    <div id="price-card-{platform_name}"
                         sse-swap="price-update"
                         hx-swap="outerHTML swap:0.3s"
                         class="p-4 rounded-xl border bg-slate-800/90 border-emerald-500/60 shadow-lg price-updated-flash transition duration-300">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-sm font-bold uppercase tracking-wider text-slate-100">{platform_name}</span>
                            {badge_html}
                        </div>
                        <div class="flex items-baseline justify-between mt-3">
                            <div class="space-x-1.5">
                                <span class="text-2xl font-black text-white">{curr_price}</span>
                                <span class="text-xs line-through text-slate-400">{orig_price}</span>
                            </div>
                            <span class="text-xs font-bold px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                                {disc}
                            </span>
                        </div>
                        <div class="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                            <span>{drm}</span>
                            {'<a href="' + url + '" target="_blank" class="text-emerald-400 hover:underline">Visit Store &rarr;</a>' if url else ''}
                        </div>
                    </div>
                    """.replace("\n", "").strip()

                    yield f"event: price-update\ndata: {html_snippet}\n\n"

                except asyncio.TimeoutError:
                    # Keep-alive comment every 15s to prevent gateway timeout
                    yield ": ping\n\n"

        finally:
            await broadcaster.unsubscribe_game(game_id, queue)

    return StreamingResponse(
        event_generator(),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no",
        }
    )


@app.get("/api/stream/all")
async def sse_global_stream(request: Request):
    """Streams all price changes across the entire 325-game catalog in JSON format."""
    queue = await broadcaster.subscribe_global()

    async def event_generator() -> AsyncGenerator[str, None]:
        try:
            yield ": connected\n\n"
            while True:
                if await request.is_disconnected():
                    break
                try:
                    payload = await asyncio.wait_for(queue.get(), timeout=15.0)
                    yield f"event: global-price-drop\ndata: {json.dumps(payload)}\n\n"
                except asyncio.TimeoutError:
                    yield ": ping\n\n"
        finally:
            await broadcaster.unsubscribe_global(queue)

    return StreamingResponse(
        event_generator(),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no",
        }
    )
