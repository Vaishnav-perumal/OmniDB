import React, { useState, useEffect } from 'react';
import { Game, PlatformListing, PriceHistoryPoint, GameEdition, GameDlc, WatchlistItem } from '../types/database';
import { db } from '../db/database';
import { PlatformComparisonTable } from '../components/PlatformComparisonTable';
import { PriceHistoryChart } from '../components/PriceHistoryChart';
import { RechartsPriceHistoryChart } from '../components/RechartsPriceHistoryChart';
import { EditionsList } from '../components/EditionsList';
import { DlcsList } from '../components/DlcsList';
import { PlatformsBreakdown } from '../components/PlatformsBreakdown';
import { MediaGallery } from '../components/MediaGallery';
import { WatchlistModal } from '../components/WatchlistModal';
import { SetPriceAlertCard } from '../components/SetPriceAlertCard';
import { FranchiseSeriesSection } from '../components/FranchiseSeriesSection';
import { PlatformBadge } from '../components/PlatformBadge';
import { formatPrice, formatDate } from '../utils/formatters';
import {
  ArrowLeft,
  Bell,
  Star,
  Layers,
  Calendar,
  Building,
  CheckCircle2,
  ExternalLink,
  Code2,
  Flame,
  Gamepad2,
  TrendingDown,
  Copy,
  Check,
  Heart,
  Image as ImageIcon,
  Package,
  Layers3,
  History,
  Tag,
  Info
} from 'lucide-react';

interface GameDetailViewProps {
  gameId: string;
  onBack: () => void;
  onSelectStudio?: (studioId: string) => void;
  onSelectGame?: (gameId: string) => void;
  onOpenFranchiseView?: (franchiseId: string) => void;
}

type TabType = 'overview' | 'prices' | 'history' | 'editions' | 'dlc' | 'platforms' | 'media' | 'sql';

export const GameDetailView: React.FC<GameDetailViewProps> = ({
  gameId,
  onBack,
  onSelectStudio,
  onSelectGame,
  onOpenFranchiseView
}) => {
  const [game, setGame] = useState<Game | null>(null);
  const [listings, setListings] = useState<PlatformListing[]>([]);
  const [priceHistories, setPriceHistories] = useState<
    { listing: PlatformListing; history: PriceHistoryPoint[] }[]
  >([]);
  const [editions, setEditions] = useState<GameEdition[]>([]);
  const [dlcs, setDlcs] = useState<GameDlc[]>([]);
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [isInWatchlist, setIsInWatchlist] = useState(false);
  const [watchlistItem, setWatchlistItem] = useState<WatchlistItem | undefined>(undefined);
  const [showWatchlistModal, setShowWatchlistModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [copiedUgdb, setCopiedUgdb] = useState(false);

  const loadData = async () => {
    setLoading(true);
    try {
      const g = await db.getGameById(gameId);
      if (g) {
        setGame(g);
        const [l, ph, ed, dl, inWatch, wItem] = await Promise.all([
          db.getGameListings(g.id),
          db.getGamePriceHistory(g.id),
          db.getGameEditions(g.id),
          db.getGameDlcs(g.id),
          db.isGameInWatchlist(g.id),
          db.getWatchlistItem(g.id)
        ]);
        setListings(l);
        setPriceHistories(ph);
        setEditions(ed);
        setDlcs(dl);
        setIsInWatchlist(inWatch);
        setWatchlistItem(wItem);
      }
    } catch (err) {
      console.error('Error loading game detail from database:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [gameId]);

  const handleCopyUgdb = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedUgdb(true);
    setTimeout(() => setCopiedUgdb(false), 2000);
  };

  const handleToggleWishlist = async () => {
    if (!game) return;
    if (isInWatchlist) {
      await db.removeFromWatchlist(game.id);
      setIsInWatchlist(false);
    } else {
      setShowWatchlistModal(true);
    }
  };

  if (loading) {
    return (
      <div className="py-24 text-center space-y-3 font-mono">
        <div className="inline-block w-8 h-8 border-2 border-[#38bdf8] border-t-transparent rounded-full animate-spin" />
        <div className="text-zinc-400 text-sm">Querying database for universal game profile...</div>
      </div>
    );
  }

  if (!game) {
    return (
      <div className="py-24 text-center space-y-4 font-mono">
        <div className="text-xl font-bold text-white">Game Not Found</div>
        <p className="text-zinc-400 text-xs">The requested ID does not exist in the database.</p>
        <button
          onClick={onBack}
          className="px-4 py-2 rounded-lg bg-[#1b2838] text-[#38bdf8] text-xs font-semibold hover:bg-[#24374d] transition-colors"
        >
          Return to Catalog
        </button>
      </div>
    );
  }

  const lowestPrice = listings.length > 0 ? Math.min(...listings.map(l => l.current_price)) : 0;
  const maxDiscount = listings.length > 0 ? Math.max(...listings.map(l => l.discount_percent)) : 0;
  const historicalLow = listings.length > 0 ? Math.min(...listings.map(l => l.historical_low_price)) : 0;
  const isHistoricalLowNow = listings.some(l => l.current_price <= l.historical_low_price && l.discount_percent > 0);

  return (
    <div className="space-y-6 pb-20">
      {/* Top Breadcrumb & Sample Data Disclaimer */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Database</span>
        </button>

        <div className="inline-flex items-center gap-2 text-[11px] text-zinc-400 bg-[#101722] px-3 py-1 rounded-md border border-[#1b2838]">
          <Info className="w-3.5 h-3.5 text-[#38bdf8] flex-shrink-0" />
          <span>Demonstration Catalog Mode • Curated multi-store listings for cross-platform comparison</span>
        </div>
      </div>

      {/* ================================================== */}
      {/* HERO SECTION (GAME DETAIL CENTERPIECE)             */}
      {/* ================================================== */}
      <div className="relative rounded-2xl overflow-hidden border border-[#1d2d40] bg-[#0c131d] shadow-2xl">
        {/* Backdrop Image with layered gradient overlay */}
        {game.background_image && (
          <div className="absolute inset-0 pointer-events-none opacity-25">
            <img
              src={game.background_image}
              alt=""
              className="w-full h-full object-cover filter blur-sm scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c131d] via-[#0c131d]/85 to-black/50" />
          </div>
        )}

        <div className="relative z-10 p-6 sm:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          {/* Header Cover Art Poster */}
          <div className="w-full sm:w-56 md:w-64 aspect-[16/10] sm:aspect-[2/3] rounded-xl overflow-hidden bg-black/60 border border-[#233547] flex-shrink-0 shadow-2xl relative group">
            <img
              src={game.poster_image || game.header_image}
              alt={game.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {isHistoricalLowNow && (
              <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-rose-500/90 text-white font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                <Flame className="w-3 h-3 text-amber-200 fill-amber-200" />
                <span>Historical Low</span>
              </div>
            )}
          </div>

          {/* Core Info & Universal Identity */}
          <div className="flex-1 space-y-3.5 min-w-0">
            {/* Canonical Universal Game ID & Store Count */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#132233] text-[#38bdf8] text-xs font-mono font-bold border border-[#233d59]">
                <span>UNIVERSAL ID:</span>
                <span className="text-white tracking-wider">{game.ugdb_id}</span>
                <button
                  onClick={() => handleCopyUgdb(game.ugdb_id)}
                  className="ml-1 text-zinc-400 hover:text-white"
                  title="Copy Universal Game ID"
                >
                  {copiedUgdb ? (
                    <Check className="w-3 h-3 text-emerald-400" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                </button>
              </div>

              <span className="px-2.5 py-1 rounded-md bg-[#141e2b] text-zinc-300 text-xs font-mono border border-[#1e2f42]">
                {listings.length} Supported Platforms
              </span>

              {game.metacritic_score > 0 && (
                <span
                  className={`px-2 py-0.5 rounded text-xs font-mono font-bold ${
                    game.metacritic_score >= 90
                      ? 'bg-[#66cc33] text-black'
                      : 'bg-amber-400 text-black'
                  }`}
                  title="Metacritic Score"
                >
                  Metascore: {game.metacritic_score}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight uppercase font-mono">
              {game.title}
            </h1>

            {/* Studio / Publisher / Release Date row */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-zinc-500" />
                <span>Developer:</span>
                <button
                  onClick={() => onSelectStudio && onSelectStudio(game.developer_name || '')}
                  className="text-white font-bold hover:text-[#38bdf8] transition-colors hover:underline"
                >
                  {game.developer_name || 'Independent Studio'}
                </button>
              </div>

              <div className="flex items-center gap-1.5">
                <span>Publisher:</span>
                <strong className="text-white">{game.publisher_name || 'Self-published'}</strong>
              </div>

              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                <span>Released:</span>
                <strong className="text-white">{formatDate(game.release_date)}</strong>
              </div>
            </div>

            {/* Synopsis */}
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans line-clamp-3">
              {game.summary}
            </p>

            {/* Platform Badges */}
            {game.platforms && game.platforms.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-[11px] font-mono text-zinc-500 mr-1">Platforms:</span>
                {game.platforms.map(p => (
                  <PlatformBadge key={p} platformId={p} size="sm" showLabel={true} />
                ))}
              </div>
            )}

            {/* Genres & Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {game.genres.map((g, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#142030] text-[#38bdf8] border border-[#20364e]"
                >
                  {g}
                </span>
              ))}
              {game.tags.slice(0, 4).map((t, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#0d141e] text-zinc-400 border border-[#192433]"
                >
                  #{t}
                </span>
              ))}
            </div>

            {/* Action Buttons: Add to Wishlist & Price Alert */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={handleToggleWishlist}
                className={`px-4 py-2 rounded-lg font-mono text-xs font-bold transition-all shadow-md flex items-center gap-2 ${
                  isInWatchlist
                    ? 'bg-amber-500 text-black hover:bg-amber-400'
                    : 'bg-[#1a2736] hover:bg-[#24374c] text-white border border-[#2e4764]'
                }`}
              >
                <Star className={`w-4 h-4 ${isInWatchlist ? 'fill-current' : ''}`} />
                <span>{isInWatchlist ? 'In Wishlist' : 'Add to Wishlist'}</span>
              </button>

              <button
                onClick={() => setShowWatchlistModal(true)}
                className="px-4 py-2 rounded-lg font-mono text-xs font-bold transition-all shadow-md bg-[#38bdf8] hover:bg-[#60cdff] text-slate-950 flex items-center gap-2"
              >
                <Bell className="w-4 h-4" />
                <span>Price Alert</span>
              </button>

              <div className="text-xs font-mono text-zinc-400 ml-auto hidden sm:flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>One canonical game • 6 stores unified</span>
              </div>
            </div>
          </div>

          {/* Pricing & Deals Overview Card */}
          <div className="w-full lg:w-72 bg-[#0e1622]/95 backdrop-blur-md rounded-xl border border-[#233547] p-5 flex flex-col justify-between gap-4 flex-shrink-0 shadow-xl">
            <div>
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                Lowest Available Deal
              </span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-3xl font-black text-white font-mono">
                  {formatPrice(lowestPrice)}
                </span>
                {maxDiscount > 0 && (
                  <span className="px-2 py-0.5 rounded bg-[#5c7e10] text-[#beee11] font-mono text-xs font-bold">
                    -{maxDiscount}%
                  </span>
                )}
              </div>
              <div className="text-[11px] font-mono text-zinc-400 mt-1">
                across all {listings.length} tracked stores
              </div>
            </div>

            {/* Historical Low callout */}
            <div className="border-t border-[#1b2838] pt-3 text-xs font-mono space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-zinc-500 text-[10px] uppercase">Recorded Low:</span>
                <span className="font-bold text-emerald-400">{formatPrice(historicalLow)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500 text-[10px] uppercase">Community Rating:</span>
                <span className="font-bold text-[#a4d007]">{game.rating_score}% Positive</span>
              </div>
            </div>

            {watchlistItem && (
              <div
                className={`p-2.5 rounded-lg border text-xs font-mono ${
                  lowestPrice <= watchlistItem.target_price
                    ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                    : 'bg-[#152332] border-[#253f5b] text-[#38bdf8]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold">Target Alert:</span>
                  <span className="font-bold">{formatPrice(watchlistItem.target_price)}</span>
                </div>
                <div className="text-[11px] mt-0.5 font-semibold">
                  {lowestPrice <= watchlistItem.target_price
                    ? '🎉 Target Met or Beaten!'
                    : `Needs -${formatPrice(lowestPrice - watchlistItem.target_price)}`}
                </div>
              </div>
            )}

            <button
              onClick={() => setActiveTab('prices')}
              className="w-full py-2 px-3 rounded-lg font-mono text-xs font-semibold bg-[#182637] hover:bg-[#20344b] text-[#38bdf8] border border-[#2b4461] transition-colors text-center"
            >
              Compare All Store Prices →
            </button>
          </div>
        </div>
      </div>

      {/* Set Price Alert Feature Card */}
      <div className="mb-6">
        <SetPriceAlertCard
          game={game}
          listings={listings}
          watchlistItem={watchlistItem}
          onAlertUpdated={loadData}
        />
      </div>

      {/* ================================================== */}
      {/* 7 CANONICAL NAVIGATION TABS                        */}
      {/* ================================================== */}
      <div className="flex items-center gap-1 sm:gap-2 border-b border-[#1b2838] pb-1 overflow-x-auto font-mono text-xs">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2.5 rounded-t-lg font-semibold transition-all border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'overview'
              ? 'bg-[#101721] text-[#38bdf8] border-[#38bdf8]'
              : 'text-zinc-400 hover:text-white border-transparent'
          }`}
        >
          <Gamepad2 className="w-3.5 h-3.5" />
          <span>Overview</span>
        </button>

        <button
          onClick={() => setActiveTab('prices')}
          className={`px-4 py-2.5 rounded-t-lg font-semibold transition-all border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'prices'
              ? 'bg-[#101721] text-[#38bdf8] border-[#38bdf8]'
              : 'text-zinc-400 hover:text-white border-transparent'
          }`}
        >
          <Tag className="w-3.5 h-3.5" />
          <span>Prices ({listings.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('history')}
          className={`px-4 py-2.5 rounded-t-lg font-semibold transition-all border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'history'
              ? 'bg-[#101721] text-[#38bdf8] border-[#38bdf8]'
              : 'text-zinc-400 hover:text-white border-transparent'
          }`}
        >
          <History className="w-3.5 h-3.5" />
          <span>Price History</span>
        </button>

        <button
          onClick={() => setActiveTab('editions')}
          className={`px-4 py-2.5 rounded-t-lg font-semibold transition-all border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'editions'
              ? 'bg-[#101721] text-[#38bdf8] border-[#38bdf8]'
              : 'text-zinc-400 hover:text-white border-transparent'
          }`}
        >
          <Package className="w-3.5 h-3.5" />
          <span>Editions ({editions.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('dlc')}
          className={`px-4 py-2.5 rounded-t-lg font-semibold transition-all border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'dlc'
              ? 'bg-[#101721] text-[#38bdf8] border-[#38bdf8]'
              : 'text-zinc-400 hover:text-white border-transparent'
          }`}
        >
          <Layers3 className="w-3.5 h-3.5" />
          <span>DLC & Expansions ({dlcs.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('platforms')}
          className={`px-4 py-2.5 rounded-t-lg font-semibold transition-all border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'platforms'
              ? 'bg-[#101721] text-[#38bdf8] border-[#38bdf8]'
              : 'text-zinc-400 hover:text-white border-transparent'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Platforms & App IDs ({listings.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('media')}
          className={`px-4 py-2.5 rounded-t-lg font-semibold transition-all border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
            activeTab === 'media'
              ? 'bg-[#101721] text-[#38bdf8] border-[#38bdf8]'
              : 'text-zinc-400 hover:text-white border-transparent'
          }`}
        >
          <ImageIcon className="w-3.5 h-3.5" />
          <span>Media</span>
        </button>

        <button
          onClick={() => setActiveTab('sql')}
          className={`px-3 py-2.5 rounded-t-lg font-semibold transition-all border-b-2 flex items-center gap-1.5 whitespace-nowrap ml-auto ${
            activeTab === 'sql'
              ? 'bg-[#101721] text-[#a4d007] border-[#a4d007]'
              : 'text-zinc-500 hover:text-zinc-300 border-transparent'
          }`}
        >
          <Code2 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Relational SQL Records</span>
        </button>
      </div>

      {/* ================================================== */}
      {/* TAB CONTENT PANELS                                 */}
      {/* ================================================== */}

      {/* 1. OVERVIEW TAB */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Synopsis & Extended Description */}
          <div className="bg-[#101721] rounded-xl border border-[#1b2838] p-6 space-y-4">
            <h3 className="text-base font-bold text-white font-mono uppercase tracking-wide">
              About {game.title}
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed font-sans">
              {game.description || game.summary}
            </p>

            {/* Canonical Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-[#1b2838] text-xs font-mono">
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">Canonical UGDB ID</span>
                <span className="font-bold text-[#38bdf8]">{game.ugdb_id}</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">Developer</span>
                <span className="font-bold text-white">{game.developer_name || 'Independent'}</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">Publisher</span>
                <span className="font-bold text-white">{game.publisher_name || 'Self-published'}</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">Original Release Date</span>
                <span className="font-bold text-white">{formatDate(game.release_date)}</span>
              </div>
            </div>
          </div>

          {/* Quick Price Comparison Preview */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wide">
                Where to Buy — Digital Stores
              </h3>
              <button
                onClick={() => setActiveTab('prices')}
                className="text-xs font-mono text-[#38bdf8] hover:underline"
              >
                View Full Comparison Table →
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {listings.map(l => (
                <div
                  key={l.id}
                  className="bg-[#0f1722] rounded-xl border border-[#1b2738] p-3.5 flex flex-col justify-between h-28"
                >
                  <div className="flex items-center justify-between">
                    <PlatformBadge platformId={l.platform_id} size="sm" />
                    {l.discount_percent > 0 && (
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#5c7e10] text-[#beee11] font-mono font-bold">
                        -{l.discount_percent}%
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white font-mono">
                      {formatPrice(l.current_price, l.currency)}
                    </div>
                    <div className="text-[10px] text-zinc-500 font-mono truncate">
                      {l.drm_type.replace('Network', 'Net')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Historical Price Fluctuations Line Chart (Recharts) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wide flex items-center gap-2">
                <TrendingDown className="w-4 h-4 text-[#38bdf8]" />
                Historical Price Fluctuation (PostgreSQL Tracked)
              </h3>
              <button
                onClick={() => setActiveTab('history')}
                className="text-xs font-mono text-[#38bdf8] hover:underline"
              >
                Deep History View →
              </button>
            </div>
            <RechartsPriceHistoryChart
              listings={listings}
              priceHistories={priceHistories}
              targetPrice={watchlistItem?.target_price}
            />
          </div>

          {/* More From This Franchise Section */}
          <FranchiseSeriesSection
            currentGame={game}
            onSelectGame={onSelectGame || (() => {})}
            onOpenFranchiseView={onOpenFranchiseView}
          />

          {/* Technical Specs & Features Box */}
          <div className="bg-[#101721] rounded-xl border border-[#1b2838] p-5">
            <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wide mb-3 flex items-center gap-2">
              <Gamepad2 className="w-4 h-4 text-[#38bdf8]" />
              Universal Technical Specs & Features
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
              {game.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs font-mono text-zinc-300 p-2.5 rounded-lg bg-[#0b0e14] border border-[#1b2838]"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 2. PRICES TAB */}
      {activeTab === 'prices' && (
        <PlatformComparisonTable listings={listings} />
      )}

      {/* 3. PRICE HISTORY TAB */}
      {activeTab === 'history' && (
        <div className="space-y-6">
          <RechartsPriceHistoryChart
            listings={listings}
            priceHistories={priceHistories}
            targetPrice={watchlistItem?.target_price}
          />
          <PriceHistoryChart listings={listings} priceHistories={priceHistories} />
        </div>
      )}

      {/* 4. EDITIONS TAB */}
      {activeTab === 'editions' && <EditionsList editions={editions} />}

      {/* 5. DLC TAB */}
      {activeTab === 'dlc' && <DlcsList dlcs={dlcs} />}

      {/* 6. PLATFORMS TAB */}
      {activeTab === 'platforms' && (
        <PlatformsBreakdown game={game} listings={listings} />
      )}

      {/* 7. MEDIA TAB */}
      {activeTab === 'media' && <MediaGallery game={game} />}

      {/* 8. RELATIONAL SQL RECORDS TAB */}
      {activeTab === 'sql' && (
        <div className="bg-[#101721] rounded-xl border border-[#1b2838] p-5 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#1b2838]">
            <div>
              <h3 className="text-base font-bold text-white font-mono uppercase tracking-wide">
                Underlying PostgreSQL Relational Schema & Records
              </h3>
              <p className="text-xs text-zinc-400 mt-0.5">
                Exact SQL query joining the `games` entity with multiple `platform_listings` child rows.
              </p>
            </div>
          </div>

          <div className="bg-[#090d13] p-4 rounded-lg border border-[#1b2838] font-mono text-xs text-[#38bdf8] overflow-x-auto">
            <pre>{`-- SQL executed to populate this universal game profile:
SELECT 
  g.id, g.ugdb_id, g.title, g.release_date,
  pl.platform_id, pl.current_price, pl.original_price, pl.discount_percent,
  pl.historical_low_price, pl.drm_type, pl.current_players
FROM games g
JOIN platform_listings pl ON g.id = pl.game_id
WHERE g.id = '${game.id}' OR g.ugdb_id = '${game.ugdb_id}'
ORDER BY pl.current_price ASC;`}</pre>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs border border-[#1b2838] rounded-lg">
              <thead className="bg-[#141e2b] text-zinc-300">
                <tr>
                  <th className="py-2.5 px-3">listing_id</th>
                  <th className="py-2.5 px-3">platform_id</th>
                  <th className="py-2.5 px-3">store_app_id</th>
                  <th className="py-2.5 px-3">current_price</th>
                  <th className="py-2.5 px-3">discount</th>
                  <th className="py-2.5 px-3">historical_low</th>
                  <th className="py-2.5 px-3">drm_type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#17212e]">
                {listings.map(l => (
                  <tr key={l.id} className="hover:bg-[#121c28]">
                    <td className="py-2 px-3 text-[#38bdf8]">{l.id}</td>
                    <td className="py-2 px-3 uppercase">{l.platform_id}</td>
                    <td className="py-2 px-3 text-zinc-400">{l.store_app_id}</td>
                    <td className="py-2 px-3 font-bold text-white">${l.current_price.toFixed(2)}</td>
                    <td className="py-2 px-3 text-[#a4d007]">-{l.discount_percent}%</td>
                    <td className="py-2 px-3">${l.historical_low_price.toFixed(2)}</td>
                    <td className="py-2 px-3 text-zinc-400">{l.drm_type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Watchlist / Price Alert Modal */}
      {showWatchlistModal && (
        <WatchlistModal
          game={game}
          listings={listings}
          isInWatchlist={isInWatchlist}
          currentTargetPrice={watchlistItem?.target_price}
          currentPlatforms={watchlistItem?.notify_platforms}
          onClose={() => setShowWatchlistModal(false)}
          onSaved={() => {
            loadData();
          }}
        />
      )}
    </div>
  );
};
