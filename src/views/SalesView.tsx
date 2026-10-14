import React, { useState, useEffect } from 'react';
import { db } from '../db/database';
import { PlatformListing, PlatformId } from '../types/database';
import { PlatformBadge } from '../components/PlatformBadge';
import { formatPrice, formatDate, getDiscountBadgeClass } from '../utils/formatters';
import {
  TrendingDown,
  Sparkles,
  ExternalLink,
  Flame,
  Award,
  Clock,
  ArrowRight
} from 'lucide-react';

interface SalesViewProps {
  onSelectGame: (gameId: string) => void;
  initialFilter?: {
    filterType?: 'historical_low' | 'all_deals' | 'under_10' | 'deep_70';
    platform?: PlatformId | 'all';
  };
}

export const SalesView: React.FC<SalesViewProps> = ({ onSelectGame, initialFilter }) => {
  const [filterType, setFilterType] = useState<'historical_low' | 'all_deals' | 'under_10' | 'deep_70'>(
    initialFilter?.filterType || 'all_deals'
  );
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformId | 'all'>(
    initialFilter?.platform || 'all'
  );
  const [listings, setListings] = useState<PlatformListing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (initialFilter?.filterType) {
      setFilterType(initialFilter.filterType);
    }
    if (initialFilter?.platform) {
      setSelectedPlatform(initialFilter.platform);
    }
  }, [initialFilter]);

  useEffect(() => {
    loadSales();
  }, [filterType, selectedPlatform]);

  const loadSales = async () => {
    setLoading(true);
    try {
      const sales = await db.getSalesListings({
        filterType,
        platform: selectedPlatform
      });
      setListings(sales);
    } catch (err) {
      console.error('Error fetching sales from database:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Title */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#1b2838]">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[#5c7e10]/20 text-[#beee11]">
              <TrendingDown className="w-5 h-5" />
            </span>
            <h1 className="text-2xl font-extrabold text-white uppercase font-mono tracking-wide">
              Live Sales & Historical Low Tracker
            </h1>
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            Aggregated discount alerts comparing current live store prices against recorded all-time record lows.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-[#101721] p-4 rounded-xl border border-[#1b2838] space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setFilterType('historical_low')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
              filterType === 'historical_low'
                ? 'bg-[#5c7e10] text-[#beee11] font-bold shadow-md'
                : 'bg-[#090d13] text-zinc-400 border border-[#1b2838] hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Matches All-Time Low</span>
          </button>

          <button
            onClick={() => setFilterType('deep_70')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
              filterType === 'deep_70'
                ? 'bg-[#1b2838] text-[#66c0f4] border border-[#66c0f4]/50 font-bold'
                : 'bg-[#090d13] text-zinc-400 border border-[#1b2838] hover:text-white'
            }`}
          >
            Deep Discounts (60%+ Off)
          </button>

          <button
            onClick={() => setFilterType('under_10')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
              filterType === 'under_10'
                ? 'bg-[#1b2838] text-[#66c0f4] border border-[#66c0f4]/50 font-bold'
                : 'bg-[#090d13] text-zinc-400 border border-[#1b2838] hover:text-white'
            }`}
          >
            Under $10 Bargains
          </button>

          <button
            onClick={() => setFilterType('all_deals')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
              filterType === 'all_deals'
                ? 'bg-[#1b2838] text-[#66c0f4] border border-[#66c0f4]/50 font-bold'
                : 'bg-[#090d13] text-zinc-400 border border-[#1b2838] hover:text-white'
            }`}
          >
            All Active Sales
          </button>
        </div>

        {/* Store Filter */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#17212e] text-xs font-mono">
          <span className="text-zinc-500 mr-1">Filter Store:</span>
          {(['all', 'steam', 'epic', 'gog', 'playstation', 'xbox', 'nintendo'] as const).map(p => (
            <button
              key={p}
              onClick={() => setSelectedPlatform(p)}
              className={`px-2 py-0.5 rounded text-xs transition-all border ${
                selectedPlatform === p
                  ? 'bg-[#1b2838] text-[#66c0f4] border-[#66c0f4]/50 font-semibold'
                  : 'bg-[#090d13] text-zinc-500 border-zinc-800 hover:text-zinc-300'
              }`}
            >
              {p === 'all' ? 'All Stores' : p.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Results Table */}
      {loading ? (
        <div className="py-20 text-center space-y-3 font-mono">
          <div className="inline-block w-8 h-8 border-2 border-[#66c0f4] border-t-transparent rounded-full animate-spin" />
          <div className="text-zinc-500 text-xs">Scanning PostgreSQL for active discount listings...</div>
        </div>
      ) : listings.length === 0 ? (
        <div className="bg-[#101721] rounded-xl border border-[#1b2838] p-12 text-center text-zinc-400 font-mono text-xs">
          No active sales matching your criteria.
        </div>
      ) : (
        <div className="bg-[#101721] rounded-xl border border-[#1b2838] overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="bg-[#0b0f16] text-zinc-400 border-b border-[#1b2838] uppercase text-[11px] tracking-wider">
                  <th className="py-3 px-4 font-semibold">Game Title</th>
                  <th className="py-3 px-4 font-semibold">Platform</th>
                  <th className="py-3 px-4 font-semibold">Discount</th>
                  <th className="py-3 px-4 font-semibold">Current Price</th>
                  <th className="py-3 px-4 font-semibold">Historical Low</th>
                  <th className="py-3 px-4 font-semibold">DRM</th>
                  <th className="py-3 px-4 font-semibold text-right">Store</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#17212e]">
                {listings.map(l => {
                  const isHistoricalLow = l.current_price <= l.historical_low_price;

                  return (
                    <tr
                      key={l.id}
                      className="hover:bg-[#15202e] transition-colors"
                    >
                      <td
                        className="py-3.5 px-4 cursor-pointer"
                        onClick={() => onSelectGame(l.game_id)}
                      >
                        <div className="flex items-center gap-3">
                          {l.game_header_image && (
                            <img
                              src={l.game_header_image}
                              alt=""
                              className="w-14 h-9 rounded object-cover flex-shrink-0 bg-black/40 border border-[#1b2838]"
                            />
                          )}
                          <div>
                            <span className="font-sans font-bold text-white text-sm hover:text-[#66c0f4]">
                              {l.game_title}
                            </span>
                            {isHistoricalLow && (
                              <span className="ml-2 px-1.5 py-0.2 rounded text-[9px] bg-amber-500/20 text-amber-300 border border-amber-500/40 uppercase font-bold">
                                Lowest Ever
                              </span>
                            )}
                          </div>
                        </div>
                      </td>

                      <td className="py-3.5 px-4">
                        <PlatformBadge platformId={l.platform_id} size="sm" />
                      </td>

                      <td className="py-3.5 px-4">
                        <span
                          className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${getDiscountBadgeClass(
                            l.discount_percent
                          )}`}
                        >
                          -{l.discount_percent}%
                        </span>
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-white font-mono">
                            {formatPrice(l.current_price)}
                          </span>
                          <span className="text-[10px] text-zinc-500 line-through">
                            {formatPrice(l.original_price)}
                          </span>
                        </div>
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="flex flex-col">
                          <span className="text-zinc-200 font-semibold">
                            {formatPrice(l.historical_low_price)}
                          </span>
                          <span className="text-[10px] text-zinc-500">
                            {formatDate(l.historical_low_date)}
                          </span>
                        </div>
                      </td>

                      <td className="py-3.5 px-4">
                        <span className="text-zinc-300 text-xs">{l.drm_type}</span>
                      </td>

                      <td className="py-3.5 px-4 text-right">
                        <a
                          href={l.store_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-[#1a2636] hover:bg-[#23354a] text-[#66c0f4] border border-[#2c435c] text-xs font-mono font-medium transition-colors"
                        >
                          <span>Store</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
