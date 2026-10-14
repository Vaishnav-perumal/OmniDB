import { Franchise, FranchiseGame, ExternalIds } from '../../types/franchise';

export interface ProviderGameMatch {
  providerId: string | number;
  title: string;
  franchiseName?: string;
  franchiseId?: string | number;
  collectionName?: string;
  collectionId?: string | number;
  confidenceScore: number;
  matchType: 'external_id' | 'exact_title' | 'fuzzy_title' | 'curated';
  externalIds: ExternalIds;
}

export interface IFranchiseProvider {
  readonly name: string;
  isConfigured(): boolean;
  searchGame(query: {
    title: string;
    steamAppId?: string;
    gameId?: string;
  }): Promise<ProviderGameMatch | null>;
  getFranchiseGames(
    franchiseRef: string | number,
    franchiseName?: string
  ): Promise<{ franchise: Franchise; games: FranchiseGame[] } | null>;
}
