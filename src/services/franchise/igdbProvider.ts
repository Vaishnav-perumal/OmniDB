import { IFranchiseProvider, ProviderGameMatch } from './providerAdapter';
import { Franchise, FranchiseGame, FranchiseGameType } from '../../types/franchise';
import { calculateTitleSimilarity, normalizeTitle } from './matchingUtils';

interface IgdbCacheEntry {
  data: any;
  expiresAt: number;
}

export class IgdbFranchiseProvider implements IFranchiseProvider {
  public readonly name = 'IGDB (Twitch Developer API)';
  private clientId: string;
  private clientSecret: string;
  private accessToken: string | null = null;
  private tokenExpiresAt = 0;
  private cache = new Map<string, IgdbCacheEntry>();
  private requestQueue: Promise<any> = Promise.resolve();
  private lastRequestTime = 0;
  private minIntervalMs = 260; // Max 4 requests/sec per IGDB rate limits

  constructor() {
    this.clientId =
      (typeof process !== 'undefined' && process.env?.TWITCH_CLIENT_ID) ||
      (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_TWITCH_CLIENT_ID) ||
      '';
    this.clientSecret =
      (typeof process !== 'undefined' && process.env?.TWITCH_CLIENT_SECRET) ||
      (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_TWITCH_CLIENT_SECRET) ||
      '';
  }

  public isConfigured(): boolean {
    return Boolean(this.clientId && this.clientSecret);
  }

  private async throttle(): Promise<void> {
    const now = Date.now();
    const elapsed = now - this.lastRequestTime;
    if (elapsed < this.minIntervalMs) {
      await new Promise(resolve => setTimeout(resolve, this.minIntervalMs - elapsed));
    }
    this.lastRequestTime = Date.now();
  }

  private async getAccessToken(): Promise<string | null> {
    if (!this.isConfigured()) return null;
    if (this.accessToken && Date.now() < this.tokenExpiresAt - 60000) {
      return this.accessToken;
    }

    try {
      const resp = await fetch('https://id.twitch.tv/oauth2/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          client_id: this.clientId,
          client_secret: this.clientSecret,
          grant_type: 'client_credentials'
        })
      });

      if (!resp.ok) {
        throw new Error(`Failed to fetch Twitch token: ${resp.status} ${resp.statusText}`);
      }

      const json = await resp.json();
      this.accessToken = json.access_token;
      this.tokenExpiresAt = Date.now() + (json.expires_in || 3600) * 1000;
      return this.accessToken;
    } catch (err) {
      console.warn('IGDB Provider: Could not authenticate with Twitch OAuth:', err);
      return null;
    }
  }

  private async fetchWithRetry(endpoint: string, queryBody: string, retries = 3): Promise<any> {
    const cacheKey = `${endpoint}::${queryBody}`;
    const cached = this.cache.get(cacheKey);
    if (cached && Date.now() < cached.expiresAt) {
      return cached.data;
    }

    const token = await this.getAccessToken();
    if (!token) return null;

    let delay = 300;
    for (let attempt = 0; attempt <= retries; attempt++) {
      await this.throttle();
      try {
        const resp = await fetch(`https://api.igdb.com/v4/${endpoint}`, {
          method: 'POST',
          headers: {
            'Client-ID': this.clientId,
            Authorization: `Bearer ${token}`,
            'Content-Type': 'text/plain'
          },
          body: queryBody
        });

        if (resp.status === 429) {
          // Rate limited, exponential backoff
          await new Promise(r => setTimeout(r, delay));
          delay *= 2;
          continue;
        }

        if (!resp.ok) {
          throw new Error(`IGDB error ${resp.status}: ${resp.statusText}`);
        }

        const data = await resp.json();
        // Cache for 6 hours
        this.cache.set(cacheKey, { data, expiresAt: Date.now() + 6 * 3600 * 1000 });
        return data;
      } catch (err) {
        if (attempt === retries) throw err;
        await new Promise(r => setTimeout(r, delay));
        delay *= 2;
      }
    }
    return null;
  }

  public async searchGame(query: {
    title: string;
    steamAppId?: string;
    gameId?: string;
  }): Promise<ProviderGameMatch | null> {
    if (!this.isConfigured()) return null;

    try {
      // 1. Try matching by Steam App ID first
      if (query.steamAppId) {
        const steamQuery = `fields name, slug, franchises.name, franchises.id, franchise.name, franchise.id, collection.name, collection.id, external_games.category, external_games.uid;
          where external_games.category = 1 & external_games.uid = "${query.steamAppId}";
          limit 1;`;
        const steamMatches = await this.fetchWithRetry('games', steamQuery);
        if (steamMatches && steamMatches.length > 0) {
          const game = steamMatches[0];
          return this.mapToMatch(game, 1.0, 'external_id', query.steamAppId);
        }
      }

      // 2. Fuzzy normalized title matching
      const cleanTitle = normalizeTitle(query.title);
      const searchBody = `search "${cleanTitle}";
        fields name, slug, franchises.name, franchises.id, franchise.name, franchise.id, collection.name, collection.id, external_games.category, external_games.uid;
        limit 5;`;
      const results = await this.fetchWithRetry('games', searchBody);
      if (!results || results.length === 0) return null;

      let bestMatch: any = null;
      let highestScore = 0;

      for (const item of results) {
        const score = calculateTitleSimilarity(query.title, item.name);
        if (score > highestScore) {
          highestScore = score;
          bestMatch = item;
        }
      }

      if (bestMatch && highestScore >= 0.5) {
        return this.mapToMatch(
          bestMatch,
          highestScore,
          highestScore >= 0.85 ? 'exact_title' : 'fuzzy_title'
        );
      }

      return null;
    } catch (err) {
      console.warn('IGDB Provider search failed:', err);
      return null;
    }
  }

  private mapToMatch(
    game: any,
    confidenceScore: number,
    matchType: 'external_id' | 'exact_title' | 'fuzzy_title',
    steamAppId?: string
  ): ProviderGameMatch {
    const franchise = game.franchises?.[0] || game.franchise;
    const collection = game.collection;
    const steamExt = game.external_games?.find((eg: any) => eg.category === 1);

    return {
      providerId: game.id,
      title: game.name,
      franchiseName: franchise?.name || collection?.name,
      franchiseId: franchise?.id || collection?.id,
      collectionName: collection?.name,
      collectionId: collection?.id,
      confidenceScore,
      matchType,
      externalIds: {
        igdbId: game.id,
        steamAppId: steamExt?.uid || steamAppId
      }
    };
  }

  public async getFranchiseGames(
    franchiseRef: string | number,
    franchiseName?: string
  ): Promise<{ franchise: Franchise; games: FranchiseGame[] } | null> {
    if (!this.isConfigured()) return null;

    try {
      const franchiseIdNum = Number(franchiseRef);
      // Query IGDB games with franchise or collection reference
      const query = `fields name, slug, first_release_date, category, status, genres.name, cover.url, platforms.abbreviation, external_games.category, external_games.uid, summary;
        where (franchise = ${franchiseIdNum} | franchises = [${franchiseIdNum}] | collection = ${franchiseIdNum});
        sort first_release_date asc;
        limit 50;`;

      const rows = await this.fetchWithRetry('games', query);
      if (!rows || rows.length === 0) return null;

      const fName = franchiseName || rows[0].name.split(/[:\-\d]/)[0].trim();
      const slug = fName.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');

      const games: FranchiseGame[] = rows.map((r: any, idx: number) => {
        const releaseDate = r.first_release_date
          ? new Date(r.first_release_date * 1000).toISOString().split('T')[0]
          : '2026-01-01';

        const steamExt = r.external_games?.find((eg: any) => eg.category === 1);
        const coverUrl = r.cover?.url
          ? `https:${r.cover.url.replace('t_thumb', 't_cover_big')}`
          : 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80';

        const gameType = this.mapIgdbCategory(r.category);

        return {
          id: r.slug || `igdb-${r.id}`,
          franchiseId: slug,
          title: r.name,
          release_date: releaseDate,
          platforms: ['steam', 'playstation', 'xbox'],
          cover: coverUrl,
          genres: r.genres?.map((g: any) => g.name) || ['Action', 'RPG'],
          type: gameType,
          seriesOrder: idx + 1,
          external_ids: {
            igdbId: r.id,
            steamAppId: steamExt?.uid
          },
          summary: r.summary || `Part of the ${fName} series.`,
          status: r.status === 6 ? 'cancelled' : r.first_release_date * 1000 > Date.now() ? 'announced' : 'released'
        };
      });

      const franchise: Franchise = {
        id: slug,
        name: fName,
        slug,
        igdbFranchiseId: franchiseIdNum,
        coverImage: games[0]?.cover,
        description: `All games in the ${fName} franchise.`,
        gameCount: games.length,
        created_at: new Date().toISOString(),
        last_checked_at: new Date().toISOString()
      };

      return { franchise, games };
    } catch (err) {
      console.warn('IGDB getFranchiseGames failed:', err);
      return null;
    }
  }

  private mapIgdbCategory(category: number): FranchiseGameType {
    switch (category) {
      case 0:
        return 'main_game';
      case 1:
        return 'dlc';
      case 2:
        return 'expansion';
      case 3:
        return 'bundle';
      case 4:
        return 'expansion';
      case 8:
        return 'remake';
      case 9:
        return 'remaster';
      case 10:
        return 'remaster';
      default:
        return 'spin_off';
    }
  }
}
