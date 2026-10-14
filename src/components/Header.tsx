import React from 'react';
import { DatabaseStats } from '../types/database';
import {
  Gamepad2,
  Search,
  Flame,
  Layers,
  Building2,
  Bell,
  Terminal,
  TrendingDown,
  Info
} from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  onOpenSearch: () => void;
  onOpenSqlConsole: () => void;
  watchlistCount: number;
  stats: DatabaseStats | null;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onTabChange,
  onOpenSearch,
  onOpenSqlConsole,
  watchlistCount,
  stats
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#0c121a]/95 backdrop-blur-md border-b border-[#1b2838] shadow-lg">
      {/* Upper Status / Trust Ticker */}
      <div className="bg-[#070b10] border-b border-[#141e2a] py-1 px-4 text-[11px] font-mono text-zinc-400 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 whitespace-nowrap">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-sky-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span>Universal Catalog: Active (Sample Multi-Store Dataset)</span>
            </div>
            {stats && (
              <>
                <span className="text-zinc-700">·</span>
                <span>
                  Games: <strong className="text-white">{stats.totalGames}</strong>
                </span>
                <span className="text-zinc-700">·</span>
                <span>
                  Platforms: <strong className="text-[#38bdf8]">{stats.totalPlatforms || 6}</strong>
                </span>
                <span className="text-zinc-700">·</span>
                <span>
                  Store Listings: <strong className="text-zinc-200">{stats.totalListings}</strong>
                </span>
                <span className="text-zinc-700">·</span>
                <span>
                  Deals: <strong className="text-[#a3e635]">{stats.activeDiscounts}</strong>
                </span>
                <span className="text-zinc-700">·</span>
                <span>
                  Record Lows: <strong className="text-amber-300">{stats.historicalLows}</strong>
                </span>
              </>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSqlConsole}
              className="flex items-center gap-1.5 text-zinc-400 hover:text-[#66c0f4] transition-colors cursor-pointer text-[10px]"
              title="Inspect underlying PostgreSQL PGlite database"
            >
              <Terminal className="w-3 h-3" />
              <span>SQL Inspector</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div
          onClick={() => onTabChange('home')}
          className="flex items-center gap-3 cursor-pointer select-none group flex-shrink-0"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#192738] to-[#0d141e] border border-[#2b4460] flex items-center justify-center shadow-md group-hover:border-[#38bdf8] transition-colors">
            <Gamepad2 className="w-5 h-5 text-[#38bdf8]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base sm:text-lg tracking-wider text-white font-mono">
                UNIVERSAL <span className="text-[#38bdf8]">GAME DB</span>
              </span>
            </div>
            <span className="text-[10px] text-zinc-400 font-sans block -mt-0.5 tracking-tight">
              Every game. Every platform. One database.
            </span>
          </div>
        </div>

        {/* Global Search Button */}
        <div className="flex-1 max-w-md hidden md:block">
          <button
            onClick={onOpenSearch}
            className="w-full flex items-center justify-between px-3.5 py-2 rounded-lg bg-[#070b10] hover:bg-[#0f1824] border border-[#1b2838] hover:border-[#2d4763] text-xs font-sans text-zinc-400 transition-colors shadow-inner"
          >
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-zinc-500" />
              <span>Search games, studios, publishers...</span>
            </div>
            <kbd className="px-1.5 py-0.5 rounded bg-[#101722] border border-[#223348] text-[10px] font-mono text-zinc-400">
              Ctrl+K
            </kbd>
          </button>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1 sm:gap-1.5">
          <button
            onClick={() => onTabChange('home')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              currentTab === 'home'
                ? 'bg-[#1b2b3d] text-white border border-[#2d4763] shadow-sm'
                : 'text-zinc-300 hover:text-white hover:bg-zinc-800/40'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => onTabChange('browse')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              currentTab === 'browse'
                ? 'bg-[#1b2b3d] text-white border border-[#2d4763] shadow-sm'
                : 'text-zinc-300 hover:text-white hover:bg-zinc-800/40'
            }`}
          >
            Games
          </button>

          <button
            onClick={() => onTabChange('sales')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              currentTab === 'sales'
                ? 'bg-[#1b2b3d] text-[#a3e635] border border-[#a3e635]/40 shadow-sm'
                : 'text-zinc-300 hover:text-white hover:bg-zinc-800/40'
            }`}
          >
            <TrendingDown className="w-3.5 h-3.5 text-[#a3e635]" />
            <span>Deals</span>
          </button>

          <button
            onClick={() => onTabChange('matrix')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all hidden lg:flex items-center gap-1.5 ${
              currentTab === 'matrix'
                ? 'bg-[#1b2b3d] text-white border border-[#2d4763] shadow-sm'
                : 'text-zinc-300 hover:text-white hover:bg-zinc-800/40'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>Platforms</span>
          </button>

          <button
            onClick={() => onTabChange('studios')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all hidden sm:flex items-center gap-1.5 ${
              currentTab === 'studios'
                ? 'bg-[#1b2b3d] text-white border border-[#2d4763] shadow-sm'
                : 'text-zinc-300 hover:text-white hover:bg-zinc-800/40'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Studios</span>
          </button>

          {/* Watchlist Tab with count indicator */}
          <button
            onClick={() => onTabChange('watchlist')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              currentTab === 'watchlist'
                ? 'bg-[#1b2b3d] text-amber-300 border border-amber-500/40 shadow-sm'
                : 'text-zinc-300 hover:text-white hover:bg-zinc-800/40'
            }`}
          >
            <Bell className="w-3.5 h-3.5 text-amber-400" />
            <span>Wishlist</span>
            {watchlistCount > 0 && (
              <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-amber-500 text-black">
                {watchlistCount}
              </span>
            )}
          </button>

          {/* Mobile search button */}
          <button
            onClick={onOpenSearch}
            className="md:hidden p-2 rounded-lg bg-[#070b10] text-zinc-300 border border-[#1b2838]"
            title="Search"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
        </nav>
      </div>
    </header>
  );
};
