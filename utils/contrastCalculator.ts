/**
 * Utility functions for calculating WCAG contrast ratios and finding optimal contrast colors
 */

/**
 * Convert hex color to RGB
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 * Calculate relative luminance for a color channel
 */
function getLuminanceChannel(channel: number): number {
  const sRGB = channel / 255;
  return sRGB <= 0.03928 ? sRGB / 12.92 : Math.pow((sRGB + 0.055) / 1.055, 2.4);
}

/**
 * Calculate relative luminance of a color
 */
export function getRelativeLuminance(hex: string): number {
  const rgb = hexToRgb(hex);
  if (!rgb) return 0;

  const r = getLuminanceChannel(rgb.r);
  const g = getLuminanceChannel(rgb.g);
  const b = getLuminanceChannel(rgb.b);

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Calculate contrast ratio between two colors (WCAG 2.1)
 * Returns a value between 1 and 21
 */
export function getContrastRatio(color1: string, color2: string): number {
  const l1 = getRelativeLuminance(color1);
  const l2 = getRelativeLuminance(color2);

  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);

  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Format contrast ratio for display
 */
export function formatContrastRatio(ratio: number): string {
  return ratio.toFixed(2);
}

/**
 * Get WCAG level for a contrast ratio
 * @param ratio - The contrast ratio
 * @param isLargeText - Whether the text is large (18pt+/14pt+ bold)
 */
export function getWCAGLevel(
  ratio: number,
  isLargeText: boolean = false
): {
  level: 'AAA' | 'AA' | 'Fail';
  color: string;
} {
  if (isLargeText) {
    if (ratio >= 4.5) return { level: 'AAA', color: '#10b981' }; // green-500
    if (ratio >= 3) return { level: 'AA', color: '#f59e0b' }; // amber-500
    return { level: 'Fail', color: '#ef4444' }; // red-500
  } else {
    if (ratio >= 7) return { level: 'AAA', color: '#10b981' }; // green-500
    if (ratio >= 4.5) return { level: 'AA', color: '#f59e0b' }; // amber-500
    return { level: 'Fail', color: '#ef4444' }; // red-500
  }
}

/**
 * Find the best contrast color from available palette colors
 * @param baseColor - The color to contrast against
 * @param availableColors - Object with color names as keys and hex values
 * @param targetRatio - Target contrast ratio (default 4.5 for AA normal text)
 */
export function findBestContrastColor(
  baseColor: string,
  availableColors: Record<string, string>,
  targetRatio: number = 4.5
): {
  colorName: string;
  colorValue: string;
  ratio: number;
} | null {
  let bestMatch: {
    colorName: string;
    colorValue: string;
    ratio: number;
  } | null = null;

  let bestRatio = 0;

  for (const [colorName, colorValue] of Object.entries(availableColors)) {
    const ratio = getContrastRatio(baseColor, colorValue);

    // Prefer colors that meet or exceed the target ratio
    if (ratio >= targetRatio) {
      // If we haven't found a match yet, or this is closer to the target
      if (!bestMatch || Math.abs(ratio - targetRatio) < Math.abs(bestMatch.ratio - targetRatio)) {
        bestMatch = { colorName, colorValue, ratio };
      }
    } else {
      // If no match meets target, keep the highest ratio
      if (ratio > bestRatio) {
        bestRatio = ratio;
        bestMatch = { colorName, colorValue, ratio };
      }
    }
  }

  return bestMatch;
}

/**
 * Parse token reference like "{primary.10}" to extract palette and step
 */
export function parseTokenReference(tokenRef: string): {
  palette: string;
  step: string;
} | null {
  if (!tokenRef.startsWith('{') || !tokenRef.endsWith('}')) {
    return null;
  }

  const parts = tokenRef.slice(1, -1).split('.');
  if (parts.length !== 2) {
    return null;
  }

  return {
    palette: parts[0],
    step: parts[1],
  };
}

/**
 * Create a token reference from palette and step
 */
export function createTokenReference(palette: string, step: string): string {
  return `{${palette}.${step}}`;
}
