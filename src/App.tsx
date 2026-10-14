import React, { useState, useEffect } from 'react';
import { db } from './db/database';
import { GAMES_DATA, PLATFORM_LISTINGS_DATA } from './db/seedData';
import { Game, DatabaseStats } from './types/database';
import { Header } from './components/Header';
import { HomeView } from './views/HomeView';
import { DatabaseBrowserView } from './views/DatabaseBrowserView';
import { GameDetailView } from './views/GameDetailView';
import { SalesView } from './views/SalesView';
import { PlatformMatrixView } from './views/PlatformMatrixView';
import { WatchlistView } from './views/WatchlistView';
import { StudiosView } from './views/StudiosView';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { SqlConsoleModal } from './components/SqlConsoleModal';
import { Terminal, Database, Sparkles, ShieldCheck, Heart } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'home' | 'browse' | 'sales' | 'matrix' | 'studios' | 'watchlist'>('home');
  const [selectedGameId, setSelectedGameId] = useState<string | null>(null);
  const [initialBrowserFilter, setInitialBrowserFilter] = useState<{ platform?: any; sortBy?: any } | undefined>();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSqlConsoleOpen, setIsSqlConsoleOpen] = useState(false);

  // Instant initial synchronous seed games for zero-delay instant render
  const [games, setGames] = useState<Game[]>(() => {
    return GAMES_DATA.map(g => {
      const listings = PLATFORM_LISTINGS_DATA.filter(pl => pl.game_id === g.id);
      const lowest = listings.length > 0 ? Math.min(...listings.map(l => l.current_price)) : 0;
      const maxDisc = listings.length > 0 ? Math.max(...listings.map(l => l.discount_percent)) : 0;
      const totalPlayers = listings.reduce((sum, l) => sum + (l.current_players || 0), 0);
      const platforms = Array.from(new Set(listings.map(l => l.platform_id)));
      const isHl = listings.some(l => l.current_price <= l.historical_low_price && l.discount_percent > 0);

      return {
        ...g,
        lowest_current_price: lowest,
        max_discount: maxDisc,
        total_listings: listings.length,
        total_live_players: totalPlayers,
        platforms,
        is_historical_low: isHl
      };
    });
  });
  const [stats, setStats] = useState<DatabaseStats | null>(null);
  const [watchlistCount, setWatchlistCount] = useState<number>(0);
  const [isDbInitialized, setIsDbInitialized] = useState(true);

  // Load initial database data
  const loadDatabaseData = async () => {
    try {
      const [allGames, dbStats, watchlistItems] = await Promise.all([
        db.getAllGames(),
        db.getStats(),
        db.getUserWatchlist()
      ]);
      setGames(allGames);
      setStats(dbStats);
      setWatchlistCount(watchlistItems.length);
      setIsDbInitialized(true);
    } catch (err) {
      console.error('Failed to load initial PostgreSQL data:', err);
    }
  };

  useEffect(() => {
    loadDatabaseData();
  }, []);

  // Global Keyboard Shortcuts (Ctrl+K or / to open search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      } else if (e.key === '/' && !(e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement)) {
        e.preventDefault();
        setIsSearchOpen(true);
      } else if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsSqlConsoleOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectGame = (gameId: string) => {
    setSelectedGameId(gameId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToTab = (tab: string, filter?: any) => {
    setSelectedGameId(null);
    if (filter) {
      setInitialBrowserFilter(filter);
    } else {
      setInitialBrowserFilter(undefined);
    }
    setCurrentTab(tab as any);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFilterByStudio = (studioName: string) => {
    setSelectedGameId(null);
    setInitialBrowserFilter({ sortBy: 'popular' });
    setCurrentTab('browse');
  };

  return (
    <div className="min-h-screen bg-[#0b0e14] text-[#c7d5e0] flex flex-col font-sans selection:bg-[#66c0f4]/20 selection:text-[#66c0f4]">
      {/* Sticky Header with Ticker */}
      <Header
        currentTab={selectedGameId ? 'game_detail' : currentTab}
        onTabChange={tab => {
          setSelectedGameId(null);
          setCurrentTab(tab as any);
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenSqlConsole={() => setIsSqlConsoleOpen(true)}
        watchlistCount={watchlistCount}
        stats={stats}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 pt-6">
        {selectedGameId ? (
          <GameDetailView
            gameId={selectedGameId}
            onBack={() => setSelectedGameId(null)}
            onSelectStudio={handleFilterByStudio}
          />
        ) : currentTab === 'home' ? (
          <HomeView
            games={games}
            stats={stats}
            onSelectGame={handleSelectGame}
            onNavigateToTab={handleNavigateToTab}
            onOpenSqlConsole={() => setIsSqlConsoleOpen(true)}
            onOpenSearch={() => setIsSearchOpen(true)}
          />
        ) : currentTab === 'browse' ? (
          <DatabaseBrowserView
            initialPlatform={initialBrowserFilter?.platform}
            initialSortBy={initialBrowserFilter?.sortBy}
            onSelectGame={handleSelectGame}
          />
        ) : currentTab === 'sales' ? (
          <SalesView
            onSelectGame={handleSelectGame}
            initialFilter={initialBrowserFilter as any}
          />
        ) : currentTab === 'matrix' ? (
          <PlatformMatrixView onSelectGame={handleSelectGame} />
        ) : currentTab === 'studios' ? (
          <StudiosView onSelectStudioGames={handleFilterByStudio} />
        ) : currentTab === 'watchlist' ? (
          <WatchlistView
            onSelectGame={handleSelectGame}
            onNavigateToBrowse={() => setCurrentTab('browse')}
          />
        ) : null}
      </main>

      {/* Global Modals */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectGame={handleSelectGame}
      />

      {isSqlConsoleOpen && (
        <SqlConsoleModal onClose={() => setIsSqlConsoleOpen(false)} />
      )}

      {/* Floating SQL Inspector Quick Trigger */}
      <button
        onClick={() => setIsSqlConsoleOpen(true)}
        className="fixed bottom-5 right-5 z-30 px-3.5 py-2.5 rounded-full bg-[#16212e]/90 hover:bg-[#203144] border border-[#2e4763] text-[#66c0f4] text-xs font-mono font-bold shadow-2xl flex items-center gap-2 backdrop-blur-md transition-all hover:scale-105 group"
      >
        <div className="w-2 h-2 rounded-full bg-emerald-400 group-hover:animate-ping" />
        <Terminal className="w-4 h-4 text-[#a4d007]" />
        <span className="hidden sm:inline">PostgreSQL Console</span>
      </button>

      {/* Footer */}
      <footer className="bg-[#070b10] border-t border-[#15202c] py-8 text-xs font-mono text-zinc-500 mt-auto">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-[#101722] border border-[#203144] flex items-center justify-center text-[#38bdf8]">
              <Database className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-zinc-200 font-bold font-mono">Universal Game DB</span>
              <span className="text-zinc-500 ml-2 font-sans text-[11px]">— Every game. Every platform. One database.</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-zinc-400 text-[11px] font-mono">
            <span>Steam</span>
            <span>·</span>
            <span>Epic Games</span>
            <span>·</span>
            <span>GOG</span>
            <span>·</span>
            <span>PlayStation</span>
            <span>·</span>
            <span>Xbox</span>
            <span>·</span>
            <span>Nintendo</span>
          </div>

          <div className="text-[11px] text-zinc-500 font-mono">
            Relational Multi-Store Gaming Catalog
          </div>
        </div>
      </footer>
    </div>
  );
}
