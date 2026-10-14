import React, { useState, useEffect } from 'react';
import { Franchise, FranchiseGameType, FranchiseExpansionSettings } from '../types/franchise';
import { Game, PlatformId } from '../types/database';
import { db } from '../db/database';
import { franchiseEngine } from '../services/franchise/franchiseEngine';
import { formatPrice, formatDate } from '../utils/formatters';
import { PlatformBadge } from '../components/PlatformBadge';
import {
  ArrowLeft,
  Layers,
  Calendar,
  Sparkles,
  Tag,
  RefreshCw,
  SlidersHorizontal,
  CheckCircle2,
  Filter,
  Check,
  ExternalLink,
  ChevronRight,
  Database
} from 'lucide-react';

interface FranchiseDetailViewProps {
  franchiseId: string;
  onBack: () => void;
  onSelectGame: (gameId: string) => void;
}

export const FranchiseDetailView: React.FC<FranchiseDetailViewProps> = ({
  franchiseId,
  onBack,
  onSelectGame
}) => {
  const [franchise, setFranchise] = useState<Franchise | null>(null);
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'order_asc' | 'order_desc' | 'price_asc' | 'rating'>('order_asc');
  const [isSyncing, setIsSyncing] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [settings, setSettings] = useState<FranchiseExpansionSettings>(() => db.getFranchiseSettings());
  const [bannerMsg, setBannerMsg] = useState<string | null>(null);

  const loadData = async () => {
    setLoading(true);
    try {
      const f = await db.getFranchise(franchiseId);
      setFranchise(f || null);

      const seriesGames = await db.getFranchiseGames(franchiseId);
      setGames(seriesGames as any);
    } catch (err) {
      console.error('Failed to load franchise:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [franchiseId]);

  const handleSyncFranchise = async () => {
    setIsSyncing(true);
    setBannerMsg(null);
    try {
      if (games.length > 0) {
        const res = await franchiseEngine.expandGameFranchise(games[0].id, {
          settings,
          forceRecheck: true
        });
        if (res.franchise) {
          setBannerMsg(`Franchise re-sync complete: Added ${res.addedGamesCount} new games.`);
        } else {
          setBannerMsg('Franchise is up to date.');
        }
      }
      await loadData();
      setTimeout(() => setBannerMsg(null), 4000);
    } catch (err) {
      console.error('Sync failed:', err);
    } finally {
      setIsSyncing(false);
    }
  };

  const handleSaveSettings = (newSettings: FranchiseExpansionSettings) => {
    db.updateFranchiseSettings(newSettings);
    setSettings(newSettings);
    setShowSettingsModal(false);
    // Re-trigger expansion with new settings
    handleSyncFranchise();
  };

  const filteredGames = games
    .filter(g => {
      if (selectedType === 'all') return true;
      if (selectedType === 'main') return !g.game_type || g.game_type === 'main_game';
      if (selectedType === 'spin_off') return g.game_type === 'spin_off';
      if (selectedType === 'remake') return g.game_type === 'remake' || g.game_type === 'remaster';
      if (selectedType === 'dlc') return g.game_type === 'dlc' || g.game_type === 'expansion';
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'order_asc') {
        if (a.series_order && b.series_order) return a.series_order - b.series_order;
        return new Date(a.release_date).getTime() - new Date(b.release_date).getTime();
      }
      if (sortBy === 'order_desc') {
        if (a.series_order && b.series_order) return b.series_order - a.series_order;
        return new Date(b.release_date).getTime() - new Date(a.release_date).getTime();
      }
      if (sortBy === 'price_asc') {
        return (a.lowest_current_price || 0) - (b.lowest_current_price || 0);
      }
      if (sortBy === 'rating') {
        return b.rating_score - a.rating_score;
      }
      return 0;
    });

  const lowestPriceInFranchise =
    games.length > 0 ? Math.min(...games.map(g => g.lowest_current_price || 0)) : 0;

  const years = games
    .map(g => (g.release_date ? parseInt(g.release_date.split('-')[0], 10) : null))
    .filter((y): y is number => y !== null && !isNaN(y))
    .sort((a, b) => a - b);

  const yearSpan =
    years.length > 0
      ? years[0] === years[years.length - 1]
        ? `${years[0]}`
        : `${years[0]} – ${years[years.length - 1]}`
      : 'N/A';

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center font-mono text-xs text-zinc-400">
        <RefreshCw className="w-6 h-6 animate-spin mx-auto text-[#38bdf8] mb-2" />
        <span>Loading franchise timeline...</span>
      </div>
    );
  }

  const franchiseName = franchise?.name || franchiseId;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Back button */}
      <div>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono text-xs text-zinc-400 hover:text-white bg-[#0e1622] hover:bg-[#162234] border border-[#233547] transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Games</span>
        </button>
      </div>

      {/* Hero Franchise Header */}
      <div className="bg-[#101721] rounded-2xl border border-[#1b2838] overflow-hidden shadow-2xl relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f16] via-[#0f1724]/90 to-transparent pointer-events-none" />

        <div className="relative p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-[#1b2f44] text-[#38bdf8] border border-[#2b4d70] flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>Unified Franchise Series</span>
              </span>
              <span className="text-xs font-mono text-zinc-400">
                PostgreSQL & IGDB/RAWG Connected
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white font-mono tracking-tight uppercase">
              {franchiseName}
            </h1>

            <p className="text-sm font-sans text-zinc-300 leading-relaxed">
              {franchise?.description ||
                `Every canonical release, remake, spin-off, and expansion in the ${franchiseName} universe unified under one universal catalog.`}
            </p>

            {/* Quick Metrics Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-zinc-300">
              <div className="flex items-center gap-1.5 bg-[#0a0f16] px-3 py-1.5 rounded-lg border border-[#1c2b3d]">
                <span className="text-zinc-500 uppercase text-[10px]">Games:</span>
                <strong className="text-white font-bold">{games.length}</strong>
              </div>
              <div className="flex items-center gap-1.5 bg-[#0a0f16] px-3 py-1.5 rounded-lg border border-[#1c2b3d]">
                <span className="text-zinc-500 uppercase text-[10px]">Timeline:</span>
                <strong className="text-white font-bold">{yearSpan}</strong>
              </div>
              <div className="flex items-center gap-1.5 bg-[#0a0f16] px-3 py-1.5 rounded-lg border border-[#1c2b3d]">
                <span className="text-zinc-500 uppercase text-[10px]">Entry Price:</span>
                <strong className="text-emerald-400 font-bold">
                  {lowestPriceInFranchise === 0 ? 'Free' : formatPrice(lowestPriceInFranchise)}
                </strong>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 w-full md:w-auto">
            <button
              onClick={handleSyncFranchise}
              disabled={isSyncing}
              className="px-4 py-2.5 rounded-xl font-mono text-xs font-bold bg-[#38bdf8] hover:bg-[#60cdff] text-slate-950 transition-all shadow-md flex items-center justify-center gap-2"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
              <span>{isSyncing ? 'Syncing Series...' : 'Auto-Sync Franchise'}</span>
            </button>

            <button
              onClick={() => setShowSettingsModal(true)}
              className="px-4 py-2.5 rounded-xl font-mono text-xs font-bold bg-[#142335] hover:bg-[#1d324b] text-zinc-200 border border-[#274465] transition-all flex items-center justify-center gap-2"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>Expansion Filters</span>
            </button>
          </div>
        </div>

        {bannerMsg && (
          <div className="bg-emerald-500/15 border-t border-emerald-500/30 px-6 py-2.5 text-xs font-mono text-emerald-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            <span>{bannerMsg}</span>
          </div>
        )}
      </div>

      {/* Filter & Sort Controls */}
      <div className="bg-[#101721] rounded-xl border border-[#1b2838] p-4 flex flex-wrap items-center justify-between gap-4">
        {/* Type Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
          <span className="text-zinc-500 mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Type:
          </span>
          {[
            { id: 'all', label: `All (${games.length})` },
            {
              id: 'main',
              label: `Main Games (${games.filter(g => !g.game_type || g.game_type === 'main_game').length})`
            },
            {
              id: 'spin_off',
              label: `Spin-Offs (${games.filter(g => g.game_type === 'spin_off').length})`
            },
            {
              id: 'remake',
              label: `Remakes (${games.filter(g => g.game_type === 'remake' || g.game_type === 'remaster').length})`
            }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedType(tab.id)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedType === tab.id
                  ? 'bg-[#38bdf8] text-slate-950 font-bold shadow-sm'
                  : 'bg-[#0b1017] text-zinc-400 hover:text-white border border-[#1e2d3e]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-2 font-mono text-xs ml-auto">
          <span className="text-zinc-500">Sort by:</span>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value as any)}
            className="bg-[#0b1017] text-zinc-200 border border-[#233547] rounded-lg px-2.5 py-1.5 text-xs font-mono outline-none cursor-pointer focus:border-[#38bdf8]"
          >
            <option value="order_asc">Series Order (Oldest First)</option>
            <option value="order_desc">Release Date (Newest First)</option>
            <option value="price_asc">Price (Lowest First)</option>
            <option value="rating">Rating Score</option>
          </select>
        </div>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredGames.map((game, idx) => {
          const releaseYear = game.release_date ? game.release_date.split('-')[0] : 'N/A';
          const lowestPrice = game.lowest_current_price !== undefined ? game.lowest_current_price : 0;

          return (
            <div
              key={game.id}
              onClick={() => onSelectGame(game.id)}
              className="bg-[#101721] rounded-xl border border-[#1b2838] hover:border-[#38bdf8]/60 transition-all hover:-translate-y-1 shadow-md hover:shadow-sky-500/10 flex flex-col justify-between overflow-hidden cursor-pointer group"
            >
              {/* Header Art & Badges */}
              <div className="aspect-[16/9] w-full bg-black/60 relative overflow-hidden">
                <img
                  src={game.header_image}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101721] via-transparent to-black/30" />

                <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono font-bold text-[#38bdf8] border border-[#38bdf8]/40">
                    #{game.series_order || idx + 1}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono text-zinc-300 border border-white/10">
                    {releaseYear}
                  </span>
                </div>

                {game.game_type && game.game_type !== 'main_game' && (
                  <div className="absolute top-2.5 right-2.5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-amber-500/90 text-black font-bold shadow-md">
                      {game.game_type.replace('_', ' ')}
                    </span>
                  </div>
                )}
              </div>

              {/* Info Body */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-mono text-sm font-bold text-white group-hover:text-[#38bdf8] transition-colors line-clamp-2">
                    {game.title}
                  </h3>
                  <p className="text-xs font-sans text-zinc-400 line-clamp-2 mt-1 leading-relaxed">
                    {game.summary}
                  </p>
                </div>

                {/* Platforms & Pricing Bar */}
                <div className="pt-3 border-t border-[#182637] flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1">
                    {(game.platforms || ['steam']).slice(0, 3).map(p => (
                      <PlatformBadge key={p} platformId={p} size="xs" />
                    ))}
                    {(game.platforms?.length || 0) > 3 && (
                      <span className="text-[10px] text-zinc-500">
                        +{(game.platforms?.length || 0) - 3}
                      </span>
                    )}
                  </div>

                  <div className="text-right">
                    <span className="font-bold text-white text-sm">
                      {lowestPrice === 0 ? 'Free' : formatPrice(lowestPrice)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Expansion Settings Modal */}
      {showSettingsModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#101721] rounded-2xl border border-[#253d58] max-w-md w-full p-6 shadow-2xl font-mono text-xs space-y-4">
            <div className="flex items-center justify-between border-b border-[#1b2b3d] pb-3">
              <h3 className="text-sm font-bold text-white uppercase flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#38bdf8]" />
                Franchise Ingestion Settings
              </h3>
              <button
                onClick={() => setShowSettingsModal(false)}
                className="text-zinc-500 hover:text-white"
              >
                ✕
              </button>
            </div>

            <p className="text-zinc-400 font-sans text-xs">
              Configure which game types are automatically pulled in when expanding a franchise series.
            </p>

            <div className="space-y-2.5">
              {[
                { key: 'includeMainGames', label: 'Main Series Games (Default: Yes)' },
                { key: 'includeRemakesRemasters', label: 'Remakes & Remasters (Default: Yes)' },
                { key: 'includeSpinOffs', label: 'Spin-Off Titles (e.g. Fallout Shelter) (Default: Yes)' },
                { key: 'includeDlc', label: 'DLC & Expansions (Default: No)' },
                { key: 'includeBundles', label: 'Bundles & Compilations (Default: No)' },
                { key: 'includeMods', label: 'Standalone Mods (Default: No)' },
                { key: 'includeCancelledUnreleased', label: 'Announced / Unreleased Titles (Default: No)' }
              ].map(item => {
                const isChecked = (settings as any)[item.key];
                return (
                  <label
                    key={item.key}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-[#0c131c] border border-[#1c2c3e] cursor-pointer hover:border-[#38bdf8]/50 transition-colors"
                  >
                    <span className="text-zinc-300">{item.label}</span>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={e =>
                        setSettings(prev => ({
                          ...prev,
                          [item.key]: e.target.checked
                        }))
                      }
                      className="w-4 h-4 rounded text-[#38bdf8] focus:ring-0 cursor-pointer"
                    />
                  </label>
                );
              })}
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#1b2b3d]">
              <button
                onClick={() => setShowSettingsModal(false)}
                className="px-4 py-2 rounded-lg text-zinc-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={() => handleSaveSettings(settings)}
                className="px-4 py-2 rounded-lg bg-[#38bdf8] text-slate-950 font-bold hover:bg-[#60cdff] shadow-md"
              >
                Save & Apply Settings
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
