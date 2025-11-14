import React, { useState } from 'react';
import { Copy, Check, RotateCcw } from 'lucide-react';
import { generatePalette, hexToOKLCH } from '../utils/colorUtils';
import { useColors } from '../contexts/ColorContext';
import { ColorPickerDialog } from './ColorPickerDialog';
import { Switch } from './ui/switch';

interface ColorGeneratorProps {
  selectedPalette: number;
}

export function ColorGenerator({ selectedPalette }: ColorGeneratorProps) {
  const { 
    palettes, 
    lightnessSteps,
    colorSpace,
    updateCustomColor, 
    resetPaletteColors, 
    resetAllPalettes, 
    hasImportedProject,
    useBgFromTheme,
    setUseBgFromTheme,
    getAllGeneratedColors,
    semanticTokens,
    theme
  } = useColors();
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [editingColor, setEditingColor] = useState<{ step: string; color: string; name: string } | null>(null);
  const [showValues, setShowValues] = useState(false);

  const currentPalette = palettes[selectedPalette];
  const generatedColors = generatePalette(
    currentPalette.hue,
    currentPalette.chroma,
    lightnessSteps,
    colorSpace,
    currentPalette.hueShift
  );

  // Override with custom colors
  const displayColors = currentPalette.customColors 
    ? { ...generatedColors, ...currentPalette.customColors }
    : generatedColors;

  // Find the base color step (closest to the base color)
  const findBaseColorStep = (): string => {
    const baseOklch = hexToOKLCH(currentPalette.baseColor);
    let closestStep = '60';
    let minDistance = Infinity;

    Object.entries(displayColors).forEach(([step, color]) => {
      const colorOklch = hexToOKLCH(color);
      const distance = Math.abs(colorOklch.l - baseOklch.l);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestStep = step;
      }
    });

    return closestStep;
  };

  const baseColorStep = findBaseColorStep();

  const copyToClipboard = (color: string, name: string) => {
    const textarea = document.createElement('textarea');
    textarea.value = color;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      setCopiedColor(name);
      setTimeout(() => setCopiedColor(null), 1500);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
    document.body.removeChild(textarea);
  };

  const handleSwatchClick = (step: string, color: string) => {
    setEditingColor({
      step,
      color,
      name: `${currentPalette.name} - ${step}`,
    });
    setPickerOpen(true);
  };

  const handleColorChange = (color: string, oklch: { l: number; c: number; h: number }) => {
    if (editingColor) {
      updateCustomColor(currentPalette.key, editingColor.step, color, oklch);
    }
  };

  // Helper to resolve semantic token
  const resolveSemanticToken = (tokenPath: string): string => {
    if (!tokenPath?.startsWith('{') || !tokenPath?.endsWith('}')) {
      return tokenPath || '#FFFFFF';
    }
    
    const path = tokenPath.slice(1, -1).split('.');
    const allColors = getAllGeneratedColors();
    if (path.length >= 2) {
      const paletteKey = path[0];
      const step = path[1];
      if (allColors[paletteKey] && allColors[paletteKey][step]) {
        return allColors[paletteKey][step];
      }
    }
    return tokenPath;
  };

  // Helper to get color from semantic tokens
  const getSemanticColor = (path: string) => {
    const parts = path.split('.');
    let current: any = semanticTokens[theme];
    
    for (const part of parts) {
      if (current && current[part]) {
        current = current[part];
      } else {
        return null;
      }
    }
    
    return current?.$value;
  };

  // Calculate background color based on switch
  const themeBgColor = getSemanticColor('bg.default');
  const resolvedThemeBgColor = themeBgColor ? resolveSemanticToken(themeBgColor) : null;
  const fixedBgColor = theme === 'dark' ? '#1C1B1F' : '#FFFFFF';
  const cardBackgroundColor = useBgFromTheme && resolvedThemeBgColor ? resolvedThemeBgColor : fixedBgColor;
  
  // Calculate text color for values based on background
  const bgOklch = hexToOKLCH(cardBackgroundColor);
  const valuesTextColor = bgOklch.l > 0.5 ? '#6B7280' : '#9CA3AF'; // gray-500 for light, gray-400 for dark
  const stepLabelColor = bgOklch.l > 0.5 ? '#6B7280' : '#9CA3AF'; // Same color for step labels

  return (
    <div>
      {/* Palette Output */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl text-[rgb(255,255,255)]">Palette - {currentPalette.name}</h2>
          <div className="flex items-center gap-3">
            {/* BG from theme switch */}
            <label className="flex items-center gap-2 cursor-pointer">
              <span className="text-sm text-gray-400">BG from theme</span>
              <Switch
                checked={useBgFromTheme}
                onCheckedChange={setUseBgFromTheme}
              />
            </label>
            
            {currentPalette.customColors && Object.keys(currentPalette.customColors).length > 0 && (
              <button
                onClick={() => resetPaletteColors(currentPalette.key)}
                className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Reset Palette
              </button>
            )}
          </div>
        </div>
        <div 
          className="rounded-lg p-6" 
          style={{ backgroundColor: cardBackgroundColor }}
        >
          <div className="flex gap-1">
            {Object.entries(displayColors).map(([step, color]) => {
              const isBaseColor = step === baseColorStep && currentPalette.includeBaseInPalette;
              const oklchValues = hexToOKLCH(color);
              
              return (
                <div key={step} className="flex-1 flex flex-col items-center gap-2">
                  {/* Base color label */}
                  <div className="h-6 flex items-center">
                    {isBaseColor && (
                      <div className="bg-yellow-400 text-gray-900 text-xs px-2 py-0.5 rounded whitespace-nowrap font-medium">
                        Base
                      </div>
                    )}
                  </div>
                  
                  {/* Color swatch */}
                  <button
                    onClick={() => handleSwatchClick(step, color)}
                    onContextMenu={(e) => {
                      e.preventDefault();
                      copyToClipboard(color, `${currentPalette.name}-${step}`);
                    }}
                    className={`group relative w-full aspect-square rounded hover:scale-110 transition-transform cursor-pointer ${
                      isBaseColor ? 'ring-4 ring-yellow-400 ring-offset-2' : ''
                    }`}
                    style={{ 
                      backgroundColor: color,
                      '--tw-ring-offset-color': cardBackgroundColor
                    } as React.CSSProperties}
                    title={isBaseColor ? "Base color - Click to edit, right-click to copy" : "Click to edit, right-click to copy"}
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 rounded">
                      {copiedColor === `${currentPalette.name}-${step}` ? (
                        <Check className="w-4 h-4 text-white" />
                      ) : (
                        <Copy className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </button>
                  
                  {/* Step label */}
                  <p 
                    className="text-xs text-center" 
                    style={{ 
                      color: isBaseColor ? '#CA8A04' : stepLabelColor,
                      fontWeight: isBaseColor ? 'bold' : 'normal'
                    }}
                  >
                    {step}
                  </p>
                  
                  {/* Color values */}
                  <div className="text-center space-y-0.5">
                    <p className="text-[9px] font-mono" style={{ color: valuesTextColor }}>
                      {color}
                    </p>
                    <p className="text-[9px] font-mono" style={{ color: valuesTextColor }}>
                      L: {(oklchValues.l * 100).toFixed(0)}
                    </p>
                    <p className="text-[9px] font-mono" style={{ color: valuesTextColor }}>
                      C: {oklchValues.c.toFixed(2)}
                    </p>
                    <p className="text-[9px] font-mono" style={{ color: valuesTextColor }}>
                      H: {oklchValues.h.toFixed(0)}°
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* All Palettes Preview */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg text-[rgb(255,255,255)]">All Palettes</h3>
            <div className="flex items-center gap-3">
              {hasImportedProject && (
                <button
                  onClick={() => {
                    if (confirm('Sigur vrei să resetezi toate paletele? Toate modificările custom vor fi pierdute.')) {
                      resetAllPalettes();
                    }
                  }}
                  className="flex items-center gap-2 px-3 py-1.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset All Palettes
                </button>
              )}
              <label className="flex items-center gap-2 cursor-pointer">
                <Switch
                  checked={showValues}
                  onCheckedChange={setShowValues}
                />
                <span className="text-sm font-[Abel]" style={{ color: stepLabelColor }}>Show Values</span>
              </label>
            </div>
          </div>
          <div 
            className="border border-gray-200/10 rounded-lg overflow-hidden" 
            style={{ backgroundColor: cardBackgroundColor }}
          >
            {palettes.map((palette) => {
              const colors = generatePalette(palette.hue, palette.chroma, lightnessSteps, colorSpace, palette.hueShift);
              const displayColors = palette.customColors 
                ? { ...colors, ...palette.customColors }
                : colors;
              
              // Find base color for this palette
              const baseOklch = hexToOKLCH(palette.baseColor);
              let baseStep = '60';
              let minDistance = Infinity;
              Object.entries(displayColors).forEach(([step, color]) => {
                const colorOklch = hexToOKLCH(color);
                const distance = Math.abs(colorOklch.l - baseOklch.l);
                if (distance < minDistance) {
                  minDistance = distance;
                  baseStep = step;
                }
              });

              return (
                <div 
                  key={palette.name} 
                  className="flex items-center gap-2 px-3 bg-[rgba(0,0,0,0)]"
                >
                  <div className="w-24 flex-shrink-0">
                    <p className="text-[11px]" style={{ color: valuesTextColor }}>{palette.name}</p>
                  </div>
                  <div className="flex-1 flex" style={{ height: '61px' }}>
                    {Object.entries(displayColors).map(([step, color]) => {
                      const isBaseForThisPalette = step === baseStep && palette.includeBaseInPalette;
                      const oklch = hexToOKLCH(color);
                      const textColor = oklch.l > 0.5 ? '#000000' : '#FFFFFF';
                      
                      return (
                        <div
                          key={step}
                          className={`flex-1 relative group cursor-default ${
                            isBaseForThisPalette ? 'ring-1 ring-inset ring-yellow-400' : ''
                          }`}
                          style={{ backgroundColor: color }}
                          title={isBaseForThisPalette ? `${step}: ${color} (Base)` : `${step}: ${color}`}
                        >
                          {showValues && (
                            <div 
                              className="absolute inset-0 p-1 flex flex-col justify-between text-[8px] leading-tight"
                              style={{ color: textColor }}
                            >
                              <div className="drop-shadow-sm">{step}</div>
                              <div className="space-y-0.5 drop-shadow-sm">
                                <div className="truncate">L: {Math.round(oklch.l * 100)}</div>
                                <div className="truncate">C: {oklch.c.toFixed(2)}</div>
                                <div className="truncate">H: {Math.round(oklch.h)}°</div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Color Picker Dialog */}
      {editingColor && (
        <ColorPickerDialog
          isOpen={pickerOpen}
          onClose={() => setPickerOpen(false)}
          colorName={editingColor.name}
          initialColor={editingColor.color}
          onColorChange={handleColorChange}
        />
      )}
    </div>
  );
}