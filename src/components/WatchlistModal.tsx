import React, { useState } from 'react';
import { Game, PlatformListing, PlatformId } from '../types/database';
import { db } from '../db/database';
import { formatPrice } from '../utils/formatters';
import { PLATFORM_CONFIG } from './PlatformBadge';
import { Bell, X, Check, Trash2, ArrowDownCircle } from 'lucide-react';

interface WatchlistModalProps {
  game: Game;
  listings: PlatformListing[];
  isInWatchlist: boolean;
  currentTargetPrice?: number;
  currentPlatforms?: PlatformId[];
  onClose: () => void;
  onSaved: () => void;
}

export const WatchlistModal: React.FC<WatchlistModalProps> = ({
  game,
  listings,
  isInWatchlist,
  currentTargetPrice,
  currentPlatforms,
  onClose,
  onSaved
}) => {
  const lowestPrice = Math.min(...listings.map(l => l.current_price));
  const recordLow = Math.min(...listings.map(l => l.historical_low_price));

  const [targetPrice, setTargetPrice] = useState<number>(() => {
    if (currentTargetPrice !== undefined) return currentTargetPrice;
    return lowestPrice > 0 ? parseFloat((lowestPrice * 0.8).toFixed(2)) : 19.99;
  });

  const [selectedPlatforms, setSelectedPlatforms] = useState<PlatformId[]>(() => {
    if (currentPlatforms && currentPlatforms.length > 0) return currentPlatforms;
    return listings.map(l => l.platform_id);
  });

  const [saving, setSaving] = useState(false);

  const togglePlatform = (p: PlatformId) => {
    setSelectedPlatforms(prev =>
      prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]
    );
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await db.addToWatchlist(game.id, targetPrice, selectedPlatforms);
      onSaved();
      onClose();
    } catch (err) {
      console.error('Failed to save to watchlist in PostgreSQL:', err);
    } finally {
      setSaving(false);
    }
  };

  const handleRemove = async () => {
    setSaving(true);
    try {
      await db.removeFromWatchlist(game.id);
      onSaved();
      onClose();
    } catch (err) {
      console.error('Failed to remove from watchlist in PostgreSQL:', err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#101721] border border-[#2a475e] rounded-xl max-w-lg w-full overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-5 bg-[#141d2b] border-b border-[#1b2838] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#1b2838] text-[#66c0f4] border border-[#2a475e]">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-mono uppercase tracking-wide">
                {isInWatchlist ? 'Edit Price Alert' : 'Track Game & Set Price Alert'}
              </h3>
              <p className="text-xs text-zinc-400 font-sans">
                PostgreSQL Watchlist & Trigger Engine
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <div className="flex items-center gap-3 bg-[#090d13] p-3 rounded-lg border border-[#1b2838]">
            <img
              src={game.header_image}
              alt={game.title}
              className="w-16 h-12 rounded object-cover flex-shrink-0 border border-[#1b2838]"
            />
            <div className="min-w-0 flex-1">
              <h4 className="text-sm font-bold text-white truncate font-sans">{game.title}</h4>
              <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 mt-0.5">
                <span>
                  Current Best: <strong className="text-[#a4d007]">{formatPrice(lowestPrice)}</strong>
                </span>
                <span>
                  Record Low: <strong className="text-white">{formatPrice(recordLow)}</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Target Price Input */}
          <div>
            <label className="block text-xs font-mono uppercase text-zinc-300 mb-2 font-semibold flex items-center justify-between">
              <span>Notify Me When Price Drops To Or Below:</span>
              <span className="text-[#66c0f4] font-bold text-sm">${targetPrice.toFixed(2)}</span>
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-mono text-zinc-400 font-bold">
                $
              </span>
              <input
                type="number"
                step="0.50"
                min="0"
                max="100"
                value={targetPrice}
                onChange={e => setTargetPrice(parseFloat(e.target.value) || 0)}
                className="w-full pl-8 pr-4 py-2.5 rounded-lg bg-[#090d13] border border-[#1b2838] focus:border-[#66c0f4] text-white font-mono text-base outline-none transition-colors"
              />
            </div>

            {/* Quick preset buttons */}
            <div className="flex items-center gap-2 mt-2.5">
              <span className="text-[11px] text-zinc-500 font-mono">Quick Set:</span>
              <button
                type="button"
                onClick={() => setTargetPrice(recordLow)}
                className="px-2 py-1 rounded bg-[#16212e] hover:bg-[#1f2f42] text-xs font-mono text-amber-300 border border-amber-500/30 transition-colors"
              >
                Match Record Low (${recordLow})
              </button>
              <button
                type="button"
                onClick={() => setTargetPrice(parseFloat((lowestPrice * 0.75).toFixed(2)))}
                className="px-2 py-1 rounded bg-[#16212e] hover:bg-[#1f2f42] text-xs font-mono text-[#a4d007] border border-[#a4d007]/30 transition-colors"
              >
                -25% from now
              </button>
              <button
                type="button"
                onClick={() => setTargetPrice(parseFloat((lowestPrice * 0.5).toFixed(2)))}
                className="px-2 py-1 rounded bg-[#16212e] hover:bg-[#1f2f42] text-xs font-mono text-[#66c0f4] border border-[#66c0f4]/30 transition-colors"
              >
                -50%
              </button>
            </div>
          </div>

          {/* Platform Filters */}
          <div>
            <label className="block text-xs font-mono uppercase text-zinc-300 mb-2 font-semibold">
              Filter by Stores to Monitor:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {listings.map(l => {
                const isChecked = selectedPlatforms.includes(l.platform_id);
                const cfg = PLATFORM_CONFIG[l.platform_id];
                return (
                  <button
                    key={l.id}
                    type="button"
                    onClick={() => togglePlatform(l.platform_id)}
                    className={`flex items-center justify-between p-2.5 rounded-lg border text-xs font-mono transition-all text-left ${
                      isChecked
                        ? 'bg-[#152233] border-[#66c0f4] text-white font-semibold'
                        : 'bg-[#090d13] border-[#1b2838] text-zinc-400 hover:border-zinc-700'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{cfg?.icon}</span>
                      <span>{cfg?.name || l.platform_id}</span>
                    </span>
                    {isChecked ? (
                      <Check className="w-4 h-4 text-[#66c0f4]" />
                    ) : (
                      <span className="w-4 h-4 rounded-full border border-zinc-700" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {lowestPrice <= targetPrice && (
            <div className="p-3 rounded-lg bg-[#5c7e10]/20 border border-[#a4d007]/40 text-xs font-mono text-[#a4d007] flex items-center gap-2">
              <ArrowDownCircle className="w-4 h-4 flex-shrink-0" />
              <span>Current best price ({formatPrice(lowestPrice)}) is already at or below your target!</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#141d2b] border-t border-[#1b2838] flex items-center justify-between">
          {isInWatchlist ? (
            <button
              onClick={handleRemove}
              disabled={saving}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-red-900/30 hover:bg-red-900/60 text-red-300 border border-red-700/50 text-xs font-mono font-medium transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Remove from Watchlist</span>
            </button>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-mono text-zinc-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={saving || selectedPlatforms.length === 0}
              className="px-4 py-2 rounded-lg bg-[#66c0f4] hover:bg-[#8fd5ff] text-[#0b0e14] font-mono text-xs font-bold transition-all shadow-md flex items-center gap-1.5 disabled:opacity-50"
            >
              <Check className="w-3.5 h-3.5" />
              <span>{isInWatchlist ? 'Update Alert' : 'Save to Watchlist'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
