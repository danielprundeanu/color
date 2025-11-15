import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'sonner';
import { generatePalette, defaultLightnessSteps, hexToOKLCH, LightnessCurveType, getLightnessSteps, ColorSpace } from '../utils/colorUtils';
import { semanticColors } from '../semanticColors';

export interface ColorPalette {
  name: string;
  key: string;
  hue: number;
  chroma: number;
  baseColor: string;
  customColors?: { [step: string]: string }; // Individual overrides
  includeBaseInPalette?: boolean; // Whether to include base color in palette
  hueShift?: {
    enabled: boolean;
    darkHue: number;    // Hue for darkest shade
    lightHue: number;   // Hue for lightest shade
  };
}

interface ColorContextType {
  palettes: ColorPalette[];
  lightnessSteps: number[];
  lightnessCurveType: LightnessCurveType;
  colorSpace: ColorSpace;
  theme: 'light' | 'dark';
  updatePalette: (index: number, palette: ColorPalette) => void;
  updateLightnessSteps: (steps: number[]) => void;
  setLightnessCurveType: (type: LightnessCurveType) => void;
  setColorSpace: (space: ColorSpace) => void;
  updateCustomColor: (paletteKey: string, step: string, color: string, oklch: { l: number; c: number; h: number }) => void;
  updateBaseColor: (index: number, color: string, hue: number, chroma: number) => void;
  toggleIncludeBaseInPalette: (index: number) => void;
  toggleHueShift: (index: number) => void;
  updateHueShift: (index: number, darkHue: number, lightHue: number) => void;
  resetPaletteColors: (paletteKey: string) => void;
  resetAllPalettes: () => void;
  unlockPalettes: () => void;
  newProject: () => void;
  getGeneratedColors: (paletteKey: string) => { [key: string]: string };
  getAllGeneratedColors: () => { [key: string]: { [key: string]: string } };
  setTheme: (theme: 'light' | 'dark') => void;
  importProject: (files: FileList) => Promise<void>;
  saveProject: () => Promise<void>;
  hasImportedProject: boolean;
  hasUnsavedChanges: () => boolean;
  useBgFromTheme: boolean;
  setUseBgFromTheme: (value: boolean) => void;
  importedTokens: {
    light?: { [key: string]: { [step: string]: string } };
    dark?: { [key: string]: { [step: string]: string } };
  };
  semanticTokens: {
    light?: any;
    dark?: any;
  };
  setSemanticTokens: (tokens: { light?: any; dark?: any }) => void;
  originalSemanticTokens: {
    light?: any;
    dark?: any;
  };
  selectedSemanticCard: string | null;
  setSelectedSemanticCard: (card: string | null) => void;
  updateSemanticToken: (tokenPath: string, newValue: string) => void;
  cardUsedTokens: { [cardKey: string]: Array<{ name: string; path: string }> };
  setCardUsedTokens: (cardKey: string, tokens: Array<{ name: string; path: string }>) => void;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

const initialPalettes: ColorPalette[] = [
  { name: 'Primary', key: 'primary', hue: 355, chroma: 0.22, baseColor: '#FC002E', includeBaseInPalette: true },
  { name: 'Secondary', key: 'secondary', hue: 35, chroma: 0.15, baseColor: '#DEA64E', includeBaseInPalette: true },
  { name: 'Sub Brand 01', key: 'sub-brand-01', hue: 210, chroma: 0.12, baseColor: '#4288C8', includeBaseInPalette: true },
  { name: 'Sub Brand 02', key: 'sub-brand-02', hue: 180, chroma: 0.14, baseColor: '#00979D', includeBaseInPalette: true },
  { name: 'Grey', key: 'grey', hue: 60, chroma: 0.01, baseColor: '#9e9e9e', includeBaseInPalette: true },
  { name: 'Neutral', key: 'neutral', hue: 80, chroma: 0.03, baseColor: '#999f8e', includeBaseInPalette: true },
  { name: 'Positive', key: 'positive', hue: 110, chroma: 0.16, baseColor: '#6BB215', includeBaseInPalette: true },
  { name: 'Notice', key: 'notice', hue: 30, chroma: 0.14, baseColor: '#D68E36', includeBaseInPalette: true },
  { name: 'Negative', key: 'negative', hue: 15, chroma: 0.22, baseColor: '#E24130', includeBaseInPalette: true },
  { name: 'Informative', key: 'informative', hue: 220, chroma: 0.18, baseColor: '#3A7AFC', includeBaseInPalette: true },
];

export function ColorProvider({ children }: { children: ReactNode }) {
  const [palettes, setPalettes] = useState<ColorPalette[]>(initialPalettes);
  const [lightnessSteps, setLightnessSteps] = useState<number[]>(getLightnessSteps('linear'));
  const [lightnessCurveType, setLightnessCurveType] = useState<LightnessCurveType>('linear');
  const [colorSpace, setColorSpace] = useState<ColorSpace>('oklch');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [hasImportedProject, setHasImportedProject] = useState(false);
  const [importedLightnessSteps, setImportedLightnessSteps] = useState<number[] | null>(null);
  const [importedTokens, setImportedTokens] = useState<{
    light?: { [key: string]: { [step: string]: string } };
    dark?: { [key: string]: { [step: string]: string } };
  }>({});
  const [semanticTokens, setSemanticTokens] = useState<{
    light?: any;
    dark?: any;
  }>({});
  const [originalSemanticTokens, setOriginalSemanticTokens] = useState<{
    light?: any;
    dark?: any;
  }>({});
  const [selectedSemanticCard, setSelectedSemanticCard] = useState<string | null>(null);
  const [cardUsedTokens, setCardUsedTokens] = useState<{ [cardKey: string]: Array<{ name: string; path: string }> }>({});
  const [useBgFromTheme, setUseBgFromTheme] = useState(true);

  const updatePalette = (index: number, palette: ColorPalette) => {
    const newPalettes = [...palettes];
    newPalettes[index] = palette;
    setPalettes(newPalettes);
  };

  const updateLightnessSteps = (steps: number[]) => {
    setLightnessSteps(steps);
  };

  const updateCustomColor = (
    paletteKey: string,
    step: string,
    color: string,
    oklch: { l: number; c: number; h: number }
  ) => {
    const newPalettes = [...palettes];
    const paletteIndex = newPalettes.findIndex(p => p.key === paletteKey);
    
    if (paletteIndex !== -1) {
      if (!newPalettes[paletteIndex].customColors) {
        newPalettes[paletteIndex].customColors = {};
      }
      newPalettes[paletteIndex].customColors![step] = color;
      
      // Update lightness step for this specific step
      const stepIndex = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130].indexOf(parseInt(step));
      if (stepIndex !== -1) {
        const newSteps = [...lightnessSteps];
        newSteps[stepIndex] = oklch.l * 100;
        setLightnessSteps(newSteps);
      }
      
      setPalettes(newPalettes);
    }
  };

  const updateBaseColor = (index: number, color: string, hue: number, chroma: number) => {
    const newPalettes = [...palettes];
    newPalettes[index].baseColor = color;
    newPalettes[index].hue = hue;
    newPalettes[index].chroma = chroma;
    setPalettes(newPalettes);
  };

  const toggleIncludeBaseInPalette = (index: number) => {
    const newPalettes = [...palettes];
    newPalettes[index].includeBaseInPalette = !newPalettes[index].includeBaseInPalette;
    setPalettes(newPalettes);
  };

  const toggleHueShift = (index: number) => {
    const newPalettes = [...palettes];
    const palette = newPalettes[index];
    
    if (!palette.hueShift) {
      // Initialize hue shift with default values
      palette.hueShift = {
        enabled: true,
        darkHue: palette.hue - 20,  // Shift slightly towards cooler for dark
        lightHue: palette.hue + 20,  // Shift slightly towards warmer for light
      };
    } else {
      palette.hueShift.enabled = !palette.hueShift.enabled;
    }
    
    setPalettes(newPalettes);
  };

  const updateHueShift = (index: number, darkHue: number, lightHue: number) => {
    const newPalettes = [...palettes];
    const palette = newPalettes[index];
    
    if (!palette.hueShift) {
      palette.hueShift = {
        enabled: true,
        darkHue,
        lightHue,
      };
    } else {
      palette.hueShift.darkHue = darkHue;
      palette.hueShift.lightHue = lightHue;
    }
    
    setPalettes(newPalettes);
  };

  const resetPaletteColors = (paletteKey: string) => {
    const newPalettes = [...palettes];
    const paletteIndex = newPalettes.findIndex(p => p.key === paletteKey);
    
    if (paletteIndex !== -1) {
      // Remove custom colors
      delete newPalettes[paletteIndex].customColors;
      setPalettes(newPalettes);
      
      // Reset lightness steps to default
      setLightnessSteps(defaultLightnessSteps);
    }
  };

  const resetAllPalettes = () => {
    // Remove custom colors from all palettes
    const newPalettes = palettes.map(palette => {
      const { customColors, ...rest } = palette;
      return rest;
    });
    
    setPalettes(newPalettes);
    
    // If we have imported lightness steps, keep them; otherwise reset to default
    if (importedLightnessSteps && importedLightnessSteps.length > 0) {
      setLightnessSteps(importedLightnessSteps);
      toast.success('Toate paletele au fost resetate!', {
        description: 'S-au șters toate modificările custom, dar lightness steps importați au fost păstrați.',
      });
    } else {
      setLightnessSteps(defaultLightnessSteps);
      setLightnessCurveType('linear');
      toast.success('Toate paletele au fost resetate!', {
        description: 'S-au șters toate modificările custom și lightness steps sunt setați la default.',
      });
    }
  };

  const unlockPalettes = () => {
    // Remove custom colors from all palettes to unlock them
    const newPalettes = palettes.map(palette => {
      const { customColors, ...rest } = palette;
      return rest;
    });
    
    setPalettes(newPalettes);
    setHasImportedProject(false);
    
    toast.success('Paletele au fost deblocate!', {
      description: 'Poți acum modifica paletele importate.',
    });
  };

  const newProject = async () => {
    try {
      // Load template tokens from public/template folder
      const loadTemplateTokens = async () => {
        const tokens: {
          light?: { [key: string]: { [step: string]: string } };
          dark?: { [key: string]: { [step: string]: string } };
        } = {};
        
        const semantic: {
          light?: any;
          dark?: any;
        } = {};

        // Load primitive tokens for both themes
        for (const theme of ['light', 'dark']) {
          try {
            const response = await fetch(`/template/tokens-${theme}/primitives/color.json`);
            if (response.ok) {
              const data = await response.json();
              tokens[theme as 'light' | 'dark'] = parseColorTokens(data);
            }
          } catch (error) {
            console.warn(`Could not load ${theme} primitive tokens from template:`, error);
          }

          // Load semantic tokens
          try {
            const response = await fetch(`/template/tokens-${theme}/semantic/color.json`);
            if (response.ok) {
              const data = await response.json();
              semantic[theme as 'light' | 'dark'] = data;
            }
          } catch (error) {
            console.warn(`Could not load ${theme} semantic tokens from template:`, error);
          }
        }

        return { tokens, semantic };
      };

      const { tokens, semantic } = await loadTemplateTokens();

      // Set the imported tokens
      setImportedTokens(tokens);
      setSemanticTokens(semantic);
      setOriginalSemanticTokens(JSON.parse(JSON.stringify(semantic)));
      setHasImportedProject(false); // New project is NOT an import
      setLightnessCurveType('linear');

      // Load palettes from light theme tokens
      if (tokens.light && Object.keys(tokens.light).length > 0) {
        loadPalettesFromTokens(tokens.light, false); // false = new project, not import
        toast.success('Proiect nou creat!', {
          description: `${Object.keys(tokens.light).length} palete încărcate din template.`,
        });
      } else {
        // Fallback to initial palettes if no template found
        setPalettes(initialPalettes);
        setLightnessSteps(defaultLightnessSteps);
        setHasImportedProject(false);
        setImportedLightnessSteps(null);
        toast.success('Proiect nou creat!', {
          description: 'Folosesc paletele implicite (template-ul nu a fost găsit).',
        });
      }
      
      setTheme('light');
    } catch (error) {
      console.error('Error creating new project:', error);
      // Fallback to default behavior
      setPalettes(initialPalettes);
      setLightnessSteps(defaultLightnessSteps);
      setLightnessCurveType('linear');
      setTheme('light');
      setHasImportedProject(false);
      setImportedLightnessSteps(null);
      setImportedTokens({});
      setSemanticTokens({});
      setOriginalSemanticTokens({});
      
      toast.error('Eroare la crearea proiectului', {
        description: 'Folosesc paletele implicite.',
      });
    }
  };

  const getGeneratedColors = (paletteKey: string): { [key: string]: string } => {
    const palette = palettes.find(p => p.key === paletteKey);
    if (!palette) return {};
    
    const generated = generatePalette(palette.hue, palette.chroma, lightnessSteps, colorSpace, palette.hueShift);
    
    // If "Include in Palette" is enabled, find the closest step and override it with base color
    if (palette.includeBaseInPalette) {
      const baseOklch = hexToOKLCH(palette.baseColor);
      const stepNames = ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100', '110', '120', '130'];
      
      // Find the closest lightness step
      let closestStep = '60';
      let minDistance = Infinity;
      
      lightnessSteps.forEach((lightness, index) => {
        const distance = Math.abs(lightness - (baseOklch.l * 100));
        if (distance < minDistance) {
          minDistance = distance;
          closestStep = stepNames[index];
        }
      });
      
      generated[closestStep] = palette.baseColor;
    }
    
    // Override with custom colors if they exist
    if (palette.customColors) {
      return { ...generated, ...palette.customColors };
    }
    
    return generated;
  };

  const getAllGeneratedColors = (): { [key: string]: { [key: string]: string } } => {
    const allColors: { [key: string]: { [key: string]: string } } = {};
    
    palettes.forEach(palette => {
      allColors[palette.key] = getGeneratedColors(palette.key);
    });

    // Add static colors
    allColors['white'] = {
      '10': 'rgba(255,255,255,0.1)',
      '20': 'rgba(255,255,255,0.2)',
      '30': 'rgba(255,255,255,0.3)',
      '40': 'rgba(255,255,255,0.4)',
      '50': 'rgba(255,255,255,0.5)',
      '60': 'rgba(255,255,255,0.6)',
      '70': 'rgba(255,255,255,0.7)',
      '80': 'rgba(255,255,255,0.8)',
      '90': 'rgba(255,255,255,0.9)',
      '100': '#fff',
    };

    allColors['black'] = {
      '10': 'rgba(0,0,0,0.1)',
      '20': 'rgba(0,0,0,0.2)',
      '30': 'rgba(0,0,0,0.3)',
      '40': 'rgba(0,0,0,0.4)',
      '50': 'rgba(0,0,0,0.5)',
      '60': 'rgba(0,0,0,0.6)',
      '70': 'rgba(0,0,0,0.7)',
      '80': 'rgba(0,0,0,0.8)',
      '90': 'rgba(0,0,0,0.9)',
      '100': '#000',
    };

    allColors['transparent'] = {
      '100': 'transparent'
    };
    
    return allColors;
  };

  const importProject = async (files: FileList) => {
    if (files.length === 0) return;
    
    // Check for unsaved changes before proceeding
    if (hasUnsavedChanges()) {
      const confirmed = window.confirm(
        'Ai modificări nesalvate. Dacă continui, acestea vor fi pierdute. Vrei să continui?'
      );
      if (!confirmed) {
        return;
      }
    }
    
    try {
      // Reset state before importing to ensure clean slate
      setHasImportedProject(false);
      setImportedLightnessSteps(null);
      setImportedTokens({});
      setSemanticTokens({});
      setOriginalSemanticTokens({});
      setLightnessSteps(defaultLightnessSteps);
      setLightnessCurveType('linear');
      
      const tokens: {
        light?: { [key: string]: { [step: string]: string } };
        dark?: { [key: string]: { [step: string]: string } };
      } = {};
      
      const semantic: {
        light?: any;
        dark?: any;
      } = {};
      
      // Process all files
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const path = file.webkitRelativePath || file.name;
        
        // Look for color.json files in primitives folder
        if (path.includes('tokens-light/primitives/color.json')) {
          const text = await file.text();
          const data = JSON.parse(text);
          tokens.light = parseColorTokens(data);
        } else if (path.includes('tokens-dark/primitives/color.json')) {
          const text = await file.text();
          const data = JSON.parse(text);
          tokens.dark = parseColorTokens(data);
        }
        // Look for color.json files in semantic folder
        else if (path.includes('tokens-light/semantic/color.json')) {
          const text = await file.text();
          semantic.light = JSON.parse(text);
        } else if (path.includes('tokens-dark/semantic/color.json')) {
          const text = await file.text();
          semantic.dark = JSON.parse(text);
        }
      }
      
      setImportedTokens(tokens);
      setSemanticTokens(semantic);
      setOriginalSemanticTokens(semantic);
      setHasImportedProject(true);
      
      // Load palettes from current theme
      const currentTokens = tokens[theme];
      if (currentTokens) {
        loadPalettesFromTokens(currentTokens, true); // true = this is an import
        
        // Success message
        const paletteCount = Object.keys(currentTokens).length;
        const semanticCount = semantic[theme] ? Object.keys(semantic[theme]).length : 0;
        toast.success('Proiect importat cu succes!', {
          description: `${paletteCount} palete primitive și ${semanticCount} tokeni semantici încărcați din tema ${theme}.`,
        });
      } else {
        toast.warning('Proiect importat parțial', {
          description: `Nu s-au găsit tokeni pentru tema ${theme}.`,
        });
      }
    } catch (error) {
      console.error('Import error:', error);
      toast.error('Eroare la importul proiectului', {
        description: 'Verifică structura folderului și încearcă din nou.',
      });
    }
  };
  
  const parseColorTokens = (data: any): { [key: string]: { [step: string]: string } } => {
    const colors: { [key: string]: { [step: string]: string } } = {};
    
    // Skip known non-color-palette entries
    const skipKeys = ['gradient', 'transparent'];
    
    // Parse token structure: { "primary": { "10": { "$value": "#..." }, ... } }
    Object.entries(data).forEach(([paletteName, paletteData]: [string, any]) => {
      // Skip non-color palettes
      if (skipKeys.includes(paletteName)) {
        return;
      }
      
      if (typeof paletteData === 'object' && paletteData !== null) {
        colors[paletteName] = {};
        Object.entries(paletteData).forEach(([step, tokenData]: [string, any]) => {
          if (tokenData && typeof tokenData === 'object' && '$value' in tokenData) {
            colors[paletteName][step] = tokenData.$value;
          }
        });
      }
    });
    
    return colors;
  };
  
  const loadPalettesFromTokens = (tokens: { [key: string]: { [step: string]: string } }, isImport: boolean = true) => {
    const newPalettes: ColorPalette[] = [];
    const lightnessMap: { [step: string]: number[] } = {};
    
    // Standard step names
    const stepNames = ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100', '110', '120', '130'];
    
    Object.entries(tokens).forEach(([key, steps]) => {
      // Skip if steps is empty or not an object
      if (!steps || typeof steps !== 'object' || Object.keys(steps).length === 0) {
        console.warn(`Skipping palette "${key}" - no valid color steps found`);
        return;
      }
      
      // Extract lightness from each step
      stepNames.forEach(stepName => {
        if (steps[stepName]) {
          try {
            const oklch = hexToOKLCH(steps[stepName]);
            if (!lightnessMap[stepName]) {
              lightnessMap[stepName] = [];
            }
            lightnessMap[stepName].push(oklch.l * 100);
          } catch (e) {
            console.warn(`Could not parse color for ${key}-${stepName}`);
          }
        }
      });
      
      // Get the middle color (60) as base color
      const baseColor = steps['60'] || steps['50'] || Object.values(steps).find(v => v && typeof v === 'string');
      
      // Skip if no valid base color found
      if (!baseColor || typeof baseColor !== 'string') {
        console.warn(`Skipping palette "${key}" - no valid base color found`);
        return;
      }
      
      const oklch = hexToOKLCH(baseColor);
      
      // Create palette - only add customColors if it's a real import (not a new project from template)
      const palette: ColorPalette = {
        name: key.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        key: key,
        hue: oklch.h,
        chroma: oklch.c,
        baseColor: baseColor,
        includeBaseInPalette: true, // Always include base in palette by default
        ...(isImport ? { customColors: steps } : {}),
      };
      
      newPalettes.push(palette);
    });
    
    // Calculate average lightness for each step
    const detectedLightnessSteps: number[] = [];
    stepNames.forEach(stepName => {
      if (lightnessMap[stepName] && lightnessMap[stepName].length > 0) {
        const avg = lightnessMap[stepName].reduce((a, b) => a + b, 0) / lightnessMap[stepName].length;
        detectedLightnessSteps.push(Math.round(avg * 100) / 100);
      } else {
        // Use default if no data
        const stepIndex = stepNames.indexOf(stepName);
        detectedLightnessSteps.push(defaultLightnessSteps[stepIndex]);
      }
    });
    
    // Only update palettes if we have at least one valid palette
    if (newPalettes.length > 0) {
      setPalettes(newPalettes);
      
      // Update lightness steps with detected values
      if (detectedLightnessSteps.length === 13) {
        setLightnessSteps(detectedLightnessSteps);
        setImportedLightnessSteps(detectedLightnessSteps);
        console.log('Detected lightness steps:', detectedLightnessSteps);
      }
    } else {
      console.error('No valid palettes found in imported tokens');
    }
  };

  const saveProject = async () => {
    if (!hasImportedProject) {
      toast.error('Nu există un proiect importat', {
        description: 'Importă mai întâi un proiect pentru a salva modificările.',
      });
      return;
    }

    try {
      // Dynamic import JSZip
      const JSZip = (await import('jszip')).default;
      const zip = new JSZip();

      // Generate color tokens for current palettes
      const generateTokensForPalettes = () => {
        const tokens: any = {};
        
        palettes.forEach(palette => {
          const colors = getGeneratedColors(palette.key);
          tokens[palette.key] = {};
          
          Object.entries(colors).forEach(([step, color]) => {
            tokens[palette.key][step] = {
              "$type": "color",
              "$value": color
            };
          });
        });
        
        return tokens;
      };

      const currentTokens = generateTokensForPalettes();

      // Save for both themes
      for (const themeName of ['light', 'dark']) {
        // Get existing tokens for this theme or use empty object
        const existingTokens = importedTokens[themeName as 'light' | 'dark'] || {};
        
        // Convert existing tokens to proper format
        const existingFormatted: any = {};
        Object.entries(existingTokens).forEach(([key, steps]) => {
          existingFormatted[key] = {};
          Object.entries(steps).forEach(([step, color]) => {
            existingFormatted[key][step] = {
              "$type": "color",
              "$value": color
            };
          });
        });
        
        // Merge: preserve existing tokens, update only edited palettes
        const mergedTokens = { ...existingFormatted };
        
        // Update only the palettes we have
        Object.entries(currentTokens).forEach(([paletteKey, paletteData]) => {
          mergedTokens[paletteKey] = paletteData;
        });
        
        // Add to ZIP
        const jsonContent = JSON.stringify(mergedTokens, null, 2);
        zip.file(`tokens-${themeName}/primitives/color.json`, jsonContent);
      }

      // Generate ZIP file
      const blob = await zip.generateAsync({ type: 'blob' });
      
      // Download ZIP
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'tokens-export.zip';
      a.click();
      URL.revokeObjectURL(url);

      toast.success('Proiect exportat cu succes!', {
        description: 'Fișierul ZIP conține structura de foldere tokens-light/ și tokens-dark/.',
      });
    } catch (error: any) {
      console.error('Save error:', error);
      toast.error('Eroare la salvarea proiectului', {
        description: error.message || 'A apărut o eroare la generarea fișierului ZIP.',
      });
    }
  };

  // Effect to reload palettes when theme changes
  useEffect(() => {
    if (hasImportedProject && importedTokens[theme]) {
      const currentThemeTokens = importedTokens[theme];
      if (currentThemeTokens) {
        const newPalettes: ColorPalette[] = [];
        
        Object.entries(currentThemeTokens).forEach(([key, steps]) => {
          if (!steps || typeof steps !== 'object' || Object.keys(steps).length === 0) {
            return;
          }
          
          const baseColor = steps['60'] || steps['50'] || Object.values(steps).find(v => v && typeof v === 'string');
          
          if (!baseColor || typeof baseColor !== 'string') {
            return;
          }
          
          const oklch = hexToOKLCH(baseColor);
          
          const palette: ColorPalette = {
            name: key.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
            key: key,
            hue: oklch.h,
            chroma: oklch.c,
            baseColor: baseColor,
            customColors: steps,
          };
          
          newPalettes.push(palette);
        });
        
        if (newPalettes.length > 0) {
          setPalettes(newPalettes);
          toast.info(`Tema ${theme} încărcată`, {
            description: `${newPalettes.length} palete de culori active.`,
          });
        }
      }
    }
  }, [theme]);

  // Effect to load template on initial mount
  useEffect(() => {
    const loadInitialTemplate = async () => {
      try {
        const tokens: {
          light?: { [key: string]: { [step: string]: string } };
          dark?: { [key: string]: { [step: string]: string } };
        } = {};
        
        const semantic: {
          light?: any;
          dark?: any;
        } = {};

        // Load primitive tokens for both themes
        for (const themeName of ['light', 'dark']) {
          try {
            const response = await fetch(`/template/tokens-${themeName}/primitives/color.json`);
            if (response.ok) {
              const data = await response.json();
              tokens[themeName as 'light' | 'dark'] = parseColorTokens(data);
            }
          } catch (error) {
            console.warn(`Could not load ${themeName} primitive tokens from template:`, error);
          }

          // Load semantic tokens
          try {
            const response = await fetch(`/template/tokens-${themeName}/semantic/color.json`);
            if (response.ok) {
              const data = await response.json();
              semantic[themeName as 'light' | 'dark'] = data;
            }
          } catch (error) {
            console.warn(`Could not load ${themeName} semantic tokens from template:`, error);
          }
        }

        // Only set if we successfully loaded tokens
        if (tokens.light && Object.keys(tokens.light).length > 0) {
          setImportedTokens(tokens);
          setSemanticTokens(semantic);
          setOriginalSemanticTokens(JSON.parse(JSON.stringify(semantic)));
          setHasImportedProject(false); // false = treat initial load like new project (unlocked)
          loadPalettesFromTokens(tokens.light, false); // false = new project, not import (unlocked)
          console.log('Template loaded successfully on initial mount');
        }
      } catch (error) {
        console.warn('Could not load template on initial mount:', error);
        // Keep default palettes if template loading fails
      }
    };

    loadInitialTemplate();
  }, []); // Empty dependency array - run only once on mount

  const updateSemanticToken = (tokenPath: string, newValue: string) => {
    const [themeName, ...path] = tokenPath.split('.');
    let currentTokens = semanticTokens[themeName as 'light' | 'dark'];
    
    // If no tokens exist for this theme, initialize with semanticColors
    if (!currentTokens) {
      currentTokens = semanticColors;
      // Also initialize original tokens if they don't exist
      if (!originalSemanticTokens[themeName as 'light' | 'dark']) {
        setOriginalSemanticTokens({
          ...originalSemanticTokens,
          [themeName]: JSON.parse(JSON.stringify(semanticColors))
        });
      }
    }
    
    // Deep clone to avoid mutating state directly
    const newTokens = JSON.parse(JSON.stringify(currentTokens));
    
    // Navigate to the token location
    let currentRef: any = newTokens;
    for (let i = 0; i < path.length - 1; i++) {
      const key = path[i];
      if (!currentRef[key]) {
        currentRef[key] = {};
      }
      currentRef = currentRef[key];
    }
    
    const finalKey = path[path.length - 1];
    
    // Preserve the token structure with $value, $type, $description
    if (currentRef[finalKey] && typeof currentRef[finalKey] === 'object' && '$value' in currentRef[finalKey]) {
      // Update only the $value property
      currentRef[finalKey] = {
        ...currentRef[finalKey],
        $value: newValue
      };
    } else {
      // Create new token structure
      currentRef[finalKey] = {
        $type: 'color',
        $value: newValue
      };
    }
    
    const newSemanticTokens = {
      ...semanticTokens,
      [themeName]: newTokens,
    };
    
    setSemanticTokens(newSemanticTokens);
    
    toast.success('Token actualizat!', {
      description: `${path.join('.')} = ${newValue}`,
    });
  };

  const hasUnsavedChanges = () => {
    // Check if any palette has custom colors
    const hasCustomColors = palettes.some(palette => !!palette.customColors);
    
    // Check if lightness steps have been modified
    const hasModifiedLightnessSteps = !lightnessSteps.every((step, index) => step === defaultLightnessSteps[index]);
    
    // Check if semantic tokens have been modified
    const hasModifiedSemanticTokens = Object.keys(semanticTokens).some(themeName => {
      const currentTokens = semanticTokens[themeName as 'light' | 'dark'];
      const originalTokens = originalSemanticTokens[themeName as 'light' | 'dark'];
      return JSON.stringify(currentTokens) !== JSON.stringify(originalTokens);
    });
    
    return hasCustomColors || hasModifiedLightnessSteps || hasModifiedSemanticTokens;
  };

  const updateCardUsedTokens = (cardKey: string, tokens: Array<{ name: string; path: string }>) => {
    setCardUsedTokens(prev => ({
      ...prev,
      [cardKey]: tokens
    }));
  };

  return (
    <ColorContext.Provider
      value={{
        palettes,
        lightnessSteps,
        lightnessCurveType,
        colorSpace,
        theme,
        updatePalette,
        updateLightnessSteps,
        setLightnessCurveType,
        setColorSpace,
        updateCustomColor,
        updateBaseColor,
        toggleIncludeBaseInPalette,
        toggleHueShift,
        updateHueShift,
        resetPaletteColors,
        resetAllPalettes,
        unlockPalettes,
        newProject,
        getGeneratedColors,
        getAllGeneratedColors,
        setTheme,
        importProject,
        saveProject,
        hasImportedProject,
        hasUnsavedChanges,
        useBgFromTheme,
        setUseBgFromTheme,
        importedTokens,
        semanticTokens,
        setSemanticTokens,
        originalSemanticTokens,
        selectedSemanticCard,
        setSelectedSemanticCard,
        updateSemanticToken,
        cardUsedTokens,
        setCardUsedTokens: updateCardUsedTokens,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
}

export function useColors() {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error('useColors must be used within a ColorProvider');
  }
  return context;
}