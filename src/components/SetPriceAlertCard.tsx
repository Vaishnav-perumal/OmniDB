import React, { useState, useEffect } from 'react';
import { Game, PlatformListing, PlatformId, WatchlistItem } from '../types/database';
import { db } from '../db/database';
import { formatPrice } from '../utils/formatters';
import { PLATFORM_CONFIG } from './PlatformBadge';
import { Bell, Check, Trash2, ArrowDownCircle, AlertTriangle, Sparkles, Database } from 'lucide-react';

interface SetPriceAlertCardProps {
  game: Game;
  listings: PlatformListing[];
  watchlistItem?: WatchlistItem;
  onAlertUpdated: () => void;
}

export const SetPriceAlertCard: React.FC<SetPriceAlertCardProps> = ({
  game,
  listings,
  watchlistItem,
  onAlertUpdated
}) => {
  const lowestPrice = listings.length > 0 ? Math.min(...listings.map(l => l.current_price)) : 0;
  const recordLow = listings.length > 0 ? Math.min(...listings.map(l => l.historical_low_price)) : 0;

  const [targetPriceInput, setTargetPriceInput] = useState<string>(() => {
    if (watchlistItem?.target_price !== undefined) {
      return watchlistItem.target_price.toFixed(2);
    }
    return lowestPrice > 0 ? (lowestPrice * 0.8).toFixed(2) : '19.99';
  });

  const [selectedPlatforms, setSelectedPlatforms] = useState<PlatformId[]>(() => {
    if (watchlistItem?.notify_platforms && watchlistItem.notify_platforms.length > 0) {
      return watchlistItem.notify_platforms;
    }
    return Array.from(new Set(listings.map(l => l.platform_id)));
  });

  const [saving, setSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  useEffect(() => {
    if (watchlistItem) {
      setTargetPriceInput(watchlistItem.target_price.toFixed(2));
      if (watchlistItem.notify_platforms && watchlistItem.notify_platforms.length > 0) {
        setSelectedPlatforms(watchlistItem.notify_platforms);
      }
    }
  }, [watchlistItem]);

  const targetPriceNum = parseFloat(targetPriceInput) || 0;
  const isTriggered = watchlistItem ? lowestPrice <= watchlistItem.target_price : false;

  const triggeredStores = listings.filter(
    l => watchlistItem && l.current_price <= watchlistItem.target_price && selectedPlatforms.includes(l.platform_id)
  );

  const togglePlatform = (p: PlatformId) => {
    setSelectedPlatforms(prev =>
      prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]
    );
  };

  const handleApplyPreset = (price: number) => {
    setTargetPriceInput(price.toFixed(2));
  };

  const handleSaveAlert = async (e: React.FormEvent) => {
    e.preventDefault();
    if (targetPriceNum <= 0) return;

    setSaving(true);
    try {
      await db.addToWatchlist(game.id, targetPriceNum, selectedPlatforms);
      setSuccessMsg(`Price alert saved to PostgreSQL! Target set to ${formatPrice(targetPriceNum)}.`);
      setTimeout(() => setSuccessMsg(null), 4000);
      onAlertUpdated();
    } catch (err) {
      console.error('Failed to set price alert:', err);
    } finally {
      setSaving(false);
    }
  };

  const handleRemoveAlert = async () => {
    setSaving(true);
    try {
      await db.removeFromWatchlist(game.id);
      setSuccessMsg('Price alert removed from database.');
      setTimeout(() => setSuccessMsg(null), 3000);
      onAlertUpdated();
    } catch (err) {
      console.error('Failed to remove alert:', err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="bg-[#0b131d]/90 backdrop-blur-md rounded-xl border border-[#233547] p-5 shadow-xl relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1b2838] pb-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-[#142335] text-[#38bdf8] border border-[#25415f]">
            <Bell className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-mono text-sm font-bold text-white flex items-center gap-2">
              Set Price Alert & Deal Drop Tracker
              {watchlistItem && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Active
                </span>
              )}
            </h3>
            <p className="text-[11px] font-mono text-zinc-400">
              Stores preference in PostgreSQL database to flag when price dips to or below your target.
            </p>
          </div>
        </div>

        {watchlistItem && (
          <button
            onClick={handleRemoveAlert}
            disabled={saving}
            className="px-2.5 py-1 rounded text-xs font-mono text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 border border-rose-500/30 transition-colors flex items-center gap-1.5"
          >
            <Trash2 className="w-3 h-3" />
            <span>Clear Alert</span>
          </button>
        )}
      </div>

      {/* Success Notification */}
      {successMsg && (
        <div className="mb-4 px-3.5 py-2.5 rounded-lg bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2 animate-fadeIn">
          <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Alert Triggered Flag Banner (When Current Price <= Target Price) */}
      {watchlistItem && isTriggered && (
        <div className="mb-4 p-4 rounded-xl bg-gradient-to-r from-emerald-950/80 via-emerald-900/40 to-[#0e1724] border border-emerald-500/50 shadow-lg shadow-emerald-950/30 relative">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-500 text-black font-bold flex-shrink-0 animate-bounce">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-black uppercase text-emerald-400 tracking-wider">
                  🎉 PRICE ALERT TRIGGERED!
                </span>
                <span className="px-1.5 py-0.5 rounded bg-emerald-500 text-black font-mono text-[10px] font-bold">
                  Target Met
                </span>
              </div>
              <p className="text-xs font-mono text-zinc-200">
                Current lowest price <strong className="text-white font-bold">{formatPrice(lowestPrice)}</strong> has reached or beaten your target of <strong className="text-emerald-300 font-bold">{formatPrice(watchlistItem.target_price)}</strong>!
              </p>
              {triggeredStores.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 pt-1.5">
                  <span className="text-[11px] font-mono text-zinc-400">Available at target on:</span>
                  {triggeredStores.map(st => (
                    <a
                      key={st.id}
                      href={st.store_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#14263a] hover:bg-[#1b3450] text-[#38bdf8] border border-[#2b4c73] transition-colors inline-flex items-center gap-1"
                    >
                      <span>{st.platform_name || st.platform_id}</span>
                      <span className="text-emerald-400 font-bold">${st.current_price.toFixed(2)}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Alert Active Banner (When Target Not Yet Reached) */}
      {watchlistItem && !isTriggered && (
        <div className="mb-4 p-3 rounded-lg bg-[#121c29] border border-[#23384e] text-xs font-mono text-zinc-300 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>
              Target Price: <strong className="text-amber-400 font-bold">{formatPrice(watchlistItem.target_price)}</strong>
            </span>
            <span className="text-zinc-500">|</span>
            <span className="text-zinc-400">
              Needs drop of <strong className="text-zinc-200">{formatPrice(lowestPrice - watchlistItem.target_price)}</strong>
            </span>
          </div>
          <span className="text-[10px] uppercase text-zinc-400 bg-zinc-800/80 px-2 py-0.5 rounded border border-zinc-700">
            Monitoring {selectedPlatforms.length} Stores
          </span>
        </div>
      )}

      {/* Input Form */}
      <form onSubmit={handleSaveAlert} className="space-y-4">
        <div>
          <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
            Target Price (USD)
          </label>
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
            <div className="relative flex-1 min-w-[140px]">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 font-mono text-sm font-bold">
                $
              </span>
              <input
                type="number"
                step="0.01"
                min="0"
                max="999.99"
                value={targetPriceInput}
                onChange={e => setTargetPriceInput(e.target.value)}
                placeholder="19.99"
                className="w-full pl-8 pr-3 py-2 rounded-lg bg-[#0e1622] border border-[#233547] text-white font-mono text-sm focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all"
                required
              />
            </div>

            <button
              type="submit"
              disabled={saving || targetPriceNum <= 0}
              className="w-full sm:w-auto px-5 py-2 rounded-lg font-mono text-xs font-bold bg-[#38bdf8] hover:bg-[#60cdff] text-slate-950 transition-all shadow-md flex items-center justify-center gap-2 flex-shrink-0 disabled:opacity-50"
            >
              <Bell className="w-3.5 h-3.5" />
              <span>{saving ? 'Saving...' : watchlistItem ? 'Update Alert' : 'Set Price Alert'}</span>
            </button>
          </div>
        </div>

        {/* Quick Presets */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-mono text-zinc-500 mr-1">Quick Presets:</span>
          {lowestPrice > 0 && (
            <>
              <button
                type="button"
                onClick={() => handleApplyPreset(lowestPrice * 0.9)}
                className="px-2 py-1 rounded bg-[#131f2d] hover:bg-[#1a2c3f] border border-[#223549] text-zinc-300 hover:text-white text-xs font-mono transition-colors"
              >
                -10% ({formatPrice(lowestPrice * 0.9)})
              </button>
              <button
                type="button"
                onClick={() => handleApplyPreset(lowestPrice * 0.8)}
                className="px-2 py-1 rounded bg-[#131f2d] hover:bg-[#1a2c3f] border border-[#223549] text-zinc-300 hover:text-white text-xs font-mono transition-colors"
              >
                -20% ({formatPrice(lowestPrice * 0.8)})
              </button>
              <button
                type="button"
                onClick={() => handleApplyPreset(lowestPrice * 0.5)}
                className="px-2 py-1 rounded bg-[#131f2d] hover:bg-[#1a2c3f] border border-[#223549] text-zinc-300 hover:text-white text-xs font-mono transition-colors"
              >
                -50% ({formatPrice(lowestPrice * 0.5)})
              </button>
            </>
          )}
          {recordLow > 0 && (
            <button
              type="button"
              onClick={() => handleApplyPreset(recordLow)}
              className="px-2 py-1 rounded bg-[#182717] hover:bg-[#20361f] border border-[#2d492c] text-emerald-400 text-xs font-mono transition-colors flex items-center gap-1"
            >
              <ArrowDownCircle className="w-3 h-3" />
              <span>Record Low ({formatPrice(recordLow)})</span>
            </button>
          )}
        </div>

        {/* Platform Selection */}
        {listings.length > 1 && (
          <div className="border-t border-[#1b2838] pt-3">
            <span className="block text-[11px] font-mono text-zinc-400 mb-2">
              Notify on these storefronts:
            </span>
            <div className="flex flex-wrap gap-2">
              {Array.from(new Set(listings.map(l => l.platform_id))).map(pid => {
                const conf = PLATFORM_CONFIG[pid];
                const isSelected = selectedPlatforms.includes(pid);
                const listing = listings.find(l => l.platform_id === pid);
                return (
                  <button
                    key={pid}
                    type="button"
                    onClick={() => togglePlatform(pid)}
                    className={`px-2.5 py-1.5 rounded-md text-xs font-mono transition-all flex items-center gap-1.5 border ${
                      isSelected
                        ? 'bg-[#142335] text-white border-[#38bdf8]/60 shadow-sm'
                        : 'bg-[#0d141e] text-zinc-500 border-[#1a2636] hover:text-zinc-300'
                    }`}
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: conf?.accent || '#38bdf8' }}
                    />
                    <span>{conf.name}</span>
                    {listing && (
                      <span className="text-[10px] text-zinc-400 font-mono">
                        (${listing.current_price.toFixed(2)})
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </form>

      {/* PostgreSQL SQL executed info */}
      <div className="mt-4 pt-3 border-t border-[#172332] flex items-center justify-between text-[11px] font-mono text-zinc-500">
        <span className="flex items-center gap-1.5">
          <Database className="w-3.5 h-3.5 text-[#38bdf8]" />
          <span>PostgreSQL Table: <code>price_alerts (user_id, game_id, target_price)</code></span>
        </span>
        <span className="text-zinc-400">Real-time client evaluation</span>
      </div>
    </div>
  );
};
