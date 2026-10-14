import React, { useState, useMemo } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine,
  Legend
} from 'recharts';
import { PlatformListing, PriceHistoryPoint, PlatformId } from '../types/database';
import { formatPrice, formatDate } from '../utils/formatters';
import { PLATFORM_CONFIG } from './PlatformBadge';
import { Database, TrendingDown, ArrowDownCircle, History, Sparkles, Filter, Calendar } from 'lucide-react';

interface RechartsPriceHistoryChartProps {
  listings: PlatformListing[];
  priceHistories: { listing: PlatformListing; history: PriceHistoryPoint[] }[];
  targetPrice?: number;
}

const PLATFORM_COLORS: Record<string, string> = {
  steam: '#66c0f4',
  playstation: '#38bdf8',
  xbox: '#22c55e',
  nintendo: '#ef4444',
  epic: '#e2e8f0',
  gog: '#c084fc'
};

export const RechartsPriceHistoryChart: React.FC<RechartsPriceHistoryChartProps> = ({
  listings,
  priceHistories,
  targetPrice
}) => {
  // Available platforms with history
  const availablePlatforms = useMemo(() => {
    const list: PlatformId[] = [];
    for (const ph of priceHistories) {
      if (ph.history.length > 0 && !list.includes(ph.listing.platform_id)) {
        list.push(ph.listing.platform_id);
      }
    }
    return list.length > 0 ? list : listings.map(l => l.platform_id);
  }, [priceHistories, listings]);

  const [selectedPlatforms, setSelectedPlatforms] = useState<PlatformId[]>(() => {
    return availablePlatforms.slice(0, 3);
  });

  const [timeRange, setTimeRange] = useState<'30D' | '3M' | '6M' | '1Y' | 'ALL'>('ALL');

  const togglePlatform = (pid: PlatformId) => {
    setSelectedPlatforms(prev => {
      if (prev.includes(pid)) {
        if (prev.length === 1) return prev; // Keep at least one
        return prev.filter(x => x !== pid);
      }
      return [...prev, pid];
    });
  };

  // Find lowest recorded price across listings
  const overallHistoricalLow = useMemo(() => {
    let low = Infinity;
    for (const l of listings) {
      if (l.historical_low_price > 0 && l.historical_low_price < low) {
        low = l.historical_low_price;
      }
    }
    for (const ph of priceHistories) {
      for (const pt of ph.history) {
        if (pt.price > 0 && pt.price < low) {
          low = pt.price;
        }
      }
    }
    return low === Infinity ? 0 : low;
  }, [listings, priceHistories]);

  // Aggregate summary stats
  const stats = useMemo(() => {
    const prices: number[] = [];
    listings.forEach(l => {
      if (l.current_price > 0) prices.push(l.current_price);
    });
    priceHistories.forEach(ph => {
      ph.history.forEach(h => {
        if (h.price > 0) prices.push(h.price);
      });
    });

    const currentLow = listings.length > 0 ? Math.min(...listings.map(l => l.current_price)) : 0;
    const histLow = overallHistoricalLow > 0 ? overallHistoricalLow : currentLow;
    const highest = prices.length > 0 ? Math.max(...prices) : currentLow;
    const avg = prices.length > 0 ? prices.reduce((a, b) => a + b, 0) / prices.length : currentLow;

    return { currentLow, histLow, highest, avg };
  }, [listings, priceHistories, overallHistoricalLow]);

  // Transform relational price history into timeline data for Recharts
  const rechartsData = useMemo(() => {
    // Cutoff based on timeRange
    const now = new Date('2026-09-30').getTime();
    let cutoff = 0;
    if (timeRange === '30D') cutoff = now - 30 * 86400000;
    else if (timeRange === '3M') cutoff = now - 90 * 86400000;
    else if (timeRange === '6M') cutoff = now - 180 * 86400000;
    else if (timeRange === '1Y') cutoff = now - 365 * 86400000;

    // Collect all unique sorted dates
    const dateMap = new Map<string, any>();

    // Initial pass: gather points for selected platforms
    for (const ph of priceHistories) {
      const pid = ph.listing.platform_id;
      if (!selectedPlatforms.includes(pid)) continue;

      for (const pt of ph.history) {
        const time = new Date(pt.recorded_date).getTime();
        if (timeRange !== 'ALL' && time < cutoff) continue;

        const dateKey = pt.recorded_date;
        if (!dateMap.has(dateKey)) {
          dateMap.set(dateKey, {
            date: dateKey,
            timestamp: time,
            displayDate: formatDate(dateKey),
            events: {} as Record<string, string>,
            discounts: {} as Record<string, number>
          });
        }

        const entry = dateMap.get(dateKey);
        entry[pid] = pt.price;
        if (pt.event_name) entry.events[pid] = pt.event_name;
        if (pt.discount_percent) entry.discounts[pid] = pt.discount_percent;
      }
    }

    // Also include today's current prices to end the line cleanly
    const todayKey = '2026-09-28';
    if (!dateMap.has(todayKey)) {
      dateMap.set(todayKey, {
        date: todayKey,
        timestamp: new Date(todayKey).getTime(),
        displayDate: 'Current Price',
        events: {},
        discounts: {}
      });
    }
    const todayEntry = dateMap.get(todayKey);
    for (const l of listings) {
      if (selectedPlatforms.includes(l.platform_id)) {
        todayEntry[l.platform_id] = l.current_price;
        if (l.discount_percent > 0) {
          todayEntry.discounts[l.platform_id] = l.discount_percent;
          todayEntry.events[l.platform_id] = 'Current Store Price';
        }
      }
    }

    // Sort chronologically
    const sorted = Array.from(dateMap.values()).sort((a, b) => a.timestamp - b.timestamp);

    // Forward-fill prices for platforms so lines don't break on missing intermediate dates
    const lastKnownPrice: Record<string, number> = {};
    for (const row of sorted) {
      for (const pid of selectedPlatforms) {
        if (row[pid] !== undefined) {
          lastKnownPrice[pid] = row[pid];
        } else if (lastKnownPrice[pid] !== undefined) {
          row[pid] = lastKnownPrice[pid];
        }
      }
    }

    return sorted;
  }, [priceHistories, listings, selectedPlatforms, timeRange]);

  // Custom Recharts Tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload || !payload.length) return null;

    const rowData = payload[0]?.payload;
    return (
      <div className="bg-[#0b131e]/95 backdrop-blur-md border border-[#253f5d] rounded-xl p-3.5 shadow-2xl font-mono text-xs max-w-xs space-y-2">
        <div className="flex items-center justify-between border-b border-[#1b2b3d] pb-1.5 text-zinc-400">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3 text-[#38bdf8]" />
            <span>{rowData?.displayDate || label}</span>
          </span>
          <span className="text-[10px] text-zinc-500 uppercase">{label}</span>
        </div>

        <div className="space-y-1.5">
          {payload.map((item: any) => {
            const pid = item.dataKey;
            const conf = PLATFORM_CONFIG[pid];
            const eventName = rowData?.events?.[pid];
            const discount = rowData?.discounts?.[pid];

            return (
              <div key={pid} className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-zinc-200 font-semibold">{conf?.name || pid}:</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-white">${Number(item.value).toFixed(2)}</span>
                  {discount > 0 && (
                    <span className="px-1.5 py-0.2 rounded text-[10px] bg-emerald-500/20 text-emerald-300 font-bold">
                      -{discount}%
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Event description if any */}
        {Object.entries(rowData?.events || {}).length > 0 && (
          <div className="pt-1.5 border-t border-[#1b2b3d] text-[11px] text-zinc-400">
            {Object.entries(rowData?.events || {}).map(([pid, ev]) => (
              <div key={pid} className="truncate">
                <span className="text-zinc-500">{PLATFORM_CONFIG[pid]?.short || pid}:</span>{' '}
                <span className="text-amber-300/90">{ev as string}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-[#101721] rounded-xl border border-[#1b2838] overflow-hidden shadow-xl">
      {/* Header with Title and Time Range Selector */}
      <div className="p-4 bg-[#141d2a] border-b border-[#1b2838] flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-white tracking-wide uppercase font-mono flex items-center gap-2">
              <History className="w-4 h-4 text-[#38bdf8]" />
              Historical Price Fluctuations (Recharts)
            </h3>
            <span className="px-2 py-0.5 rounded-full bg-[#1b2838] text-[11px] text-[#38bdf8] border border-[#2a475e] font-mono flex items-center gap-1">
              <Database className="w-3 h-3" />
              <span>PostgreSQL Tracked</span>
            </span>
          </div>
          <p className="text-xs text-zinc-400 mt-0.5 font-mono">
            Visualize discount trends, seasonal sale dips, and record lows fetched from PostgreSQL.
          </p>
        </div>

        {/* Time Range Selector */}
        <div className="flex items-center gap-1 bg-[#0b1017] p-1 rounded-lg border border-[#24374d]">
          {(['30D', '3M', '6M', '1Y', 'ALL'] as const).map(range => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-2.5 py-1 rounded text-xs font-mono font-semibold transition-all ${
                timeRange === range
                  ? 'bg-[#38bdf8] text-slate-950 shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metric Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#1b2838] border-b border-[#1b2838]">
        <div className="bg-[#0e1622] p-3 text-center">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
            Current Lowest
          </span>
          <span className="text-base font-bold text-white font-mono">
            {formatPrice(stats.currentLow)}
          </span>
        </div>
        <div className="bg-[#0e1622] p-3 text-center">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
            All-Time Record Low
          </span>
          <span className="text-base font-bold text-emerald-400 font-mono">
            {formatPrice(stats.histLow)}
          </span>
        </div>
        <div className="bg-[#0e1622] p-3 text-center">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
            Average Sale Price
          </span>
          <span className="text-base font-bold text-[#38bdf8] font-mono">
            {formatPrice(stats.avg)}
          </span>
        </div>
        <div className="bg-[#0e1622] p-3 text-center">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
            Highest MSRP / Retail
          </span>
          <span className="text-base font-bold text-zinc-300 font-mono">
            {formatPrice(stats.highest)}
          </span>
        </div>
      </div>

      {/* Interactive Platform Series Toggles */}
      <div className="px-4 py-2.5 bg-[#0b121b] border-b border-[#1b2838] flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
          <span className="text-zinc-500 mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Platforms:
          </span>
          {availablePlatforms.map(pid => {
            const conf = PLATFORM_CONFIG[pid];
            const isSelected = selectedPlatforms.includes(pid);
            const color = PLATFORM_COLORS[pid] || '#38bdf8';
            return (
              <button
                key={pid}
                onClick={() => togglePlatform(pid)}
                className={`px-2.5 py-1 rounded text-xs font-mono transition-all flex items-center gap-1.5 border ${
                  isSelected
                    ? 'bg-[#152332] text-white border-opacity-70 shadow-sm'
                    : 'bg-[#0b1017] text-zinc-500 border-zinc-800 hover:text-zinc-300'
                }`}
                style={{
                  borderColor: isSelected ? color : undefined
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <span>{conf?.name || pid}</span>
              </button>
            );
          })}
        </div>

        {/* Legend notes */}
        <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-400">
          <div className="flex items-center gap-1">
            <span className="w-3 h-0.5 bg-emerald-400 inline-block" />
            <span className="text-emerald-400">All-Time Low ({formatPrice(stats.histLow)})</span>
          </div>
          {targetPrice && targetPrice > 0 && (
            <div className="flex items-center gap-1">
              <span className="w-3 h-0.5 bg-amber-400 inline-block border-t border-dashed border-amber-400" />
              <span className="text-amber-400">Your Target ({formatPrice(targetPrice)})</span>
            </div>
          )}
        </div>
      </div>

      {/* Recharts SVG Visualization Area */}
      <div className="p-4 bg-[#0a0f16]">
        {rechartsData.length === 0 ? (
          <div className="py-20 text-center font-mono text-xs text-zinc-500">
            No historical price points recorded for the selected time window.
          </div>
        ) : (
          <div className="w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={rechartsData}
                margin={{ top: 15, right: 25, left: 10, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#1a2736" vertical={false} />
                <XAxis
                  dataKey="date"
                  stroke="#475569"
                  tick={{ fill: '#64748b', fontSize: 11, fontFamily: 'monospace' }}
                  tickFormatter={dateStr => {
                    const d = new Date(dateStr);
                    return `${d.getMonth() + 1}/${d.getFullYear().toString().slice(2)}`;
                  }}
                  tickLine={false}
                />
                <YAxis
                  stroke="#475569"
                  tick={{ fill: '#64748b', fontSize: 11, fontFamily: 'monospace' }}
                  tickFormatter={val => `$${val}`}
                  domain={['auto', 'auto']}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip content={<CustomTooltip />} />

                {/* Reference Line: Historical All-Time Low */}
                {stats.histLow > 0 && (
                  <ReferenceLine
                    y={stats.histLow}
                    stroke="#10b981"
                    strokeDasharray="4 4"
                    strokeWidth={1.5}
                    label={{
                      value: `Record Low ($${stats.histLow.toFixed(2)})`,
                      fill: '#10b981',
                      fontSize: 10,
                      position: 'insideBottomRight',
                      fontFamily: 'monospace'
                    }}
                  />
                )}

                {/* Reference Line: User's Set Price Alert Target */}
                {targetPrice && targetPrice > 0 && (
                  <ReferenceLine
                    y={targetPrice}
                    stroke="#f59e0b"
                    strokeDasharray="3 3"
                    strokeWidth={1.5}
                    label={{
                      value: `Target Alert ($${targetPrice.toFixed(2)})`,
                      fill: '#f59e0b',
                      fontSize: 10,
                      position: 'insideTopRight',
                      fontFamily: 'monospace'
                    }}
                  />
                )}

                {/* Store platform lines */}
                {selectedPlatforms.map(pid => {
                  const color = PLATFORM_COLORS[pid] || '#38bdf8';
                  return (
                    <Line
                      key={pid}
                      type="stepAfter"
                      dataKey={pid}
                      name={PLATFORM_CONFIG[pid]?.name || pid}
                      stroke={color}
                      strokeWidth={2.5}
                      dot={{ r: 3.5, fill: color, strokeWidth: 1, stroke: '#0a0f16' }}
                      activeDot={{ r: 6, fill: '#ffffff', stroke: color, strokeWidth: 2 }}
                      connectNulls
                    />
                  );
                })}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* Database Provenance Footer */}
      <div className="px-4 py-2.5 bg-[#0b1017] border-t border-[#1b2838] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-zinc-500">
        <div className="flex items-center gap-2">
          <Database className="w-3.5 h-3.5 text-[#38bdf8]" />
          <span>
            Queried from: <code>SELECT * FROM price_history WHERE listing_id IN (...) ORDER BY recorded_date ASC</code>
          </span>
        </div>
        <div className="text-zinc-400">
          Showing {rechartsData.length} timeline milestones
        </div>
      </div>
    </div>
  );
};
