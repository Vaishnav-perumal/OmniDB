import React, { useState, useMemo } from 'react';
import { PlatformListing, PriceHistoryPoint, PlatformId } from '../types/database';
import { formatPrice, formatDate } from '../utils/formatters';
import { PLATFORM_CONFIG } from './PlatformBadge';

interface PriceHistoryChartProps {
  listings: PlatformListing[];
  priceHistories: { listing: PlatformListing; history: PriceHistoryPoint[] }[];
}

export const PriceHistoryChart: React.FC<PriceHistoryChartProps> = ({ listings, priceHistories }) => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<PlatformId[]>(() => {
    // Default to first 2 available platforms or steam
    const initial = listings.map(l => l.platform_id);
    return initial.slice(0, 3);
  });
  const [timeRange, setTimeRange] = useState<'7D' | '30D' | '3M' | '6M' | '1Y' | 'ALL'>('ALL');
  const [hoveredPoint, setHoveredPoint] = useState<{
    date: string;
    price: number;
    discount: number;
    platformId: PlatformId;
    event: string;
    x: number;
    y: number;
  } | null>(null);

  const togglePlatform = (pId: PlatformId) => {
    setSelectedPlatforms(prev => {
      if (prev.includes(pId)) {
        if (prev.length === 1) return prev; // Keep at least one
        return prev.filter(id => id !== pId);
      }
      return [...prev, pId];
    });
  };

  // Find overall lowest recorded price across all listings
  const overallHistoricalLow = useMemo(() => {
    let lowest = Infinity;
    let lowestListing: PlatformListing | null = null;
    for (const l of listings) {
      if (l.historical_low_price > 0 && l.historical_low_price < lowest) {
        lowest = l.historical_low_price;
        lowestListing = l;
      }
    }
    return { price: lowest === Infinity ? 0 : lowest, listing: lowestListing };
  }, [listings]);

  // Aggregate key price metrics: Current, Historical Low, Highest, Average
  const priceMetrics = useMemo(() => {
    const allPrices: number[] = [];
    listings.forEach(l => {
      if (l.current_price > 0) allPrices.push(l.current_price);
    });
    priceHistories.forEach(ph => {
      ph.history.forEach(h => {
        if (h.price > 0) allPrices.push(h.price);
      });
    });

    const currentLowest = listings.length > 0 ? Math.min(...listings.map(l => l.current_price)) : 0;
    const historicalLowest = overallHistoricalLow.price > 0 ? overallHistoricalLow.price : currentLowest;
    const highest = allPrices.length > 0 ? Math.max(...allPrices) : currentLowest;
    const average = allPrices.length > 0 ? allPrices.reduce((a, b) => a + b, 0) / allPrices.length : currentLowest;

    return {
      currentLowest,
      historicalLowest,
      highest,
      average
    };
  }, [listings, priceHistories, overallHistoricalLow]);

  // Aggregate points filtered by time range & selected platforms
  const chartData = useMemo(() => {
    // Collect all unique dates
    const seriesByPlatform: Record<
      string,
      { date: string; timestamp: number; price: number; discount: number; event: string }[]
    > = {};

    let minPrice = Infinity;
    let maxPrice = 0;
    let minTime = Infinity;
    let maxTime = -Infinity;

    const now = new Date('2026-09-23').getTime();
    let cutoff = 0;
    if (timeRange === '7D') cutoff = now - 7 * 86400000;
    else if (timeRange === '30D') cutoff = now - 30 * 86400000;
    else if (timeRange === '3M') cutoff = now - 90 * 86400000;
    else if (timeRange === '6M') cutoff = now - 180 * 86400000;
    else if (timeRange === '1Y') cutoff = now - 365 * 86400000;

    for (const item of priceHistories) {
      const pId = item.listing.platform_id;
      if (!selectedPlatforms.includes(pId)) continue;

      const pts = item.history
        .map(h => ({
          date: h.recorded_date,
          timestamp: new Date(h.recorded_date).getTime(),
          price: h.price,
          discount: h.discount_percent,
          event: h.event_name
        }))
        .filter(p => p.timestamp >= cutoff)
        .sort((a, b) => a.timestamp - b.timestamp);

      if (pts.length > 0) {
        // Append current day price point to extend line to today
        const last = pts[pts.length - 1];
        if (last.timestamp < now) {
          pts.push({
            date: '2026-09-23',
            timestamp: now,
            price: item.listing.current_price,
            discount: item.listing.discount_percent,
            event: 'Current Price'
          });
        }

        seriesByPlatform[pId] = pts;

        for (const p of pts) {
          if (p.price < minPrice) minPrice = p.price;
          if (p.price > maxPrice) maxPrice = p.price;
          if (p.timestamp < minTime) minTime = p.timestamp;
          if (p.timestamp > maxTime) maxTime = p.timestamp;
        }
      }
    }

    if (minPrice === Infinity) minPrice = 0;
    if (maxPrice === 0) maxPrice = 60;
    // Add padding to price scale
    const paddedMax = Math.ceil(maxPrice * 1.15 / 5) * 5;
    const paddedMin = Math.max(0, Math.floor((minPrice * 0.85) / 5) * 5);

    return {
      series: seriesByPlatform,
      minPrice: paddedMin,
      maxPrice: paddedMax,
      minTime,
      maxTime: Math.max(maxTime, now)
    };
  }, [priceHistories, selectedPlatforms, timeRange]);

  // Chart dimensions
  const width = 850;
  const height = 280;
  const padLeft = 60;
  const padRight = 30;
  const padTop = 30;
  const padBottom = 40;

  const chartW = width - padLeft - padRight;
  const chartH = height - padTop - padBottom;

  const getX = (time: number) => {
    if (chartData.maxTime === chartData.minTime) return padLeft + chartW / 2;
    return padLeft + ((time - chartData.minTime) / (chartData.maxTime - chartData.minTime)) * chartW;
  };

  const getY = (price: number) => {
    const range = chartData.maxPrice - chartData.minPrice || 1;
    return padTop + chartH - ((price - chartData.minPrice) / range) * chartH;
  };

  // Generate Stepped SVG Paths for each platform
  const lines = useMemo(() => {
    return Object.entries(chartData.series).map(([pId, pts]) => {
      if (pts.length === 0) return null;

      let d = '';
      pts.forEach((pt, idx) => {
        const x = getX(pt.timestamp);
        const y = getY(pt.price);

        if (idx === 0) {
          d += `M ${x} ${y}`;
        } else {
          // Stepped line: horizontal first, then vertical drop/jump
          const prevY = getY(pts[idx - 1].price);
          d += ` L ${x} ${prevY} L ${x} ${y}`;
        }
      });

      const color =
        pId === 'steam'
          ? '#66c0f4'
          : pId === 'epic'
          ? '#3b82f6'
          : pId === 'gog'
          ? '#c084fc'
          : pId === 'playstation'
          ? '#38bdf8'
          : pId === 'xbox'
          ? '#4ade80'
          : '#f87171';

      return {
        platformId: pId as PlatformId,
        path: d,
        color,
        pts
      };
    }).filter(Boolean);
  }, [chartData]);

  // Price axis ticks
  const yTicks = useMemo(() => {
    const ticks = [];
    const count = 5;
    const step = (chartData.maxPrice - chartData.minPrice) / count;
    for (let i = 0; i <= count; i++) {
      const val = chartData.minPrice + i * step;
      ticks.push({
        val,
        y: getY(val)
      });
    }
    return ticks;
  }, [chartData]);

  // Date axis ticks (4 ticks)
  const xTicks = useMemo(() => {
    const ticks = [];
    const count = 4;
    const step = (chartData.maxTime - chartData.minTime) / count;
    for (let i = 0; i <= count; i++) {
      const time = chartData.minTime + i * step;
      ticks.push({
        time,
        x: getX(time),
        label: new Date(time).toLocaleDateString('en-US', { month: 'short', year: '2-digit' })
      });
    }
    return ticks;
  }, [chartData]);

  const historicalLowY = overallHistoricalLow.price > 0 ? getY(overallHistoricalLow.price) : null;

  return (
    <div className="bg-[#101721] rounded-lg border border-[#1b2838] p-5 shadow-xl">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-3 border-b border-[#1b2838]">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#66c0f4] animate-pulse"></span>
            <h3 className="text-base font-bold text-white tracking-wide uppercase font-mono">
              Universal Price History & Sale Events
            </h3>
          </div>
          <p className="text-xs text-zinc-400 mt-0.5">
            Step-line price tracking across digital storefronts with recorded historical lows.
          </p>
        </div>

        {/* Range selectors */}
        <div className="flex items-center gap-1 bg-[#0b0e14] p-1 rounded border border-[#1b2838] overflow-x-auto">
          {(['7D', '30D', '3M', '6M', '1Y', 'ALL'] as const).map(range => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-2.5 py-1 text-xs font-mono font-medium rounded transition-colors ${
                timeRange === range
                  ? 'bg-[#1b2838] text-[#38bdf8] shadow-sm font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* 4 Key Factual Price Metrics Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        <div className="bg-[#0b1017] p-3 rounded-lg border border-[#172333]">
          <span className="text-[10px] font-mono text-zinc-500 uppercase block">Current Lowest Price</span>
          <span className="text-base sm:text-lg font-bold font-mono text-white">
            {formatPrice(priceMetrics.currentLowest)}
          </span>
        </div>

        <div className="bg-[#0b1017] p-3 rounded-lg border border-[#172333]">
          <span className="text-[10px] font-mono text-zinc-500 uppercase block">Historical Lowest</span>
          <div className="flex items-center gap-1.5">
            <span className="text-base sm:text-lg font-bold font-mono text-emerald-400">
              {formatPrice(priceMetrics.historicalLowest)}
            </span>
            {priceMetrics.currentLowest <= priceMetrics.historicalLowest && (
              <span className="text-[9px] px-1 rounded bg-rose-500/20 text-rose-300 font-mono font-bold">
                LOW
              </span>
            )}
          </div>
        </div>

        <div className="bg-[#0b1017] p-3 rounded-lg border border-[#172333]">
          <span className="text-[10px] font-mono text-zinc-500 uppercase block">Highest Recorded</span>
          <span className="text-base sm:text-lg font-bold font-mono text-zinc-300">
            {formatPrice(priceMetrics.highest)}
          </span>
        </div>

        <div className="bg-[#0b1017] p-3 rounded-lg border border-[#172333]">
          <span className="text-[10px] font-mono text-zinc-500 uppercase block">Average Price</span>
          <span className="text-base sm:text-lg font-bold font-mono text-[#38bdf8]">
            {formatPrice(priceMetrics.average)}
          </span>
        </div>
      </div>

      {/* Historical Low Callout Banner & Timestamp */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-3.5 py-2.5 mb-4 rounded bg-[#16202d] border border-[#2a475e]/60 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 font-bold text-[11px]">
            🔥 RECORD LOW
          </span>
          <span className="text-zinc-300">
            All-time recorded low:{' '}
            <strong className="text-white font-bold text-sm">
              {formatPrice(overallHistoricalLow.price)}
            </strong>
            {overallHistoricalLow.listing && (
              <>
                {' '}on{' '}
                <span className="text-[#38bdf8] uppercase">
                  {overallHistoricalLow.listing.platform_id}
                </span>{' '}
                ({formatDate(overallHistoricalLow.listing.historical_low_date)})
              </>
            )}
          </span>
        </div>
        <div className="text-zinc-400 text-[11px]">
          Last checked: 3 hours ago • Sample Store Feeds
        </div>
      </div>

      {/* Platform Line Toggles */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="text-xs text-zinc-400 mr-1 font-mono">Compare Platforms:</span>
        {listings.map(l => {
          const isSelected = selectedPlatforms.includes(l.platform_id);
          const cfg = PLATFORM_CONFIG[l.platform_id];
          return (
            <button
              key={l.id}
              onClick={() => togglePlatform(l.platform_id)}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono transition-all border ${
                isSelected
                  ? 'bg-[#1b2838] text-white border-[#66c0f4]/50 shadow-[0_0_10px_rgba(102,192,244,0.15)] font-semibold'
                  : 'bg-[#0d1219] text-zinc-500 border-zinc-800 opacity-60 hover:opacity-90'
              }`}
            >
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{
                  backgroundColor: isSelected
                    ? l.platform_id === 'steam'
                      ? '#66c0f4'
                      : l.platform_id === 'epic'
                      ? '#3b82f6'
                      : l.platform_id === 'gog'
                      ? '#c084fc'
                      : l.platform_id === 'playstation'
                      ? '#38bdf8'
                      : l.platform_id === 'xbox'
                      ? '#4ade80'
                      : '#f87171'
                    : '#475569'
                }}
              />
              <span>{cfg?.short || l.platform_id}</span>
              <span className="text-zinc-400 text-[10px]">({formatPrice(l.current_price)})</span>
            </button>
          );
        })}
      </div>

      {/* SVG Canvas Container */}
      <div className="relative w-full overflow-x-auto bg-[#090d13] rounded border border-[#17202c]">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto min-w-[650px] select-none"
        >
          <defs>
            <linearGradient id="gridGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1b2838" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0b0e14" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Background grid */}
          <rect
            x={padLeft}
            y={padTop}
            width={chartW}
            height={chartH}
            fill="url(#gridGlow)"
            stroke="#1b2838"
            strokeWidth="1"
          />

          {/* Horizontal Grid lines & Y-axis labels */}
          {yTicks.map(t => (
            <g key={t.val}>
              <line
                x1={padLeft}
                y1={t.y}
                x2={padLeft + chartW}
                y2={t.y}
                stroke="#172230"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <text
                x={padLeft - 10}
                y={t.y + 4}
                fill="#627b94"
                fontSize="11"
                fontFamily="monospace"
                textAnchor="end"
              >
                ${t.val.toFixed(0)}
              </text>
            </g>
          ))}

          {/* Historical Low Reference Line */}
          {historicalLowY !== null && historicalLowY >= padTop && historicalLowY <= padTop + chartH && (
            <g>
              <line
                x1={padLeft}
                y1={historicalLowY}
                x2={padLeft + chartW}
                y2={historicalLowY}
                stroke="#a4d007"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.85"
              />
              <text
                x={padLeft + chartW - 6}
                y={historicalLowY - 5}
                fill="#a4d007"
                fontSize="10"
                fontFamily="monospace"
                fontWeight="bold"
                textAnchor="end"
              >
                RECORD LOW ${overallHistoricalLow.price.toFixed(2)}
              </text>
            </g>
          )}

          {/* Vertical Grid lines & X-axis dates */}
          {xTicks.map(xt => (
            <g key={xt.time}>
              <line
                x1={xt.x}
                y1={padTop}
                x2={xt.x}
                y2={padTop + chartH}
                stroke="#172230"
                strokeWidth="1"
                strokeDasharray="2 2"
              />
              <text
                x={xt.x}
                y={padTop + chartH + 20}
                fill="#627b94"
                fontSize="10"
                fontFamily="monospace"
                textAnchor="middle"
              >
                {xt.label}
              </text>
            </g>
          ))}

          {/* Plot Lines */}
          {lines.map(line => {
            if (!line) return null;
            return (
              <g key={line.platformId}>
                <path
                  d={line.path}
                  fill="none"
                  stroke={line.color}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="miter"
                />

                {/* Data Points */}
                {line.pts.map((pt, pIdx) => {
                  const x = getX(pt.timestamp);
                  const y = getY(pt.price);
                  const isHovered =
                    hoveredPoint?.platformId === line.platformId && hoveredPoint?.date === pt.date;

                  return (
                    <circle
                      key={pIdx}
                      cx={x}
                      cy={y}
                      r={isHovered ? 6 : 3.5}
                      fill={line.color}
                      stroke="#0b0e14"
                      strokeWidth={isHovered ? 2.5 : 1.5}
                      className="cursor-pointer transition-all"
                      onMouseEnter={() =>
                        setHoveredPoint({
                          date: pt.date,
                          price: pt.price,
                          discount: pt.discount,
                          platformId: line.platformId,
                          event: pt.event,
                          x,
                          y
                        })
                      }
                      onMouseLeave={() => setHoveredPoint(null)}
                    />
                  );
                })}
              </g>
            );
          })}

          {/* Hover Crosshair / Scrubber */}
          {hoveredPoint && (
            <g>
              <line
                x1={hoveredPoint.x}
                y1={padTop}
                x2={hoveredPoint.x}
                y2={padTop + chartH}
                stroke="#66c0f4"
                strokeWidth="1"
                strokeDasharray="2 2"
                opacity="0.8"
              />
              <line
                x1={padLeft}
                y1={hoveredPoint.y}
                x2={padLeft + chartW}
                y2={hoveredPoint.y}
                stroke="#66c0f4"
                strokeWidth="1"
                strokeDasharray="2 2"
                opacity="0.8"
              />
            </g>
          )}
        </svg>

        {/* Hover Tooltip Overlay */}
        {hoveredPoint && (
          <div
            className="absolute z-20 pointer-events-none bg-[#131b26] border border-[#2a475e] p-2.5 rounded shadow-2xl text-xs font-mono transform -translate-x-1/2 -translate-y-full mb-3"
            style={{
              left: `${(hoveredPoint.x / width) * 100}%`,
              top: `${(hoveredPoint.y / height) * 100}%`
            }}
          >
            <div className="flex items-center justify-between gap-3 border-b border-[#233547] pb-1 mb-1.5">
              <span className="font-bold text-white uppercase text-[11px]">
                {PLATFORM_CONFIG[hoveredPoint.platformId]?.name}
              </span>
              <span className="text-zinc-400 text-[10px]">{formatDate(hoveredPoint.date)}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-white">
                {formatPrice(hoveredPoint.price)}
              </span>
              {hoveredPoint.discount > 0 && (
                <span className="px-1.5 py-0.5 rounded bg-[#4c6b22] text-[#a4d007] text-[10px] font-bold">
                  -{hoveredPoint.discount}%
                </span>
              )}
            </div>

            {hoveredPoint.event && (
              <div className="mt-1 text-[11px] text-[#66c0f4] flex items-center gap-1 font-sans">
                <span>🏷️</span>
                <span>{hoveredPoint.event}</span>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 mt-2">
        <span>* Data queried directly from PostgreSQL table `price_history`</span>
        <span>All prices normalized in USD</span>
      </div>
    </div>
  );
};
