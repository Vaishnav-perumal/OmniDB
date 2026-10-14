import { PGlite } from '@electric-sql/pglite';
import {
  PLATFORMS_DATA,
  DEVELOPERS_DATA,
  PUBLISHERS_DATA,
  GAMES_DATA,
  PLATFORM_LISTINGS_DATA,
  PRICE_HISTORY_DATA,
  GAME_EDITIONS_DATA,
  GAME_DLCS_DATA
} from './seedData';
import {
  Game,
  PlatformListing,
  PriceHistoryPoint,
  GameEdition,
  GameDlc,
  WatchlistItem,
  PlatformId,
  DatabaseStats
} from '../types/database';
import {
  Franchise,
  FranchiseGame,
  FranchiseExpansionSettings,
  DEFAULT_FRANCHISE_SETTINGS,
  FranchiseMatchReview,
  FranchiseLogEntry
} from '../types/franchise';
import { CURATED_FRANCHISES } from '../services/franchise/curatedFranchises';

class PostgresService {
  private pglite: PGlite | null = null;
  private isPgliteReady = false;
  private watchlist: WatchlistItem[] = [];
  private franchises: Franchise[] = Object.values(CURATED_FRANCHISES).map(c => c.franchise);
  private franchiseGamesMap: Record<string, FranchiseGame[]> = Object.fromEntries(
    Object.entries(CURATED_FRANCHISES).map(([k, v]) => [k, v.games])
  );
  private franchiseSettings: FranchiseExpansionSettings = { ...DEFAULT_FRANCHISE_SETTINGS };
  private franchiseLogs: FranchiseLogEntry[] = [
    {
      id: 'log-init',
      timestamp: new Date().toISOString(),
      action: 'System Initialized',
      details: 'Curated franchise database loaded into memory.',
      status: 'info'
    }
  ];
  private reviewMatches: FranchiseMatchReview[] = [];

  constructor() {
    this.initWatchlist();
    // Initialize PGlite asynchronously in the background without blocking the UI
    this.initPgliteBackground();
  }

  private initWatchlist(): void {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const stored = localStorage.getItem('omni_ugdb_watchlist');
        if (stored) {
          this.watchlist = JSON.parse(stored);
          return;
        }
      }
    } catch {
      // Fallback
    }

    // Default demo watchlist items
    this.watchlist = [
      {
        id: 1,
        user_id: 'user_demo',
        game_id: 'cyberpunk-2077',
        target_price: 29.99,
        notify_platforms: ['steam', 'gog', 'epic'],
        created_at: '2026-09-20 14:00:00'
      },
      {
        id: 2,
        user_id: 'user_demo',
        game_id: 'elden-ring',
        target_price: 39.99,
        notify_platforms: ['steam', 'playstation'],
        created_at: '2026-09-21 09:30:00'
      },
      {
        id: 3,
        user_id: 'user_demo',
        game_id: 'black-myth-wukong',
        target_price: 45.0,
        notify_platforms: ['steam', 'playstation'],
        created_at: '2026-09-25 11:15:00'
      }
    ];
  }

  private saveWatchlist(): void {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('omni_ugdb_watchlist', JSON.stringify(this.watchlist));
      }
    } catch {
      // Ignore
    }
  }

  private async initPgliteBackground(): Promise<void> {
    try {
      // Launch PGlite with a non-blocking timeout safeguard
      const timeoutPromise = new Promise<null>((_, reject) =>
        setTimeout(() => reject(new Error('PGlite init timeout')), 4000)
      );

      const pglitePromise = (async () => {
        const instance = new PGlite();
        // Create schema
        await instance.exec(`
          CREATE TABLE IF NOT EXISTS platforms (
            id VARCHAR(32) PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            short_name VARCHAR(50) NOT NULL,
            icon_name VARCHAR(50) NOT NULL,
            brand_color VARCHAR(30) NOT NULL,
            accent_color VARCHAR(30) NOT NULL,
            bg_glow VARCHAR(60) NOT NULL,
            store_url_base TEXT NOT NULL,
            badge_label VARCHAR(50) NOT NULL
          );
          CREATE TABLE IF NOT EXISTS developers (
            id VARCHAR(64) PRIMARY KEY,
            name VARCHAR(150) NOT NULL,
            slug VARCHAR(150) UNIQUE NOT NULL,
            country VARCHAR(100),
            founded_year INT,
            website TEXT,
            logo_url TEXT
          );
          CREATE TABLE IF NOT EXISTS publishers (
            id VARCHAR(64) PRIMARY KEY,
            name VARCHAR(150) NOT NULL,
            slug VARCHAR(150) UNIQUE NOT NULL,
            headquarters VARCHAR(100),
            website TEXT
          );
          CREATE TABLE IF NOT EXISTS games (
            id VARCHAR(100) PRIMARY KEY,
            ugdb_id VARCHAR(32) UNIQUE NOT NULL,
            title VARCHAR(255) NOT NULL,
            alternate_titles TEXT,
            slug VARCHAR(255) UNIQUE NOT NULL,
            summary TEXT,
            description TEXT,
            release_date VARCHAR(20),
            developer_id VARCHAR(64),
            publisher_id VARCHAR(64),
            genres TEXT,
            tags TEXT,
            features TEXT,
            rating_score NUMERIC(5, 2) DEFAULT 0,
            metacritic_score INT DEFAULT 0,
            header_image TEXT,
            background_image TEXT,
            screenshots TEXT
          );
          CREATE TABLE IF NOT EXISTS platform_listings (
            id VARCHAR(100) PRIMARY KEY,
            game_id VARCHAR(100) NOT NULL,
            platform_id VARCHAR(32) NOT NULL,
            store_app_id VARCHAR(100) NOT NULL,
            store_url TEXT NOT NULL,
            currency VARCHAR(10) DEFAULT 'USD',
            original_price NUMERIC(10, 2) NOT NULL DEFAULT 0.00,
            current_price NUMERIC(10, 2) NOT NULL DEFAULT 0.00,
            discount_percent INT NOT NULL DEFAULT 0,
            historical_low_price NUMERIC(10, 2) NOT NULL DEFAULT 0.00,
            historical_low_date VARCHAR(20),
            drm_type VARCHAR(100),
            is_available BOOLEAN DEFAULT TRUE,
            current_players INT DEFAULT 0,
            peak_players_24h INT DEFAULT 0,
            all_time_peak_players INT DEFAULT 0,
            rating_positive_percent NUMERIC(5, 2) DEFAULT 0,
            review_count INT DEFAULT 0,
            updated_at VARCHAR(30)
          );
          CREATE TABLE IF NOT EXISTS price_alerts (
            id BIGINT PRIMARY KEY,
            user_id VARCHAR(64) NOT NULL DEFAULT 'user_demo',
            game_id VARCHAR(100) NOT NULL,
            target_price NUMERIC(10, 2) NOT NULL,
            notify_platforms TEXT,
            created_at VARCHAR(30) NOT NULL
          );
          CREATE TABLE IF NOT EXISTS price_history (
            id BIGINT PRIMARY KEY,
            listing_id VARCHAR(100) NOT NULL,
            price NUMERIC(10, 2) NOT NULL,
            currency VARCHAR(10) DEFAULT 'USD',
            recorded_date VARCHAR(20) NOT NULL,
            discount_percent INT DEFAULT 0,
            event_name VARCHAR(255)
          );
        `);
        return instance;
      })();

      const instance = await Promise.race([pglitePromise, timeoutPromise]);
      if (instance) {
        this.pglite = instance;
        this.isPgliteReady = true;
      }
    } catch {
      // PGlite background init gracefully bypassed, in-memory store remains primary
      this.isPgliteReady = false;
    }
  }

  public async getClient(): Promise<PGlite> {
    if (this.pglite && this.isPgliteReady) {
      return this.pglite;
    }
    throw new Error('PGlite WASM engine is loading in background.');
  }

  public async runRawSql(
    sql: string,
    params?: unknown[]
  ): Promise<{ rows: any[]; fields?: any[]; timeMs: number }> {
    const start = performance.now();

    // If PGlite is available, execute SQL directly if it returns populated results
    if (this.pglite && this.isPgliteReady) {
      try {
        const res = await this.pglite.query(sql, params);
        if (res && res.rows && res.rows.length > 0) {
          return {
            rows: res.rows,
            fields: res.fields,
            timeMs: parseFloat((performance.now() - start).toFixed(2))
          };
        }
      } catch (err: any) {
        // Fall through to query emulator
      }
    }

    // Interactive query emulator for SQL inspector
    const upper = sql.trim().toUpperCase();
    let rows: any[] = [];

    if (upper.includes('FROM PLATFORM_LISTINGS')) {
      let filterType: 'historical_low' | 'all_deals' | 'under_10' | 'deep_70' = 'all_deals';
      if (upper.includes('HISTORICAL_LOW_PRICE') || upper.includes('CURRENT_PRICE <= PL.HISTORICAL_LOW_PRICE')) {
        filterType = 'historical_low';
      } else if (upper.includes('10.00') || upper.includes('<= 10')) {
        filterType = 'under_10';
      } else if (upper.includes('DISCOUNT_PERCENT >= 60') || upper.includes('DISCOUNT_PERCENT >= 70')) {
        filterType = 'deep_70';
      }

      let platform: PlatformId | 'all' = 'all';
      for (const p of ['steam', 'epic', 'gog', 'playstation', 'xbox', 'nintendo'] as PlatformId[]) {
        if (upper.includes(`'${p}'`) || upper.includes(`'${p.toUpperCase()}'`)) {
          platform = p;
          break;
        }
      }

      rows = await this.getSalesListings({ filterType, platform });
      if (upper.includes('LIMIT 12')) {
        rows = rows.slice(0, 12);
      }
    } else if (upper.includes('FROM GAMES')) {
      const all = await this.getAllGames();
      rows = all.slice(0, 10).map(g => ({
        id: g.id,
        ugdb_id: g.ugdb_id,
        title: g.title,
        release_date: g.release_date,
        rating_score: g.rating_score,
        developer_id: g.developer_id,
        publisher_id: g.publisher_id
      }));
    } else if (upper.includes('FROM PLATFORMS')) {
      rows = PLATFORMS_DATA;
    } else if (upper.includes('FROM DEVELOPERS')) {
      rows = await this.getDevelopersWithCounts();
    } else if (upper.includes('FROM PUBLISHERS')) {
      rows = await this.getPublishersWithCounts();
    } else if (upper.includes('COUNT(*)')) {
      rows = [{ total_games: GAMES_DATA.length, total_listings: PLATFORM_LISTINGS_DATA.length }];
    } else {
      rows = GAMES_DATA.slice(0, 5).map(g => ({
        id: g.id,
        title: g.title,
        genres: g.genres
      }));
    }

    return {
      rows,
      fields: Object.keys(rows[0] || {}).map(name => ({ name })),
      timeMs: parseFloat((performance.now() - start).toFixed(2))
    };
  }

  public async getSalesListings(filter?: {
    filterType?: 'historical_low' | 'all_deals' | 'under_10' | 'deep_70';
    platform?: PlatformId | 'all';
  }): Promise<PlatformListing[]> {
    let list = PLATFORM_LISTINGS_DATA.filter(pl => pl.discount_percent > 0);

    if (filter?.platform && filter.platform !== 'all') {
      list = list.filter(pl => pl.platform_id === filter.platform);
    }

    if (filter?.filterType === 'historical_low') {
      list = list.filter(pl => pl.current_price <= pl.historical_low_price);
    } else if (filter?.filterType === 'under_10') {
      list = list.filter(pl => pl.current_price <= 10.00);
    } else if (filter?.filterType === 'deep_70') {
      list = list.filter(pl => pl.discount_percent >= 60);
    }

    const mapped: PlatformListing[] = list.map(pl => {
      const game = GAMES_DATA.find(g => g.id === pl.game_id);
      const platform = PLATFORMS_DATA.find(p => p.id === pl.platform_id);
      return {
        ...pl,
        original_price: Number(pl.original_price),
        current_price: Number(pl.current_price),
        discount_percent: Number(pl.discount_percent),
        historical_low_price: Number(pl.historical_low_price),
        game_title: game?.title || 'Unknown Game',
        game_header_image: game?.header_image || '',
        platform_name: platform?.name || pl.platform_id,
        platform_brand_color: platform?.brand_color || '#1b2838'
      };
    });

    mapped.sort((a, b) => {
      if (b.discount_percent !== a.discount_percent) {
        return b.discount_percent - a.discount_percent;
      }
      return a.current_price - b.current_price;
    });

    return mapped;
  }

  public async getAllGames(filter?: {
    platform?: PlatformId | 'all';
    search?: string;
    genre?: string;
    franchise?: string;
    maxPrice?: number;
    minDiscount?: number;
    historicLowOnly?: boolean;
    sortBy?: 'popular' | 'discount' | 'price_asc' | 'price_desc' | 'rating' | 'players' | 'release';
  }): Promise<Game[]> {
    // Immediate relational mapping across games, developers, publishers, and store listings
    const processed: Game[] = GAMES_DATA.map(g => {
      const dev = DEVELOPERS_DATA.find(d => d.id === g.developer_id);
      const pub = PUBLISHERS_DATA.find(p => p.id === g.publisher_id);
      const listings = PLATFORM_LISTINGS_DATA.filter(pl => pl.game_id === g.id);

      const lowestPrice = listings.length > 0
        ? Math.min(...listings.map(l => l.current_price))
        : 0;

      const maxDiscount = listings.length > 0
        ? Math.max(...listings.map(l => l.discount_percent))
        : 0;

      const totalPlayers = listings.reduce((sum, l) => sum + (l.current_players || 0), 0);
      const platforms = Array.from(new Set(listings.map(l => l.platform_id)));
      const isHistoricalLow = listings.some(
        l => l.current_price <= l.historical_low_price && l.discount_percent > 0
      );

      const watchItem = this.watchlist.find(w => w.game_id === g.id);
      const isPriceAlertTriggered = watchItem ? lowestPrice <= watchItem.target_price : false;

      const recentUpdate = listings
        .map(l => l.updated_at)
        .filter(Boolean)
        .sort()
        .reverse()[0] || null;

      // Match franchise
      let matchedFranchiseId: string | undefined = (g as any).franchise_id;
      let matchedFranchiseName: string | undefined = (g as any).franchise_name;
      if (!matchedFranchiseId) {
        for (const franchise of this.franchises) {
          const fGames = this.franchiseGamesMap[franchise.id] || [];
          const isMatched =
            fGames.some(fg => fg.title.toLowerCase() === g.title.toLowerCase() || (fg.id && fg.id === g.id)) ||
            g.title.toLowerCase().startsWith(franchise.name.toLowerCase()) ||
            g.title.toLowerCase().includes(franchise.name.toLowerCase());
          if (isMatched) {
            matchedFranchiseId = franchise.id;
            matchedFranchiseName = franchise.name;
            break;
          }
        }
      }

      return {
        ...g,
        franchise_id: matchedFranchiseId,
        franchise_name: matchedFranchiseName,
        developer_name: dev?.name || 'Independent Studio',
        publisher_name: pub?.name || 'Self-published',
        lowest_current_price: lowestPrice,
        max_discount: maxDiscount,
        total_listings: listings.length,
        total_live_players: totalPlayers,
        platforms,
        is_historical_low: isHistoricalLow,
        target_price: watchItem?.target_price,
        is_price_alert_triggered: isPriceAlertTriggered,
        recent_update_date: recentUpdate
      };
    });

    let results = [...processed];

    // Platform filter
    if (filter?.platform && filter.platform !== 'all') {
      const targetPl = filter.platform;
      results = results.filter(g =>
        PLATFORM_LISTINGS_DATA.some(pl => pl.game_id === g.id && pl.platform_id === targetPl)
      );
    }

    // Search filter
    if (filter?.search && filter.search.trim()) {
      const q = filter.search.trim().toLowerCase();
      results = results.filter(
        g =>
          g.title.toLowerCase().includes(q) ||
          (g.ugdb_id && g.ugdb_id.toLowerCase().includes(q)) ||
          (g.alternate_titles && g.alternate_titles.some(at => at.toLowerCase().includes(q))) ||
          g.summary.toLowerCase().includes(q) ||
          (g.developer_name && g.developer_name.toLowerCase().includes(q)) ||
          (g.publisher_name && g.publisher_name.toLowerCase().includes(q)) ||
          g.genres.some(gen => gen.toLowerCase().includes(q)) ||
          (g.tags && g.tags.some(t => t.toLowerCase().includes(q)))
      );
    }

    // Genre filter
    if (filter?.genre && filter.genre !== 'all') {
      const gq = filter.genre.toLowerCase();
      results = results.filter(g => g.genres.some(gen => gen.toLowerCase().includes(gq)));
    }

    // Min discount filter
    if (filter?.minDiscount && filter.minDiscount > 0) {
      const minD = filter.minDiscount;
      results = results.filter(g => (g.max_discount || 0) >= minD);
    }

    // Max price filter
    if (filter?.maxPrice !== undefined && filter.maxPrice < 100) {
      const maxP = filter.maxPrice;
      results = results.filter(g => (g.lowest_current_price || 0) <= maxP);
    }

    // Historical low filter
    if (filter?.historicLowOnly) {
      results = results.filter(g => g.is_historical_low);
    }

    // Franchise filter
    if (filter?.franchise && filter.franchise !== 'all') {
      const targetFranchise = filter.franchise.toLowerCase();
      const fGames = this.franchiseGamesMap[targetFranchise] || [];
      const gameTitles = new Set(fGames.map(fg => fg.title.toLowerCase()));
      const franchiseObj = this.franchises.find(f => f.id.toLowerCase() === targetFranchise);
      const franchiseName = franchiseObj ? franchiseObj.name.toLowerCase() : targetFranchise;
      results = results.filter(g =>
        (g as any).franchise_id === targetFranchise ||
        (g as any).franchise_name?.toLowerCase() === franchiseName ||
        gameTitles.has(g.title.toLowerCase()) ||
        g.title.toLowerCase().includes(franchiseName)
      );
    }

    // Sorting
    switch (filter?.sortBy) {
      case 'discount':
        results.sort((a, b) => (b.max_discount || 0) - (a.max_discount || 0));
        break;
      case 'price_asc':
        results.sort((a, b) => (a.lowest_current_price || 0) - (b.lowest_current_price || 0));
        break;
      case 'price_desc':
        results.sort((a, b) => (b.lowest_current_price || 0) - (a.lowest_current_price || 0));
        break;
      case 'rating':
        results.sort((a, b) => b.rating_score - a.rating_score);
        break;
      case 'players':
        results.sort((a, b) => (b.total_live_players || 0) - (a.total_live_players || 0));
        break;
      case 'release':
        results.sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
        break;
      default:
        // Default: most popular players and highest ratings
        results.sort((a, b) => {
          const playersDiff = (b.total_live_players || 0) - (a.total_live_players || 0);
          if (playersDiff !== 0) return playersDiff;
          return b.rating_score - a.rating_score;
        });
        break;
    }

    return results;
  }

  public async getGameById(id: string): Promise<Game | null> {
    const q = id.trim().toLowerCase();
    const game = GAMES_DATA.find(
      g => g.id.toLowerCase() === q || g.slug.toLowerCase() === q || (g.ugdb_id && g.ugdb_id.toLowerCase() === q)
    );
    if (!game) return null;

    const dev = DEVELOPERS_DATA.find(d => d.id === game.developer_id);
    const pub = PUBLISHERS_DATA.find(p => p.id === game.publisher_id);
    const listings = PLATFORM_LISTINGS_DATA.filter(pl => pl.game_id === game.id);

    const lowest = listings.length > 0 ? Math.min(...listings.map(l => l.current_price)) : 0;
    const maxDiscount = listings.length > 0 ? Math.max(...listings.map(l => l.discount_percent)) : 0;
    const platforms = Array.from(new Set(listings.map(l => l.platform_id)));
    const totalPlayers = listings.reduce((sum, l) => sum + (l.current_players || 0), 0);
    const isHl = listings.some(l => l.current_price <= l.historical_low_price && l.discount_percent > 0);
    const watchItem = this.watchlist.find(w => w.game_id === game.id);
    const isPriceAlertTriggered = watchItem ? lowest <= watchItem.target_price : false;

    return {
      ...game,
      developer_name: dev?.name || 'Studio',
      publisher_name: pub?.name || 'Publisher',
      lowest_current_price: lowest,
      max_discount: maxDiscount,
      total_listings: listings.length,
      total_live_players: totalPlayers,
      platforms,
      is_historical_low: isHl,
      target_price: watchItem?.target_price,
      is_price_alert_triggered: isPriceAlertTriggered
    };
  }

  public async getGameListings(gameId: string): Promise<PlatformListing[]> {
    const game = GAMES_DATA.find(g => g.id === gameId);
    const listings = PLATFORM_LISTINGS_DATA.filter(pl => pl.game_id === gameId);

    return listings
      .map(pl => {
        const platform = PLATFORMS_DATA.find(p => p.id === pl.platform_id);
        return {
          ...pl,
          platform_name: platform?.name || pl.platform_id,
          platform_brand_color: platform?.brand_color || '#1b2838',
          game_title: game?.title,
          game_header_image: game?.header_image
        };
      })
      .sort((a, b) => a.current_price - b.current_price);
  }

  public async getGamePriceHistory(
    gameId: string
  ): Promise<{ listing: PlatformListing; history: PriceHistoryPoint[] }[]> {
    const listings = await this.getGameListings(gameId);

    if (this.isPgliteReady && this.pglite && listings.length > 0) {
      try {
        const listingIds = listings.map(l => `'${l.id}'`).join(',');
        const queryRes = await this.pglite.query(
          `SELECT id, listing_id, price, currency, recorded_date, discount_percent, event_name
           FROM price_history
           WHERE listing_id IN (${listingIds})
           ORDER BY recorded_date ASC;`
        );

        if (queryRes && queryRes.rows && queryRes.rows.length > 0) {
          const pgRows = queryRes.rows as PriceHistoryPoint[];
          return listings.map(listing => ({
            listing,
            history: pgRows
              .filter(h => h.listing_id === listing.id)
              .sort((a, b) => new Date(a.recorded_date).getTime() - new Date(b.recorded_date).getTime())
          }));
        } else {
          // Seed the active listings price histories into PostgreSQL price_history table
          const relevantPoints = PRICE_HISTORY_DATA.filter(ph => listings.some(l => l.id === ph.listing_id));
          for (const pt of relevantPoints) {
            try {
              await this.pglite.query(
                `INSERT INTO price_history (id, listing_id, price, currency, recorded_date, discount_percent, event_name)
                 VALUES ($1, $2, $3, $4, $5, $6, $7)
                 ON CONFLICT (id) DO NOTHING;`,
                [pt.id, pt.listing_id, pt.price, pt.currency || 'USD', pt.recorded_date, pt.discount_percent || 0, pt.event_name || 'Store Price']
              );
            } catch {
              // Non-blocking
            }
          }
        }
      } catch {
        // Fall back gracefully to relational store
      }
    }

    return listings.map(listing => {
      const history = PRICE_HISTORY_DATA.filter(ph => ph.listing_id === listing.id).sort(
        (a, b) => new Date(a.recorded_date).getTime() - new Date(b.recorded_date).getTime()
      );

      return {
        listing,
        history
      };
    });
  }

  public async getGameEditions(gameId: string): Promise<GameEdition[]> {
    return GAME_EDITIONS_DATA.filter(ed => ed.game_id === gameId).sort(
      (a, b) => a.base_price - b.base_price
    );
  }

  public async getGameDlcs(gameId: string): Promise<GameDlc[]> {
    return GAME_DLCS_DATA.filter(dlc => dlc.game_id === gameId).sort(
      (a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
    );
  }

  public async getUserWatchlist(): Promise<WatchlistItem[]> {
    return this.watchlist.map(item => {
      const game = GAMES_DATA.find(g => g.id === item.game_id);
      const listings = PLATFORM_LISTINGS_DATA.filter(pl => pl.game_id === item.game_id);

      const lowestPrice = listings.length > 0 ? Math.min(...listings.map(l => l.current_price)) : 0;
      const histLow = listings.length > 0 ? Math.min(...listings.map(l => l.historical_low_price)) : 0;
      const maxDiscount = listings.length > 0 ? Math.max(...listings.map(l => l.discount_percent)) : 0;

      return {
        ...item,
        game_title: game?.title || 'Unknown Game',
        game_slug: game?.slug || item.game_id,
        game_header_image: game?.header_image,
        lowest_current_price: lowestPrice,
        historical_low_price: histLow,
        max_discount: maxDiscount,
        is_at_target_or_lower: lowestPrice <= item.target_price
      };
    });
  }

  public async addToWatchlist(
    gameId: string,
    targetPrice: number,
    platforms: PlatformId[]
  ): Promise<void> {
    const existingIdx = this.watchlist.findIndex(w => w.game_id === gameId);
    if (existingIdx >= 0) {
      this.watchlist[existingIdx].target_price = targetPrice;
      this.watchlist[existingIdx].notify_platforms = platforms;
    } else {
      this.watchlist.unshift({
        id: Date.now(),
        user_id: 'user_demo',
        game_id: gameId,
        target_price: targetPrice,
        notify_platforms: platforms,
        created_at: new Date().toISOString()
      });
    }
    this.saveWatchlist();

    if (this.isPgliteReady && this.pglite) {
      try {
        await this.pglite.query(
          `INSERT INTO price_alerts (id, user_id, game_id, target_price, notify_platforms, created_at)
           VALUES ($1, $2, $3, $4, $5, $6)
           ON CONFLICT (id) DO UPDATE SET target_price = $4, notify_platforms = $5;`,
          [Date.now(), 'user_demo', gameId, targetPrice, JSON.stringify(platforms), new Date().toISOString()]
        );
      } catch {
        // Safe non-blocking fallback
      }
    }
  }

  public async removeFromWatchlist(gameId: string): Promise<void> {
    this.watchlist = this.watchlist.filter(w => w.game_id !== gameId);
    this.saveWatchlist();

    if (this.isPgliteReady && this.pglite) {
      try {
        await this.pglite.query(`DELETE FROM price_alerts WHERE game_id = $1;`, [gameId]);
      } catch {
        // Safe non-blocking fallback
      }
    }
  }

  public async isGameInWatchlist(gameId: string): Promise<boolean> {
    return this.watchlist.some(w => w.game_id === gameId);
  }

  public async getWatchlistItem(gameId: string): Promise<WatchlistItem | undefined> {
    return this.watchlist.find(w => w.game_id === gameId);
  }

  public async getStats(): Promise<DatabaseStats> {
    const activeDiscounts = PLATFORM_LISTINGS_DATA.filter(pl => pl.discount_percent > 0).length;
    const historicalLows = PLATFORM_LISTINGS_DATA.filter(
      pl => pl.current_price <= pl.historical_low_price && pl.discount_percent > 0
    ).length;
    const totalPlayers = PLATFORM_LISTINGS_DATA.reduce((sum, l) => sum + (l.current_players || 0), 0);

    return {
      totalGames: GAMES_DATA.length,
      totalPlatforms: PLATFORMS_DATA.length,
      totalListings: PLATFORM_LISTINGS_DATA.length,
      totalPriceRecords: PRICE_HISTORY_DATA.length,
      activeDiscounts,
      historicalLows,
      totalPlayersOnline: totalPlayers,
      lastUpdated: new Date().toLocaleTimeString()
    };
  }

  public async getDevelopersWithCounts() {
    return DEVELOPERS_DATA.map(d => {
      const count = GAMES_DATA.filter(g => g.developer_id === d.id).length;
      return {
        ...d,
        game_count: count
      };
    }).sort((a, b) => b.game_count - a.game_count);
  }

  public async getPublishersWithCounts() {
    return PUBLISHERS_DATA.map(p => {
      const count = GAMES_DATA.filter(g => g.publisher_id === p.id).length;
      return {
        ...p,
        game_count: count
      };
    }).sort((a, b) => b.game_count - a.game_count);
  }

  public getAllFranchises(): Franchise[] {
    return this.franchises;
  }

  public getFranchise(franchiseId: string): Franchise | undefined {
    return this.franchises.find(f => f.id === franchiseId || f.slug === franchiseId);
  }

  public getFranchiseGames(franchiseId: string): FranchiseGame[] {
    return this.franchiseGamesMap[franchiseId] || [];
  }

  public getFranchiseSettings(): FranchiseExpansionSettings {
    return this.franchiseSettings;
  }

  public updateFranchiseSettings(settings: FranchiseExpansionSettings) {
    this.franchiseSettings = { ...this.franchiseSettings, ...settings };
  }

  public getFranchiseLogs(): FranchiseLogEntry[] {
    return this.franchiseLogs;
  }

  public logFranchiseAction(action: string, details: string, status: 'info' | 'success' | 'warn' | 'error' = 'info') {
    this.franchiseLogs.unshift({
      id: `log-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      timestamp: new Date().toISOString(),
      action,
      details,
      status
    });
    if (this.franchiseLogs.length > 200) {
      this.franchiseLogs.pop();
    }
  }

  public getReviewMatches(): FranchiseMatchReview[] {
    return this.reviewMatches;
  }

  public addReviewMatch(match: FranchiseMatchReview) {
    this.reviewMatches.push(match);
  }

  public resolveReviewMatch(reviewId: string, action: 'approve' | 'reject') {
    const r = this.reviewMatches.find(m => m.id === reviewId);
    if (r) {
      r.status = action === 'approve' ? 'approved' : 'rejected';
    }
  }

  public saveFranchise(franchise: Franchise, games?: FranchiseGame[]) {
    const idx = this.franchises.findIndex(f => f.id === franchise.id);
    if (idx >= 0) {
      this.franchises[idx] = franchise;
    } else {
      this.franchises.push(franchise);
    }
    if (games) {
      this.franchiseGamesMap[franchise.id] = games;
    }
  }

  public updateGameFranchise(gameId: string, franchiseId: string, franchiseName?: string, seriesOrder?: number) {
    const game = GAMES_DATA.find(g => g.id === gameId);
    if (game) {
      (game as any).franchise_id = franchiseId;
      if (franchiseName) (game as any).franchise_name = franchiseName;
      if (seriesOrder !== undefined) (game as any).series_order = seriesOrder;
    }
  }

  public addGame(game: Game, listings?: PlatformListing[], priceHistories?: PriceHistoryPoint[]) {
    if (!GAMES_DATA.some(g => g.id === game.id)) {
      GAMES_DATA.push(game);
    }
    if (listings && listings.length > 0) {
      PLATFORM_LISTINGS_DATA.push(...listings);
    }
    if (priceHistories && priceHistories.length > 0) {
      PRICE_HISTORY_DATA.push(...priceHistories);
    }
  }
}

export const db = new PostgresService();
