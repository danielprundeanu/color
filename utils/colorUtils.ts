// OKLCH to RGB conversion utilities

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

// Convert OKLCH to linear RGB
function oklchToLinearRGB(oklch: OKLCHColor): RGBColor {
  const { l, c, h } = oklch;
  
  // Convert to OKLab
  const a = c * Math.cos((h * Math.PI) / 180);
  const b = c * Math.sin((h * Math.PI) / 180);
  
  // OKLab to linear RGB conversion matrix
  const l_ = l + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = l - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = l - 0.0894841775 * a - 1.2914855480 * b;
  
  const l3 = l_ * l_ * l_;
  const m3 = m_ * m_ * m_;
  const s3 = s_ * s_ * s_;
  
  return {
    r: +4.0767416621 * l3 - 3.3077115913 * m3 + 0.2309699292 * s3,
    g: -1.2684380046 * l3 + 2.6097574011 * m3 - 0.3413193965 * s3,
    b: -0.0041960863 * l3 - 0.7034186147 * m3 + 1.7076147010 * s3,
  };
}

// Convert linear RGB to sRGB
function linearToSRGB(linear: number): number {
  const abs = Math.abs(linear);
  if (abs <= 0.0031308) {
    return linear * 12.92;
  }
  return (Math.sign(linear) || 1) * (1.055 * Math.pow(abs, 1 / 2.4) - 0.055);
}

// Convert OKLCH to hex color
export function oklchToHex(oklch: OKLCHColor): string {
  const linear = oklchToLinearRGB(oklch);
  
  const r = Math.max(0, Math.min(255, Math.round(linearToSRGB(linear.r) * 255)));
  const g = Math.max(0, Math.min(255, Math.round(linearToSRGB(linear.g) * 255)));
  const b = Math.max(0, Math.min(255, Math.round(linearToSRGB(linear.b) * 255)));
  
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

// Convert hex to OKLCH
export function hexToOKLCH(hex: string): OKLCHColor {
  // Handle undefined/null/empty values
  if (!hex || typeof hex !== 'string') {
    return { l: 0.5, c: 0, h: 0 };
  }
  
  // Remove # if present
  hex = hex.replace('#', '');
  
  // Parse RGB values
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;
  
  // Convert sRGB to linear RGB
  const rLinear = r <= 0.04045 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  const gLinear = g <= 0.04045 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
  const bLinear = b <= 0.04045 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);
  
  // Linear RGB to LMS
  const l = 0.4122214708 * rLinear + 0.5363325363 * gLinear + 0.0514459929 * bLinear;
  const m = 0.2119034982 * rLinear + 0.6806995451 * gLinear + 0.1073969566 * bLinear;
  const s = 0.0883024619 * rLinear + 0.2817188376 * gLinear + 0.6299787005 * bLinear;
  
  // LMS to OKLab
  const l_ = Math.cbrt(l);
  const m_ = Math.cbrt(m);
  const s_ = Math.cbrt(s);
  
  const L = 0.2104542553 * l_ + 0.7936177850 * m_ - 0.0040720468 * s_;
  const a = 1.9779984951 * l_ - 2.4285922050 * m_ + 0.4505937099 * s_;
  const bVal = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.8086757660 * s_;
  
  // OKLab to OKLCH
  const C = Math.sqrt(a * a + bVal * bVal);
  let H = Math.atan2(bVal, a) * (180 / Math.PI);
  if (H < 0) H += 360;
  
  return {
    l: L,
    c: C,
    h: H,
  };
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
export function hexToLCH(hex: string): LCHColor {
  if (!hex || typeof hex !== 'string') {
    return { l: 50, c: 0, h: 0 };
  }

  hex = hex.replace('#', '');
  
  // Parse RGB
  let r = parseInt(hex.substring(0, 2), 16) / 255;
  let g = parseInt(hex.substring(2, 4), 16) / 255;
  let b = parseInt(hex.substring(4, 6), 16) / 255;

  // sRGB to linear RGB
  r = r <= 0.04045 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  g = g <= 0.04045 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
  b = b <= 0.04045 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);

  // Linear RGB to XYZ (D65 to D50 adaptation)
  let x = r * 0.4124564 + g * 0.3575761 + b * 0.1804375;
  let y = r * 0.2126729 + g * 0.7151522 + b * 0.0721750;
  let z = r * 0.0193339 + g * 0.1191920 + b * 0.9503041;

  // D65 to D50 adaptation
  x = x * 0.9555766 + y * -0.0230393 + z * 0.0631636;
  y = x * -0.0282895 + y * 1.0099416 + z * 0.0210077;
  z = x * 0.0122982 + y * -0.0204830 + z * 1.3299098;

  // XYZ to Lab (D50)
  const xn = 0.96422; // D50 white point
  const yn = 1.00000;
  const zn = 0.82521;

  x = x / xn;
  y = y / yn;
  z = z / zn;

  const fx = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x + 16/116);
  const fy = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y + 16/116);
  const fz = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z + 16/116);

  const L = 116 * fy - 16;
  const a = 500 * (fx - fy);
  const bVal = 200 * (fy - fz);

  // Lab to LCH
  const C = Math.sqrt(a * a + bVal * bVal);
  let H = Math.atan2(bVal, a) * (180 / Math.PI);
  if (H < 0) H += 360;

  return {
    l: Math.max(0, Math.min(100, L)),
    c: Math.max(0, C),
    h: H
  };
}

// Convert LCH to hex
export function lchToHex(lch: LCHColor): string {
  const { l: L, c: C, h: H } = lch;

  // LCH to Lab
  const a = C * Math.cos((H * Math.PI) / 180);
  const bVal = C * Math.sin((H * Math.PI) / 180);

  // Lab to XYZ (D50)
  const fy = (L + 16) / 116;
  const fx = a / 500 + fy;
  const fz = fy - bVal / 200;

  const xn = 0.96422; // D50 white point
  const yn = 1.00000;
  const zn = 0.82521;

  let x = fx * fx * fx > 0.008856 ? fx * fx * fx : (fx - 16/116) / 7.787;
  let y = fy * fy * fy > 0.008856 ? fy * fy * fy : (fy - 16/116) / 7.787;
  let z = fz * fz * fz > 0.008856 ? fz * fz * fz : (fz - 16/116) / 7.787;

  x = x * xn;
  y = y * yn;
  z = z * zn;

  // D50 to D65 adaptation
  const xD65 = x * 1.0478112 + y * 0.0228866 + z * -0.0501270;
  const yD65 = x * 0.0295424 + y * 0.9904844 + z * -0.0170491;
  const zD65 = x * -0.0092345 + y * 0.0150436 + z * 0.7521316;

  // XYZ to linear RGB
  let r = xD65 * 3.2404542 + yD65 * -1.5371385 + zD65 * -0.4985314;
  let g = xD65 * -0.9692660 + yD65 * 1.8760108 + zD65 * 0.0415560;
  let b = xD65 * 0.0556434 + yD65 * -0.2040259 + zD65 * 1.0572252;

  // Linear RGB to sRGB
  r = r <= 0.0031308 ? r * 12.92 : 1.055 * Math.pow(r, 1/2.4) - 0.055;
  g = g <= 0.0031308 ? g * 12.92 : 1.055 * Math.pow(g, 1/2.4) - 0.055;
  b = b <= 0.0031308 ? b * 12.92 : 1.055 * Math.pow(b, 1/2.4) - 0.055;

  // Clamp and convert to hex
  const rByte = Math.max(0, Math.min(255, Math.round(r * 255)));
  const gByte = Math.max(0, Math.min(255, Math.round(g * 255)));
  const bByte = Math.max(0, Math.min(255, Math.round(b * 255)));

  return `#${rByte.toString(16).padStart(2, '0')}${gByte.toString(16).padStart(2, '0')}${bByte.toString(16).padStart(2, '0')}`;
}