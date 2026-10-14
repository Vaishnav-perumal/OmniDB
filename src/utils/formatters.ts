export function formatPrice(price: number | undefined | null, currency = 'USD'): string {
  if (price === undefined || price === null) return '$0.00';
  if (price === 0) return 'FREE';
  const symbols: Record<string, string> = {
    USD: '$',
    EUR: '€',
    GBP: '£'
  };
  const sym = symbols[currency] || '$';
  return `${sym}${price.toFixed(2)}`;
}

export function formatNumber(num: number | undefined | null): string {
  if (!num) return '0';
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toLocaleString();
}

export function formatDate(dateStr: string | undefined | null): string {
  if (!dateStr) return 'N/A';
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  } catch {
    return dateStr;
  }
}

export function getDiscountBadgeClass(discount: number): string {
  if (discount >= 75) {
    return 'bg-[#5c7e10] text-[#beee11] border border-[#a4d007]/50 font-bold';
  }
  if (discount >= 50) {
    return 'bg-[#4c6b22] text-[#a4d007] border border-[#a4d007]/30 font-semibold';
  }
  if (discount > 0) {
    return 'bg-[#29421f] text-[#8bc34a] border border-[#8bc34a]/30';
  }
  return 'bg-zinc-800 text-zinc-400 border border-zinc-700';
}
