import React, { useState, useEffect } from 'react';
import { db } from '../db/database';
import { WatchlistItem, Game, PlatformListing } from '../types/database';
import { PlatformBadge } from '../components/PlatformBadge';
import { WatchlistModal } from '../components/WatchlistModal';
import { formatPrice, formatDate } from '../utils/formatters';
import {
  Bell,
  Trash2,
  Edit2,
  Sparkles,
  ArrowRight,
  TrendingDown,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface WatchlistViewProps {
  onSelectGame: (gameId: string) => void;
  onNavigateToBrowse: () => void;
}

export const WatchlistView: React.FC<WatchlistViewProps> = ({
  onSelectGame,
  onNavigateToBrowse
}) => {
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedGameForEdit, setSelectedGameForEdit] = useState<{
    game: Game;
    listings: PlatformListing[];
    targetPrice: number;
  } | null>(null);

  const loadWatchlist = async () => {
    setLoading(true);
    try {
      const items = await db.getUserWatchlist();
      setWatchlist(items);
    } catch (err) {
      console.error('Error loading watchlist from PostgreSQL:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadWatchlist();
  }, []);

  const handleRemove = async (gameId: string) => {
    try {
      await db.removeFromWatchlist(gameId);
      loadWatchlist();
    } catch (err) {
      console.error('Failed to remove watchlist item from PostgreSQL:', err);
    }
  };

  const handleOpenEdit = async (item: WatchlistItem) => {
    try {
      const g = await db.getGameById(item.game_id);
      const l = await db.getGameListings(item.game_id);
      if (g) {
        setSelectedGameForEdit({
          game: g,
          listings: l,
          targetPrice: item.target_price
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const triggeredCount = watchlist.filter(w => w.is_at_target_or_lower).length;

  return (
    <div className="space-y-6 pb-16">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#1b2838]">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400">
              <Bell className="w-5 h-5" />
            </span>
            <h1 className="text-2xl font-extrabold text-white uppercase font-mono tracking-wide">
              My Watchlist & Deal Triggers
            </h1>
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            Persistent alerts stored in PostgreSQL `user_watchlist` table. Automatically signals when prices drop below your defined targets.
          </p>
        </div>

        {triggeredCount > 0 && (
          <div className="px-3.5 py-1.5 rounded-lg bg-[#5c7e10]/20 border border-[#a4d007]/50 text-[#beee11] font-mono text-xs font-bold flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#beee11]" />
            <span>{triggeredCount} Deal{triggeredCount > 1 ? 's' : ''} Ready to Buy!</span>
          </div>
        )}
      </div>

      {loading ? (
        <div className="py-24 text-center space-y-3 font-mono">
          <div className="inline-block w-8 h-8 border-2 border-[#66c0f4] border-t-transparent rounded-full animate-spin" />
          <div className="text-zinc-500 text-xs">Querying user watchlist from PostgreSQL...</div>
        </div>
      ) : watchlist.length === 0 ? (
        <div className="bg-[#101721] rounded-2xl border border-[#1b2838] p-12 text-center space-y-4 font-mono max-w-xl mx-auto shadow-2xl">
          <div className="w-14 h-14 rounded-full bg-[#162232] text-[#66c0f4] flex items-center justify-center mx-auto border border-[#23384f]">
            <Bell className="w-7 h-7" />
          </div>
          <h2 className="text-lg font-bold text-white">Your Watchlist is Empty</h2>
          <p className="text-xs text-zinc-400 leading-relaxed font-sans">
            You haven't added any games to your watchlist yet. Track your favorite titles to receive automated price drop alerts when they hit or beat your target price across Steam, Epic, GOG, PlayStation, Xbox, and Nintendo.
          </p>
          <button
            onClick={onNavigateToBrowse}
            className="px-5 py-2.5 rounded-lg bg-[#66c0f4] hover:bg-[#85ceff] text-[#0b0e14] font-mono text-xs font-bold transition-all shadow"
          >
            Explore Game Database
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {watchlist.map(item => (
            <div
              key={item.id}
              className={`rounded-xl border transition-all p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-lg ${
                item.is_at_target_or_lower
                  ? 'bg-[#15241b] border-[#5c7e10]/80 shadow-[0_0_20px_rgba(92,126,16,0.15)]'
                  : 'bg-[#101721] border-[#1b2838] hover:border-[#283f5a]'
              }`}
            >
              {/* Game Info */}
              <div
                onClick={() => onSelectGame(item.game_id)}
                className="flex items-center gap-4 cursor-pointer group min-w-0 flex-1"
              >
                {item.game_header_image && (
                  <img
                    src={item.game_header_image}
                    alt=""
                    className="w-20 h-14 rounded-lg object-cover flex-shrink-0 bg-black/40 border border-[#1b2838]"
                  />
                )}
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-white text-base font-sans group-hover:text-[#66c0f4] transition-colors truncate">
                      {item.game_title}
                    </h3>
                    {item.is_at_target_or_lower && (
                      <span className="px-2 py-0.5 rounded bg-[#5c7e10] text-[#beee11] font-mono text-[10px] font-bold uppercase tracking-wider">
                        Target Met!
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400 mt-1">
                    <span>Monitored Platforms:</span>
                    <div className="flex items-center gap-1">
                      {item.notify_platforms.map(p => (
                        <PlatformBadge key={p} platformId={p} size="xs" showLabel={false} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Price Details */}
              <div className="flex flex-wrap items-center gap-6 font-mono text-xs">
                {/* Target Price */}
                <div>
                  <span className="text-zinc-500 text-[10px] block uppercase">
                    Your Target Price
                  </span>
                  <span className="text-base font-bold text-[#66c0f4]">
                    ${item.target_price.toFixed(2)}
                  </span>
                </div>

                {/* Current Lowest Deal */}
                <div>
                  <span className="text-zinc-500 text-[10px] block uppercase">
                    Current Lowest Deal
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`text-lg font-bold ${
                        item.is_at_target_or_lower ? 'text-[#beee11]' : 'text-white'
                      }`}
                    >
                      {formatPrice(item.lowest_current_price)}
                    </span>
                    {item.max_discount && item.max_discount > 0 ? (
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#5c7e10] text-[#beee11] font-bold">
                        -{item.max_discount}%
                      </span>
                    ) : null}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOpenEdit(item)}
                    className="p-2 rounded-lg bg-[#162232] hover:bg-[#203248] text-[#66c0f4] border border-[#273d57] transition-colors"
                    title="Edit Target Price"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleRemove(item.game_id)}
                    className="p-2 rounded-lg bg-red-950/40 hover:bg-red-900/60 text-red-400 border border-red-800/40 transition-colors"
                    title="Remove from Watchlist"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onSelectGame(item.game_id)}
                    className="px-3.5 py-2 rounded-lg bg-[#1b2838] hover:bg-[#25394f] text-[#66c0f4] text-xs font-bold border border-[#2a475e] transition-colors flex items-center gap-1.5"
                  >
                    <span>View Deals</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit Watchlist Modal */}
      {selectedGameForEdit && (
        <WatchlistModal
          game={selectedGameForEdit.game}
          listings={selectedGameForEdit.listings}
          isInWatchlist={true}
          currentTargetPrice={selectedGameForEdit.targetPrice}
          onClose={() => setSelectedGameForEdit(null)}
          onSaved={() => {
            loadWatchlist();
            setSelectedGameForEdit(null);
          }}
        />
      )}
    </div>
  );
};
