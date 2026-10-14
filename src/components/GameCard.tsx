import React from 'react';
import { Game } from '../types/database';
import { formatPrice, getDiscountBadgeClass } from '../utils/formatters';
import { PlatformBadge } from './PlatformBadge';
import { Flame, Star, Bell } from 'lucide-react';

interface GameCardProps {
  game: Game;
  onSelect: (gameId: string) => void;
  isWatchlisted?: boolean;
  onToggleWatchlist?: (e: React.MouseEvent, game: Game) => void;
}

export const GameCard: React.FC<GameCardProps> = ({
  game,
  onSelect,
  isWatchlisted = false,
  onToggleWatchlist
}) => {
  const releaseYear = game.release_date ? new Date(game.release_date).getFullYear() : null;

  return (
    <div
      onClick={() => onSelect(game.id)}
      className="group relative bg-[#0f1722] rounded-xl border border-[#1b2738] hover:border-[#2f4968] overflow-hidden transition-all duration-200 hover:shadow-2xl hover:-translate-y-1 flex flex-col cursor-pointer"
    >
      {/* Top Banner Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/50">
        <img
          src={game.header_image}
          alt={game.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          onError={e => {
            // High reliability fallback for any potential network failure
            const img = e.target as HTMLImageElement;
            if (!img.src.includes('1550745165-9bc0b252726f')) {
              img.src = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80';
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1722] via-transparent to-black/40" />

        {/* Metacritic & Rating Badges */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
          {game.metacritic_score > 0 && (
            <span
              className={`px-1.5 py-0.5 rounded text-[11px] font-mono font-bold shadow-sm ${
                game.metacritic_score >= 90
                  ? 'bg-[#66cc33] text-black'
                  : game.metacritic_score >= 75
                  ? 'bg-amber-400 text-black'
                  : 'bg-zinc-700 text-white'
              }`}
              title={`Metacritic Score: ${game.metacritic_score}`}
            >
              {game.metacritic_score}
            </span>
          )}

          {game.rating_score > 0 && (
            <span className="px-1.5 py-0.5 rounded bg-black/75 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-[#a4d007] font-semibold">
              {game.rating_score}%
            </span>
          )}
        </div>

        {/* Watchlist Quick Toggle Button */}
        {onToggleWatchlist && (
          <button
            onClick={e => onToggleWatchlist(e, game)}
            className={`absolute top-2.5 right-2.5 p-1.5 rounded-full backdrop-blur-md transition-all ${
              isWatchlisted
                ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                : 'bg-black/60 text-zinc-400 hover:text-white hover:bg-black/90'
            }`}
            title={isWatchlisted ? 'In Watchlist' : 'Add to Watchlist'}
            aria-label={isWatchlisted ? 'Remove from Watchlist' : 'Add to Watchlist'}
          >
            <Star className={`w-3.5 h-3.5 ${isWatchlisted ? 'fill-current' : ''}`} />
          </button>
        )}

        {/* Historical Low or Discount Badge */}
        <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5">
          {game.is_price_alert_triggered && (
            <span className="px-2 py-0.5 rounded font-mono text-[10px] font-bold uppercase tracking-wider bg-emerald-400 text-slate-950 border border-emerald-300 shadow-md flex items-center gap-1 animate-pulse">
              <Bell className="w-3 h-3 fill-current" />
              <span>Target Met</span>
            </span>
          )}

          {game.is_historical_low && (
            <span className="px-2 py-0.5 rounded font-mono text-[10px] font-bold uppercase tracking-wider bg-rose-500/90 text-white border border-rose-400/50 shadow-md flex items-center gap-1">
              <Flame className="w-3 h-3 text-amber-200 fill-amber-200" />
              <span>Record Low</span>
            </span>
          )}

          {game.max_discount && game.max_discount > 0 ? (
            <span
              className={`px-2 py-0.5 rounded font-mono text-xs shadow-md font-bold ${getDiscountBadgeClass(
                game.max_discount
              )}`}
            >
              -{game.max_discount}%
            </span>
          ) : null}
        </div>
      </div>

      {/* Card Info */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Release Year & Studio */}
          <div className="flex items-center justify-between gap-1.5 text-[11px] font-mono text-zinc-400 mb-1">
            <div className="flex items-center gap-1.5 truncate">
              <span className="truncate">{game.developer_name || 'Studio'}</span>
              {releaseYear && (
                <>
                  <span className="text-zinc-600">·</span>
                  <span className="text-zinc-500">{releaseYear}</span>
                </>
              )}
            </div>
            {game.ugdb_id && (
              <span className="text-[10px] font-mono text-zinc-400 px-1.5 py-0.5 rounded bg-[#131d2a] border border-[#203144] flex-shrink-0 tracking-wider">
                {game.ugdb_id}
              </span>
            )}
          </div>

          <h3 className="font-bold text-white text-sm sm:text-base group-hover:text-[#66c0f4] transition-colors line-clamp-1 mb-2">
            {game.title}
          </h3>

          {/* Clean unboxed genres */}
          <div className="text-[11px] text-zinc-400 font-sans line-clamp-1 mb-3">
            {game.genres.slice(0, 3).join(' · ')}
          </div>

          {/* Supported Platform Badges */}
          {game.platforms && game.platforms.length > 0 && (
            <div className="flex flex-wrap items-center gap-1 mb-3">
              {game.platforms.slice(0, 5).map(pId => (
                <PlatformBadge key={pId} platformId={pId} size="xs" showLabel={true} />
              ))}
              {game.platforms.length > 5 && (
                <span className="text-[10px] font-mono text-zinc-500">
                  +{game.platforms.length - 5}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Pricing & Platform Summary Footer */}
        <div className="pt-3 border-t border-[#172230] flex items-center justify-between">
          <div>
            <span className="text-zinc-500 block text-[9px] font-mono uppercase tracking-wider">
              From
            </span>
            <span className="text-base font-bold text-white font-mono">
              {formatPrice(game.lowest_current_price)}
            </span>
          </div>

          <div className="text-right">
            <span className="text-[11px] font-mono text-zinc-300 block">
              {game.total_listings || 1} {game.total_listings === 1 ? 'Store' : 'Stores'}
            </span>
            <span className="text-[10px] text-[#66c0f4] font-mono hover:underline">
              Compare Prices →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
