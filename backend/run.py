"""
OmniDB Price Tracker Backend Launcher
Production-ready for Render and local development
"""

import sys
import os

# Ensure both repo root and backend directory are on PYTHONPATH
backend_dir = os.path.dirname(os.path.abspath(__file__))
repo_root = os.path.dirname(backend_dir)
for p in [repo_root, backend_dir]:
    if p not in sys.path:
        sys.path.insert(0, p)

import uvicorn

if __name__ == "__main__":
    host = os.environ.get("HOST", "0.0.0.0")
    port = int(os.environ.get("PORT", "8000"))
    is_prod = os.environ.get("RENDER") is not None or os.environ.get("NODE_ENV") == "production"
    reload = os.environ.get("RELOAD", "false").lower() == "true" if is_prod else True

    print("=" * 65)
    print("  OmniDB Price Tracker - FastAPI SSE Backend Running")
    print("  Curated 325-Game Live Poller + On-Demand Ultra-Live Worker")
    print("=" * 65)
    print(f"  * Host:          {host}")
    print(f"  * Port:          {port}")
    print(f"  * Environment:   {'Render/Production' if is_prod else 'Development'}")
    print(f"  * Web UI:        http://{host}:{port}/game/1")
    print(f"  * Health Check:  http://{host}:{port}/health")
    print(f"  * API Docs:      http://{host}:{port}/docs")
    print(f"  * SSE Endpoint:  http://{host}:{port}/api/stream/games/1")
    print("=" * 65)

    app_target = "backend.main:app" if os.path.exists(os.path.join(repo_root, "backend")) else "main:app"
    uvicorn.run(app_target, host=host, port=port, reload=reload)
