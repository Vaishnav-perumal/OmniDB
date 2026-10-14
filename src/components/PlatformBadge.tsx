import React from 'react';
import { PlatformId } from '../types/database';

interface PlatformBadgeProps {
  platformId: PlatformId | string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

export const PLATFORM_CONFIG: Record<
  string,
  { name: string; short: string; bg: string; text: string; border: string; accent: string; label: string; icon: string }
> = {
  steam: {
    name: 'Steam',
    short: 'Steam',
    bg: 'bg-[#121a24]',
    text: 'text-[#66c0f4]',
    border: 'border-[#24374a]',
    accent: '#66c0f4',
    label: 'PC',
    icon: '🎮'
  },
  epic: {
    name: 'Epic Games',
    short: 'Epic',
    bg: 'bg-[#17171a]',
    text: 'text-zinc-200',
    border: 'border-zinc-700',
    accent: '#3b82f6',
    label: 'Epic',
    icon: '⚡'
  },
  gog: {
    name: 'GOG (DRM-Free)',
    short: 'GOG',
    bg: 'bg-[#1b1226]',
    text: 'text-purple-300',
    border: 'border-purple-800/60',
    accent: '#a855f7',
    label: 'GOG',
    icon: '🟣'
  },
  playstation: {
    name: 'PlayStation Store',
    short: 'PlayStation',
    bg: 'bg-[#0a1829]',
    text: 'text-[#38bdf8]',
    border: 'border-[#1d4ed8]/50',
    accent: '#38bdf8',
    label: 'PS5/PS4',
    icon: '🔺'
  },
  xbox: {
    name: 'Xbox Store',
    short: 'Xbox',
    bg: 'bg-[#0d1f12]',
    text: 'text-[#4ade80]',
    border: 'border-[#15803d]/50',
    accent: '#22c55e',
    label: 'Xbox',
    icon: '🟩'
  },
  nintendo: {
    name: 'Nintendo eShop',
    short: 'Nintendo',
    bg: 'bg-[#260e12]',
    text: 'text-[#f87171]',
    border: 'border-[#b91c1c]/50',
    accent: '#ef4444',
    label: 'Switch',
    icon: '🔴'
  }
};

export const PlatformBadge: React.FC<PlatformBadgeProps> = ({
  platformId,
  size = 'sm',
  showLabel = true,
  className = ''
}) => {
  const cfg = PLATFORM_CONFIG[platformId] || {
    name: platformId,
    short: platformId,
    bg: 'bg-zinc-800',
    text: 'text-zinc-300',
    border: 'border-zinc-700',
    accent: '#94a3b8',
    label: platformId
  };

  const sizeClasses = {
    xs: 'text-[10px] px-1.5 py-0.5 gap-1',
    sm: 'text-xs px-2 py-0.5 gap-1.5',
    md: 'text-sm px-2.5 py-1 gap-2',
    lg: 'text-base px-3 py-1.5 gap-2'
  };

  return (
    <span
      className={`inline-flex items-center font-medium rounded border ${cfg.bg} ${cfg.text} ${cfg.border} ${sizeClasses[size]} font-mono select-none transition-colors ${className}`}
      title={cfg.name}
    >
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: cfg.accent }}
      />
      {showLabel && <span className="tracking-tight text-[11px]">{cfg.short}</span>}
    </span>
  );
};

