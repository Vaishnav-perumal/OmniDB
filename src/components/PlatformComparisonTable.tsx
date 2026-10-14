import React, { useState, useMemo } from 'react';
import { PlatformListing } from '../types/database';
import { PlatformBadge } from './PlatformBadge';
import { formatPrice, formatDate, formatNumber, getDiscountBadgeClass } from '../utils/formatters';
import { ExternalLink, CheckCircle2, Users, ShieldAlert, Sparkles, ArrowUpDown, Info } from 'lucide-react';

interface PlatformComparisonTableProps {
  listings: PlatformListing[];
}

export const PlatformComparisonTable: React.FC<PlatformComparisonTableProps> = ({ listings }) => {
  const [sortBy, setSortBy] = useState<'price_asc' | 'discount_desc' | 'low_asc' | 'platform'>('price_asc');

  // Determine best deal currently
  const lowestPrice = Math.min(...listings.map(l => l.current_price));

  const sortedListings = useMemo(() => {
    const list = [...listings];
    switch (sortBy) {
      case 'discount_desc':
        return list.sort((a, b) => b.discount_percent - a.discount_percent);
      case 'low_asc':
        return list.sort((a, b) => a.historical_low_price - b.historical_low_price);
      case 'platform':
        return list.sort((a, b) => a.platform_name?.localeCompare(b.platform_name || '') || 0);
      case 'price_asc':
      default:
        return list.sort((a, b) => a.current_price - b.current_price);
    }
  }, [listings, sortBy]);

  return (
    <div className="bg-[#101721] rounded-xl border border-[#1b2838] overflow-hidden shadow-xl space-y-0">
      {/* Sample Data Notice Banner */}
      <div className="bg-[#0b131d] px-4 py-2 border-b border-[#1b2838] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-zinc-400">
        <div className="flex items-center gap-1.5 text-amber-300/90">
          <Info className="w-3.5 h-3.5 flex-shrink-0" />
          <span>Curated Sample Storefront Data • Displayed for cross-platform price comparison demonstration.</span>
        </div>
        <div className="text-zinc-500">
          Simulated Store Feeds
        </div>
      </div>

      <div className="p-4 bg-[#141d2a] border-b border-[#1b2838] flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-white tracking-wide uppercase font-mono">
              Where to Buy & Cross-Platform Price Comparison
            </h3>
            <span className="px-2 py-0.5 rounded-full bg-[#1b2838] text-xs text-[#38bdf8] border border-[#2a475e] font-mono">
              {listings.length} Stores Tracked
            </span>
          </div>
          <p className="text-xs text-zinc-400 mt-0.5">
            Compare prices, discounts, historical lows, DRM policies, and multiplayer player counts across all platforms.
          </p>
        </div>

        {/* Sort Controls */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-zinc-500 hidden sm:inline flex items-center gap-1">
            <ArrowUpDown className="w-3 h-3" /> Sort:
          </span>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value as any)}
            className="bg-[#0b1017] text-zinc-200 border border-[#24374d] rounded-lg px-2.5 py-1.5 text-xs font-mono outline-none cursor-pointer focus:border-[#38bdf8]"
          >
            <option value="price_asc">Lowest Current Price</option>
            <option value="discount_desc">Highest Discount</option>
            <option value="low_asc">Historical Low</option>
            <option value="platform">Platform Name</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs font-mono border-collapse">
          <thead>
            <tr className="bg-[#0b0f16] text-zinc-400 border-b border-[#1b2838] uppercase text-[11px] tracking-wider">
              <th className="py-3 px-4 font-semibold">Store / Platform</th>
              <th className="py-3 px-4 font-semibold">Current Price</th>
              <th className="py-3 px-4 font-semibold">Discount</th>
              <th className="py-3 px-4 font-semibold">Historical Low</th>
              <th className="py-3 px-4 font-semibold">DRM & Features</th>
              <th className="py-3 px-4 font-semibold">Community / Players</th>
              <th className="py-3 px-4 font-semibold text-right">Store Link</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#17212e]">
            {sortedListings.map(l => {
              const isBestDeal = l.current_price === lowestPrice;
              const isHistoricalLow = l.current_price <= l.historical_low_price && l.discount_percent > 0;

              return (
                <tr
                  key={l.id}
                  className={`hover:bg-[#15202e] transition-colors ${
                    isBestDeal ? 'bg-[#121c29]/60' : ''
                  }`}
                >
                  {/* Store / Platform */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2.5">
                      <PlatformBadge platformId={l.platform_id} size="sm" />
                      <div>
                        <div className="font-sans font-bold text-white text-sm flex items-center gap-1.5">
                          {l.platform_name}
                          {isBestDeal && (
                            <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#5c7e10] text-[#beee11] font-mono uppercase font-bold">
                              Best Deal
                            </span>
                          )}
                        </div>
                        <div className="text-[10px] text-zinc-500 font-mono">
                          ID: {l.store_app_id}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Current Price */}
                  <td className="py-3.5 px-4">
                    <div className="flex flex-col">
                      <span className="text-base font-bold text-white">
                        {formatPrice(l.current_price, l.currency)}
                      </span>
                      {l.discount_percent > 0 && (
                        <span className="text-[11px] line-through text-zinc-500">
                          {formatPrice(l.original_price, l.currency)}
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Discount */}
                  <td className="py-3.5 px-4">
                    {l.discount_percent > 0 ? (
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-xs ${getDiscountBadgeClass(
                          l.discount_percent
                        )}`}
                      >
                        -{l.discount_percent}%
                      </span>
                    ) : (
                      <span className="text-zinc-500 text-[11px]">Regular</span>
                    )}
                  </td>

                  {/* Historical Low */}
                  <td className="py-3.5 px-4">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-zinc-200">
                          {formatPrice(l.historical_low_price, l.currency)}
                        </span>
                        {isHistoricalLow && (
                          <span className="px-1.5 py-0.2 rounded text-[9px] bg-rose-500/20 text-rose-300 border border-rose-500/40 uppercase font-bold flex items-center gap-0.5">
                            <span>🔥 Record Low</span>
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-zinc-500">
                        {formatDate(l.historical_low_date)}
                      </span>
                    </div>
                  </td>

                  {/* DRM */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-1.5">
                      {l.drm_type.includes('DRM-Free') ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      ) : (
                        <ShieldAlert className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
                      )}
                      <span
                        className={`text-xs ${
                          l.drm_type.includes('DRM-Free')
                            ? 'text-purple-300 font-semibold'
                            : 'text-zinc-300'
                        }`}
                      >
                        {l.drm_type}
                      </span>
                    </div>
                  </td>

                  {/* Community / Live Players */}
                  <td className="py-3.5 px-4">
                    {l.current_players > 0 ? (
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1 text-[#38bdf8]">
                          <Users className="w-3 h-3" />
                          <span className="font-bold">{formatNumber(l.current_players)}</span>
                          <span className="text-[10px] text-zinc-400">in-game</span>
                        </div>
                        <span className="text-[10px] text-zinc-500">
                          Peak 24h: {formatNumber(l.peak_players_24h)}
                        </span>
                      </div>
                    ) : (
                      <div className="flex flex-col">
                        <span className="text-zinc-300">
                          {l.rating_positive_percent > 0 ? `${l.rating_positive_percent}% Positive` : 'Official Store'}
                        </span>
                        {l.review_count > 0 && (
                          <span className="text-[10px] text-zinc-500">
                            {formatNumber(l.review_count)} ratings
                          </span>
                        )}
                      </div>
                    )}
                  </td>

                  {/* Action Link */}
                  <td className="py-3.5 px-4 text-right">
                    <a
                      href={l.store_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                        isBestDeal
                          ? 'bg-[#5c7e10] hover:bg-[#6c9314] text-white shadow-sm font-bold'
                          : 'bg-[#1a2636] hover:bg-[#23354a] text-[#38bdf8] border border-[#2c435c]'
                      }`}
                    >
                      <span>View Store</span>
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
  );
};
