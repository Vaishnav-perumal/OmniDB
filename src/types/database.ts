export type PlatformId = 'steam' | 'epic' | 'gog' | 'playstation' | 'xbox' | 'nintendo';

export interface Developer {
  id: string;
  name: string;
  slug: string;
  country?: string;
  headquarters?: string;
  founded_year: number;
  website: string;
  logo_url?: string;
  game_count?: number;
}

export interface Publisher {
  id: string;
  name: string;
  slug: string;
  country?: string;
  headquarters: string;
  website: string;
  logo_url?: string;
  game_count?: number;
}

export interface Platform {
  id: PlatformId;
  name: string;
  short_name: string;
  icon_name: string;
  brand_color: string;
  accent_color: string;
  bg_glow: string;
  store_url_base: string;
  badge_label: string;
}

export interface Game {
  id: string;
  ugdb_id: string; // Canonical Universal Game ID (e.g. 'UGDB-000001')
  title: string;
  alternate_titles?: string[];
  slug: string;
  summary: string;
  description: string;
  release_date: string;
  developer_id: string;
  publisher_id: string;
  developer_name?: string;
  publisher_name?: string;
  genres: string[];
  tags: string[];
  features: string[];
  rating_score: number; // 0-100 (e.g. 96%)
  metacritic_score: number; // 0-100
  header_image: string;
  poster_image?: string;
  background_image: string;
  screenshots: string[];
  lowest_current_price?: number;
  best_platform_id?: PlatformId;
  max_discount?: number;
  total_listings?: number;
  total_live_players?: number;
  platforms?: PlatformId[];
  is_historical_low?: boolean;
  target_price?: number;
  is_price_alert_triggered?: boolean;
  franchise_id?: string;
  franchise_name?: string;
  series_order?: number;
  game_type?: string;
  external_ids?: {
    steamAppId?: string;
    igdbId?: number;
    rawgId?: number;
    gogId?: string;
    epicId?: string;
  };
  recent_update_date?: string | null;
}

export * from './franchise';

export interface PlatformListing {
  id: string;
  game_id: string;
  platform_id: PlatformId;
  store_app_id: string;
  store_url: string;
  currency: string;
  original_price: number;
  current_price: number;
  discount_percent: number;
  historical_low_price: number;
  historical_low_date: string;
  drm_type: string; // 'Steamworks' | 'DRM-Free' | 'Epic DRM' | 'PlayStation Network' | 'Xbox Live' | 'Nintendo eShop'
  is_available: boolean;
  current_players: number;
  peak_players_24h: number;
  all_time_peak_players: number;
  rating_positive_percent: number;
  review_count: number;
  updated_at: string;
  // Joined fields
  game_title?: string;
  game_header_image?: string;
  platform_name?: string;
  platform_brand_color?: string;
}

export interface PriceHistoryPoint {
  id: number;
  listing_id: string;
  platform_id?: PlatformId;
  recorded_date: string;
  price: number;
  currency?: string;
  region?: string;
  discount_percent: number;
  event_name: string;
}

export interface GameEdition {
  id: string;
  game_id: string;
  title: string;
  badge?: string;
  description: string;
  bonus_content: string[];
  base_price: number;
}

export interface GameDlc {
  id: string;
  game_id: string;
  title: string;
  description: string;
  release_date: string;
  price: number;
  discount_percent?: number;
  header_image: string;
  platforms: PlatformId[];
}

export interface WatchlistItem {
  id: number;
  user_id: string;
  game_id: string;
  target_price: number;
  notify_platforms: PlatformId[];
  created_at: string;
  // Joined game fields
  game_title?: string;
  game_slug?: string;
  game_header_image?: string;
  lowest_current_price?: number;
  best_platform_id?: PlatformId;
  max_discount?: number;
  historical_low_price?: number;
  is_at_target_or_lower?: boolean;
}

export interface DatabaseStats {
  totalGames: number;
  totalPlatforms: number;
  totalListings: number;
  totalPriceRecords: number;
  activeDiscounts: number;
  historicalLows: number;
  totalPlayersOnline: number;
  lastUpdated: string;
}
