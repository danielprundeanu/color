// Color conversion utilities for hex, hsl, rgba

export interface HSLColor {
  h: number;
  s: number;
  l: number;
}

export interface RGBAColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

// Hex to RGBA
export function hexToRGBA(hex: string): RGBAColor {
  hex = hex.replace('#', '');
  
  let r = 0, g = 0, b = 0, a = 1;
  
  if (hex.length === 6) {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  } else if (hex.length === 8) {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
    a = parseInt(hex.substring(6, 8), 16) / 255;
  }
  
  return { r, g, b, a };
}

// RGBA to Hex
export function rgbaToHex(rgba: RGBAColor): string {
  const r = Math.round(rgba.r).toString(16).padStart(2, '0');
  const g = Math.round(rgba.g).toString(16).padStart(2, '0');
  const b = Math.round(rgba.b).toString(16).padStart(2, '0');
  
  if (rgba.a < 1) {
    const a = Math.round(rgba.a * 255).toString(16).padStart(2, '0');
    return `#${r}${g}${b}${a}`;
  }
  
  return `#${r}${g}${b}`;
}

// Hex to HSL
export function hexToHSL(hex: string): HSLColor {
  const rgba = hexToRGBA(hex);
  return rgbToHSL(rgba.r, rgba.g, rgba.b);
}

// RGB to HSL
export function rgbToHSL(r: number, g: number, b: number): HSLColor {
  r /= 255;
  g /= 255;
  b /= 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;
  
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
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

// HSL to Hex
export function hslToHex(hsl: HSLColor): string {
  const { r, g, b } = hslToRGB(hsl.h, hsl.s, hsl.l);
  return rgbaToHex({ r, g, b, a: 1 });
}

// HSL to RGB
export function hslToRGB(h: number, s: number, l: number): { r: number; g: number; b: number } {
  h /= 360;
  s /= 100;
  l /= 100;
  
  let r, g, b;
  
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
}

// Parse color string (supports hex, hsl, rgb, rgba)
export function parseColorString(colorStr: string): string | null {
  colorStr = colorStr.trim();
  
  // Hex format
  if (colorStr.startsWith('#')) {
    const hex = colorStr.replace('#', '');
    if (hex.length === 3 || hex.length === 6 || hex.length === 8) {
      return colorStr;
    }
  }
  
  // RGB/RGBA format
  const rgbaMatch = colorStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
  if (rgbaMatch) {
    const r = parseInt(rgbaMatch[1]);
    const g = parseInt(rgbaMatch[2]);
    const b = parseInt(rgbaMatch[3]);
    const a = rgbaMatch[4] ? parseFloat(rgbaMatch[4]) : 1;
    return rgbaToHex({ r, g, b, a });
  }
  
  // HSL format
  const hslMatch = colorStr.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
  if (hslMatch) {
    const h = parseInt(hslMatch[1]);
    const s = parseInt(hslMatch[2]);
    const l = parseInt(hslMatch[3]);
    return hslToHex({ h, s, l });
  }
  
  return null;
}

// Format color as string
export function formatRGBA(rgba: RGBAColor): string {
  if (rgba.a < 1) {
    return `rgba(${Math.round(rgba.r)}, ${Math.round(rgba.g)}, ${Math.round(rgba.b)}, ${rgba.a.toFixed(2)})`;
  }
  return `rgb(${Math.round(rgba.r)}, ${Math.round(rgba.g)}, ${Math.round(rgba.b)})`;
}

export function formatHSL(hsl: HSLColor): string {
  return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
}
