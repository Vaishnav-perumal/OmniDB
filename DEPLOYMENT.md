# OmniDB Deployment Guide: Vercel (Frontend) & Render (Backend)

This repository is fully configured for a seamless full-stack deployment:
- **Frontend (React + Vite + Tailwind + PGlite):** Deployed to **[Vercel](https://vercel.com)**
- **Backend (FastAPI + SSE Real-Time Price Tracker):** Deployed to **[Render](https://render.com)**

---

## Architecture Overview

```
                      ┌──────────────────────────────────────┐
                      │          Vercel Deployment           │
                      │     (Vite + React Single-Page App)   │
                      │   Domain: https://your-app.vercel.app│
                      └──────────────────┬───────────────────┘
                                         │
              REST API (/api/*) & SSE    │  CORS: Dynamic / Auto-Allowed
              EventStream (/api/stream/*)│  Env: VITE_API_URL
                                         ▼
                      ┌──────────────────────────────────────┐
                      │          Render Web Service          │
                      │      (FastAPI + Python 3.11 ASGI)    │
                      │ Domain: https://your-backend.onrender.com
                      └──────────────────────────────────────┘
```

---

## Phase 1: Push to GitHub

1. If Git is installed on your machine, initialize and push your repository:
   ```bash
   git init
   git add .
   git commit -m "feat: configure full-stack deployment for Vercel and Render"
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPO_NAME>.git
   git push -u origin main
   ```
2. *Alternative:* You can also drag and drop the folder into **GitHub Desktop** or import the repository through the GitHub Web UI.

---

## Phase 2: Deploy the Backend on Render

The repository includes a pre-configured `render.yaml` Blueprint file, enabling 1-click deployment.

### Option A: 1-Click Blueprint (Recommended)
1. Sign in to your **[Render Dashboard](https://dashboard.render.com/)**.
2. Click **New +** in the top navigation and select **Blueprint**.
3. Connect your GitHub repository.
4. Render will automatically detect `render.yaml` and configure:
   - **Service Name:** `omnidb-price-tracker`
   - **Environment:** `Python 3`
   - **Build Command:** `pip install -r backend/requirements.txt`
   - **Start Command:** `uvicorn backend.main:app --host 0.0.0.0 --port $PORT`
   - **Health Check Path:** `/health`
5. Click **Apply**.
6. Once deployed, copy your backend URL (e.g., `https://omnidb-price-tracker.onrender.com`).

### Option B: Manual Web Service Setup
1. On the Render Dashboard, click **New +** -> **Web Service**.
2. Select your repository.
3. Configure the following fields:
   - **Name:** `omnidb-backend`
   - **Region:** Any (e.g., `Oregon (US West)` or `Frankfurt (EU)`)
   - **Branch:** `main`
   - **Root Directory:** Leave blank (repository root)
   - **Runtime:** `Python 3`
   - **Build Command:** `pip install -r backend/requirements.txt`
   - **Start Command:** `uvicorn backend.main:app --host 0.0.0.0 --port $PORT`
   - **Instance Type:** `Free`
4. Under **Advanced**:
   - **Health Check Path:** `/health`
   - **Environment Variables:**
     - `PYTHON_VERSION`: `3.11.9`
     - `ALLOWED_ORIGINS`: `*` (or your Vercel domain once deployed, e.g. `https://your-app.vercel.app`)
5. Click **Create Web Service**.
6. Once the build finishes and shows `Live`, test the health check in your browser:
   `https://<your-backend-slug>.onrender.com/health`

---

## Phase 3: Deploy the Frontend on Vercel

The repository includes `vercel.json` with pre-configured SPA routing and cache control.

### Step-by-Step Deployment
1. Log in to **[Vercel](https://vercel.com/)**.
2. Click **Add New...** -> **Project**.
3. Import your GitHub repository.
4. Configure Project Settings:
   - **Framework Preset:** `Vite` (automatically detected)
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Expand **Environment Variables** and add:
   | Key | Value | Description |
   |---|---|---|
   | `VITE_API_URL` | `https://<your-backend>.onrender.com` | Your live Render backend URL |
   | `VITE_RAWG_API_KEY` | *(Optional)* | RAWG API key for franchise games |
   | `VITE_TWITCH_CLIENT_ID` | *(Optional)* | Twitch Client ID for IGDB |
   | `VITE_TWITCH_CLIENT_SECRET` | *(Optional)* | Twitch Client Secret for IGDB |
6. Click **Deploy**.
7. Vercel will build and assign you a production URL (e.g., `https://your-app.vercel.app`).

---

## Phase 4: Configure CORS & Connect Services

1. Open your **Render Dashboard** for the backend service.
2. Navigate to **Environment**.
3. Set `ALLOWED_ORIGINS` to include your Vercel domains (comma-separated):
   ```
   ALLOWED_ORIGINS=https://your-app.vercel.app,http://localhost:3000
   ```
   *(Note: The backend also has automatic regex matching for all `*.vercel.app` domains, so Vercel preview branches work out-of-the-box!)*
4. Save changes (Render will automatically redeploy with the updated origins).

---

## Verification & Testing Checklist

- [ ] **Backend Health Check:** Visit `https://your-backend.onrender.com/health` -> should return `{"status": "ok", ...}`
- [ ] **Catalog API:** Visit `https://your-backend.onrender.com/api/games` -> should return JSON with 325 games
- [ ] **Interactive API Docs:** Visit `https://your-backend.onrender.com/docs` -> FastAPI Swagger UI
- [ ] **SSE Live Stream:** Visit `https://your-backend.onrender.com/api/stream/all` -> should begin SSE ping stream
- [ ] **Frontend Single Page App:** Open `https://your-app.vercel.app` -> loads database and UI instantly
- [ ] **Client-Side Routing / Deep Links:** Refreshing any subpage does not return 404 (handled by `vercel.json`)

---

## Render Free Tier Sleep Note
Render's free tier services spin down after 15 minutes of inactivity. When a request arrives, Render spins the container back up within ~30–50 seconds. 

The frontend includes offline and local PGlite fallbacks so that even while the backend is waking up, your users experience immediate interactive database browsing without blocking.
