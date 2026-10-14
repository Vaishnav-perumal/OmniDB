// Utility functions for string normalization and fuzzy title matching

export function normalizeTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/^(the|a|an)\s+/i, '')
    .replace(/[^\w\s]/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Calculates Sørensen–Dice coefficient similarity between two strings (0.0 to 1.0)
 */
export function calculateTitleSimilarity(str1: string, str2: string): number {
  const s1 = normalizeTitle(str1);
  const s2 = normalizeTitle(str2);

  if (s1 === s2) return 1.0;
  if (s1.length < 2 || s2.length < 2) return 0.0;

  // Differentiate distinct numbered sequels (e.g. "Fallout 4" vs "Fallout 3", "GTA V" vs "GTA IV")
  const getNumerals = (str: string) => {
    return str.match(/\b(\d+|i|ii|iii|iv|v|vi|vii|viii|ix|x)\b/g);
  };
  const n1 = getNumerals(s1);
  const n2 = getNumerals(s2);
  if (n1 && n2 && n1.join(',') !== n2.join(',')) {
    return 0.35; // Different numbered sequels must not be considered duplicates!
  }

  // Exact substring containment
  if (s1.includes(s2) || s2.includes(s1)) {
    const minLen = Math.min(s1.length, s2.length);
    const maxLen = Math.max(s1.length, s2.length);
    return Math.max(0.85, minLen / maxLen);
  }

  const getBigrams = (str: string) => {
    const bigrams = new Set<string>();
    for (let i = 0; i < str.length - 1; i++) {
      bigrams.add(str.slice(i, i + 2));
    }
    return bigrams;
  };

  const bg1 = getBigrams(s1);
  const bg2 = getBigrams(s2);

  let intersection = 0;
  for (const b of bg1) {
    if (bg2.has(b)) intersection++;
  }

  return (2.0 * intersection) / (bg1.size + bg2.size);
}

/**
 * Levenshtein distance
 */
export function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}
