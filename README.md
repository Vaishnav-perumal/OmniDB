# OmniDB — Universal Game Database & Real-Time Price Tracker

A full-stack, cross-platform video game database and real-time deal tracker inspired by SteamDB and IsThereAnyDeal.

---

## Deployment Quick Links

The repository is pre-configured for automated deployment:
- **Frontend on Vercel:** Configured via [`vercel.json`](vercel.json)
- **Backend on Render:** Configured via [`render.yaml`](render.yaml)

👉 **Read the full step-by-step deployment guide in [DEPLOYMENT.md](DEPLOYMENT.md).**

---

## Project Structure

```
├── backend/               # FastAPI + SSE Real-Time Price Tracking Service
│   ├── main.py            # FastAPI application routes & CORS configuration
│   ├── run.py             # Production-ready Uvicorn launcher ($PORT & $HOST aware)
│   ├── worker.py          # 325-game asynchronous round-robin poller
│   ├── adapters.py        # Storefront adapters (Steam, GOG, PlayStation, Xbox, Switch)
│   ├── dataset.py         # Curated catalog dataset & schema
│   ├── models.py          # Pydantic domain models
│   ├── templates/         # HTMX SSE streaming templates
│   ├── Dockerfile         # Optional containerized backend build
│   └── requirements.txt   # Python dependencies
├── src/                   # React 19 + TypeScript + Tailwind CSS Frontend
│   ├── components/        # UI components & comparison tables
│   ├── views/             # Catalog browser, game detail, matrix, watchlist views
│   ├── db/                # In-memory PGlite PostgreSQL database
│   └── services/          # Backend API client & franchise providers
├── vercel.json            # Vercel deployment configuration (SPA routing & asset headers)
├── render.yaml            # Render Blueprint for automated backend deployment
├── package.json           # Frontend scripts and dependencies
└── vite.config.ts         # Vite build configuration with development proxy
```

---

## Running Locally

### 1. Backend (FastAPI)
```bash
pip install -r backend/requirements.txt
python backend/run.py
```
Backend API will be accessible at `http://localhost:8000` (Docs: `http://localhost:8000/docs`).

### 2. Frontend (React / Vite)
```bash
npm install
npm run dev
```
Frontend will be accessible at `http://localhost:3000`. Requests to `/api` proxy automatically to the backend.
