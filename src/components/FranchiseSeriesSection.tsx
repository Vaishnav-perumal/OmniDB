import React, { useState, useEffect } from 'react';
import { Game, PlatformId } from '../types/database';
import { Franchise, FranchiseGame } from '../types/franchise';
import { db } from '../db/database';
import { franchiseEngine } from '../services/franchise/franchiseEngine';
import { formatPrice } from '../utils/formatters';
import { PlatformBadge } from './PlatformBadge';
import {
  Layers,
  Sparkles,
  Calendar,
  Tag,
  ExternalLink,
  ChevronRight,
  RefreshCw,
  CheckCircle2,
  SlidersHorizontal,
  Flame
} from 'lucide-react';

interface FranchiseSeriesSectionProps {
  currentGame: Game;
  onSelectGame: (gameId: string) => void;
  onOpenFranchiseView?: (franchiseId: string) => void;
}

export const FranchiseSeriesSection: React.FC<FranchiseSeriesSectionProps> = ({
  currentGame,
  onSelectGame,
  onOpenFranchiseView
}) => {
  const [franchise, setFranchise] = useState<Franchise | null>(null);
  const [seriesGames, setSeriesGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [isExpanding, setIsExpanding] = useState(false);
  const [expandResultMsg, setExpandResultMsg] = useState<string | null>(null);

  const loadFranchiseData = async () => {
    setLoading(true);
    try {
      let fId = currentGame.franchise_id;

      // If game has no franchise ID yet, auto-detect it
      if (!fId) {
        const detected = await franchiseEngine.expandGameFranchise(currentGame.id);
        if (detected.franchise) {
          fId = detected.franchise.id;
        }
      }

      if (fId) {
        const f = await db.getFranchise(fId);
        setFranchise(f || null);

        const games = await db.getFranchiseGames(fId);
        setSeriesGames(games as any);
      } else {
        setFranchise(null);
        setSeriesGames([]);
      }
    } catch (err) {
      console.error('Failed to load franchise data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFranchiseData();
  }, [currentGame.id, currentGame.franchise_id]);

  const handleManualExpand = async () => {
    setIsExpanding(true);
    setExpandResultMsg(null);
    try {
      const res = await franchiseEngine.expandGameFranchise(currentGame.id, { forceRecheck: true });
      if (res.franchise) {
        setExpandResultMsg(
          `Synced ${res.franchise.name}! Added ${res.addedGamesCount} games, linked ${res.linkedGamesCount}.`
        );
        await loadFranchiseData();
      } else if (res.needsReview) {
        setExpandResultMsg('Match placed in Needs Review queue.');
      } else {
        setExpandResultMsg('No additional franchise games found.');
      }
      setTimeout(() => setExpandResultMsg(null), 4000);
    } catch (err) {
      console.error('Manual expand failed:', err);
    } finally {
      setIsExpanding(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-[#101721] rounded-xl border border-[#1b2838] p-5 animate-pulse">
        <div className="h-5 bg-zinc-800 rounded w-1/3 mb-4" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-36 bg-zinc-900 rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  if (!franchise || seriesGames.length <= 1) {
    return (
      <div className="bg-[#101721] rounded-xl border border-[#1b2838] p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#38bdf8]" />
            <span className="font-mono text-xs text-zinc-300 font-bold uppercase">
              Franchise Auto-Expansion
            </span>
          </div>
          <button
            onClick={handleManualExpand}
            disabled={isExpanding}
            className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-[#152332] hover:bg-[#1d3249] text-[#38bdf8] border border-[#2a475e] transition-colors flex items-center gap-1.5"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isExpanding ? 'animate-spin' : ''}`} />
            <span>{isExpanding ? 'Checking IGDB/RAWG...' : 'Detect & Expand Franchise'}</span>
          </button>
        </div>
        {expandResultMsg && (
          <p className="mt-2 text-xs font-mono text-emerald-400">{expandResultMsg}</p>
        )}
      </div>
    );
  }

  return (
    <div className="bg-[#101721] rounded-xl border border-[#1b2838] overflow-hidden shadow-xl">
      {/* Header */}
      <div className="p-4 bg-[#141d2a] border-b border-[#1b2838] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#182637] border border-[#294562] text-[#38bdf8]">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wide">
                More From The {franchise.name} Franchise
              </h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#1c2e42] text-[#38bdf8] border border-[#2d4e72]">
                {seriesGames.length} Tracked Games
              </span>
            </div>
            <p className="text-xs font-mono text-zinc-400 mt-0.5">
              Chronological release order with cross-store lowest pricing.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {onOpenFranchiseView && (
            <button
              onClick={() => onOpenFranchiseView(franchise.id)}
              className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-[#182637] hover:bg-[#20344b] text-zinc-200 hover:text-white border border-[#294562] transition-colors flex items-center gap-1.5"
            >
              <span>Explore Entire Franchise Hub</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}

          <button
            onClick={handleManualExpand}
            disabled={isExpanding}
            title="Re-query IGDB/RAWG for newly released games"
            className="p-1.5 rounded-lg bg-[#0e1622] hover:bg-[#182637] border border-[#24374d] text-zinc-400 hover:text-[#38bdf8] transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isExpanding ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {expandResultMsg && (
        <div className="px-4 py-2 bg-emerald-500/15 border-b border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
          <span>{expandResultMsg}</span>
        </div>
      )}

      {/* Timeline Carousel / Grid */}
      <div className="p-4 overflow-x-auto">
        <div className="flex gap-3.5 pb-2 min-w-max">
          {seriesGames.map((game, idx) => {
            const isCurrent = game.id === currentGame.id;
            const releaseYear = game.release_date ? game.release_date.split('-')[0] : 'N/A';
            const lowestPrice = game.lowest_current_price !== undefined ? game.lowest_current_price : 0;

            return (
              <div
                key={game.id}
                onClick={() => !isCurrent && onSelectGame(game.id)}
                className={`w-44 rounded-xl border p-2.5 flex flex-col justify-between transition-all relative flex-shrink-0 cursor-pointer ${
                  isCurrent
                    ? 'bg-[#18283a] border-[#38bdf8] shadow-lg shadow-sky-500/10 cursor-default ring-1 ring-[#38bdf8]'
                    : 'bg-[#0b121b] border-[#1d2d3e] hover:border-[#38bdf8]/60 hover:bg-[#111c2a]'
                }`}
              >
                {/* Current Active Ribbon */}
                {isCurrent && (
                  <div className="absolute -top-2 left-2 px-2 py-0.5 rounded bg-[#38bdf8] text-slate-950 text-[9px] font-mono font-bold uppercase tracking-wider shadow-md">
                    Viewing Now
                  </div>
                )}

                {/* Series Order Tag */}
                <div className="flex items-center justify-between text-[10px] font-mono mb-1.5 text-zinc-400">
                  <span className="font-bold text-[#38bdf8]">
                    #{game.series_order || idx + 1}
                  </span>
                  <span className="flex items-center gap-1 text-zinc-400">
                    <Calendar className="w-3 h-3 text-zinc-500" />
                    <span>{releaseYear}</span>
                  </span>
                </div>

                {/* Cover Image */}
                <div className="aspect-[16/9] rounded-lg overflow-hidden bg-black/60 mb-2 relative">
                  <img
                    src={game.header_image}
                    alt={game.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {game.game_type && game.game_type !== 'main_game' && (
                    <span className="absolute bottom-1 right-1 px-1.5 py-0.2 rounded text-[9px] font-mono uppercase bg-black/80 backdrop-blur-sm text-amber-300 border border-amber-400/30">
                      {game.game_type.replace('_', ' ')}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h4
                  className="font-mono text-xs font-bold text-white line-clamp-2 leading-tight mb-2"
                  title={game.title}
                >
                  {game.title}
                </h4>

                {/* Platforms & Lowest Price */}
                <div className="pt-2 border-t border-[#182637] flex items-center justify-between text-xs font-mono">
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
                    <span className="font-bold text-white">
                      {lowestPrice === 0 ? 'Free' : formatPrice(lowestPrice)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
