import React, { useState, useRef } from 'react';
import { Download, Upload, Plus, Minus, RotateCcw, FileJson, Edit2 } from 'lucide-react';
import { generatePalette, hexToOKLCH, oklchToHex, getLightnessSteps } from '../utils/colorUtils';
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
  onExportJSON?: () => void;
  onExportCSS?: () => void;
}

export function ColorSidebar({ 
  selectedPalette, 
  setSelectedPalette,
  onExportJSON,
  onExportCSS 
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
    getGeneratedColors,
    semanticTokens,
    theme,
    getAllGeneratedColors
  } = useColors();
  const currentPalette = palettes[selectedPalette];
  const [editingPalette, setEditingPalette] = useState<number | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isMagnetic, setIsMagnetic] = useState(false);
  const swatchRefs = useRef<(HTMLButtonElement | null)[]>([]);
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

  const handleHueChange = (value: number) => {
    const newPalette = {
      ...currentPalette,
      hue: value,
      baseColor: oklchToHex({
        l: 0.6,
        c: currentPalette.chroma,
        h: value,
      }),
    };
    updatePalette(selectedPalette, newPalette);
  };

  const handleChromaChange = (value: number) => {
    const newPalette = {
      ...currentPalette,
      chroma: value,
      baseColor: oklchToHex({
        l: 0.6,
        c: value,
        h: currentPalette.hue,
      }),
    };
    updatePalette(selectedPalette, newPalette);
  };

  const resetToDefault = () => {
    updateLightnessSteps(getLightnessSteps('linear'));
    setLightnessCurveType('linear');
  };

  const handleSwatchClick = (index: number) => {
    setEditingPalette(index);
    setDialogOpen(true);
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
          {/* Swatches */}
          <div>
            <h2 className="text-lg mb-3">Swatches</h2>
            <div className="grid grid-cols-2 gap-2">
              {palettes.map((palette, index) => {
                const oklch = hexToOKLCH(palette.baseColor);
                return (
                  <div key={palette.name} className="relative">
                    <div
                      onClick={() => setSelectedPalette(index)}
                      className={`relative h-20 rounded-lg transition-all w-full group cursor-pointer ${
                        selectedPalette === index ? 'ring-2 ring-blue-400' : 'hover:ring-2 hover:ring-gray-500'
                      }`}
                      style={{ backgroundColor: palette.baseColor }}
                    >
                      <div className="absolute bottom-1 left-2 right-2">
                        <p className="text-xs text-white drop-shadow-lg truncate">{palette.name}</p>
                        <p className="text-[9px] text-white/80 drop-shadow-lg truncate">{palette.baseColor}</p>
                        <p className="text-[9px] text-white/80 drop-shadow-lg truncate">
                          oklch({Math.round(oklch.l * 100)}, {oklch.c.toFixed(2)}, {Math.round(oklch.h)})
                        </p>
                      </div>
                      
                      {/* Edit button - appears on hover, top left */}
                      <button
                        ref={(el) => editButtonRefs.current[index] = el}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSwatchClick(index);
                        }}
                        className="absolute top-2 left-2 p-1.5 bg-black/40 hover:bg-black/60 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Edit base color"
                      >
                        <Edit2 className="w-3 h-3 text-white drop-shadow" />
                      </button>

                      {/* Include in Palette Toggle - top right, appears on hover */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleIncludeBaseInPalette(index);
                        }}
                        className={`absolute top-2 right-2 inline-flex h-4 w-7 items-center rounded-full transition-all opacity-0 group-hover:opacity-100 ${
                          palette.includeBaseInPalette ? 'bg-blue-600' : 'bg-gray-600/70'
                        }`}
                        title="Include in palette"
                      >
                        <span
                          className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                            palette.includeBaseInPalette ? 'translate-x-3.5' : 'translate-x-0.5'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Color Space Selection */}
          <div className="bg-gray-800 rounded-lg p-3">
            <h2 className="text-sm font-medium mb-2">Color Space</h2>
            <div className="flex gap-1.5">
              <button
                onClick={() => setColorSpace('oklch')}
                className={`flex-1 px-2 py-1.5 rounded-md transition-colors text-xs ${
                  colorSpace === 'oklch'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                <div className="font-semibold">OKLCH</div>
                <div className="text-[9px] opacity-60 mt-0.5">Varies chroma</div>
              </button>
              <button
                onClick={() => setColorSpace('lch')}
                className={`flex-1 px-2 py-1.5 rounded-md transition-colors text-xs ${
                  colorSpace === 'lch'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                <div className="font-semibold">LCH</div>
                <div className="text-[9px] opacity-60 mt-0.5">Constant C & H</div>
              </button>
            </div>
            
            {/* Info text based on selected color space */}
            <div className="mt-2 p-1.5 bg-gray-900/50 rounded text-[9px] text-gray-400 leading-tight">
              {colorSpace === 'oklch' ? (
                <>
                  <strong className="text-gray-300">OKLCH:</strong> L follows curve. C varies for extremes. H constant.
                </>
              ) : (
                <>
                  <strong className="text-gray-300">LCH:</strong> L follows curve. C & H constant.
                </>
              )}
            </div>
          </div>

          {/* OKLCH Controls */}
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base">OKLCH Curves</h2>
              <button
                onClick={resetToDefault}
                className="px-2 py-1 text-xs bg-blue-600 hover:bg-blue-700 rounded transition-colors"
              >
                Reset
              </button>
            </div>

            {/* Hue & Chroma */}
            <div className="space-y-3 mb-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs text-gray-400">Hue</label>
                  <span className="text-xs text-gray-300">{currentPalette.hue.toFixed(0)}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={currentPalette.hue}
                  onChange={(e) => handleHueChange(parseFloat(e.target.value))}
                  className="w-full h-1"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs text-gray-400">Chroma</label>
                  <span className="text-xs text-gray-300">{currentPalette.chroma.toFixed(3)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="0.4"
                  step="0.001"
                  value={currentPalette.chroma}
                  onChange={(e) => handleChromaChange(parseFloat(e.target.value))}
                  className="w-full h-1"
                />
              </div>
            </div>

            {/* Hue Shifting */}
            <div className="pt-4 border-t border-gray-700">
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
                      {lightnessSteps.map((step, index) => {
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

          {/* Export Buttons */}
          {(onExportJSON || onExportCSS) && (
            <div className="space-y-2">
              {onExportJSON && (
                <button
                  onClick={onExportJSON}
                  className="w-full px-3 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <Download className="w-4 h-4" />
                  Export JSON
                </button>
              )}
              {onExportCSS && (
                <button
                  onClick={onExportCSS}
                  className="w-full px-3 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <Download className="w-4 h-4" />
                  Export CSS
                </button>
              )}
            </div>
          )}
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
