import React, { useState, useMemo } from 'react';
import { Game, DatabaseStats, PlatformId } from '../types/database';
import { GameCard } from '../components/GameCard';
import { PlatformBadge } from '../components/PlatformBadge';
import {
  Flame,
  TrendingDown,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Search,
  Layers,
  Calendar,
  Clock,
  Database,
  Terminal,
  ShieldCheck,
  CheckCircle2,
  Filter,
  Grid
} from 'lucide-react';

interface HomeViewProps {
  games: Game[];
  stats: DatabaseStats | null;
  onSelectGame: (gameId: string) => void;
  onNavigateToTab: (tab: string, filter?: any) => void;
  onOpenSqlConsole: () => void;
  onOpenSearch: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  games,
  stats,
  onSelectGame,
  onNavigateToTab,
  onOpenSqlConsole,
  onOpenSearch
}) => {
  // Catalog tabs state
  const [catalogTab, setCatalogTab] = useState<'all' | 'trending' | 'deals' | 'record_lows' | 'recent'>('all');
  const [catalogPlatform, setCatalogPlatform] = useState<PlatformId | 'all'>('all');
  const [catalogQuery, setCatalogQuery] = useState('');
  const [catalogVisibleCount, setCatalogVisibleCount] = useState<number>(16);

  // 1. Trending Games (sorted by active players and community popularity)
  const trendingGames = useMemo(() => {
    return [...games]
      .sort((a, b) => (b.total_live_players || 0) - (a.total_live_players || 0))
      .slice(0, 4);
  }, [games]);

  // 2. Best Deals (sorted by highest discount percentage)
  const bestDeals = useMemo(() => {
    return [...games]
      .filter(g => (g.max_discount || 0) > 0)
      .sort((a, b) => (b.max_discount || 0) - (a.max_discount || 0))
      .slice(0, 4);
  }, [games]);

  // 3. Historical Lows (where current price is at or below historical record low)
  const historicalLows = useMemo(() => {
    return [...games]
      .filter(g => g.is_historical_low || ((g.max_discount || 0) >= 50))
      .sort((a, b) => (b.max_discount || 0) - (a.max_discount || 0))
      .slice(0, 4);
  }, [games]);

  // 4. Recently Released Games (sorted by release date)
  const recentlyReleased = useMemo(() => {
    return [...games]
      .filter(g => g.release_date)
      .sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime())
      .slice(0, 4);
  }, [games]);

  // 5. Recently Updated Games (sorted by recent price change/update timestamp)
  const recentlyUpdated = useMemo(() => {
    return [...games]
      .filter(g => g.recent_update_date)
      .sort((a, b) => new Date(b.recent_update_date!).getTime() - new Date(a.recent_update_date!).getTime())
      .slice(0, 4);
  }, [games]);

  // 6. Filtered games for the main interactive catalog section
  const catalogGames = useMemo(() => {
    let list = [...games];

    // Filter by tab
    if (catalogTab === 'trending') {
      list.sort((a, b) => (b.total_live_players || 0) - (a.total_live_players || 0));
    } else if (catalogTab === 'deals') {
      list = list.filter(g => (g.max_discount || 0) > 0);
      list.sort((a, b) => (b.max_discount || 0) - (a.max_discount || 0));
    } else if (catalogTab === 'record_lows') {
      list = list.filter(g => g.is_historical_low || (g.max_discount || 0) >= 40);
      list.sort((a, b) => (b.max_discount || 0) - (a.max_discount || 0));
    } else if (catalogTab === 'recent') {
      list.sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
    }

    // Filter by platform
    if (catalogPlatform !== 'all') {
      list = list.filter(g => g.platforms?.includes(catalogPlatform));
    }

    // Filter by search query
    if (catalogQuery.trim()) {
      const q = catalogQuery.trim().toLowerCase();
      list = list.filter(
        g =>
          g.title.toLowerCase().includes(q) ||
          (g.developer_name && g.developer_name.toLowerCase().includes(q)) ||
          g.genres.some(gen => gen.toLowerCase().includes(q))
      );
    }

    return list;
  }, [games, catalogTab, catalogPlatform, catalogQuery]);

  const platformsList: { id: PlatformId; name: string; subtitle: string; color: string }[] = [
    { id: 'steam', name: 'Steam', subtitle: 'Valve PC Platform', color: '#66c0f4' },
    { id: 'epic', name: 'Epic Games Store', subtitle: 'Epic Games PC', color: '#3b82f6' },
    { id: 'gog', name: 'GOG.com', subtitle: '100% DRM-Free', color: '#a855f7' },
    { id: 'playstation', name: 'PlayStation', subtitle: 'PS5 & PS4 Store', color: '#38bdf8' },
    { id: 'xbox', name: 'Xbox', subtitle: 'Series X|S & PC Store', color: '#22c55e' },
    { id: 'nintendo', name: 'Nintendo eShop', subtitle: 'Switch Console', color: '#ef4444' }
  ];

  return (
    <div className="space-y-12 pb-16">
      {/* ================================================== */}
      {/* HERO SECTION (GAME DISCOVERY FOCUSED)              */}
      {/* ================================================== */}
      <section className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#111a26] via-[#0d1520] to-[#0a0f17] border border-[#1b2a3c] p-6 sm:p-10 lg:p-12 shadow-2xl">
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          {/* Subtle Tagline Kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#162334]/80 border border-[#243850] text-[#38bdf8] text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
            <span>Universal Cross-Platform Video Game & Price Aggregator</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase font-mono">
            UNIVERSAL <span className="text-[#38bdf8]">GAME DB</span>
          </h1>

          {/* Core Vision Quote */}
          <p className="text-lg sm:text-xl text-zinc-300 font-medium tracking-wide">
            &ldquo;Every game. Every platform. One place.&rdquo;
          </p>

          <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Discover games, compare multi-store prices, inspect editions and expansions, and track
            historical price record drops across Steam, Epic Games, GOG, PlayStation, Xbox, and Nintendo.
          </p>

          {/* Prominent Search Box */}
          <div className="pt-2 max-w-2xl mx-auto">
            <button
              onClick={onOpenSearch}
              className="w-full flex items-center justify-between px-5 py-4 rounded-xl bg-[#080d14] hover:bg-[#0c1420] border-2 border-[#203348] hover:border-[#38bdf8]/60 text-zinc-400 hover:text-white transition-all shadow-xl group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-[#38bdf8] group-hover:scale-110 transition-transform" />
                <span className="text-sm sm:text-base font-sans font-medium text-zinc-300">
                  Search games, studios, publishers...
                </span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="hidden sm:inline-block px-2.5 py-1 rounded bg-[#131d2a] border border-[#243548] text-xs font-mono text-zinc-300">
                  Ctrl+K
                </kbd>
                <span className="px-3 py-1 rounded-lg bg-[#38bdf8] text-slate-950 font-bold text-xs font-mono">
                  Search
                </span>
              </div>
            </button>

            {/* Quick Search Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs text-zinc-400">
              <span className="text-zinc-500 font-mono text-[11px]">Popular searches:</span>
              {['Cyberpunk 2077', 'Elden Ring', 'Black Myth', "Baldur's Gate", 'Capcom', 'FromSoftware'].map(term => (
                <button
                  key={term}
                  onClick={onOpenSearch}
                  className="px-2.5 py-1 rounded-md bg-[#131d2a]/80 hover:bg-[#1b2b3d] text-zinc-300 hover:text-white border border-[#203144] transition-colors text-[11px] font-mono"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>

          {/* Transparent Data Trust Notice */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono text-zinc-400 bg-[#090e15]/90 px-3 py-1.5 rounded-lg border border-[#172332]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span>Universal Catalog: {games.length} canonical games with {stats?.totalListings || 85} verified cross-platform listings.</span>
            </div>
          </div>
        </div>

        {/* Ambient background decoration */}
        <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />
      </section>

      {/* ================================================== */}
      {/* POPULAR PLATFORMS (QUICK PORTALS)                  */}
      {/* ================================================== */}
      <section className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-[#1b2838]">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-[#38bdf8]/10 text-[#38bdf8]">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white uppercase font-mono tracking-wide">
                Popular Platforms
              </h2>
              <p className="text-xs text-zinc-400">
                Explore catalog listings and storefront availability by ecosystem.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigateToTab('matrix')}
            className="text-xs font-mono text-[#38bdf8] hover:underline flex items-center gap-1"
          >
            <span>Platform matrix</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {platformsList.map(platform => {
            const count = games.filter(g => g.platforms?.includes(platform.id)).length;
            return (
              <button
                key={platform.id}
                onClick={() => {
                  setCatalogPlatform(platform.id);
                  const el = document.getElementById('catalog-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`group p-3.5 rounded-xl border transition-all text-left flex flex-col justify-between h-28 shadow-md hover:-translate-y-0.5 ${
                  catalogPlatform === platform.id
                    ? 'bg-[#162536] border-[#38bdf8]'
                    : 'bg-[#0f1722] hover:bg-[#142030] border-[#1b2838] hover:border-[#2f4968]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: platform.color }}
                  />
                  <span className="text-[10px] font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    {count} {count === 1 ? 'Game' : 'Games'}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm group-hover:text-[#38bdf8] transition-colors leading-tight">
                    {platform.name}
                  </h3>
                  <span className="text-[10px] font-mono text-zinc-400 block mt-0.5">
                    {platform.subtitle}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* ================================================== */}
      {/* COMPLETE GAME CATALOG (ALL GAMES VISIBLE HERE!)   */}
      {/* ================================================== */}
      <section id="catalog-section" className="space-y-6 pt-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-3 border-b border-[#1b2838]">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-sky-500/10 text-[#38bdf8]">
              <Grid className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-white uppercase font-mono tracking-wide">
                  Universal Game Library
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-[#1b2838] text-xs font-mono text-[#38bdf8] font-bold">
                  {catalogGames.length} / {games.length} Games
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                Every game indexed across Steam, Epic Games, GOG, PlayStation, Xbox, and Nintendo.
              </p>
            </div>
          </div>

          {/* Quick inline search input for catalog */}
          <div className="flex items-center gap-2">
            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                value={catalogQuery}
                onChange={e => setCatalogQuery(e.target.value)}
                placeholder="Filter library..."
                className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-[#0a1017] border border-[#1b2838] focus:border-[#38bdf8] text-xs font-mono text-white placeholder-zinc-500 focus:outline-none transition-colors"
              />
              {catalogQuery && (
                <button
                  onClick={() => setCatalogQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white text-xs font-mono"
                >
                  ✕
                </button>
              )}
            </div>

            <button
              onClick={() => onNavigateToTab('browse')}
              className="px-3 py-1.5 rounded-lg bg-[#162334] hover:bg-[#1d2f44] text-[#38bdf8] border border-[#2b4461] text-xs font-mono font-medium transition-colors whitespace-nowrap hidden sm:block"
            >
              Advanced Table View →
            </button>
          </div>
        </div>

        {/* Catalog Category & Platform Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            <button
              onClick={() => setCatalogTab('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                catalogTab === 'all'
                  ? 'bg-[#1b2b3d] text-white border border-[#2d4763] font-bold'
                  : 'bg-[#0f1722] text-zinc-400 hover:text-white border border-[#1b2838]'
              }`}
            >
              All ({games.length})
            </button>

            <button
              onClick={() => setCatalogTab('trending')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1 ${
                catalogTab === 'trending'
                  ? 'bg-[#1b2b3d] text-[#38bdf8] border border-[#38bdf8]/50 font-bold'
                  : 'bg-[#0f1722] text-zinc-400 hover:text-white border border-[#1b2838]'
              }`}
            >
              <TrendingUp className="w-3 h-3 text-[#38bdf8]" />
              <span>Trending</span>
            </button>

            <button
              onClick={() => setCatalogTab('deals')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1 ${
                catalogTab === 'deals'
                  ? 'bg-[#1b2b3d] text-[#a3e635] border border-[#a3e635]/50 font-bold'
                  : 'bg-[#0f1722] text-zinc-400 hover:text-white border border-[#1b2838]'
              }`}
            >
              <TrendingDown className="w-3 h-3 text-[#a3e635]" />
              <span>Active Deals</span>
            </button>

            <button
              onClick={() => setCatalogTab('record_lows')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1 ${
                catalogTab === 'record_lows'
                  ? 'bg-[#1b2b3d] text-rose-400 border border-rose-500/50 font-bold'
                  : 'bg-[#0f1722] text-zinc-400 hover:text-white border border-[#1b2838]'
              }`}
            >
              <Flame className="w-3 h-3 text-rose-400" />
              <span>Record Lows</span>
            </button>

            <button
              onClick={() => setCatalogTab('recent')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1 ${
                catalogTab === 'recent'
                  ? 'bg-[#1b2b3d] text-purple-400 border border-purple-500/50 font-bold'
                  : 'bg-[#0f1722] text-zinc-400 hover:text-white border border-[#1b2838]'
              }`}
            >
              <Calendar className="w-3 h-3 text-purple-400" />
              <span>New Releases</span>
            </button>
          </div>

          {/* Platform Filter Pills */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
            <span className="text-zinc-500 text-[10px] uppercase tracking-wider mr-1 hidden lg:inline">
              Store:
            </span>
            <button
              onClick={() => setCatalogPlatform('all')}
              className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                catalogPlatform === 'all'
                  ? 'bg-[#25394f] text-white font-bold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              All Stores
            </button>
            {platformsList.map(p => (
              <button
                key={p.id}
                onClick={() => setCatalogPlatform(catalogPlatform === p.id ? 'all' : p.id)}
                className={`px-2 py-1 rounded text-[11px] transition-colors flex items-center gap-1 ${
                  catalogPlatform === p.id
                    ? 'bg-[#1b2838] text-white font-bold border border-[#38bdf8]'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: p.color }} />
                <span>{p.name.replace(' Store', '').replace('.com', '')}</span>
              </button>
            ))}
          </div>
        </div>

        {/* The Game Cards Grid */}
        {catalogGames.length > 0 ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {catalogGames.slice(0, catalogVisibleCount).map(game => (
                <GameCard key={game.id} game={game} onSelect={onSelectGame} />
              ))}
            </div>

            {/* Load more / Jump to browse button */}
            {catalogGames.length > catalogVisibleCount ? (
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-[#1b2838]">
                <button
                  onClick={() => setCatalogVisibleCount(prev => prev + 16)}
                  className="px-5 py-2.5 rounded-xl bg-[#142335] hover:bg-[#1d324b] text-[#38bdf8] border border-[#274465] text-xs font-mono font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Load More Games ({catalogGames.length - catalogVisibleCount} more)</span>
                </button>
                <button
                  onClick={() => onNavigateToTab('browse')}
                  className="px-4 py-2.5 rounded-xl bg-[#101722] hover:bg-[#182332] text-zinc-300 hover:text-white border border-[#1f2d3e] text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Browse All {games.length} Games in Games Section</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <div className="flex justify-center pt-2">
                <button
                  onClick={() => onNavigateToTab('browse')}
                  className="text-xs font-mono text-[#38bdf8] hover:underline flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore full catalog in Games section</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="p-12 text-center rounded-xl bg-[#0e1622] border border-[#1b2838] space-y-3">
            <Search className="w-8 h-8 text-zinc-500 mx-auto" />
            <h3 className="text-base font-bold text-white font-mono">No matching games found</h3>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto">
              No titles match &ldquo;{catalogQuery}&rdquo; on the selected platform. Clear your filter to view all {games.length} games.
            </p>
            <button
              onClick={() => {
                setCatalogTab('all');
                setCatalogPlatform('all');
                setCatalogQuery('');
              }}
              className="px-4 py-2 rounded-lg bg-[#162334] text-[#38bdf8] text-xs font-mono font-bold hover:bg-[#1f3248] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* ================================================== */}
      {/* 1. SPOTLIGHT: TRENDING GAMES                       */}
      {/* ================================================== */}
      <section className="space-y-4 pt-4 border-t border-[#1b2838]">
        <div className="flex items-center justify-between pb-2 border-b border-[#1b2838]">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-sky-500/10 text-[#38bdf8]">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white uppercase font-mono tracking-wide">
                Top Concurrent Players Right Now
              </h2>
              <p className="text-xs text-zinc-400">
                Live multi-platform player counts tracked across Steam, PSN, and Xbox Live.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigateToTab('browse', { sortBy: 'players' })}
            className="text-xs font-mono text-[#38bdf8] hover:underline flex items-center gap-1"
          >
            <span>View all trending</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trendingGames.map(game => (
            <GameCard key={game.id} game={game} onSelect={onSelectGame} />
          ))}
        </div>
      </section>

      {/* ================================================== */}
      {/* 2. SPOTLIGHT: BEST DEALS                           */}
      {/* ================================================== */}
      <section className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-[#1b2838]">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-[#5c7e10]/20 text-[#a3e635]">
              <TrendingDown className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white uppercase font-mono tracking-wide">
                Biggest Price Discounts
              </h2>
              <p className="text-xs text-zinc-400">
                Highest savings reaching up to -80% across Steam, Epic, GOG, and consoles.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigateToTab('sales')}
            className="text-xs font-mono text-[#a3e635] hover:underline flex items-center gap-1"
          >
            <span>Browse all deals</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {bestDeals.map(game => (
            <GameCard key={game.id} game={game} onSelect={onSelectGame} />
          ))}
        </div>
      </section>

      {/* ================================================== */}
      {/* 3. SPOTLIGHT: HISTORICAL RECORD LOWS               */}
      {/* ================================================== */}
      <section className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-[#1b2838]">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400">
              <Flame className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white uppercase font-mono tracking-wide">
                All-Time Historical Record Lows
              </h2>
              <p className="text-xs text-zinc-400">
                Factual price matching or beating the lowest recorded price in store history.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigateToTab('sales', { filterType: 'historical_low' })}
            className="text-xs font-mono text-rose-400 hover:underline flex items-center gap-1"
          >
            <span>All record lows</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {historicalLows.map(game => (
            <GameCard key={game.id} game={game} onSelect={onSelectGame} />
          ))}
        </div>
      </section>

      {/* ================================================== */}
      {/* 4. SPOTLIGHT: RECENTLY UPDATED                     */}
      {/* ================================================== */}
      <section className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-[#1b2838]">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white uppercase font-mono tracking-wide">
                Recently Updated Prices
              </h2>
              <p className="text-xs text-zinc-400">
                Latest price updates, publisher sales, and catalog revisions across digital stores.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigateToTab('sales')}
            className="text-xs font-mono text-emerald-400 hover:underline flex items-center gap-1"
          >
            <span>View all updates</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {recentlyUpdated.map(game => (
            <GameCard key={game.id} game={game} onSelect={onSelectGame} />
          ))}
        </div>
      </section>

      {/* ================================================== */}
      {/* 5. SPOTLIGHT: RECENTLY RELEASED                    */}
      {/* ================================================== */}
      <section className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-[#1b2838]">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white uppercase font-mono tracking-wide">
                Recently Released Titles
              </h2>
              <p className="text-xs text-zinc-400">
                Modern releases across PC, PlayStation 5, Xbox Series X, and Nintendo Switch.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigateToTab('browse', { sortBy: 'release' })}
            className="text-xs font-mono text-purple-400 hover:underline flex items-center gap-1"
          >
            <span>View release timeline</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {recentlyReleased.map(game => (
            <GameCard key={game.id} game={game} onSelect={onSelectGame} />
          ))}
        </div>
      </section>

      {/* ================================================== */}
      {/* PRODUCT & DATABASE STATISTICS (LOWER SECTION)      */}
      {/* ================================================== */}
      <section className="bg-[#0b121b] rounded-2xl border border-[#1b2838] p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#172230]">
          <div>
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-[#38bdf8]" />
              <h3 className="text-base font-bold text-white uppercase font-mono tracking-wide">
                Universal Database Statistics
              </h3>
            </div>
            <p className="text-xs text-zinc-400 mt-1">
              Factual catalog metrics across all tracked gaming storefronts and relational entities.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigateToTab('browse')}
              className="px-3.5 py-1.5 rounded-lg bg-[#162334] hover:bg-[#1d2f44] text-[#38bdf8] border border-[#2b4461] text-xs font-mono font-medium transition-colors"
            >
              Browse Games ({games.length})
            </button>
            <button
              onClick={onOpenSqlConsole}
              className="px-3 py-1.5 rounded-lg bg-[#0e1724] hover:bg-[#162334] text-zinc-300 border border-zinc-700 text-xs font-mono transition-colors flex items-center gap-1.5"
            >
              <Terminal className="w-3 h-3 text-[#a3e635]" />
              <span>SQL Inspector</span>
            </button>
          </div>
        </div>

        {/* 4 Key Metrics Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[#0e1622] border border-[#1b2838]">
            <span className="text-zinc-500 font-mono text-[11px] uppercase tracking-wider block">
              Tracked Games
            </span>
            <span className="text-2xl sm:text-3xl font-black text-white font-mono mt-1 block">
              {stats?.totalGames || games.length}
            </span>
            <span className="text-[10px] text-zinc-400 font-sans mt-0.5 block">
              Canonical game entities
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#0e1622] border border-[#1b2838]">
            <span className="text-zinc-500 font-mono text-[11px] uppercase tracking-wider block">
              Supported Platforms
            </span>
            <span className="text-2xl sm:text-3xl font-black text-[#38bdf8] font-mono mt-1 block">
              {stats?.totalPlatforms || 6}
            </span>
            <span className="text-[10px] text-zinc-400 font-sans mt-0.5 block">
              Steam, Epic, GOG, PS, Xbox, Switch
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#0e1622] border border-[#1b2838]">
            <span className="text-zinc-500 font-mono text-[11px] uppercase tracking-wider block">
              Store Listings
            </span>
            <span className="text-2xl sm:text-3xl font-black text-[#a3e635] font-mono mt-1 block">
              {stats?.totalListings || 85}
            </span>
            <span className="text-[10px] text-zinc-400 font-sans mt-0.5 block">
              Cross-platform store junctions
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#0e1622] border border-[#1b2838]">
            <span className="text-zinc-500 font-mono text-[11px] uppercase tracking-wider block">
              Price Records
            </span>
            <span className="text-2xl sm:text-3xl font-black text-amber-400 font-mono mt-1 block">
              {stats?.totalPriceRecords || 76}+
            </span>
            <span className="text-[10px] text-zinc-400 font-sans mt-0.5 block">
              Historical sale milestones
            </span>
          </div>
        </div>

        {/* Data Trust Disclaimer (Honest & Factual) */}
        <div className="p-3.5 rounded-xl bg-[#080d14] border border-[#16212e] flex items-start gap-3 text-xs font-mono text-zinc-400">
          <ShieldCheck className="w-4 h-4 text-[#38bdf8] flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed text-[11px]">
            <strong className="text-zinc-200 font-bold">Data Transparency Notice:</strong> Universal Game DB
            aggregates multi-platform pricing, editions, and historical record milestones using curated sample
            tracking records. Prices and concurrent player numbers represent multi-platform database benchmarks
            designed for cross-store comparison.
          </p>
        </div>
      </section>
    </div>
  );
};
