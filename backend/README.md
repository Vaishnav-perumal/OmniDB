# OmniDB Price Tracker — Live SSE Python Backend

A lightweight, asynchronous Python backend modeled after IsThereAnyDeal, tracking **325 curated video games** across five major storefronts: **Steam, GOG, PlayStation Network, Xbox Store, and Nintendo eShop**.

---

## Architecture Features

1. **Server-Sent Events (SSE) Streaming:** Standard HTTP streaming via Starlette/FastAPI `StreamingResponse` delivering live HTML snippet swaps directly into HTMX without WebSocket overhead.
2. **The 325-Game Optimization Worker:** An asynchronous round-robin poller that cycles through all 325 games every 2 seconds (~10.8 minutes per complete sweep), keeping well clear of storefront rate limits.
3. **On-Demand "Ultra-Live" Fetching:** When a user visits `/game/{id}`, the cached price is served in `< 5ms`, and a non-blocking `BackgroundTask` immediately checks live storefront APIs with a 45-second debounce protection.
4. **Resilient Multi-Platform Adapters:** Steam, GOG, PlayStation, Xbox, and Nintendo adapters with strict timeouts (4-5s) and fault isolation so down stores never crash the tracker.

---

## Project Structure

```
backend/
├── adapters.py          # Steam, GOG, PS, Xbox, Nintendo storefront adapters
├── broadcaster.py       # In-memory asyncio.Queue SSE pub/sub broadcaster
├── dataset.py           # 325 curated games catalog with platform IDs
├── main.py              # FastAPI application, SSE routes, and endpoints
├── models.py            # Pydantic and domain models (PlatformPrice, GameRecord)
├── run.py               # Launcher script for Uvicorn
├── worker.py            # 325-game round-robin asynchronous background worker
├── requirements.txt     # Python dependencies
└── templates/
    └── game_card.html   # HTMX + SSE frontend card with live price-flash
```

---

## Quickstart

### 1. Install Dependencies
```bash
pip install -r backend/requirements.txt
```

### 2. Run the Server
```bash
python backend/run.py
```
Or directly with Uvicorn:
```bash
uvicorn backend.main:app --reload --port 8000
```

---

## Endpoints

| Route | Method | Description |
|---|---|---|
| `/game/{game_id}` | GET | Serves HTMX game card with SSE live updates |
| `/api/games` | GET | Lists all 325 games with summary pricing |
| `/api/games/{game_id}` | GET | Returns immediate cached prices & triggers on-demand ultra-live fetch |
| `/api/stream/games/{game_id}` | GET | SSE stream emitting `price-update` HTML swaps for HTMX |
| `/api/stream/all` | GET | SSE stream emitting JSON price-dip events across all 325 games |
| `/docs` | GET | Interactive Swagger UI API documentation |
