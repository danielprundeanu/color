import { useState, useRef, useEffect } from 'react';
import { Check, Lock, Unlock, Shuffle, Plus, Minus } from 'lucide-react';
import { hexToOKLCH, oklchToHex, getLightnessSteps, hexToLCH, lchToHex } from '../utils/colorUtils';
import { hexToHSL, hslToHex } from '../utils/colorConversions';
import { HslColorPicker, HslColor, RgbColorPicker, RgbColor } from 'react-colorful';
import { useColors } from '../contexts/ColorContext';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { BezierCurveEditor } from './BezierCurveEditor';
import { AdvancedColorPicker } from './AdvancedColorPicker';
import { ColorPickerPopover } from './ColorPickerPopover';
import { BaseColorPickerPopover } from './BaseColorPickerPopover';
import { Resizable } from 're-resizable';

interface ColorSidebarProps {
  selectedPalette: number;
  setSelectedPalette: (index: number) => void;
}

export function ColorSidebar({ 
  selectedPalette, 
  setSelectedPalette
}: ColorSidebarProps) {
  const { 
    palettes, 
    lightnessSteps, 
    lightnessCurveType, 
    colorSpace,
    updatePalette, 
    updateLightnessSteps, 
    setLightnessCurveType, 
    setColorSpace,
    updateBaseColor, 
    toggleIncludeBaseInPalette,
    toggleHueShift,
    updateHueShift,
    resetAllPalettes,
    unlockPalettes,
    getGeneratedColors,
    semanticTokens,
    theme,
    getAllGeneratedColors,
    hasImportedProject
  } = useColors();
  const currentPalette = palettes[selectedPalette];
  const [editingPalette] = useState<number | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isMagnetic, setIsMagnetic] = useState(false);
  const [lockedPalettes, setLockedPalettes] = useState<Set<number>>(new Set());
  const [selectedSwatch, setSelectedSwatch] = useState<number | null>(null);
  const [hoveredSwatch, setHoveredSwatch] = useState<number | null>(null);
  const [colorInputFormat, setColorInputFormat] = useState<'hex' | 'hsl' | 'rgb' | 'lch' | 'oklch'>('hex');
  const [previewColor, setPreviewColor] = useState<{ hex: string; l: number; c: number; h: number } | null>(null);
  const pendingUpdateRef = useRef<{ l: number; c: number; h: number } | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const editButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Sidebar uses a fixed neutral background color (theme-agnostic)
  const sidebarBgColor = '#1f2937'; // gray-800

  const handleLightnessChange = (index: number, value: number) => {
    const newSteps = [...lightnessSteps];
    
    if (isMagnetic) {
      // Magnetic mode: affect neighboring sliders proportionally
      const delta = value - newSteps[index];
      newSteps[index] = value;
      
      // Calculate influence on neighbors (decreases with distance)
      const maxInfluence = 3; // Affect up to 3 neighbors on each side
      
      for (let i = 1; i <= maxInfluence; i++) {
        const influence = Math.pow(0.5, i); // Exponential decay: 0.5, 0.25, 0.125
        
        // Affect slider above
        if (index - i >= 0) {
          const newValue = newSteps[index - i] + (delta * influence);
          newSteps[index - i] = Math.max(0, Math.min(100, newValue));
        }
        
        // Affect slider below
        if (index + i < newSteps.length) {
          const newValue = newSteps[index + i] + (delta * influence);
          newSteps[index + i] = Math.max(0, Math.min(100, newValue));
        }
      }
    } else {
      // Normal mode: only change the current slider
      newSteps[index] = value;
    }
    
    updateLightnessSteps(newSteps);
  };

  const handleBaseColorChange = (color: string, hue: number, chroma: number) => {
    if (editingPalette !== null) {
      updateBaseColor(editingPalette, color, hue, chroma);
      // If this is the currently selected palette, update it
      if (editingPalette === selectedPalette) {
        setSelectedPalette(editingPalette);
      }
    }
  };

  // Optimized color update - instant preview + batched state update
  const handlePickerChange = (l: number, c: number, h: number) => {
    if (selectedSwatch === null) return;
    
    // Instant visual feedback
    const hex = oklchToHex({ l, c, h });
    setPreviewColor({ hex, l, c, h });
    
    // Store pending update
    pendingUpdateRef.current = { l, c, h };
    
    // Cancel any pending animation frame
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
    }
    
    // Batch the actual state update
    rafIdRef.current = requestAnimationFrame(() => {
      if (pendingUpdateRef.current && selectedSwatch !== null) {
        const { l, c, h } = pendingUpdateRef.current;
        const hex = oklchToHex({ l, c, h });
        updateBaseColor(selectedSwatch, hex, h, c);
        pendingUpdateRef.current = null;
        setPreviewColor(null);
      }
      rafIdRef.current = null;
    });
  };

  // Get current color - use preview if available for instant feedback
  const getCurrentColor = () => {
    if (selectedSwatch === null) return { hex: '#000000', l: 0.5, c: 0.1, h: 0 };
    
    // Use preview color for instant visual feedback during drag
    if (previewColor) return previewColor;
    
    const palette = palettes[selectedSwatch];
    const oklch = hexToOKLCH(palette.baseColor);
    return { hex: palette.baseColor, l: oklch.l, c: oklch.c, h: oklch.h };
  };

  // Clear preview when swatch changes
  useEffect(() => {
    setPreviewColor(null);
  }, [selectedSwatch]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  return (
    <>
      <Resizable
        defaultSize={{ width: 400, height: '100vh' }}
        minWidth={300}
        maxWidth={600}
        enable={{ right: true }}
        handleClasses={{
          right: 'resize-handle'
        }}
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          backgroundColor: sidebarBgColor
        }}
        className="text-white border-r border-gray-700"
      >
        <div className="h-full overflow-y-auto p-6 space-y-6">
          {/* Swatches with Generate Button */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Swatches</h2>
              <button
                onClick={() => {
                  // Generate random colors for unlocked palettes
                  palettes.forEach((palette, index) => {
                    if (!lockedPalettes.has(index)) {
                      const randomHue = Math.floor(Math.random() * 360);
                      const randomChroma = 0.1 + Math.random() * 0.15; // 0.1 to 0.25
                      const newColor = oklchToHex({
                        l: 0.6,
                        c: randomChroma,
                        h: randomHue,
                      });
                      updateBaseColor(index, newColor, randomHue, randomChroma);
                    }
                  });
                }}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
              >
                <Shuffle className="w-4 h-4" />
                Generate
              </button>
            </div>
            <div className="grid grid-cols-2" style={{ gap: '4px' }}>
              {palettes
                .filter(palette => palette.name !== 'White' && palette.name !== 'Black')
                .map((palette) => {
                  // Find the real index in the original palettes array
                  const index = palettes.findIndex(p => p.name === palette.name);
                  const oklch = hexToOKLCH(palette.baseColor);
                const isLocked = lockedPalettes.has(index);
                const isSelected = selectedSwatch === index;
                const isHovered = hoveredSwatch === index;
                return (
                  <div
                    key={palette.name}
                    onClick={() => setSelectedSwatch(index)}
                    onMouseEnter={() => setHoveredSwatch(index)}
                    onMouseLeave={() => setHoveredSwatch(null)}
                    className={`relative transition-all cursor-pointer ${
                      isSelected ? 'ring-2 ring-blue-400' : ''
                    }`}
                    style={{ 
                      backgroundColor: palette.baseColor,
                      borderRadius: '6px',
                      height: '80px'
                    }}
                  >
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-between" style={{ padding: '6px' }}>
                      {/* Top: Name and Icons */}
                      <div className="flex items-start justify-between">
                        <p className="text-sm font-semibold text-white drop-shadow-lg truncate">
                          {palette.name}
                        </p>
                        <div className="flex items-center gap-1.5">
                          {/* Lock - First button, show when locked or on hover */}
                          {(isLocked || isHovered) && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setLockedPalettes(prev => {
                                  const newSet = new Set(prev);
                                  if (newSet.has(index)) {
                                    newSet.delete(index);
                                  } else {
                                    newSet.add(index);
                                  }
                                  return newSet;
                                });
                              }}
                              className="p-1 bg-white/30 hover:bg-white/40 rounded transition-all"
                              title={isLocked ? "Unlock" : "Lock"}
                            >
                              {isLocked ? (
                                <Lock className="w-3.5 h-3.5 text-white" />
                              ) : (
                                <Unlock className="w-3.5 h-3.5 text-white/60" />
                              )}
                            </button>
                          )}
                          {/* Include in Palette Check - Second button, show when active or on hover */}
                          {(palette.includeBaseInPalette || isHovered) && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleIncludeBaseInPalette(index);
                              }}
                              className={`p-1 rounded transition-all ${
                                palette.includeBaseInPalette
                                  ? 'bg-white/90 text-blue-600'
                                  : 'bg-white/30 text-white/60 hover:bg-white/40'
                              }`}
                              title="Include in palette"
                            >
                              <Check className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>
                      {/* Bottom: Color Values */}
                      <div>
                        <p className="text-[10px] font-medium text-white drop-shadow-lg">
                          {palette.baseColor}
                        </p>
                        <p className="text-[10px] text-white/90 drop-shadow-lg">
                          oklch({Math.round(oklch.l * 100)}, {oklch.c.toFixed(2)}, {Math.round(oklch.h)})
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Color Picker - appears when swatch is selected */}
            {selectedSwatch !== null && (
              <div className="mt-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 space-y-3">
                {/* Format Selector and Color Input */}
                <div className="flex items-stretch gap-2">
                  <select
                    value={colorInputFormat}
                    onChange={(e) => setColorInputFormat(e.target.value as 'hex' | 'hsl' | 'rgb' | 'lch' | 'oklch')}
                    className="px-3 py-2 bg-gray-700/80 text-white text-xs font-medium rounded-lg border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 cursor-pointer transition-all hover:bg-gray-700"
                    style={{ minWidth: '80px' }}
                  >
                    <option value="hex">HEX</option>
                    <option value="hsl">HSL</option>
                    <option value="rgb">RGB</option>
                    <option value="lch">LCH</option>
                    <option value="oklch">OKLCH</option>
                  </select>
                  
                  <div className="flex-1 flex items-center gap-3 px-4 py-2 bg-gray-700/80 rounded-lg border border-gray-600/50 transition-all hover:border-gray-500/50">
                    <div
                      className="w-7 h-7 rounded-lg border-2 border-white/30 flex-shrink-0 shadow-sm transition-colors"
                      style={{ backgroundColor: getCurrentColor().hex }}
                    />
                    {colorInputFormat === 'hex' && (
                      <input
                        type="text"
                        value={getCurrentColor().hex.toUpperCase()}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (/^#[0-9A-Fa-f]{6}$/.test(value)) {
                            const oklch = hexToOKLCH(value);
                            handlePickerChange(oklch.l, oklch.c, oklch.h);
                          }
                        }}
                        className="flex-1 bg-transparent text-white text-sm font-semibold tracking-wide focus:outline-none"
                        placeholder="#000000"
                      />
                    )}
                    {colorInputFormat === 'hsl' && (
                      <div className="flex-1 flex items-center gap-2">
                        <input
                          type="number"
                          min="0"
                          max="360"
                          value={Math.round(hexToHSL(getCurrentColor().hex).h)}
                          onChange={(e) => {
                            const hsl = hexToHSL(getCurrentColor().hex);
                            hsl.h = parseInt(e.target.value) || 0;
                            const hexColor = hslToHex(hsl);
                            const oklch = hexToOKLCH(hexColor);
                            handlePickerChange(oklch.l, oklch.c, oklch.h);
                          }}
                          className="w-16 bg-transparent text-white text-xs text-center focus:outline-none"
                          placeholder="H"
                        />
                        <span className="text-white/50 text-xs">°</span>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={Math.round(hexToHSL(getCurrentColor().hex).s)}
                          onChange={(e) => {
                            const hsl = hexToHSL(getCurrentColor().hex);
                            hsl.s = parseInt(e.target.value) || 0;
                            const hexColor = hslToHex(hsl);
                            const oklch = hexToOKLCH(hexColor);
                            handlePickerChange(oklch.l, oklch.c, oklch.h);
                          }}
                          className="w-12 bg-transparent text-white text-xs text-center focus:outline-none"
                          placeholder="S"
                        />
                        <span className="text-white/50 text-xs">%</span>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={Math.round(hexToHSL(getCurrentColor().hex).l)}
                          onChange={(e) => {
                            const hsl = hexToHSL(getCurrentColor().hex);
                            hsl.l = parseInt(e.target.value) || 0;
                            const hexColor = hslToHex(hsl);
                            const oklch = hexToOKLCH(hexColor);
                            handlePickerChange(oklch.l, oklch.c, oklch.h);
                          }}
                          className="w-12 bg-transparent text-white text-xs text-center focus:outline-none"
                          placeholder="L"
                        />
                        <span className="text-white/50 text-xs">%</span>
                      </div>
                    )}
                    {colorInputFormat === 'rgb' && (
                      <div className="flex-1 flex items-center gap-2">
                        <input
                          type="number"
                          min="0"
                          max="255"
                          value={parseInt(getCurrentColor().hex.slice(1, 3), 16)}
                          onChange={(e) => {
                            const hex = getCurrentColor().hex;
                            const r = Math.max(0, Math.min(255, parseInt(e.target.value) || 0));
                            const g = parseInt(hex.slice(3, 5), 16);
                            const b = parseInt(hex.slice(5, 7), 16);
                            const newHex = '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
                            const oklch = hexToOKLCH(newHex);
                            handlePickerChange(oklch.l, oklch.c, oklch.h);
                          }}
                          className="w-14 bg-transparent text-white text-xs text-center focus:outline-none"
                          placeholder="R"
                        />
                        <input
                          type="number"
                          min="0"
                          max="255"
                          value={parseInt(getCurrentColor().hex.slice(3, 5), 16)}
                          onChange={(e) => {
                            const hex = getCurrentColor().hex;
                            const r = parseInt(hex.slice(1, 3), 16);
                            const g = Math.max(0, Math.min(255, parseInt(e.target.value) || 0));
                            const b = parseInt(hex.slice(5, 7), 16);
                            const newHex = '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
                            const oklch = hexToOKLCH(newHex);
                            handlePickerChange(oklch.l, oklch.c, oklch.h);
                          }}
                          className="w-14 bg-transparent text-white text-xs text-center focus:outline-none"
                          placeholder="G"
                        />
                        <input
                          type="number"
                          min="0"
                          max="255"
                          value={parseInt(getCurrentColor().hex.slice(5, 7), 16)}
                          onChange={(e) => {
                            const hex = getCurrentColor().hex;
                            const r = parseInt(hex.slice(1, 3), 16);
                            const g = parseInt(hex.slice(3, 5), 16);
                            const b = Math.max(0, Math.min(255, parseInt(e.target.value) || 0));
                            const newHex = '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
                            const oklch = hexToOKLCH(newHex);
                            handlePickerChange(oklch.l, oklch.c, oklch.h);
                          }}
                          className="w-14 bg-transparent text-white text-xs text-center focus:outline-none"
                          placeholder="B"
                        />
                      </div>
                    )}
                    {colorInputFormat === 'oklch' && (
                      <div className="flex-1 flex items-center gap-2">
                        <input
                          type="number"
                          min="0"
                          max="100"
                          step="1"
                          value={Math.round(getCurrentColor().l * 100)}
                          onChange={(e) => {
                            const l = (parseInt(e.target.value) || 0) / 100;
                            handlePickerChange(l, getCurrentColor().c, getCurrentColor().h);
                          }}
                          className="w-14 bg-transparent text-white text-xs text-center focus:outline-none"
                          placeholder="L"
                        />
                        <span className="text-white/50 text-xs">%</span>
                        <input
                          type="number"
                          min="0"
                          max="0.4"
                          step="0.01"
                          value={getCurrentColor().c.toFixed(2)}
                          onChange={(e) => {
                            const c = parseFloat(e.target.value) || 0;
                            handlePickerChange(getCurrentColor().l, c, getCurrentColor().h);
                          }}
                          className="w-14 bg-transparent text-white text-xs text-center focus:outline-none"
                          placeholder="C"
                        />
                        <input
                          type="number"
                          min="0"
                          max="360"
                          value={Math.round(getCurrentColor().h)}
                          onChange={(e) => {
                            const h = parseInt(e.target.value) || 0;
                            handlePickerChange(getCurrentColor().l, getCurrentColor().c, h);
                          }}
                          className="w-14 bg-transparent text-white text-xs text-center focus:outline-none"
                          placeholder="H"
                        />
                        <span className="text-white/50 text-xs">°</span>
                      </div>
                    )}
                    {colorInputFormat === 'lch' && (
                      <div className="flex-1 text-white/50 text-xs text-center">
                        LCH input coming soon
                      </div>
                    )}
                  </div>
                </div>

                {/* Color Sliders based on format */}
                {colorInputFormat === 'hex' && (
                  <div className="color-picker-wrapper">
                    <HslColorPicker
                      color={hexToHSL(getCurrentColor().hex)}
                      onChange={(hsl) => {
                        const hexColor = hslToHex(hsl);
                        const oklch = hexToOKLCH(hexColor);
                        handlePickerChange(oklch.l, oklch.c, oklch.h);
                      }}
                    />
                  </div>
                )}

                {colorInputFormat === 'hsl' && (
                  <div className="space-y-4">
                    {/* Hue Slider */}
                    <div>
                      <label className="text-white/70 text-xs font-medium mb-2 block">Hue</label>
                      <input
                        type="range"
                        min="0"
                        max="360"
                        value={hexToHSL(getCurrentColor().hex).h}
                        onChange={(e) => {
                          const hsl = hexToHSL(getCurrentColor().hex);
                          hsl.h = parseInt(e.target.value);
                          const hexColor = hslToHex(hsl);
                          const oklch = hexToOKLCH(hexColor);
                          handlePickerChange(oklch.l, oklch.c, oklch.h);
                        }}
                        className="w-full h-10 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, 
                            hsl(0, ${hexToHSL(getCurrentColor().hex).s}%, ${hexToHSL(getCurrentColor().hex).l}%),
                            hsl(60, ${hexToHSL(getCurrentColor().hex).s}%, ${hexToHSL(getCurrentColor().hex).l}%),
                            hsl(120, ${hexToHSL(getCurrentColor().hex).s}%, ${hexToHSL(getCurrentColor().hex).l}%),
                            hsl(180, ${hexToHSL(getCurrentColor().hex).s}%, ${hexToHSL(getCurrentColor().hex).l}%),
                            hsl(240, ${hexToHSL(getCurrentColor().hex).s}%, ${hexToHSL(getCurrentColor().hex).l}%),
                            hsl(300, ${hexToHSL(getCurrentColor().hex).s}%, ${hexToHSL(getCurrentColor().hex).l}%),
                            hsl(360, ${hexToHSL(getCurrentColor().hex).s}%, ${hexToHSL(getCurrentColor().hex).l}%)
                          )`
                        }}
                      />
                    </div>

                    {/* Saturation Slider */}
                    <div>
                      <label className="text-white/70 text-xs font-medium mb-2 block">Saturation</label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={hexToHSL(getCurrentColor().hex).s}
                        onChange={(e) => {
                          const hsl = hexToHSL(getCurrentColor().hex);
                          hsl.s = parseInt(e.target.value);
                          const hexColor = hslToHex(hsl);
                          const oklch = hexToOKLCH(hexColor);
                          handlePickerChange(oklch.l, oklch.c, oklch.h);
                        }}
                        className="w-full h-10 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, 
                            hsl(${hexToHSL(getCurrentColor().hex).h}, 0%, ${hexToHSL(getCurrentColor().hex).l}%),
                            hsl(${hexToHSL(getCurrentColor().hex).h}, 100%, ${hexToHSL(getCurrentColor().hex).l}%)
                          )`
                        }}
                      />
                    </div>

                    {/* Lightness Slider */}
                    <div>
                      <label className="text-white/70 text-xs font-medium mb-2 block">Lightness</label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={hexToHSL(getCurrentColor().hex).l}
                        onChange={(e) => {
                          const hsl = hexToHSL(getCurrentColor().hex);
                          hsl.l = parseInt(e.target.value);
                          const hexColor = hslToHex(hsl);
                          const oklch = hexToOKLCH(hexColor);
                          handlePickerChange(oklch.l, oklch.c, oklch.h);
                        }}
                        className="w-full h-10 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, 
                            hsl(${hexToHSL(getCurrentColor().hex).h}, ${hexToHSL(getCurrentColor().hex).s}%, 0%),
                            hsl(${hexToHSL(getCurrentColor().hex).h}, ${hexToHSL(getCurrentColor().hex).s}%, 50%),
                            hsl(${hexToHSL(getCurrentColor().hex).h}, ${hexToHSL(getCurrentColor().hex).s}%, 100%)
                          )`
                        }}
                      />
                    </div>
                  </div>
                )}

                {colorInputFormat === 'rgb' && (
                  <div className="space-y-3">
                    <div className="rgb-sliders-wrapper">
                      <RgbColorPicker
                        color={{
                          r: parseInt(getCurrentColor().hex.slice(1, 3), 16),
                          g: parseInt(getCurrentColor().hex.slice(3, 5), 16),
                          b: parseInt(getCurrentColor().hex.slice(5, 7), 16)
                        }}
                        onChange={(rgb) => {
                          const newHex = '#' + [rgb.r, rgb.g, rgb.b].map(v => Math.round(v).toString(16).padStart(2, '0')).join('');
                          const oklch = hexToOKLCH(newHex);
                          handlePickerChange(oklch.l, oklch.c, oklch.h);
                        }}
                      />
                    </div>
                  </div>
                )}

                {colorInputFormat === 'oklch' && (
                  <div className="space-y-4">
                    {/* Lightness Slider */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-white/70 text-xs font-medium">Lightness</label>
                        <input
                          type="text"
                          value={(getCurrentColor().l * 100).toFixed(2)}
                          onChange={(e) => {
                            const val = parseFloat(e.target.value);
                            if (!isNaN(val) && val >= 0 && val <= 100) {
                              handlePickerChange(val / 100, getCurrentColor().c, getCurrentColor().h);
                            }
                          }}
                          className="w-20 px-2 py-1 bg-gray-700/80 text-white text-sm text-right rounded border border-gray-600/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                        />
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        step="0.01"
                        value={getCurrentColor().l * 100}
                        onChange={(e) => {
                          const l = parseFloat(e.target.value) / 100;
                          handlePickerChange(l, getCurrentColor().c, getCurrentColor().h);
                        }}
                        className="w-full h-10 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, 
                            oklch(0% ${getCurrentColor().c} ${getCurrentColor().h}),
                            oklch(50% ${getCurrentColor().c} ${getCurrentColor().h}),
                            oklch(100% ${getCurrentColor().c} ${getCurrentColor().h})
                          )`
                        }}
                      />
                    </div>

                    {/* Chroma Slider */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-white/70 text-xs font-medium">Chroma</label>
                        <input
                          type="text"
                          value={getCurrentColor().c.toFixed(4)}
                          onChange={(e) => {
                            const val = parseFloat(e.target.value);
                            if (!isNaN(val) && val >= 0 && val <= 0.4) {
                              handlePickerChange(getCurrentColor().l, val, getCurrentColor().h);
                            }
                          }}
                          className="w-20 px-2 py-1 bg-gray-700/80 text-white text-sm text-right rounded border border-gray-600/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                        />
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="0.4"
                        step="0.0001"
                        value={getCurrentColor().c}
                        onChange={(e) => {
                          const c = parseFloat(e.target.value);
                          handlePickerChange(getCurrentColor().l, c, getCurrentColor().h);
                        }}
                        className="w-full h-10 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, 
                            oklch(${getCurrentColor().l * 100}% 0 ${getCurrentColor().h}),
                            oklch(${getCurrentColor().l * 100}% 0.4 ${getCurrentColor().h})
                          )`
                        }}
                      />
                    </div>

                    {/* Hue Slider */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-white/70 text-xs font-medium">Hue</label>
                        <input
                          type="text"
                          value={getCurrentColor().h.toFixed(2)}
                          onChange={(e) => {
                            const val = parseFloat(e.target.value);
                            if (!isNaN(val) && val >= 0 && val <= 360) {
                              handlePickerChange(getCurrentColor().l, getCurrentColor().c, val);
                            }
                          }}
                          className="w-20 px-2 py-1 bg-gray-700/80 text-white text-sm text-right rounded border border-gray-600/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                        />
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="360"
                        step="0.01"
                        value={getCurrentColor().h}
                        onChange={(e) => {
                          const h = parseFloat(e.target.value);
                          handlePickerChange(getCurrentColor().l, getCurrentColor().c, h);
                        }}
                        className="w-full h-10 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, 
                            oklch(${getCurrentColor().l * 100}% ${getCurrentColor().c} 0),
                            oklch(${getCurrentColor().l * 100}% ${getCurrentColor().c} 60),
                            oklch(${getCurrentColor().l * 100}% ${getCurrentColor().c} 120),
                            oklch(${getCurrentColor().l * 100}% ${getCurrentColor().c} 180),
                            oklch(${getCurrentColor().l * 100}% ${getCurrentColor().c} 240),
                            oklch(${getCurrentColor().l * 100}% ${getCurrentColor().c} 300),
                            oklch(${getCurrentColor().l * 100}% ${getCurrentColor().c} 360)
                          )`
                        }}
                      />
                    </div>

                    {/* Color preview string */}
                    <div className="mt-4 p-3 bg-gray-900/50 rounded-lg border border-gray-700/50 flex items-center gap-3">
                      <div 
                        className="w-12 h-12 rounded-lg border-2 border-white/20 flex-shrink-0"
                        style={{ backgroundColor: getCurrentColor().hex }}
                      />
                      <code className="text-white/90 text-sm font-mono">
                        oklch({(getCurrentColor().l * 100).toFixed(2)}% {getCurrentColor().c.toFixed(4)} {getCurrentColor().h.toFixed(2)})
                      </code>
                    </div>
                  </div>
                )}

                {colorInputFormat === 'lch' && (
                  <div className="space-y-4">
                    {/* Lightness Slider */}
                    <div>
                      <label className="text-white/70 text-xs font-medium mb-2 block">Lightness</label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        step="1"
                        value={Math.round(hexToLCH(getCurrentColor().hex).l)}
                        onChange={(e) => {
                          const lch = hexToLCH(getCurrentColor().hex);
                          lch.l = parseInt(e.target.value);
                          const hexColor = lchToHex(lch);
                          const oklch = hexToOKLCH(hexColor);
                          handlePickerChange(oklch.l, oklch.c, oklch.h);
                        }}
                        className="w-full h-10 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, 
                            lch(0% ${hexToLCH(getCurrentColor().hex).c} ${hexToLCH(getCurrentColor().hex).h}),
                            lch(50% ${hexToLCH(getCurrentColor().hex).c} ${hexToLCH(getCurrentColor().hex).h}),
                            lch(100% ${hexToLCH(getCurrentColor().hex).c} ${hexToLCH(getCurrentColor().hex).h})
                          )`
                        }}
                      />
                    </div>

                    {/* Chroma Slider */}
                    <div>
                      <label className="text-white/70 text-xs font-medium mb-2 block">Chroma</label>
                      <input
                        type="range"
                        min="0"
                        max="150"
                        step="1"
                        value={Math.round(hexToLCH(getCurrentColor().hex).c)}
                        onChange={(e) => {
                          const lch = hexToLCH(getCurrentColor().hex);
                          lch.c = parseInt(e.target.value);
                          const hexColor = lchToHex(lch);
                          const oklch = hexToOKLCH(hexColor);
                          handlePickerChange(oklch.l, oklch.c, oklch.h);
                        }}
                        className="w-full h-10 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, 
                            lch(${hexToLCH(getCurrentColor().hex).l}% 0 ${hexToLCH(getCurrentColor().hex).h}),
                            lch(${hexToLCH(getCurrentColor().hex).l}% 150 ${hexToLCH(getCurrentColor().hex).h})
                          )`
                        }}
                      />
                    </div>

                    {/* Hue Slider */}
                    <div>
                      <label className="text-white/70 text-xs font-medium mb-2 block">Hue</label>
                      <input
                        type="range"
                        min="0"
                        max="360"
                        value={Math.round(hexToLCH(getCurrentColor().hex).h)}
                        onChange={(e) => {
                          const lch = hexToLCH(getCurrentColor().hex);
                          lch.h = parseInt(e.target.value);
                          const hexColor = lchToHex(lch);
                          const oklch = hexToOKLCH(hexColor);
                          handlePickerChange(oklch.l, oklch.c, oklch.h);
                        }}
                        className="w-full h-10 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, 
                            lch(${hexToLCH(getCurrentColor().hex).l}% ${hexToLCH(getCurrentColor().hex).c} 0),
                            lch(${hexToLCH(getCurrentColor().hex).l}% ${hexToLCH(getCurrentColor().hex).c} 60),
                            lch(${hexToLCH(getCurrentColor().hex).l}% ${hexToLCH(getCurrentColor().hex).c} 120),
                            lch(${hexToLCH(getCurrentColor().hex).l}% ${hexToLCH(getCurrentColor().hex).c} 180),
                            lch(${hexToLCH(getCurrentColor().hex).l}% ${hexToLCH(getCurrentColor().hex).c} 240),
                            lch(${hexToLCH(getCurrentColor().hex).l}% ${hexToLCH(getCurrentColor().hex).c} 300),
                            lch(${hexToLCH(getCurrentColor().hex).l}% ${hexToLCH(getCurrentColor().hex).c} 360)
                          )`
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Palette Color Space Selection */}
          <div className="bg-gray-800 rounded-lg p-3">
            <div className="flex items-center justify-between gap-3 mb-2">
              <h2 className="text-sm font-medium whitespace-nowrap">Palette Color Space</h2>
              <div className="flex gap-1.5 flex-1">
                <button
                  onClick={() => setColorSpace('oklch')}
                  className={`flex-1 px-3 py-1.5 rounded-md transition-colors text-xs font-semibold ${
                    colorSpace === 'oklch'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  OKLCH
                </button>
                <button
                  onClick={() => setColorSpace('lch')}
                  className={`flex-1 px-3 py-1.5 rounded-md transition-colors text-xs font-semibold ${
                    colorSpace === 'lch'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  LCH
                </button>
              </div>
            </div>
          </div>

          {/* Palette Controls */}
          <div className="bg-gray-800 rounded-lg p-4">
            {/* Hue Shifting */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs text-gray-400">Hue Shifting</label>
                <button
                  onClick={() => toggleHueShift(selectedPalette)}
                  className={`inline-flex h-4 w-7 items-center rounded-full transition-all ${
                    currentPalette.hueShift?.enabled ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                  title="Toggle hue shifting"
                >
                  <span
                    className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                      currentPalette.hueShift?.enabled ? 'translate-x-3.5' : 'translate-x-0.5'
                    }`}
                  />
                </button>
              </div>
              
              {currentPalette.hueShift?.enabled && (
                <div className="space-y-2">
                  <div className="text-[10px] text-gray-400 mb-2">
                    Hue shifts from dark → source → light using a Bezier curve
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-xs text-gray-400">Dark Hue</label>
                      <span className="text-xs text-gray-300">{currentPalette.hueShift.darkHue.toFixed(0)}°</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="360"
                      value={currentPalette.hueShift.darkHue}
                      onChange={(e) => updateHueShift(
                        selectedPalette, 
                        parseFloat(e.target.value), 
                        currentPalette.hueShift!.lightHue
                      )}
                      className="w-full h-1"
                    />
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-xs text-gray-400">Source Hue (fixed)</label>
                      <span className="text-xs text-gray-300">{currentPalette.hue.toFixed(0)}°</span>
                    </div>
                    <div className="h-1 bg-gray-700 rounded-full relative">
                      <div className="absolute inset-0 bg-blue-500 rounded-full opacity-50"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-xs text-gray-400">Light Hue</label>
                      <span className="text-xs text-gray-300">{currentPalette.hueShift.lightHue.toFixed(0)}°</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="360"
                      value={currentPalette.hueShift.lightHue}
                      onChange={(e) => updateHueShift(
                        selectedPalette, 
                        currentPalette.hueShift!.darkHue,
                        parseFloat(e.target.value)
                      )}
                      className="w-full h-1"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Lightness Curve */}
            <div className="pt-4 border-t border-gray-700">
              <p className="text-xs text-gray-400 mb-2">Lightness Curve</p>
              
              {/* Controls - visible in both tabs */}
              <div className="flex items-center justify-between mb-2">
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isMagnetic}
                    onChange={(e) => setIsMagnetic(e.target.checked)}
                    className="w-3 h-3 rounded"
                  />
                  <span className="text-[10px] text-gray-400">Magnetic</span>
                </label>
                <div className="flex gap-1">
                  <button
                    onClick={() => {
                      const newSteps = getLightnessSteps('linear');
                      updateLightnessSteps(newSteps);
                      setLightnessCurveType('linear');
                    }}
                    className={`px-2 py-0.5 text-[10px] rounded transition-colors ${
                      lightnessCurveType === 'linear' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                    }`}
                  >
                    Linear
                  </button>
                  <button
                    onClick={() => {
                      const newSteps = getLightnessSteps('contrast');
                      updateLightnessSteps(newSteps);
                      setLightnessCurveType('contrast');
                    }}
                    className={`px-2 py-0.5 text-[10px] rounded transition-colors ${
                      lightnessCurveType === 'contrast' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                    }`}
                  >
                    Contrast
                  </button>
                </div>
              </div>
              
              <Tabs defaultValue="steps" className="w-full">
                <TabsList className="w-full bg-gray-700">
                  <TabsTrigger value="steps" className="flex-1">Steps</TabsTrigger>
                  <TabsTrigger value="curve" className="flex-1">Curve</TabsTrigger>
                </TabsList>
                
                <TabsContent value="steps" className="space-y-2">
                  <div className="space-y-1">
                    {lightnessSteps.map((step, index) => {
                      const stepName = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130][index];
                      const safeStep = isNaN(step) || step === undefined ? 50 : step;
                      
                      return (
                        <div key={index} className="flex items-center gap-1.5">
                          <div className="w-7 text-[9px] text-gray-500">{stepName}</div>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={safeStep}
                            onChange={(e) => handleLightnessChange(index, parseFloat(e.target.value))}
                            className="flex-1 h-0.5"
                          />
                          <div
                            className="w-5 h-5 rounded border border-gray-600 flex-shrink-0"
                            style={{
                              backgroundColor: oklchToHex({
                                l: safeStep / 100,
                                c: currentPalette.chroma,
                                h: currentPalette.hue,
                              }),
                            }}
                          />
                          <div className="flex items-center gap-0.5">
                            <button
                              onClick={() => handleLightnessChange(index, Math.max(0, safeStep - 1))}
                              className="p-0.5 hover:bg-gray-700 rounded transition-colors"
                              title="Decrement"
                            >
                              <Minus className="w-2 h-2 text-gray-400" />
                            </button>
                            <input
                              type="number"
                              min="0"
                              max="100"
                              value={Math.round(safeStep)}
                              onChange={(e) => {
                                const value = parseFloat(e.target.value);
                                if (!isNaN(value)) {
                                  handleLightnessChange(index, Math.max(0, Math.min(100, value)));
                                }
                              }}
                              className="w-9 bg-gray-700 text-[9px] text-gray-300 text-center px-0.5 py-0.5 rounded border border-gray-600 focus:outline-none focus:border-blue-500"
                            />
                            <button
                              onClick={() => handleLightnessChange(index, Math.min(100, safeStep + 1))}
                              className="p-0.5 hover:bg-gray-700 rounded transition-colors"
                              title="Increment"
                            >
                              <Plus className="w-2 h-2 text-gray-400" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </TabsContent>
                
                <TabsContent value="curve" className="space-y-2">
                  {/* Canvas and swatches integrated layout */}
                  <div className="flex gap-1.5">
                    {/* Left side: Step indices */}
                    <div className="flex flex-col space-y-1">
                      {lightnessSteps.map((_, index) => {
                        const stepName = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130][index];
                        return (
                          <div key={index} className="w-7 h-5 flex items-center">
                            <div className="text-[9px] text-gray-500">{stepName}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Middle: Bezier curve canvas - fills available space */}
                    <div className="flex-1 flex items-stretch">
                      <BezierCurveEditor
                        lightnessSteps={lightnessSteps}
                        onLightnessChange={updateLightnessSteps}
                      />
                    </div>

                    {/* Right side: Swatches and controls */}
                    <div className="flex-shrink-0 flex flex-col space-y-1">
                      {lightnessSteps.map((step, index) => {
                        const safeStep = isNaN(step) || step === undefined ? 50 : step;
                        
                        return (
                          <div key={index} className="flex items-center gap-1.5">
                            <div
                              className="w-5 h-5 rounded border border-gray-600 flex-shrink-0"
                              style={{
                                backgroundColor: oklchToHex({
                                  l: safeStep / 100,
                                  c: currentPalette.chroma,
                                  h: currentPalette.hue,
                                }),
                              }}
                            />
                            <div className="flex items-center gap-0.5">
                              <button
                                onClick={() => handleLightnessChange(index, Math.max(0, safeStep - 1))}
                                className="p-0.5 hover:bg-gray-700 rounded transition-colors"
                                title="Decrement"
                              >
                                <Minus className="w-2 h-2 text-gray-400" />
                              </button>
                              <input
                                type="number"
                                min="0"
                                max="100"
                                value={Math.round(safeStep)}
                                onChange={(e) => {
                                  const value = parseFloat(e.target.value);
                                  if (!isNaN(value)) {
                                    handleLightnessChange(index, Math.max(0, Math.min(100, value)));
                                  }
                                }}
                                className="w-9 bg-gray-700 text-[9px] text-gray-300 text-center px-0.5 py-0.5 rounded border border-gray-600 focus:outline-none focus:border-blue-500"
                              />
                              <button
                                onClick={() => handleLightnessChange(index, Math.min(100, safeStep + 1))}
                                className="p-0.5 hover:bg-gray-700 rounded transition-colors"
                                title="Increment"
                              >
                                <Plus className="w-2 h-2 text-gray-400" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </Resizable>

      {/* Base Color Popover */}
      {editingPalette !== null && (
        <BaseColorPickerPopover
          isOpen={dialogOpen}
          onClose={() => setDialogOpen(false)}
          colorName={palettes[editingPalette].name}
          initialColor={palettes[editingPalette].baseColor}
          onColorChange={handleBaseColorChange}
          anchorElement={editButtonRefs.current[editingPalette]}
        />
      )}
    </>
  );
}
