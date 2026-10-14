import React, { useState, useEffect, useRef } from 'react';
import { db } from '../db/database';
import { Game } from '../types/database';
import { formatPrice } from '../utils/formatters';
import { PlatformBadge } from './PlatformBadge';
import { Search, X, Flame, ArrowRight, CornerDownLeft, Sparkles, Hash } from 'lucide-react';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectGame: (gameId: string) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectGame
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      searchGames('');
      setSelectedIndex(0);
    } else {
      setSearchTerm('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const searchGames = async (query: string) => {
    setLoading(true);
    try {
      const data = await db.getAllGames({ search: query, sortBy: 'popular' });
      setResults(data.slice(0, 10));
      setSelectedIndex(0);
    } catch (err) {
      console.error('Search error in database:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchTerm(val);
    searchGames(val);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        onSelectGame(results[selectedIndex].id);
        onClose();
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  // Scroll active item into view
  useEffect(() => {
    const el = listRef.current?.children[selectedIndex] as HTMLElement;
    if (el) {
      el.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  const popularSuggestions = [
    { label: 'Cyberpunk 2077', query: 'cyberpunk' },
    { label: 'UGDB-000001', query: 'UGDB-000001' },
    { label: 'Elden Ring', query: 'elden' },
    { label: 'Baldur\'s Gate 3', query: 'baldur' },
    { label: 'Black Myth', query: 'wukong' },
    { label: 'Capcom', query: 'capcom' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-20 p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="bg-[#0f1722] border border-[#22384f] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[80vh]">
        {/* Search input bar */}
        <div className="p-4 bg-[#142030] border-b border-[#1b2838] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#38bdf8] flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Search by title, alternate title, studio, genre, or UGDB-ID..."
            className="flex-1 bg-transparent text-white font-mono text-sm placeholder:text-zinc-500 outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => {
                setSearchTerm('');
                searchGames('');
              }}
              className="text-zinc-500 hover:text-zinc-300"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 rounded bg-[#0b0e14] border border-[#1b2838] text-[10px] font-mono text-zinc-400">
            ESC
          </kbd>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2 bg-[#0c131d] border-b border-[#172332] flex items-center gap-2 overflow-x-auto text-[11px] font-mono text-zinc-400">
          <Sparkles className="w-3 h-3 text-[#38bdf8] flex-shrink-0" />
          <span className="text-zinc-500 text-[10px]">Suggestions:</span>
          {popularSuggestions.map(s => (
            <button
              key={s.label}
              onClick={() => {
                setSearchTerm(s.query);
                searchGames(s.query);
              }}
              className="px-2 py-0.5 rounded bg-[#131f2c] hover:bg-[#1a2d40] text-zinc-300 hover:text-[#38bdf8] border border-[#1e3044] transition-colors whitespace-nowrap flex-shrink-0"
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div ref={listRef} className="overflow-y-auto divide-y divide-[#172333] flex-1">
          {loading ? (
            <div className="py-12 text-center text-xs font-mono text-zinc-400 flex items-center justify-center gap-2">
              <div className="w-3.5 h-3.5 border-2 border-[#38bdf8] border-t-transparent rounded-full animate-spin" />
              <span>Searching canonical Universal Game catalog...</span>
            </div>
          ) : results.length > 0 ? (
            results.map((g, idx) => {
              const isSelected = idx === selectedIndex;
              const releaseYear = g.release_date ? new Date(g.release_date).getFullYear() : null;

              return (
                <div
                  key={g.id}
                  onClick={() => {
                    onSelectGame(g.id);
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`p-3 sm:p-3.5 flex items-center justify-between gap-4 cursor-pointer transition-colors ${
                    isSelected ? 'bg-[#18283a]' : 'hover:bg-[#131e2b]'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <img
                      src={g.header_image}
                      alt={g.title}
                      className="w-16 h-11 object-cover rounded-lg bg-black/40 flex-shrink-0 border border-[#1f3144]"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm truncate group-hover:text-[#38bdf8]">
                          {g.title}
                        </span>
                        {g.ugdb_id && (
                          <span className="text-[10px] font-mono text-[#38bdf8] px-1.5 py-0.2 rounded bg-[#0d1a29] border border-[#1e3650] flex-shrink-0">
                            {g.ugdb_id}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono text-zinc-400 mt-1">
                        <span>{g.developer_name}</span>
                        {releaseYear && (
                          <>
                            <span className="text-zinc-600">·</span>
                            <span>{releaseYear}</span>
                          </>
                        )}
                        <span className="text-zinc-600">·</span>
                        <span className="text-zinc-300 font-sans">{g.genres[0]}</span>
                        {g.rating_score > 0 && (
                          <>
                            <span className="text-zinc-600">·</span>
                            <span className="text-[#a4d007]">{g.rating_score}%</span>
                          </>
                        )}
                      </div>

                      {/* Platform icons in search result */}
                      {g.platforms && g.platforms.length > 0 && (
                        <div className="flex items-center gap-1 mt-1.5">
                          {g.platforms.slice(0, 4).map(p => (
                            <PlatformBadge key={p} platformId={p} size="xs" showLabel={false} />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 flex-shrink-0">
                    <div className="text-right font-mono">
                      <div className="text-sm font-bold text-white">
                        {formatPrice(g.lowest_current_price)}
                      </div>
                      {g.max_discount && g.max_discount > 0 ? (
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#5c7e10] text-[#beee11] font-bold">
                          -{g.max_discount}%
                        </span>
                      ) : null}
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 transition-all ${
                        isSelected ? 'text-[#38bdf8] translate-x-1' : 'text-zinc-600'
                      }`}
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="py-14 text-center space-y-2 font-mono">
              <div className="text-sm text-zinc-300">No matching games found</div>
              <p className="text-xs text-zinc-500 max-w-sm mx-auto">
                No games matched "{searchTerm}". Try searching by title, franchise name, or Universal Game ID (e.g. UGDB-000001).
              </p>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="p-3 bg-[#0a0f16] border-t border-[#1b2838] flex items-center justify-between text-[11px] font-mono text-zinc-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <CornerDownLeft className="w-3 h-3 text-[#38bdf8]" /> to select
            </span>
            <span>↑↓ to navigate</span>
            <span>ESC to close</span>
          </div>
          <span className="text-zinc-500">Universal Catalog Search</span>
        </div>
      </div>
    </div>
  );
};
