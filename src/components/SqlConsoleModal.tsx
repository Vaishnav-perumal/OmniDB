import React, { useState } from 'react';
import { db } from '../db/database';
import { Terminal, Play, X, Database, Table, Clock, CheckCircle2, AlertTriangle, Copy, Sparkles } from 'lucide-react';

interface SqlConsoleModalProps {
  onClose: () => void;
}

const PRESET_QUERIES = [
  {
    name: 'Cross-Platform Pricing Comparison',
    description: 'Shows games and prices across multiple platforms with discount comparison',
    sql: `SELECT 
  g.title,
  pl.platform_id,
  pl.currency,
  pl.current_price,
  pl.original_price,
  pl.discount_percent,
  pl.historical_low_price,
  pl.drm_type
FROM platform_listings pl
JOIN games g ON pl.game_id = g.id
WHERE pl.discount_percent > 0
ORDER BY pl.discount_percent DESC
LIMIT 12;`
  },
  {
    name: 'Multi-Platform Junction Summary',
    description: 'Verifies the same game has multiple platform listings, showing lowest price & platforms count',
    sql: `SELECT 
  g.id,
  g.title,
  d.name AS developer,
  COUNT(pl.id) AS store_listings_count,
  MIN(pl.current_price) AS lowest_price,
  MAX(pl.discount_percent) AS highest_discount_percent,
  STRING_AGG(pl.platform_id, ', ') AS available_on_platforms
FROM games g
JOIN developers d ON g.developer_id = d.id
JOIN platform_listings pl ON g.id = pl.game_id
GROUP BY g.id, g.title, d.name
ORDER BY store_listings_count DESC, lowest_price ASC;`
  },
  {
    name: 'All-Time Historical Lows Currently Active',
    description: 'Finds game listings where the current price matches or beats the recorded historical low',
    sql: `SELECT 
  g.title,
  pl.platform_id,
  pl.current_price,
  pl.historical_low_price,
  pl.historical_low_date,
  pl.discount_percent
FROM platform_listings pl
JOIN games g ON pl.game_id = g.id
WHERE pl.current_price <= pl.historical_low_price AND pl.discount_percent > 0
ORDER BY pl.discount_percent DESC;`
  },
  {
    name: 'Top Games by Live Steam Players',
    description: 'Queries live concurrent player counts and 24h peaks for Steam listings',
    sql: `SELECT 
  g.title,
  pl.current_players,
  pl.peak_players_24h,
  pl.all_time_peak_players,
  pl.rating_positive_percent,
  pl.review_count
FROM platform_listings pl
JOIN games g ON pl.game_id = g.id
WHERE pl.platform_id = 'steam' AND pl.current_players > 0
ORDER BY pl.current_players DESC;`
  },
  {
    name: 'Active User Watchlist Alerts Triggered',
    description: 'Queries user watchlist joined with live listings to find target prices met',
    sql: `SELECT 
  w.id,
  w.user_id,
  g.title,
  w.target_price,
  MIN(pl.current_price) as current_lowest_price,
  CASE WHEN MIN(pl.current_price) <= w.target_price THEN 'ALERT_TRIGGERED' ELSE 'MONITORING' END as alert_status
FROM user_watchlist w
JOIN games g ON w.game_id = g.id
LEFT JOIN platform_listings pl ON g.id = pl.game_id
GROUP BY w.id, w.user_id, g.title, w.target_price;`
  }
];

const TABLES = [
  'games',
  'platform_listings',
  'price_history',
  'platforms',
  'developers',
  'publishers',
  'game_editions',
  'game_dlcs',
  'user_watchlist'
];

export const SqlConsoleModal: React.FC<SqlConsoleModalProps> = ({ onClose }) => {
  const [query, setQuery] = useState(PRESET_QUERIES[0].sql);
  const [results, setResults] = useState<any[] | null>(null);
  const [fields, setFields] = useState<any[] | null>(null);
  const [timeMs, setTimeMs] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const runQuery = async (sqlToRun?: string) => {
    const q = sqlToRun || query;
    setLoading(true);
    setError(null);
    try {
      const res = await db.runRawSql(q);
      setResults(res.rows);
      setFields(res.fields || []);
      setTimeMs(res.timeMs);
    } catch (err: any) {
      setError(err?.message || 'SQL execution failed');
      setResults(null);
    } finally {
      setLoading(false);
    }
  };

  const loadPreset = (preset: typeof PRESET_QUERIES[0]) => {
    setQuery(preset.sql);
    runQuery(preset.sql);
  };

  const copyQuery = () => {
    navigator.clipboard.writeText(query);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Run initial query on mount
  React.useEffect(() => {
    runQuery(PRESET_QUERIES[0].sql);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#0e141c] border border-[#233547] rounded-xl max-w-5xl w-full h-[90vh] flex flex-col overflow-hidden shadow-2xl">
        {/* Top Header */}
        <div className="p-4 bg-[#141e2b] border-b border-[#1b2838] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#1b2838] text-[#a4d007] border border-[#a4d007]/30">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white font-mono uppercase tracking-wide">
                  PostgreSQL Interactive Console & Schema Inspector
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#1b2838] text-[#66c0f4] border border-[#2a475e]">
                  PGlite WASM Engine
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-sans mt-0.5">
                Query relational tables, multi-platform junction listings, and price history in real-time.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Split */}
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          {/* Left / Presets sidebar */}
          <div className="w-full lg:w-72 bg-[#0a0f16] border-b lg:border-b-0 lg:border-r border-[#1b2838] p-3 flex flex-col gap-3 overflow-y-auto">
            <div>
              <div className="text-[11px] font-mono text-zinc-400 uppercase font-semibold mb-2 flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-[#66c0f4]" />
                <span>Postgres Relational Tables</span>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-1">
                {TABLES.map(tbl => (
                  <button
                    key={tbl}
                    onClick={() => {
                      const q = `SELECT * FROM ${tbl} LIMIT 10;`;
                      setQuery(q);
                      runQuery(q);
                    }}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-mono text-zinc-300 hover:text-white hover:bg-[#15202e] border border-transparent hover:border-[#1e2f42] text-left transition-colors"
                  >
                    <Table className="w-3 h-3 text-zinc-500" />
                    <span>{tbl}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-[#1b2838]">
              <div className="text-[11px] font-mono text-zinc-400 uppercase font-semibold mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#a4d007]" />
                <span>Preset Queries</span>
              </div>
              <div className="space-y-1.5">
                {PRESET_QUERIES.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => loadPreset(p)}
                    className="w-full text-left p-2 rounded bg-[#0d141e] hover:bg-[#162333] border border-[#1b2838] hover:border-[#2a475e] transition-colors group"
                  >
                    <div className="text-xs font-mono font-semibold text-zinc-200 group-hover:text-[#66c0f4] line-clamp-1">
                      {p.name}
                    </div>
                    <div className="text-[10px] text-zinc-500 line-clamp-2 mt-0.5">
                      {p.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Editor & Results */}
          <div className="flex-1 flex flex-col overflow-hidden bg-[#0d131c]">
            {/* SQL Editor Area */}
            <div className="p-3 border-b border-[#1b2838] bg-[#090d14]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-zinc-400 font-semibold">
                  SQL Query Editor (Standard PostgreSQL DQL/DML)
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={copyQuery}
                    className="px-2 py-1 rounded bg-[#16212e] text-zinc-300 hover:text-white text-xs font-mono flex items-center gap-1 border border-[#233547]"
                  >
                    <Copy className="w-3 h-3" />
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                  <button
                    onClick={() => runQuery()}
                    disabled={loading}
                    className="px-3.5 py-1.5 rounded bg-[#5c7e10] hover:bg-[#6f9614] text-white font-mono text-xs font-bold flex items-center gap-1.5 shadow transition-all disabled:opacity-50"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>{loading ? 'Running...' : 'Execute SQL (Ctrl+Enter)'}</span>
                  </button>
                </div>
              </div>

              <textarea
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={e => {
                  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                    runQuery();
                  }
                }}
                rows={5}
                className="w-full p-3 font-mono text-xs text-white bg-[#0b1017] rounded border border-[#1b2838] focus:border-[#66c0f4] outline-none leading-relaxed resize-none shadow-inner"
                spellCheck={false}
              />
            </div>

            {/* Execution Status Bar */}
            <div className="px-4 py-2 bg-[#101722] border-b border-[#1b2838] flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-3">
                {error ? (
                  <span className="text-red-400 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Error executing statement</span>
                  </span>
                ) : results ? (
                  <span className="text-[#a4d007] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Query successful: {results.length} rows returned</span>
                  </span>
                ) : null}
              </div>

              {timeMs !== null && (
                <div className="flex items-center gap-1 text-zinc-400">
                  <Clock className="w-3 h-3" />
                  <span>Execution time: <strong className="text-white">{timeMs} ms</strong></span>
                </div>
              )}
            </div>

            {/* Query Output View */}
            <div className="flex-1 overflow-auto p-4 bg-[#090d13]">
              {error ? (
                <div className="p-4 rounded bg-red-950/40 border border-red-800/60 text-red-300 font-mono text-xs whitespace-pre-wrap">
                  {error}
                </div>
              ) : results && results.length > 0 ? (
                <div className="border border-[#1b2838] rounded overflow-hidden">
                  <table className="w-full text-left font-mono text-xs border-collapse">
                    <thead>
                      <tr className="bg-[#141e2b] text-zinc-300 border-b border-[#1b2838]">
                        {Object.keys(results[0]).map(key => (
                          <th key={key} className="py-2 px-3 font-semibold text-[11px] uppercase tracking-wider text-[#66c0f4] border-r border-[#1b2838] last:border-r-0 whitespace-nowrap">
                            {key}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#17212e]">
                      {results.map((row, rowIdx) => (
                        <tr key={rowIdx} className="hover:bg-[#121c28] transition-colors">
                          {Object.keys(row).map((key, colIdx) => (
                            <td
                              key={colIdx}
                              className="py-2 px-3 text-zinc-300 border-r border-[#17212e] last:border-r-0 whitespace-nowrap max-w-xs truncate"
                              title={typeof row[key] === 'object' ? JSON.stringify(row[key]) : String(row[key])}
                            >
                              {row[key] === null || row[key] === undefined ? (
                                <span className="text-zinc-600 italic">null</span>
                              ) : typeof row[key] === 'boolean' ? (
                                <span className={row[key] ? 'text-emerald-400' : 'text-red-400'}>
                                  {String(row[key])}
                                </span>
                              ) : typeof row[key] === 'object' ? (
                                JSON.stringify(row[key])
                              ) : (
                                String(row[key])
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : results && results.length === 0 ? (
                <div className="text-center py-12 text-zinc-500 font-mono text-xs">
                  Query returned 0 rows.
                </div>
              ) : (
                <div className="text-center py-12 text-zinc-500 font-mono text-xs">
                  Press Execute SQL to run queries against PostgreSQL.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
