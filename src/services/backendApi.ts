/**
 * Backend API Client for OmniDB Live Tracker
 * Connects the Vercel-hosted React frontend to the Render-hosted FastAPI backend.
 */

export interface BackendHealthResponse {
  status: string;
  service: string;
  catalog_size: number;
  timestamp: string;
}

export interface BackendCatalogSummary {
  total_games: number;
  data: Array<{
    id: number;
    ugdb_id: string;
    title: string;
    slug: string;
    lowest_price: number;
    max_discount: number;
    platforms_tracked: string[];
    last_live_check: string | null;
  }>;
}

export interface BackendGamePrices {
  id: number;
  ugdb_id: string;
  title: string;
  slug: string;
  lowest_price: number;
  max_discount: number;
  prices: Record<
    string,
    {
      platform: string;
      current_price: number;
      original_price: number;
      discount_percent: number;
      is_historical_low: boolean;
      currency: string;
      store_url?: string;
      drm_type?: string;
      updated_at: string;
    }
  >;
  last_live_check: string | null;
}

export interface GlobalPriceDropEvent {
  event: string;
  game_id: number;
  title: string;
  platform: string;
  current_price: string;
  original_price: string;
  discount_percent: string;
  is_historical_low: boolean;
  drm_type: string;
  store_url: string;
  timestamp: string;
}

export function getBackendBaseUrl(): string {
  const envUrl =
    (typeof import.meta !== 'undefined' &&
      ((import.meta as any).env?.VITE_API_URL || (import.meta as any).env?.VITE_BACKEND_URL)) ||
    '';
  return envUrl ? envUrl.replace(/\/+$/, '') : '';
}

/**
 * Checks connectivity with the Render FastAPI backend.
 */
export async function checkBackendHealth(): Promise<BackendHealthResponse | null> {
  const base = getBackendBaseUrl();
  const url = base ? `${base}/health` : '/health';
  try {
    const res = await fetch(url, { headers: { Accept: 'application/json' } });
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.warn('[BackendAPI] Health check failed:', err);
    return null;
  }
}

/**
 * Fetches the 325-game catalog with live pricing summaries from the backend.
 */
export async function fetchCatalogFromBackend(): Promise<BackendCatalogSummary | null> {
  const base = getBackendBaseUrl();
  const url = base ? `${base}/api/games` : '/api/games';
  try {
    const res = await fetch(url, { headers: { Accept: 'application/json' } });
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.warn('[BackendAPI] Failed to fetch catalog:', err);
    return null;
  }
}

/**
 * Fetches immediate cached pricing for a game and triggers ultra-live backend verification.
 */
export async function fetchGamePricesFromBackend(
  gameId: number | string
): Promise<BackendGamePrices | null> {
  const base = getBackendBaseUrl();
  const url = base ? `${base}/api/games/${gameId}` : `/api/games/${gameId}`;
  try {
    const res = await fetch(url, { headers: { Accept: 'application/json' } });
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.warn(`[BackendAPI] Failed to fetch prices for game ${gameId}:`, err);
    return null;
  }
}

/**
 * Subscribes to global price dips across all 325 games via Server-Sent Events (SSE).
 */
export function subscribeToGlobalPriceDrops(
  onDrop: (event: GlobalPriceDropEvent) => void,
  onError?: (err: any) => void
): () => void {
  const base = getBackendBaseUrl();
  const streamUrl = base ? `${base}/api/stream/all` : '/api/stream/all';

  try {
    const eventSource = new EventSource(streamUrl);

    eventSource.addEventListener('global-price-drop', (event: MessageEvent) => {
      try {
        const payload = JSON.parse(event.data);
        onDrop(payload);
      } catch (e) {
        console.error('[BackendAPI] Error parsing global price drop SSE:', e);
      }
    });

    eventSource.onerror = err => {
      if (onError) onError(err);
    };

    return () => {
      eventSource.close();
    };
  } catch (err) {
    if (onError) onError(err);
    return () => {};
  }
}
