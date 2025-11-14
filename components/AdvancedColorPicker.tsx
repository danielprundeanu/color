import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { hexToOKLCH, oklchToHex, hexToHSL, hslToHex, hexToRGBA, rgbaToHex } from '../utils/colorUtils';

interface AdvancedColorPickerProps {
  isOpen: boolean;
  onClose: () => void;
  colorName: string;
  initialColor: string;
  onColorChange: (color: string, hue: number, chroma: number) => void;
}

export function AdvancedColorPicker({
  isOpen,
  onClose,
  colorName,
  initialColor,
  onColorChange,
}: AdvancedColorPickerProps) {
  const [color, setColor] = useState(initialColor);
  const oklch = hexToOKLCH(color);
  const [lightness, setLightness] = useState(oklch.l);
  const [chroma, setChroma] = useState(oklch.c);
  const [hue, setHue] = useState(oklch.h);
  const [inputMode, setInputMode] = useState<'hex' | 'oklch' | 'hsl' | 'rgba'>('hex');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  // Input values for manual entry
  const [hexInput, setHexInput] = useState(color);
  const hslValues = hexToHSL(color);
  const [hslInput, setHslInput] = useState({ h: hslValues.h, s: hslValues.s, l: hslValues.l });
  const rgbaValues = hexToRGBA(color);
  const [rgbaInput, setRgbaInput] = useState({ r: rgbaValues.r, g: rgbaValues.g, b: rgbaValues.b, a: rgbaValues.a });
  const [oklchInput, setOklchInput] = useState({ l: Math.round(oklch.l * 100), c: oklch.c, h: Math.round(oklch.h) });

  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      
      // Center on screen
      const top = (window.innerHeight - dropdownRect.height) / 2;
      const left = (window.innerWidth - dropdownRect.width) / 2;
      
      setPosition({ 
        top: Math.max(8, top), 
        left: Math.max(8, left) 
      });
    }
  }, [isOpen]);

  useEffect(() => {
    const oklch = hexToOKLCH(initialColor);
    setColor(initialColor);
    setLightness(oklch.l);
    setChroma(oklch.c);
    setHue(oklch.h);
    setHexInput(initialColor);
    
    const hslValues = hexToHSL(initialColor);
    setHslInput({ h: hslValues.h, s: hslValues.s, l: hslValues.l });
    
    const rgbaValues = hexToRGBA(initialColor);
    setRgbaInput({ r: rgbaValues.r, g: rgbaValues.g, b: rgbaValues.b, a: rgbaValues.a });
    
    setOklchInput({ l: Math.round(oklch.l * 100), c: oklch.c, h: Math.round(oklch.h) });
  }, [initialColor]);

  const updateColor = (l: number, c: number, h: number) => {
    setLightness(l);
    setChroma(c);
    setHue(h);
    const newColor = oklchToHex({ l, c, h });
    setColor(newColor);
    setHexInput(newColor);
    
    const hslValues = hexToHSL(newColor);
    setHslInput({ h: hslValues.h, s: hslValues.s, l: hslValues.l });
    
    const rgbaValues = hexToRGBA(newColor);
    setRgbaInput({ r: rgbaValues.r, g: rgbaValues.g, b: rgbaValues.b, a: rgbaValues.a });
    
    setOklchInput({ l: Math.round(l * 100), c: c, h: Math.round(h) });
    
    onColorChange(newColor, h, c);
  };

  const handleLightnessChange = (value: number) => {
    updateColor(value, chroma, hue);
  };

  const handleChromaChange = (value: number) => {
    updateColor(lightness, value, hue);
  };

  const handleHueChange = (value: number) => {
    updateColor(lightness, chroma, value);
  };

  const handleHexInput = (value: string) => {
    setHexInput(value);
    if (/^#[0-9A-Fa-f]{6}$/.test(value)) {
      const oklch = hexToOKLCH(value);
      updateColor(oklch.l, oklch.c, oklch.h);
    }
  };

  const handleOKLCHInput = (field: 'l' | 'c' | 'h', value: number) => {
    const newOklch = { ...oklchInput, [field]: value };
    setOklchInput(newOklch);
    
    const l = field === 'l' ? value / 100 : lightness;
    const c = field === 'c' ? value : chroma;
    const h = field === 'h' ? value : hue;
    
    updateColor(l, c, h);
  };

  const handleHSLInput = (field: 'h' | 's' | 'l', value: number) => {
    const newHsl = { ...hslInput, [field]: value };
    setHslInput(newHsl);
    
    const hexColor = hslToHex(newHsl.h, newHsl.s, newHsl.l);
    const oklch = hexToOKLCH(hexColor);
    updateColor(oklch.l, oklch.c, oklch.h);
  };

  const handleRGBAInput = (field: 'r' | 'g' | 'b' | 'a', value: number) => {
    const newRgba = { ...rgbaInput, [field]: value };
    setRgbaInput(newRgba);
    
    const hexColor = rgbaToHex(newRgba.r, newRgba.g, newRgba.b);
    const oklch = hexToOKLCH(hexColor);
    updateColor(oklch.l, oklch.c, oklch.h);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40 bg-black/20" />
      
      {/* Dropdown */}
      <div
        ref={dropdownRef}
        className="fixed z-50 w-[400px] bg-gray-800 text-white rounded-lg shadow-2xl border border-gray-700"
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h3 className="text-sm">{colorName}</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-700 rounded transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          {/* Color Preview */}
          <div
            className="h-32 rounded-lg border border-gray-600"
            style={{ backgroundColor: color }}
          />

          {/* Visual Sliders */}
          <div className="space-y-3">
            {/* Lightness */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs text-gray-400">Lightness</label>
                <span className="text-xs text-gray-300">{Math.round(lightness * 100)}</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={lightness}
                onChange={(e) => handleLightnessChange(parseFloat(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, 
                    ${oklchToHex({ l: 0, c: chroma, h: hue })}, 
                    ${oklchToHex({ l: 0.5, c: chroma, h: hue })}, 
                    ${oklchToHex({ l: 1, c: chroma, h: hue })}
                  )`,
                }}
              />
            </div>

            {/* Chroma */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs text-gray-400">Chroma</label>
                <span className="text-xs text-gray-300">{chroma.toFixed(3)}</span>
              </div>
              <input
                type="range"
                min="0"
                max="0.4"
                step="0.001"
                value={chroma}
                onChange={(e) => handleChromaChange(parseFloat(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, 
                    ${oklchToHex({ l: lightness, c: 0, h: hue })}, 
                    ${oklchToHex({ l: lightness, c: 0.2, h: hue })}, 
                    ${oklchToHex({ l: lightness, c: 0.4, h: hue })}
                  )`,
                }}
              />
            </div>

            {/* Hue */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs text-gray-400">Hue</label>
                <span className="text-xs text-gray-300">{Math.round(hue)}°</span>
              </div>
              <input
                type="range"
                min="0"
                max="360"
                step="1"
                value={hue}
                onChange={(e) => handleHueChange(parseFloat(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right,
                    ${oklchToHex({ l: lightness, c: chroma, h: 0 })},
                    ${oklchToHex({ l: lightness, c: chroma, h: 60 })},
                    ${oklchToHex({ l: lightness, c: chroma, h: 120 })},
                    ${oklchToHex({ l: lightness, c: chroma, h: 180 })},
                    ${oklchToHex({ l: lightness, c: chroma, h: 240 })},
                    ${oklchToHex({ l: lightness, c: chroma, h: 300 })},
                    ${oklchToHex({ l: lightness, c: chroma, h: 360 })}
                  )`,
                }}
              />
            </div>
          </div>

          {/* Manual Input Tabs */}
          <div>
            <div className="flex gap-1 mb-3">
              {(['hex', 'oklch', 'hsl', 'rgba'] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setInputMode(mode)}
                  className={`px-3 py-1 text-xs rounded transition-colors uppercase ${
                    inputMode === mode
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>

            {/* Input Fields */}
            <div className="bg-gray-900 rounded-lg p-3 space-y-2">
              {inputMode === 'hex' && (
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">HEX</label>
                  <input
                    type="text"
                    value={hexInput}
                    onChange={(e) => handleHexInput(e.target.value)}
                    className="w-full bg-gray-800 text-white px-3 py-2 rounded text-sm font-mono"
                    placeholder="#000000"
                  />
                </div>
              )}

              {inputMode === 'oklch' && (
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block">L (0-100)</label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={oklchInput.l}
                      onChange={(e) => handleOKLCHInput('l', parseFloat(e.target.value))}
                      className="w-full bg-gray-800 text-white px-2 py-2 rounded text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block">C (0-0.4)</label>
                    <input
                      type="number"
                      min="0"
                      max="0.4"
                      step="0.001"
                      value={oklchInput.c.toFixed(3)}
                      onChange={(e) => handleOKLCHInput('c', parseFloat(e.target.value))}
                      className="w-full bg-gray-800 text-white px-2 py-2 rounded text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block">H (0-360)</label>
                    <input
                      type="number"
                      min="0"
                      max="360"
                      value={oklchInput.h}
                      onChange={(e) => handleOKLCHInput('h', parseFloat(e.target.value))}
                      className="w-full bg-gray-800 text-white px-2 py-2 rounded text-sm"
                    />
                  </div>
                </div>
              )}

              {inputMode === 'hsl' && (
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block">H (0-360)</label>
                    <input
                      type="number"
                      min="0"
                      max="360"
                      value={Math.round(hslInput.h)}
                      onChange={(e) => handleHSLInput('h', parseFloat(e.target.value))}
                      className="w-full bg-gray-800 text-white px-2 py-2 rounded text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block">S (0-100)</label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={Math.round(hslInput.s)}
                      onChange={(e) => handleHSLInput('s', parseFloat(e.target.value))}
                      className="w-full bg-gray-800 text-white px-2 py-2 rounded text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block">L (0-100)</label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={Math.round(hslInput.l)}
                      onChange={(e) => handleHSLInput('l', parseFloat(e.target.value))}
                      className="w-full bg-gray-800 text-white px-2 py-2 rounded text-sm"
                    />
                  </div>
                </div>
              )}

              {inputMode === 'rgba' && (
                <div className="grid grid-cols-4 gap-2">
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block">R (0-255)</label>
                    <input
                      type="number"
                      min="0"
                      max="255"
                      value={rgbaInput.r}
                      onChange={(e) => handleRGBAInput('r', parseInt(e.target.value))}
                      className="w-full bg-gray-800 text-white px-2 py-2 rounded text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block">G (0-255)</label>
                    <input
                      type="number"
                      min="0"
                      max="255"
                      value={rgbaInput.g}
                      onChange={(e) => handleRGBAInput('g', parseInt(e.target.value))}
                      className="w-full bg-gray-800 text-white px-2 py-2 rounded text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block">B (0-255)</label>
                    <input
                      type="number"
                      min="0"
                      max="255"
                      value={rgbaInput.b}
                      onChange={(e) => handleRGBAInput('b', parseInt(e.target.value))}
                      className="w-full bg-gray-800 text-white px-2 py-2 rounded text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block">A (0-1)</label>
                    <input
                      type="number"
                      min="0"
                      max="1"
                      step="0.01"
                      value={rgbaInput.a.toFixed(2)}
                      onChange={(e) => handleRGBAInput('a', parseFloat(e.target.value))}
                      className="w-full bg-gray-800 text-white px-2 py-2 rounded text-sm"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
