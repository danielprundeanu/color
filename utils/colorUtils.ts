// Color conversion utilities using culori library
// @ts-ignore - culori doesn't have TypeScript definitions
import { formatHex, converter } from 'culori';

export interface OKLCHColor {
  l: number; // Lightness: 0-1
  c: number; // Chroma: 0-0.4 (typical range)
  h: number; // Hue: 0-360
}

export interface LCHColor {
  l: number; // Lightness: 0-100
  c: number; // Chroma: 0-150 (typical range)
  h: number; // Hue: 0-360
}

export interface RGBColor {
  r: number;
  g: number;
  b: number;
}

export type ColorSpace = 'oklch' | 'lch';

// Converters using culori
const toOklch = converter('oklch');
const toLch = converter('lch');

// Convert OKLCH to hex color
export function oklchToHex(oklch: OKLCHColor): string {
  try {
    // Create oklch color object for culori
    const color = { mode: 'oklch', l: oklch.l, c: oklch.c, h: oklch.h || 0 };
    // Convert to hex using culori
    return formatHex(color) || '#000000';
  } catch (error) {
    console.error('Error converting OKLCH to hex:', error);
    return '#000000';
  }
}

// Convert hex to OKLCH
export function hexToOKLCH(hex: string): OKLCHColor {
  // Handle undefined/null/empty values
  if (!hex || typeof hex !== 'string') {
    return { l: 0.5, c: 0, h: 0 };
  }
  
  try {
    // Convert hex to oklch using culori
    const color = toOklch(hex);
    
    if (!color) {
      return { l: 0.5, c: 0, h: 0 };
    }
    
    return {
      l: color.l ?? 0.5,
      c: color.c ?? 0,
      h: color.h ?? 0,
    };
  } catch (error) {
    console.error('Error converting hex to OKLCH:', error);
    return { l: 0.5, c: 0, h: 0 };
  }
}

// Generate color palette with 13 shades
export function generatePalette(
  baseHue: number,
  baseChroma: number,
  lightnessSteps: number[],
  colorSpace: ColorSpace = 'oklch',
  hueShift?: {
    enabled: boolean;
    darkHue: number;
    lightHue: number;
  }
): { [key: string]: string } {
  const palette: { [key: string]: string } = {};
  
  const steps = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130];
  
  // Function to interpolate hue using a quadratic Bezier curve
  // p0 = darkHue (darkest shade), p1 = baseHue (source color), p2 = lightHue (lightest shade)
  const interpolateHue = (t: number, darkHue: number, sourceHue: number, lightHue: number): number => {
    // Quadratic Bezier: B(t) = (1-t)²*p0 + 2(1-t)t*p1 + t²*p2
    const oneMinusT = 1 - t;
    const hue = oneMinusT * oneMinusT * darkHue + 
                2 * oneMinusT * t * sourceHue + 
                t * t * lightHue;
    
    // Normalize hue to 0-360 range
    return ((hue % 360) + 360) % 360;
  };
  
  if (colorSpace === 'lch') {
    // LCH mode: L is 0-100, C and H remain constant or shift
    // Convert OKLCH chroma (0-0.4) to LCH chroma (0-150) approximately
    const lchChroma = baseChroma * 150;
    
    steps.forEach((step, index) => {
      const lightness = lightnessSteps[index]; // Use lightness directly (0-100)
      
      // Calculate hue with optional shifting
      let hue = baseHue;
      if (hueShift && hueShift.enabled) {
        // t goes from 0 (darkest) to 1 (lightest)
        // Find which shade index corresponds to the base color (usually middle)
        const totalSteps = steps.length;
        const t = index / (totalSteps - 1);
        hue = interpolateHue(t, hueShift.darkHue, baseHue, hueShift.lightHue);
      }
      
      const color = lchToHex({
        l: lightness,
        c: lchChroma,
        h: hue,
      });
      palette[step.toString()] = color;
    });
  } else {
    // OKLCH mode: L is 0-1, vary chroma based on lightness
    steps.forEach((step, index) => {
      const lightness = lightnessSteps[index] / 100; // Convert to 0-1 range
      
      // Vary chroma based on lightness to achieve better extremes
      // Chroma is highest in mid-range (lightness ~0.5-0.6) and decreases toward extremes
      // This helps achieve colors closer to white (high L, low C) and black (low L, low C)
      let chromaMultiplier = 1.0;
      
      if (lightness > 0.85) {
        // Very light colors: dramatically reduce chroma to approach white
        chromaMultiplier = Math.max(0.1, (1 - lightness) / 0.15); // 0.1 to 1.0
      } else if (lightness < 0.20) {
        // Very dark colors: dramatically reduce chroma to approach black
        chromaMultiplier = Math.max(0.1, lightness / 0.20); // 0.1 to 1.0
      } else if (lightness > 0.70) {
        // Light colors: reduce chroma moderately
        chromaMultiplier = 1.0 - ((lightness - 0.70) / 0.15) * 0.5; // 0.5 to 1.0
      } else if (lightness < 0.30) {
        // Dark colors: reduce chroma moderately
        chromaMultiplier = 0.5 + (lightness / 0.30) * 0.5; // 0.5 to 1.0
      }
      
      const adjustedChroma = baseChroma * chromaMultiplier;
      
      // Calculate hue with optional shifting
      let hue = baseHue;
      if (hueShift && hueShift.enabled) {
        // t goes from 0 (darkest) to 1 (lightest)
        const totalSteps = steps.length;
        const t = index / (totalSteps - 1);
        hue = interpolateHue(t, hueShift.darkHue, baseHue, hueShift.lightHue);
      }
      
      const color = oklchToHex({
        l: lightness,
        c: adjustedChroma,
        h: hue,
      });
      palette[step.toString()] = color;
    });
  }
  
  return palette;
}

// Default lightness curve (perceptually uniform)
export const defaultLightnessSteps = [
  95, // 10
  88, // 20
  80, // 30
  70, // 40
  60, // 50
  50, // 60
  40, // 70
  32, // 80
  24, // 90
  18, // 100
  12, // 110
  8,  // 120
  4,  // 130
];

// Linear lightness curve (evenly distributed)
export const linearLightnessSteps = [
  95,   // 10
  87.5, // 20
  80,   // 30
  72.5, // 40
  65,   // 50
  57.5, // 60
  50,   // 70
  42.5, // 80
  35,   // 90
  27.5, // 100
  20,   // 110
  12.5, // 120
  5,    // 130
];

// Contrast lightness curve (optimized for better contrast between shades)
export const contrastLightnessSteps = [
  98, // 10 - very light
  92, // 20
  84, // 30
  74, // 40
  62, // 50
  50, // 60 - middle
  38, // 70
  28, // 80
  20, // 90
  14, // 100
  9,  // 110
  5,  // 120
  2,  // 130 - very dark
];

export type LightnessCurveType = 'linear' | 'contrast';

export function getLightnessSteps(type: LightnessCurveType): number[] {
  return type === 'linear' ? linearLightnessSteps : contrastLightnessSteps;
}

// Convert hex to HSL
export function hexToHSL(hex: string): { h: number; s: number; l: number } {
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return {
    h: h * 360,
    s: s * 100,
    l: l * 100
  };
}

// Convert HSL to hex
export function hslToHex(hsl: { h: number; s: number; l: number }): string {
  let h = hsl.h / 360;
  let s = hsl.s / 100;
  let l = hsl.l / 100;

  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };

  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  const toHex = (x: number) => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// Convert hex to RGBA
export function hexToRGBA(hex: string): { r: number; g: number; b: number; a: number } {
  hex = hex.replace('#', '');
  return {
    r: parseInt(hex.substring(0, 2), 16),
    g: parseInt(hex.substring(2, 4), 16),
    b: parseInt(hex.substring(4, 6), 16),
    a: 1,
  };
}

// Convert RGBA to hex
export function rgbaToHex(rgba: { r: number; g: number; b: number; a: number }): string {
  const toHex = (x: number) => {
    const hex = Math.max(0, Math.min(255, Math.round(x))).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(rgba.r)}${toHex(rgba.g)}${toHex(rgba.b)}`;
}

// LCH (CIELCh) color space conversions
// LCH uses D50 white point and Lab color space

// Convert hex to LCH
// Convert hex to LCH using culori
export function hexToLCH(hex: string): LCHColor {
  if (!hex || typeof hex !== 'string') {
    return { l: 50, c: 0, h: 0 };
  }

  try {
    // Convert hex to lch using culori
    const color = toLch(hex);
    
    if (!color) {
      return { l: 50, c: 0, h: 0 };
    }

    return {
      l: color.l ?? 50,
      c: color.c ?? 0,
      h: color.h ?? 0,
    };
  } catch (error) {
    console.error('Error converting hex to LCH:', error);
    return { l: 50, c: 0, h: 0 };
  }
}

// Convert LCH to hex using culori
export function lchToHex(lch: LCHColor): string {
  try {
    // Create lch color object for culori
    const color = { mode: 'lch', l: lch.l, c: lch.c, h: lch.h || 0 };
    // Convert to hex using culori
    return formatHex(color) || '#000000';
  } catch (error) {
    console.error('Error converting LCH to hex:', error);
    return '#000000';
  }
}