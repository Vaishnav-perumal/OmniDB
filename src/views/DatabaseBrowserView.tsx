import React, { useState, useEffect, useMemo } from 'react';
import { Game, PlatformId } from '../types/database';
import { db } from '../db/database';
import { GAMES_DATA, PLATFORM_LISTINGS_DATA, DEVELOPERS_DATA, PUBLISHERS_DATA } from '../db/seedData';
import { GameCard } from '../components/GameCard';
import { PlatformBadge } from '../components/PlatformBadge';
import { formatPrice, getDiscountBadgeClass } from '../utils/formatters';
import {
  Search,
  Filter,
  ArrowUpDown,
  Grid,
  List,
  Sparkles,
  TrendingDown,
  X,
  Database,
  Layers,
  ChevronRight,
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
  Settings2,
  RefreshCw,
  FolderTree
} from 'lucide-react';
import { Franchise } from '../types/franchise';
import { FranchiseManagerModal } from '../components/FranchiseManagerModal';

interface DatabaseBrowserViewProps {
  initialPlatform?: PlatformId | 'all';
  initialSortBy?: any;
  initialFranchise?: string;
  onSelectGame: (gameId: string) => void;
  onOpenFranchiseView?: (franchiseId: string) => void;
}

export const DatabaseBrowserView: React.FC<DatabaseBrowserViewProps> = ({
  initialPlatform = 'all',
  initialSortBy = 'popular',
  initialFranchise = 'all',
  onSelectGame,
  onOpenFranchiseView
}) => {
  const [platform, setPlatform] = useState<PlatformId | 'all'>(initialPlatform);
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState('all');
  const [franchiseFilter, setFranchiseFilter] = useState<string>(initialFranchise);
  const [groupByFranchise, setGroupByFranchise] = useState<boolean>(false);
  const [availableFranchises, setAvailableFranchises] = useState<Franchise[]>([]);
  const [showFranchiseManager, setShowFranchiseManager] = useState<boolean>(false);
  const [minDiscount, setMinDiscount] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(100);
  const [historicLowOnly, setHistoricLowOnly] = useState(false);
  const [sortBy, setSortBy] = useState<
    'popular' | 'discount' | 'price_asc' | 'price_desc' | 'rating' | 'players' | 'release'
  >(initialSortBy);
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(24);

  // Synchronous initial seed population so games are instantly visible with zero delay
  const [games, setGames] = useState<Game[]>(() => {
    return GAMES_DATA.map(g => {
      const dev = DEVELOPERS_DATA.find(d => d.id === g.developer_id);
      const pub = PUBLISHERS_DATA.find(p => p.id === g.publisher_id);
      const listings = PLATFORM_LISTINGS_DATA.filter(pl => pl.game_id === g.id);
      const lowestPrice = listings.length > 0 ? Math.min(...listings.map(l => l.current_price)) : 0;
      const maxDiscount = listings.length > 0 ? Math.max(...listings.map(l => l.discount_percent)) : 0;
      const totalPlayers = listings.reduce((sum, l) => sum + (l.current_players || 0), 0);
      const platforms = Array.from(new Set(listings.map(l => l.platform_id)));
      const isHistoricalLow = listings.some(l => l.current_price <= l.historical_low_price && l.discount_percent > 0);

      return {
        ...g,
        developer_name: dev?.name || 'Independent Studio',
        publisher_name: pub?.name || 'Self-published',
        lowest_current_price: lowestPrice,
        max_discount: maxDiscount,
        total_listings: listings.length,
        total_live_players: totalPlayers,
        platforms,
        is_historical_low: isHistoricalLow
      };
    });
  });
  const [loading, setLoading] = useState(false);

  const fetchGames = async () => {
    try {
      const [data, franchises] = await Promise.all([
        db.getAllGames({
          platform,
          search,
          genre,
          franchise: franchiseFilter,
          minDiscount,
          maxPrice,
          historicLowOnly,
          sortBy
        }),
        db.getAllFranchises()
      ]);
      setGames(data);
      setAvailableFranchises(franchises);
    } catch (err) {
      console.error('Error querying games from database:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    fetchGames();
  }, [platform, search, genre, franchiseFilter, minDiscount, maxPrice, historicLowOnly, sortBy]);

  useEffect(() => {
    if (initialPlatform) setPlatform(initialPlatform);
  }, [initialPlatform]);

  useEffect(() => {
    if (initialSortBy) setSortBy(initialSortBy);
  }, [initialSortBy]);

  useEffect(() => {
    if (initialFranchise) setFranchiseFilter(initialFranchise);
  }, [initialFranchise]);

  const resetFilters = () => {
    setPlatform('all');
    setSearch('');
    setGenre('all');
    setFranchiseFilter('all');
    setGroupByFranchise(false);
    setMinDiscount(0);
    setMaxPrice(100);
    setHistoricLowOnly(false);
    setSortBy('popular');
    setCurrentPage(1);
  };

  const GENRES = [
    'Action',
    'Action RPG',
    'Adventure',
    'Open World',
    'Shooter',
    'FPS',
    'RPG',
    'Souls-like',
    'Strategy',
    'Indie',
    'Roguelike',
    'Survival Horror',
    'Platformer',
    'Cyberpunk',
    'Sci-Fi',
    'Metroidvania',
    'Turn-Based RPG',
    'Fighting',
    'Racing',
    'Simulation',
    'Horror',
    'Farming Sim'
  ];

  const totalPages = Math.max(1, Math.ceil(games.length / pageSize));
  const paginatedGames = useMemo(() => {
    if (groupByFranchise) return games;
    const start = (currentPage - 1) * pageSize;
    return games.slice(start, start + pageSize);
  }, [games, currentPage, pageSize, groupByFranchise]);

  const startIndex = games.length === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const endIndex = Math.min(currentPage * pageSize, games.length);

  return (
    <div className="space-y-6 pb-16">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#1b2838]">
        <div>
          <h1 className="text-2xl font-extrabold text-white uppercase font-mono tracking-wide flex items-center gap-2.5">
            <Database className="w-6 h-6 text-[#66c0f4]" />
            Universal Video Game Catalog
          </h1>
          <p className="text-xs text-zinc-400 mt-0.5">
            Filter and inspect video game entities aggregated across all 6 supported gaming storefronts.
          </p>
        </div>

        {/* View mode toggle & Franchise Manager Action */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setShowFranchiseManager(true)}
            className="px-3 py-1.5 rounded-lg bg-[#142335] hover:bg-[#1d334d] text-[#38bdf8] border border-[#274465] font-mono text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Franchise Engine</span>
            {db.getReviewMatches().filter((r: any) => r.status === 'pending').length > 0 && (
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            )}
          </button>

          <div className="bg-[#0b0f16] p-1 rounded-lg border border-[#1b2838] flex items-center gap-1 font-mono text-xs">
            <button
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded transition-colors ${
                viewMode === 'table'
                  ? 'bg-[#1b2838] text-[#66c0f4]'
                  : 'text-zinc-400 hover:text-white'
              }`}
              title="Table View (SteamDB style)"
            >
              <List className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded transition-colors ${
                viewMode === 'grid'
                  ? 'bg-[#1b2838] text-[#66c0f4]'
                  : 'text-zinc-400 hover:text-white'
              }`}
              title="Grid View"
            >
              <Grid className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-[#101721] p-4 rounded-xl border border-[#1b2838] space-y-4 shadow-lg">
        {/* Row 1: Search & Platform Bar */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Search box */}
          <div className="relative flex-1 min-w-[240px]">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Filter by title, developer, or keyword..."
              className="w-full pl-9 pr-8 py-2 rounded-lg bg-[#090d13] border border-[#1b2838] focus:border-[#66c0f4] text-xs font-mono text-white outline-none"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Sort By Selector */}
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-3.5 h-3.5 text-zinc-400" />
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              className="bg-[#090d13] border border-[#1b2838] rounded-lg px-3 py-2 text-xs font-mono text-white outline-none focus:border-[#66c0f4]"
            >
              <option value="popular">Sort: Most Popular</option>
              <option value="discount">Sort: Highest Discount %</option>
              <option value="price_asc">Sort: Lowest Price</option>
              <option value="price_desc">Sort: Highest Price</option>
              <option value="rating">Sort: User Rating</option>
              <option value="release">Sort: Release Date</option>
            </select>
          </div>
        </div>

        {/* Row 2: Storefront Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-xs font-mono text-zinc-500 mr-1">Platform:</span>
          {(['all', 'steam', 'epic', 'gog', 'playstation', 'xbox', 'nintendo'] as const).map(p => (
            <button
              key={p}
              onClick={() => setPlatform(p)}
              className={`px-2.5 py-1 rounded text-xs font-mono transition-all border ${
                platform === p
                  ? 'bg-[#1b2838] text-[#66c0f4] border-[#66c0f4]/50 shadow-sm font-bold'
                  : 'bg-[#090d13] text-zinc-400 border-[#1b2838] hover:text-white'
              }`}
            >
              {p === 'all' ? 'All Platforms' : p.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Row 3: Secondary Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#17212e] text-xs font-mono">
          <div className="flex flex-wrap items-center gap-4">
            {/* Genre */}
            <div className="flex items-center gap-1.5">
              <span className="text-zinc-500">Genre:</span>
              <select
                value={genre}
                onChange={e => setGenre(e.target.value)}
                className="bg-[#090d13] border border-[#1b2838] rounded px-2.5 py-1 text-xs font-mono text-white outline-none"
              >
                <option value="all">All Genres</option>
                {GENRES.map(g => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </div>

            {/* Franchise Filter */}
            <div className="flex items-center gap-1.5">
              <span className="text-zinc-500">Franchise:</span>
              <select
                value={franchiseFilter}
                onChange={e => setFranchiseFilter(e.target.value)}
                className="bg-[#090d13] border border-[#1b2838] rounded px-2.5 py-1 text-xs font-mono text-white outline-none focus:border-[#38bdf8]"
              >
                <option value="all">All Franchises / Series</option>
                {availableFranchises.map(f => (
                  <option key={f.id} value={f.id}>
                    {f.name} ({f.gameCount} games)
                  </option>
                ))}
              </select>
            </div>

            {/* Group by Franchise Toggle */}
            <button
              onClick={() => setGroupByFranchise(!groupByFranchise)}
              className={`px-2.5 py-1 rounded text-xs font-mono transition-all border flex items-center gap-1.5 ${
                groupByFranchise
                  ? 'bg-[#1b2838] text-[#38bdf8] border-[#38bdf8]/50 shadow-sm font-bold'
                  : 'bg-[#090d13] text-zinc-400 border-[#1b2838] hover:text-white'
              }`}
            >
              <FolderTree className="w-3.5 h-3.5" />
              <span>Group by Franchise</span>
            </button>

            {/* Min Discount */}
            <div className="flex items-center gap-1.5">
              <span className="text-zinc-500">Discount:</span>
              <select
                value={minDiscount}
                onChange={e => setMinDiscount(parseInt(e.target.value, 10))}
                className="bg-[#090d13] border border-[#1b2838] rounded px-2.5 py-1 text-xs font-mono text-white outline-none"
              >
                <option value={0}>Any Price</option>
                <option value={20}>20%+ Off</option>
                <option value={50}>50%+ Off</option>
                <option value={70}>70%+ Off</option>
              </select>
            </div>

            {/* Historic Low Checkbox */}
            <label className="flex items-center gap-2 cursor-pointer select-none text-zinc-300 hover:text-white">
              <input
                type="checkbox"
                checked={historicLowOnly}
                onChange={e => setHistoricLowOnly(e.target.checked)}
                className="rounded bg-[#090d13] border-[#1b2838] text-[#a4d007] focus:ring-0"
              />
              <span className="text-amber-300 font-semibold">At Historical Low</span>
            </label>
          </div>

          {/* Reset button */}
          <button
            onClick={resetFilters}
            className="text-zinc-500 hover:text-zinc-300 text-[11px] underline"
          >
            Reset Filters
          </button>
        </div>
      </div>

      {/* Results Count Banner & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-400 px-1">
        <div className="flex items-center gap-2">
          {groupByFranchise ? (
            <span>
              Showing <strong className="text-white">{games.length}</strong> games organized by franchise
            </span>
          ) : games.length > 0 ? (
            <span>
              Showing <strong className="text-white">{startIndex}–{endIndex}</strong> of{' '}
              <strong className="text-[#66c0f4]">{games.length}</strong> games
            </span>
          ) : (
            <span>0 games found</span>
          )}
        </div>

        {!groupByFranchise && games.length > pageSize && (
          <div className="flex items-center gap-2">
            <span className="text-zinc-500 text-[11px]">Per page:</span>
            {[24, 48, 96].map(size => (
              <button
                key={size}
                onClick={() => {
                  setPageSize(size);
                  setCurrentPage(1);
                }}
                className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                  pageSize === size
                    ? 'bg-[#1b2838] text-[#66c0f4] font-bold border border-[#66c0f4]/40'
                    : 'bg-[#090d13] text-zinc-400 hover:text-white border border-[#1b2838]'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Results Container */}
      {loading ? (
        <div className="py-20 text-center space-y-3 font-mono">
          <div className="inline-block w-8 h-8 border-2 border-[#66c0f4] border-t-transparent rounded-full animate-spin" />
          <div className="text-zinc-500 text-xs">Querying Universal Game DB catalog...</div>
        </div>
      ) : games.length === 0 ? (
        <div className="bg-[#101721] rounded-xl border border-[#1b2838] p-12 text-center space-y-3 font-mono">
          <div className="text-base font-bold text-white">No Games Found</div>
          <p className="text-zinc-400 text-xs">
            No games match your current filter criteria. Try adjusting or resetting filters.
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 rounded bg-[#1b2838] hover:bg-[#25394f] text-[#66c0f4] text-xs font-semibold transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      ) : groupByFranchise ? (
        <div className="space-y-8">
          {Object.entries(
            games.reduce((acc, g) => {
              const fName = g.franchise_name || 'Independent & Standalone Games';
              if (!acc[fName]) acc[fName] = [];
              acc[fName].push(g);
              return acc;
            }, {} as Record<string, Game[]>)
          ).map(([fName, fGames]) => {
            const fObj = availableFranchises.find(
              f =>
                f.name.toLowerCase() === fName.toLowerCase() ||
                f.id.toLowerCase() === fGames[0]?.franchise_id?.toLowerCase()
            );
            return (
              <div
                key={fName}
                className="bg-[#0c131c] rounded-2xl border border-[#1b2b3d] p-5 space-y-4 shadow-xl"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1b2838] pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#142335] text-[#38bdf8] border border-[#233f60]">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-base font-bold text-white font-mono uppercase tracking-wide flex items-center gap-2">
                        <span>{fName}</span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] bg-[#1c2e42] text-[#38bdf8] border border-[#2c4c70]">
                          {fGames.length} Games
                        </span>
                      </h2>
                      <span className="text-[11px] text-zinc-400 font-mono">
                        {fObj?.description || 'Unified series releases with cross-platform deals.'}
                      </span>
                    </div>
                  </div>

                  {fObj && onOpenFranchiseView && (
                    <button
                      onClick={() => onOpenFranchiseView(fObj.id)}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-[#142335] hover:bg-[#1d324b] text-[#38bdf8] border border-[#274465] transition-all flex items-center gap-1.5"
                    >
                      <span>Explore Franchise Hub</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {fGames.map(game => (
                    <GameCard key={game.id} game={game} onSelect={onSelectGame} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : viewMode === 'grid' ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {paginatedGames.map(game => (
              <GameCard key={game.id} game={game} onSelect={onSelectGame} />
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#1b2838] font-mono text-xs">
              <span className="text-zinc-400">
                Page <strong className="text-white">{currentPage}</strong> of{' '}
                <strong className="text-white">{totalPages}</strong>
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  disabled={currentPage === 1}
                  onClick={() => {
                    setCurrentPage(1);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="p-1.5 rounded bg-[#101721] border border-[#1b2838] text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                  title="First Page"
                >
                  <ChevronsLeft className="w-4 h-4" />
                </button>
                <button
                  disabled={currentPage === 1}
                  onClick={() => {
                    setCurrentPage(p => Math.max(1, p - 1));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-2.5 py-1.5 rounded bg-[#101721] border border-[#1b2838] text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Prev</span>
                </button>

                {/* Page number buttons */}
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter(p => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 2)
                  .map((p, idx, arr) => {
                    const prevP = arr[idx - 1];
                    const hasGap = prevP && p - prevP > 1;
                    return (
                      <React.Fragment key={p}>
                        {hasGap && <span className="text-zinc-600 px-1">...</span>}
                        <button
                          onClick={() => {
                            setCurrentPage(p);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className={`w-7 h-7 rounded text-xs transition-colors ${
                            currentPage === p
                              ? 'bg-[#1b2838] text-[#66c0f4] font-bold border border-[#66c0f4]/50'
                              : 'bg-[#101721] text-zinc-400 hover:text-white border border-[#1b2838]'
                          }`}
                        >
                          {p}
                        </button>
                      </React.Fragment>
                    );
                  })}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => {
                    setCurrentPage(p => Math.min(totalPages, p + 1));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-2.5 py-1.5 rounded bg-[#101721] border border-[#1b2838] text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1"
                >
                  <span>Next</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => {
                    setCurrentPage(totalPages);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="p-1.5 rounded bg-[#101721] border border-[#1b2838] text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                  title="Last Page"
                >
                  <ChevronsRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* SteamDB Style Dense Monospace Table View */
        <div className="space-y-4">
          <div className="bg-[#101721] rounded-xl border border-[#1b2838] overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono border-collapse">
                <thead>
                  <tr className="bg-[#0b0f16] text-zinc-400 border-b border-[#1b2838] uppercase text-[11px] tracking-wider">
                    <th className="py-3 px-4 font-semibold">Title</th>
                    <th className="py-3 px-4 font-semibold">Developer</th>
                    <th className="py-3 px-4 font-semibold">Current Best</th>
                    <th className="py-3 px-4 font-semibold">Discount</th>
                    <th className="py-3 px-4 font-semibold">Rating</th>
                    <th className="py-3 px-4 font-semibold">Genres</th>
                    <th className="py-3 px-4 font-semibold">Stores</th>
                    <th className="py-3 px-4 font-semibold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#17212e]">
                  {paginatedGames.map(g => (
                    <tr
                      key={g.id}
                      onClick={() => onSelectGame(g.id)}
                      className="hover:bg-[#15202e] cursor-pointer transition-colors"
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={g.header_image}
                            alt={g.title}
                            className="w-14 h-9 rounded object-cover flex-shrink-0 bg-black/40 border border-[#1b2838]"
                            onError={e => {
                              const img = e.target as HTMLImageElement;
                              if (!img.src.includes('1550745165-9bc0b252726f')) {
                                img.src = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80';
                              }
                            }}
                          />
                          <div>
                            <span className="font-sans font-bold text-white text-sm hover:text-[#66c0f4] line-clamp-1">
                              {g.title}
                            </span>
                            <span className="text-[10px] text-zinc-500 font-mono">ID: {g.id}</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-zinc-300 font-sans text-xs">
                        {g.developer_name || 'Independent'}
                      </td>
                      <td className="py-3 px-4 font-bold text-white text-sm">
                        {formatPrice(g.lowest_current_price)}
                      </td>
                      <td className="py-3 px-4">
                        {g.max_discount && g.max_discount > 0 ? (
                          <span
                            className={`px-2 py-0.5 rounded text-xs font-bold ${getDiscountBadgeClass(
                              g.max_discount
                            )}`}
                          >
                            -{g.max_discount}%
                          </span>
                        ) : (
                          <span className="text-zinc-600 font-mono">—</span>
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[#a4d007] font-bold">{g.rating_score}%</span>
                          {g.metacritic_score > 0 && (
                            <span className="text-zinc-500 text-[10px]">
                              ({g.metacritic_score})
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-zinc-400 text-xs truncate max-w-[150px] block">
                          {g.genres.slice(0, 2).join(', ')}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 rounded bg-[#16212e] text-[#66c0f4] text-xs border border-[#223547]">
                          {g.total_listings || 1} Stores
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button className="px-3 py-1.5 rounded bg-[#1b2838] hover:bg-[#25394f] text-[#66c0f4] text-xs font-semibold transition-colors">
                          Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination Controls for Table View */}
          {totalPages > 1 && (
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 font-mono text-xs">
              <span className="text-zinc-400">
                Page <strong className="text-white">{currentPage}</strong> of{' '}
                <strong className="text-white">{totalPages}</strong>
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  disabled={currentPage === 1}
                  onClick={() => {
                    setCurrentPage(1);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="p-1.5 rounded bg-[#101721] border border-[#1b2838] text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronsLeft className="w-4 h-4" />
                </button>
                <button
                  disabled={currentPage === 1}
                  onClick={() => {
                    setCurrentPage(p => Math.max(1, p - 1));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-2.5 py-1.5 rounded bg-[#101721] border border-[#1b2838] text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Prev</span>
                </button>

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => {
                    setCurrentPage(p => Math.min(totalPages, p + 1));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-2.5 py-1.5 rounded bg-[#101721] border border-[#1b2838] text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1"
                >
                  <span>Next</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => {
                    setCurrentPage(totalPages);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="p-1.5 rounded bg-[#101721] border border-[#1b2838] text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronsRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Franchise Expansion & Backfill Modal */}
      <FranchiseManagerModal
        isOpen={showFranchiseManager}
        onClose={() => setShowFranchiseManager(false)}
        onDataChanged={fetchGames}
      />
    </div>
  );
};
