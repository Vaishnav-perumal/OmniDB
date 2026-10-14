import React, { useState, useEffect } from 'react';
import { db } from '../db/database';
import { Developer, Publisher } from '../types/database';
import { Building2, Globe, Calendar, ArrowRight, ExternalLink, Database } from 'lucide-react';

interface StudiosViewProps {
  onSelectStudioGames: (studioName: string) => void;
}

export const StudiosView: React.FC<StudiosViewProps> = ({ onSelectStudioGames }) => {
  const [developers, setDevelopers] = useState<Developer[]>([]);
  const [publishers, setPublishers] = useState<Publisher[]>([]);
  const [activeTab, setActiveTab] = useState<'developers' | 'publishers'>('developers');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStudios();
  }, []);

  const loadStudios = async () => {
    setLoading(true);
    try {
      const [devs, pubs] = await Promise.all([
        db.getDevelopersWithCounts(),
        db.getPublishersWithCounts()
      ]);
      setDevelopers(devs);
      setPublishers(pubs);
    } catch (err) {
      console.error('Failed to load studios from PostgreSQL:', err);
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
              <Building2 className="w-5 h-5" />
            </span>
            <h1 className="text-2xl font-extrabold text-white uppercase font-mono tracking-wide">
              Game Studios & Publishers Directory
            </h1>
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            Relational developer and publisher entities tracked in PostgreSQL with direct catalog indexing.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center bg-[#090d13] p-1 rounded-lg border border-[#1b2838] font-mono text-xs">
          <button
            onClick={() => setActiveTab('developers')}
            className={`px-4 py-1.5 rounded-md font-medium transition-colors ${
              activeTab === 'developers'
                ? 'bg-[#1b2838] text-[#66c0f4] font-semibold'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Developers ({developers.length})
          </button>
          <button
            onClick={() => setActiveTab('publishers')}
            className={`px-4 py-1.5 rounded-md font-medium transition-colors ${
              activeTab === 'publishers'
                ? 'bg-[#1b2838] text-[#66c0f4] font-semibold'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Publishers ({publishers.length})
          </button>
        </div>
      </div>

      {loading ? (
        <div className="py-24 text-center space-y-3 font-mono">
          <div className="inline-block w-8 h-8 border-2 border-[#66c0f4] border-t-transparent rounded-full animate-spin" />
          <div className="text-zinc-500 text-xs">Loading studio records from PostgreSQL...</div>
        </div>
      ) : activeTab === 'developers' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {developers.map(dev => (
            <div
              key={dev.id}
              className="bg-[#101721] rounded-xl border border-[#1b2838] hover:border-[#2b4461] p-5 flex flex-col justify-between transition-all shadow-md group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#66c0f4] bg-[#162232] px-2 py-0.5 rounded border border-[#23384f]">
                    Studio ID: {dev.slug}
                  </span>
                  <span className="text-xs font-mono text-[#a4d007] font-semibold">
                    {dev.game_count || 1} Game{(dev.game_count || 1) > 1 ? 's' : ''} Tracked
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#66c0f4] transition-colors mb-2">
                  {dev.name}
                </h3>

                <div className="space-y-1.5 text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-zinc-500" />
                    <span>Country: <strong className="text-zinc-200">{dev.country}</strong></span>
                  </div>
                  {dev.founded_year && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      <span>Founded: <strong className="text-zinc-200">{dev.founded_year}</strong></span>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-[#17212e] mt-4 flex items-center justify-between">
                <a
                  href={dev.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-zinc-500 hover:text-zinc-300 flex items-center gap-1"
                >
                  <span>Website</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  onClick={() => onSelectStudioGames(dev.name)}
                  className="px-3 py-1.5 rounded bg-[#1b2838] hover:bg-[#25394f] text-[#66c0f4] text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span>Catalog</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {publishers.map(pub => (
            <div
              key={pub.id}
              className="bg-[#101721] rounded-xl border border-[#1b2838] hover:border-[#2b4461] p-5 flex flex-col justify-between transition-all shadow-md group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#66c0f4] bg-[#162232] px-2 py-0.5 rounded border border-[#23384f]">
                    Publisher ID: {pub.slug}
                  </span>
                  <span className="text-xs font-mono text-[#a4d007] font-semibold">
                    {pub.game_count || 1} Game{(pub.game_count || 1) > 1 ? 's' : ''}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#66c0f4] transition-colors mb-2">
                  {pub.name}
                </h3>

                <div className="space-y-1.5 text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5 text-zinc-500" />
                    <span>HQ: <strong className="text-zinc-200">{pub.headquarters}</strong></span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#17212e] mt-4 flex items-center justify-between">
                <a
                  href={pub.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-zinc-500 hover:text-zinc-300 flex items-center gap-1"
                >
                  <span>Website</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  onClick={() => onSelectStudioGames(pub.name)}
                  className="px-3 py-1.5 rounded bg-[#1b2838] hover:bg-[#25394f] text-[#66c0f4] text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span>Catalog</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
