import React, { useState, useEffect } from 'react';
import { db } from '../db/database';
import { Game, PlatformListing, PlatformId } from '../types/database';
import { PlatformBadge, PLATFORM_CONFIG } from '../components/PlatformBadge';
import { formatPrice, getDiscountBadgeClass } from '../utils/formatters';
import { Layers, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';

interface PlatformMatrixViewProps {
  onSelectGame: (gameId: string) => void;
}

export const PlatformMatrixView: React.FC<PlatformMatrixViewProps> = ({ onSelectGame }) => {
  const [matrixData, setMatrixData] = useState<
    { game: Game; listings: Record<PlatformId, PlatformListing | undefined>; lowestPrice: number }[]
  >([]);
  const [loading, setLoading] = useState(true);

  const PLATFORMS: PlatformId[] = ['steam', 'epic', 'gog', 'playstation', 'xbox', 'nintendo'];

  useEffect(() => {
    loadMatrix();
  }, []);

  const loadMatrix = async () => {
    setLoading(true);
    try {
      const allGames = await db.getAllGames();
      const rows = [];

      for (const g of allGames) {
        const listings = await db.getGameListings(g.id);
        const map: Record<PlatformId, PlatformListing | undefined> = {
          steam: undefined,
          epic: undefined,
          gog: undefined,
          playstation: undefined,
          xbox: undefined,
          nintendo: undefined
        };

        let lowest = Infinity;
        for (const l of listings) {
          map[l.platform_id] = l;
          if (l.current_price < lowest) lowest = l.current_price;
        }

        rows.push({
          game: g,
          listings: map,
          lowestPrice: lowest === Infinity ? 0 : lowest
        });
      }

      setMatrixData(rows);
    } catch (err) {
      console.error('Failed to load matrix data from PostgreSQL:', err);
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
            <span className="p-1.5 rounded-lg bg-[#66c0f4]/20 text-[#66c0f4]">
              <Layers className="w-5 h-5" />
            </span>
            <h1 className="text-2xl font-extrabold text-white uppercase font-mono tracking-wide">
              Universal Platform Comparison Matrix
            </h1>
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            Side-by-side pricing matrix across all 6 gaming storefronts. Highlighted green cells indicate the cheapest platform to buy.
          </p>
        </div>

        <div className="text-xs font-mono text-zinc-400 flex items-center gap-3 bg-[#0a0f16] px-3 py-1.5 rounded border border-[#1b2838]">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-[#5c7e10] border border-[#beee11]" />
            <span>Best Available Deal</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-[#201435] border border-purple-500/40" />
            <span>DRM-Free Available</span>
          </span>
        </div>
      </div>

      {loading ? (
        <div className="py-24 text-center space-y-3 font-mono">
          <div className="inline-block w-8 h-8 border-2 border-[#66c0f4] border-t-transparent rounded-full animate-spin" />
          <div className="text-zinc-500 text-xs">Assembling relational cross-platform matrix from PostgreSQL...</div>
        </div>
      ) : (
        <div className="bg-[#101721] rounded-xl border border-[#1b2838] overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-[#0b0f16] text-zinc-400 border-b border-[#1b2838] uppercase text-[11px] tracking-wider">
                  <th className="py-3 px-4 font-semibold sticky left-0 bg-[#0b0f16] z-10 w-64">
                    Game Title
                  </th>
                  {PLATFORMS.map(p => (
                    <th key={p} className="py-3 px-3 font-semibold text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <span>{PLATFORM_CONFIG[p]?.icon}</span>
                        <span>{PLATFORM_CONFIG[p]?.short}</span>
                      </div>
                    </th>
                  ))}
                  <th className="py-3 px-4 font-semibold text-right">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#17212e]">
                {matrixData.map(({ game, listings, lowestPrice }) => (
                  <tr key={game.id} className="hover:bg-[#131b26] transition-colors">
                    {/* Game Column (Sticky) */}
                    <td
                      onClick={() => onSelectGame(game.id)}
                      className="py-3 px-4 sticky left-0 bg-[#101721] z-10 cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={game.header_image}
                          alt=""
                          className="w-12 h-8 rounded object-cover flex-shrink-0 bg-black/40 border border-[#1b2838]"
                        />
                        <div className="min-w-0">
                          <div className="font-sans font-bold text-white text-sm group-hover:text-[#66c0f4] transition-colors truncate max-w-[200px]">
                            {game.title}
                          </div>
                          <div className="text-[10px] text-zinc-500 font-mono">
                            Best: <strong className="text-white font-bold">{formatPrice(lowestPrice)}</strong>
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Platform Columns */}
                    {PLATFORMS.map(p => {
                      const item = listings[p];
                      if (!item) {
                        return (
                          <td key={p} className="py-3 px-3 text-center text-zinc-600 bg-[#0a0d13]/40">
                            —
                          </td>
                        );
                      }

                      const isCheapest = item.current_price === lowestPrice;

                      return (
                        <td
                          key={p}
                          className={`py-3 px-3 text-center transition-colors ${
                            isCheapest
                              ? 'bg-[#1b2d18]/40 border-y border-[#5c7e10]/40'
                              : 'hover:bg-[#16212e]'
                          }`}
                        >
                          <div className="flex flex-col items-center justify-center">
                            <span
                              className={`font-bold text-sm ${
                                isCheapest ? 'text-[#beee11]' : 'text-white'
                              }`}
                            >
                              {formatPrice(item.current_price)}
                            </span>

                            <div className="flex items-center gap-1 mt-0.5">
                              {item.discount_percent > 0 ? (
                                <span
                                  className={`text-[10px] px-1 rounded ${getDiscountBadgeClass(
                                    item.discount_percent
                                  )}`}
                                >
                                  -{item.discount_percent}%
                                </span>
                              ) : (
                                <span className="text-[10px] text-zinc-500">MSRP</span>
                              )}

                              {item.drm_type.includes('DRM-Free') && (
                                <span
                                  className="text-[9px] px-1 rounded bg-purple-950 text-purple-300 border border-purple-800"
                                  title="DRM-Free (100% Offline)"
                                >
                                  GOG
                                </span>
                              )}
                            </div>
                          </div>
                        </td>
                      );
                    })}

                    {/* Action */}
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => onSelectGame(game.id)}
                        className="px-2.5 py-1 rounded bg-[#1b2838] hover:bg-[#25394f] text-[#66c0f4] text-xs font-semibold"
                      >
                        Inspect
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
