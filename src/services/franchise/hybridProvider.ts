import { IFranchiseProvider, ProviderGameMatch } from './providerAdapter';
import { IgdbFranchiseProvider } from './igdbProvider';
import { RawgFranchiseProvider } from './rawgProvider';
import { CURATED_FRANCHISES } from './curatedFranchises';
import { Franchise, FranchiseGame, FranchiseMatchReview } from '../../types/franchise';
import { calculateTitleSimilarity, normalizeTitle } from './matchingUtils';

export class HybridFranchiseProvider implements IFranchiseProvider {
  public readonly name = 'Hybrid Provider (IGDB -> RAWG -> Curated)';
  private igdb = new IgdbFranchiseProvider();
  private rawg = new RawgFranchiseProvider();

  public isConfigured(): boolean {
    return true; // Curated fallback is always available
  }

  public getActiveProviderName(): string {
    if (this.igdb.isConfigured()) return 'IGDB API (Live)';
    if (this.rawg.isConfigured()) return 'RAWG API (Live)';
    return 'Curated Multi-Franchise Engine (Offline / Fallback)';
  }

  public async searchGame(query: {
    title: string;
    steamAppId?: string;
    gameId?: string;
  }): Promise<ProviderGameMatch | null> {
    // 1. Try Primary: IGDB
    if (this.igdb.isConfigured()) {
      try {
        const match = await this.igdb.searchGame(query);
        if (match) return match;
      } catch (err) {
        console.warn('IGDB search failed, falling back to RAWG:', err);
      }
    }

    // 2. Try Fallback: RAWG
    if (this.rawg.isConfigured()) {
      try {
        const match = await this.rawg.searchGame(query);
        if (match) return match;
      } catch (err) {
        console.warn('RAWG search failed, falling back to curated:', err);
      }
    }

    // 3. Fallback: Curated Knowledge Base
    const cleanTitle = normalizeTitle(query.title);
    let bestMatch: ProviderGameMatch | null = null;
    let highestScore = 0;

    for (const [franchiseKey, data] of Object.entries(CURATED_FRANCHISES)) {
      for (const g of data.games) {
        // Steam App ID match
        if (query.steamAppId && g.external_ids?.steamAppId === query.steamAppId) {
          return {
            providerId: g.id,
            title: g.title,
            franchiseName: data.franchise.name,
            franchiseId: franchiseKey,
            confidenceScore: 1.0,
            matchType: 'external_id',
            externalIds: g.external_ids || {}
          };
        }

        // Fuzzy title similarity
        const score = calculateTitleSimilarity(cleanTitle, normalizeTitle(g.title));
        if (score > highestScore) {
          highestScore = score;
          bestMatch = {
            providerId: g.id,
            title: g.title,
            franchiseName: data.franchise.name,
            franchiseId: franchiseKey,
            confidenceScore: score,
            matchType: score >= 0.85 ? 'exact_title' : 'fuzzy_title',
            externalIds: g.external_ids || {}
          };
        }
      }
    }

    if (bestMatch && highestScore >= 0.5) {
      return bestMatch;
    }

    return null;
  }

  public async getFranchiseGames(
    franchiseRef: string | number,
    franchiseName?: string
  ): Promise<{ franchise: Franchise; games: FranchiseGame[] } | null> {
    // Check if it's a curated key
    const curatedKey = String(franchiseRef).toLowerCase();
    if (CURATED_FRANCHISES[curatedKey]) {
      return CURATED_FRANCHISES[curatedKey];
    }

    // 1. Try Primary: IGDB
    if (this.igdb.isConfigured()) {
      try {
        const result = await this.igdb.getFranchiseGames(franchiseRef, franchiseName);
        if (result && result.games.length > 0) return result;
      } catch (err) {
        console.warn('IGDB getFranchiseGames failed, falling back:', err);
      }
    }

    // 2. Try Fallback: RAWG
    if (this.rawg.isConfigured()) {
      try {
        const result = await this.rawg.getFranchiseGames(franchiseRef, franchiseName);
        if (result && result.games.length > 0) return result;
      } catch (err) {
        console.warn('RAWG getFranchiseGames failed, falling back:', err);
      }
    }

    // Try finding in curated by name
    if (franchiseName) {
      const normFName = normalizeTitle(franchiseName);
      for (const [k, v] of Object.entries(CURATED_FRANCHISES)) {
        if (normalizeTitle(v.franchise.name).includes(normFName) || normFName.includes(normalizeTitle(v.franchise.name))) {
          return v;
        }
      }
    }

    return null;
  }
}

export const defaultFranchiseProvider = new HybridFranchiseProvider();
