import { IFranchiseProvider, ProviderGameMatch } from './providerAdapter';
import { Franchise, FranchiseGame } from '../../types/franchise';
import { calculateTitleSimilarity, normalizeTitle } from './matchingUtils';

export class RawgFranchiseProvider implements IFranchiseProvider {
  public readonly name = 'RAWG API (game-series)';
  private apiKey: string;
  private cache = new Map<string, { data: any; expiresAt: number }>();

  constructor() {
    this.apiKey =
      (typeof process !== 'undefined' && process.env?.RAWG_API_KEY) ||
      (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_RAWG_API_KEY) ||
      '';
  }

  public isConfigured(): boolean {
    return Boolean(this.apiKey);
  }

  public async searchGame(query: {
    title: string;
    steamAppId?: string;
    gameId?: string;
  }): Promise<ProviderGameMatch | null> {
    if (!this.isConfigured()) return null;

    try {
      const q = encodeURIComponent(normalizeTitle(query.title));
      const url = `https://api.rawg.io/api/games?search=${q}&key=${this.apiKey}&page_size=5`;

      const cached = this.cache.get(url);
      let data = cached?.data;
      if (!data || Date.now() > (cached?.expiresAt || 0)) {
        const resp = await fetch(url);
        if (!resp.ok) return null;
        data = await resp.json();
        this.cache.set(url, { data, expiresAt: Date.now() + 6 * 3600 * 1000 });
      }

      if (!data.results || data.results.length === 0) return null;

      let bestMatch: any = null;
      let highestScore = 0;

      for (const item of data.results) {
        const score = calculateTitleSimilarity(query.title, item.name);
        if (score > highestScore) {
          highestScore = score;
          bestMatch = item;
        }
      }

      if (bestMatch && highestScore >= 0.5) {
        const franchiseName = bestMatch.name.split(/[:\-\d]/)[0].trim();
        return {
          providerId: bestMatch.id,
          title: bestMatch.name,
          franchiseName,
          franchiseId: bestMatch.id,
          confidenceScore: highestScore,
          matchType: highestScore >= 0.85 ? 'exact_title' : 'fuzzy_title',
          externalIds: {
            rawgId: bestMatch.id
          }
        };
      }
      return null;
    } catch (err) {
      console.warn('RAWG Provider search failed:', err);
      return null;
    }
  }

  public async getFranchiseGames(
    franchiseRef: string | number,
    franchiseName?: string
  ): Promise<{ franchise: Franchise; games: FranchiseGame[] } | null> {
    if (!this.isConfigured()) return null;

    try {
      const gameId = franchiseRef;
      // RAWG series endpoint: /api/games/{id}/game-series
      const seriesUrl = `https://api.rawg.io/api/games/${gameId}/game-series?key=${this.apiKey}`;
      const gameUrl = `https://api.rawg.io/api/games/${gameId}?key=${this.apiKey}`;

      const [seriesResp, gameResp] = await Promise.all([fetch(seriesUrl), fetch(gameUrl)]);
      if (!seriesResp.ok) return null;

      const seriesData = await seriesResp.json();
      const parentGame = gameResp.ok ? await gameResp.json() : null;

      const allRawgGames = [...(parentGame ? [parentGame] : []), ...(seriesData.results || [])];
      if (allRawgGames.length === 0) return null;

      const fName = franchiseName || allRawgGames[0].name.split(/[:\-\d]/)[0].trim();
      const slug = fName.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');

      const games: FranchiseGame[] = allRawgGames.map((g: any, idx: number) => ({
        id: g.slug || `rawg-${g.id}`,
        franchiseId: slug,
        title: g.name,
        release_date: g.released || '2026-01-01',
        platforms: ['steam', 'playstation', 'xbox'],
        cover: g.background_image || 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
        genres: g.genres?.map((ge: any) => ge.name) || ['Action', 'RPG'],
        type: idx === 0 ? 'main_game' : 'spin_off',
        seriesOrder: idx + 1,
        external_ids: { rawgId: g.id },
        summary: `Part of the ${fName} series on RAWG.`
      }));

      const franchise: Franchise = {
        id: slug,
        name: fName,
        slug,
        rawgSeriesId: Number(gameId),
        coverImage: games[0]?.cover,
        description: `Games in the ${fName} series (RAWG).`,
        gameCount: games.length,
        created_at: new Date().toISOString(),
        last_checked_at: new Date().toISOString()
      };

      return { franchise, games };
    } catch (err) {
      console.warn('RAWG getFranchiseGames failed:', err);
      return null;
    }
  }
}
