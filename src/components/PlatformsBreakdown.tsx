import React from 'react';
import { PlatformListing, Game } from '../types/database';
import { PlatformBadge } from './PlatformBadge';
import { formatPrice, formatDate, formatNumber } from '../utils/formatters';
import {
  ExternalLink,
  ShieldCheck,
  ShieldAlert,
  Users,
  KeyRound,
  CheckCircle2,
  HardDrive,
  Copy,
  Check
} from 'lucide-react';

interface PlatformsBreakdownProps {
  game: Game;
  listings: PlatformListing[];
}

export const PlatformsBreakdown: React.FC<PlatformsBreakdownProps> = ({ game, listings }) => {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getPlatformIdLabel = (platformId: string) => {
    switch (platformId) {
      case 'steam':
        return 'Steam App ID';
      case 'gog':
        return 'GOG Product ID';
      case 'playstation':
        return 'PlayStation Store / PPSA ID';
      case 'xbox':
        return 'Xbox Title ID';
      case 'nintendo':
        return 'Nintendo eShop Title ID';
      case 'epic':
        return 'Epic Games App Namespace';
      default:
        return 'Storefront ID';
    }
  };

  return (
    <div className="space-y-6">
      {/* Universal Identifier Cross-Reference Banner */}
      <div className="bg-[#111926] rounded-xl border border-[#203144] p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-wider font-bold">
              Canonical Identity
            </span>
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-mono font-black text-white">{game.ugdb_id}</h3>
              <button
                onClick={() => copyToClipboard(game.ugdb_id, 'ugdb')}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#172537] hover:bg-[#20354e] text-zinc-300 hover:text-white border border-[#263c56] text-xs font-mono transition-colors"
                title="Copy Universal Game ID"
              >
                {copiedId === 'ugdb' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Copy UGDB ID</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-xs text-zinc-400 font-sans max-w-2xl leading-relaxed">
              The Universal Game ID (<code className="text-[#38bdf8]">{game.ugdb_id}</code>) serves as the canonical record linking all platform-specific listings across digital storefronts without duplicate master records.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[#090e15] px-3.5 py-2.5 rounded-lg border border-[#172332] text-xs font-mono text-zinc-400 flex-shrink-0">
            <HardDrive className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>{listings.length} Platform Ecosystems Linked</span>
          </div>
        </div>
      </div>

      {/* Platform Cards Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {listings.map(listing => {
          const isDrmFree = listing.drm_type.toLowerCase().includes('drm-free');

          return (
            <div
              key={listing.id}
              className="bg-[#0f1722] rounded-xl border border-[#1b2738] hover:border-[#2f4968] p-5 flex flex-col justify-between transition-all shadow-md group"
            >
              <div className="space-y-4">
                {/* Platform Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <PlatformBadge platformId={listing.platform_id} size="md" />
                    <div>
                      <h4 className="font-bold text-white text-base group-hover:text-[#38bdf8] transition-colors">
                        {listing.platform_name}
                      </h4>
                      <span className="text-[11px] font-mono text-zinc-500 uppercase">
                        {listing.platform_id} Storefront
                      </span>
                    </div>
                  </div>

                  <a
                    href={listing.store_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#142030] hover:bg-[#1a2d42] border border-[#22364c] text-xs font-mono text-[#38bdf8] hover:text-white transition-colors"
                  >
                    <span>Store Page</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Platform-Specific Identifier */}
                <div className="bg-[#080d14] rounded-lg p-3 border border-[#15212f] space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-500 flex items-center gap-1.5">
                      <KeyRound className="w-3.5 h-3.5 text-[#38bdf8]" />
                      {getPlatformIdLabel(listing.platform_id)}:
                    </span>
                    <button
                      onClick={() => copyToClipboard(listing.store_app_id, listing.id)}
                      className="text-zinc-400 hover:text-white flex items-center gap-1 text-[11px]"
                    >
                      {copiedId === listing.id ? (
                        <span className="text-emerald-400">Copied</span>
                      ) : (
                        <Copy className="w-3 h-3 text-zinc-500" />
                      )}
                    </button>
                  </div>
                  <div className="font-mono font-bold text-white text-sm tracking-wide">
                    {listing.store_app_id}
                  </div>
                </div>

                {/* DRM & Security Policies */}
                <div className="space-y-1 text-xs font-mono">
                  <span className="text-zinc-500 block text-[10px] uppercase tracking-wider">
                    DRM & Authentication Policy
                  </span>
                  <div className="flex items-center gap-2 text-zinc-300">
                    {isDrmFree ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    ) : (
                      <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    )}
                    <span className={isDrmFree ? 'text-emerald-300 font-semibold' : 'text-zinc-300'}>
                      {listing.drm_type}
                    </span>
                  </div>
                </div>

                {/* Live / Community Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#172332] text-xs font-mono">
                  <div className="bg-[#080d14] p-2 rounded border border-[#15212f]">
                    <span className="text-[10px] text-zinc-500 block">Current In-Game</span>
                    <span className="font-bold text-[#38bdf8]">
                      {listing.current_players > 0 ? formatNumber(listing.current_players) : 'Singleplayer'}
                    </span>
                  </div>

                  <div className="bg-[#080d14] p-2 rounded border border-[#15212f]">
                    <span className="text-[10px] text-zinc-500 block">24h Peak</span>
                    <span className="font-bold text-white">
                      {listing.peak_players_24h > 0 ? formatNumber(listing.peak_players_24h) : 'N/A'}
                    </span>
                  </div>

                  <div className="bg-[#080d14] p-2 rounded border border-[#15212f]">
                    <span className="text-[10px] text-zinc-500 block">All-Time Peak</span>
                    <span className="font-bold text-emerald-400">
                      {listing.all_time_peak_players > 0 ? formatNumber(listing.all_time_peak_players) : 'N/A'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Price Summary Footer */}
              <div className="mt-4 pt-3 border-t border-[#172332] flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-zinc-500 text-[10px] block">Current Store Price</span>
                  <span className="text-base font-bold text-white">
                    {formatPrice(listing.current_price, listing.currency)}
                  </span>
                  {listing.discount_percent > 0 && (
                    <span className="ml-2 text-[10px] font-bold text-[#beee11] px-1.5 py-0.2 rounded bg-[#5c7e10]">
                      -{listing.discount_percent}%
                    </span>
                  )}
                </div>

                <div className="text-right">
                  <span className="text-zinc-500 text-[10px] block">Historical Low</span>
                  <span className="font-semibold text-zinc-300">
                    {formatPrice(listing.historical_low_price, listing.currency)}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
