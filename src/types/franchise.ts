import { PlatformId } from './database';

export type FranchiseGameType =
  | 'main_game'
  | 'dlc'
  | 'remake'
  | 'remaster'
  | 'spin_off'
  | 'expansion'
  | 'bundle'
  | 'mod';

export interface ExternalIds {
  steamAppId?: string;
  igdbId?: number;
  rawgId?: number;
  gogId?: string;
  epicId?: string;
}

export interface Franchise {
  id: string; // e.g. 'fallout', 'the-witcher', 'grand-theft-auto'
  name: string; // e.g. 'Fallout', 'The Witcher', 'Grand Theft Auto'
  slug: string;
  igdbFranchiseId?: number;
  rawgSeriesId?: number;
  coverImage?: string;
  description?: string;
  gameCount: number;
  created_at: string;
  last_checked_at: string;
}

export interface FranchiseGame {
  id: string;
  franchiseId: string;
  title: string;
  release_date: string;
  platforms: PlatformId[];
  cover: string;
  genres: string[];
  type: FranchiseGameType;
  seriesOrder: number;
  external_ids?: ExternalIds;
  summary?: string;
  status?: 'released' | 'announced' | 'cancelled';
  lowest_current_price?: number;
  is_existing?: boolean;
}

export interface FranchiseExpansionSettings {
  includeMainGames: boolean;
  includeRemakesRemasters: boolean;
  includeSpinOffs: boolean;
  includeDlc: boolean;
  includeBundles: boolean;
  includeMods: boolean;
  includeCancelledUnreleased: boolean;
  autoSyncPrices: boolean;
}

export const DEFAULT_FRANCHISE_SETTINGS: FranchiseExpansionSettings = {
  includeMainGames: true,
  includeRemakesRemasters: true,
  includeSpinOffs: true,
  includeDlc: false,
  includeBundles: false,
  includeMods: false,
  includeCancelledUnreleased: false,
  autoSyncPrices: true
};

export interface FranchiseMatchReview {
  id: string;
  gameId: string;
  gameTitle: string;
  candidateTitle: string;
  candidateFranchise: string;
  candidateFranchiseId: string;
  confidenceScore: number; // 0.0 to 1.0
  reason: string;
  source: 'igdb' | 'rawg' | 'heuristic';
  status: 'pending' | 'approved' | 'rejected';
  timestamp: string;
  externalIds?: ExternalIds;
}

export interface FranchiseLogEntry {
  id: string;
  timestamp: string;
  action: string;
  details: string;
  status: 'info' | 'success' | 'warn' | 'error';
}

export interface BackfillProgress {
  isRunning: boolean;
  isPaused: boolean;
  totalGames: number;
  currentIndex: number;
  processedGames: number;
  franchisesFound: number;
  newGamesAdded: number;
  errorsCount: number;
  lastRunTimestamp: string | null;
}
