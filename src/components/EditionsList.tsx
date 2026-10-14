import React from 'react';
import { GameEdition } from '../types/database';
import { formatPrice } from '../utils/formatters';
import { Check, Package, Sparkles } from 'lucide-react';

interface EditionsListProps {
  editions: GameEdition[];
}

export const EditionsList: React.FC<EditionsListProps> = ({ editions }) => {
  if (!editions.length) {
    return (
      <div className="bg-[#101721] rounded-lg border border-[#1b2838] p-8 text-center text-zinc-400 font-mono text-xs">
        No edition packages registered for this title. Standard edition is the primary release.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between pb-2 border-b border-[#1b2838]">
        <div>
          <h3 className="text-base font-bold text-white tracking-wide uppercase font-mono flex items-center gap-2">
            <Package className="w-4 h-4 text-[#66c0f4]" />
            Digital Editions & Bundles
          </h3>
          <p className="text-xs text-zinc-400 mt-0.5">
            Compare package contents, included expansions, and digital collectibles.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {editions.map(ed => (
          <div
            key={ed.id}
            className="bg-[#101721] rounded-lg border border-[#1b2838] hover:border-[#2a475e] p-5 flex flex-col justify-between transition-all shadow-md group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#66c0f4] font-semibold">
                  Edition
                </span>
                {ed.badge && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#1b2838] text-[#a4d007] border border-[#a4d007]/30 flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5" />
                    {ed.badge}
                  </span>
                )}
              </div>

              <h4 className="text-base font-bold text-white mb-1.5 group-hover:text-[#66c0f4] transition-colors">
                {ed.title}
              </h4>
              <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                {ed.description}
              </p>

              {/* Bonus Items Checklist */}
              <div className="space-y-2 mb-4 border-t border-[#192433] pt-3">
                <div className="text-[11px] font-mono text-zinc-400 uppercase font-semibold">
                  Included Content:
                </div>
                {ed.bonus_content.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                    <Check className="w-3.5 h-3.5 text-[#a4d007] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[#1b2838] pt-3 mt-2 flex items-center justify-between">
              <span className="text-xs text-zinc-500 font-mono">Retail MSRP</span>
              <span className="text-lg font-bold font-mono text-white">
                {formatPrice(ed.base_price)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
