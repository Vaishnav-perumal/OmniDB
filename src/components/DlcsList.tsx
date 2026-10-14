import React from 'react';
import { GameDlc } from '../types/database';
import { formatPrice, formatDate, getDiscountBadgeClass } from '../utils/formatters';
import { PlatformBadge } from './PlatformBadge';
import { Layers, Calendar } from 'lucide-react';

interface DlcsListProps {
  dlcs: GameDlc[];
}

export const DlcsList: React.FC<DlcsListProps> = ({ dlcs }) => {
  if (!dlcs.length) {
    return (
      <div className="bg-[#101721] rounded-lg border border-[#1b2838] p-8 text-center text-zinc-400 font-mono text-xs">
        No downloadable content or expansion packs cataloged for this title.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between pb-2 border-b border-[#1b2838]">
        <div>
          <h3 className="text-base font-bold text-white tracking-wide uppercase font-mono flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#66c0f4]" />
            Downloadable Content (DLC) & Expansions
          </h3>
          <p className="text-xs text-zinc-400 mt-0.5">
            Add-ons, story expansions, and bonus content available across supported stores.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {dlcs.map(dlc => (
          <div
            key={dlc.id}
            className="bg-[#101721] rounded-lg border border-[#1b2838] hover:border-[#2a475e] p-4 flex gap-4 transition-all shadow-md group"
          >
            {dlc.header_image && (
              <div className="w-28 h-28 rounded overflow-hidden flex-shrink-0 bg-black/40 border border-[#1b2838]">
                <img
                  src={dlc.header_image}
                  alt={dlc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}

            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="text-sm font-bold text-white group-hover:text-[#66c0f4] transition-colors line-clamp-1">
                    {dlc.title}
                  </h4>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    {dlc.discount_percent && dlc.discount_percent > 0 ? (
                      <span className={`px-1.5 py-0.2 rounded text-[10px] ${getDiscountBadgeClass(dlc.discount_percent)}`}>
                        -{dlc.discount_percent}%
                      </span>
                    ) : null}
                    <span className="text-sm font-bold font-mono text-white">
                      {formatPrice(dlc.price)}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 line-clamp-2 mb-2 leading-relaxed">
                  {dlc.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#17212e] text-[11px] font-mono">
                <div className="flex items-center gap-1 text-zinc-500">
                  <Calendar className="w-3 h-3" />
                  <span>{formatDate(dlc.release_date)}</span>
                </div>

                <div className="flex items-center gap-1">
                  {dlc.platforms.map(p => (
                    <PlatformBadge key={p} platformId={p} size="xs" showLabel={false} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
