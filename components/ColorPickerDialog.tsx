import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { hexToOKLCH, oklchToHex } from '../utils/colorUtils';
import { 
  hexToRGBA, 
  hexToHSL, 
  rgbaToHex, 
  hslToHex, 
  formatRGBA, 
  formatHSL,
  parseColorString,
  type RGBAColor,
  type HSLColor
} from '../utils/colorConversions';

interface ColorPickerDialogProps {
  isOpen: boolean;
  onClose: () => void;
  colorName: string;
  initialColor: string;
  onColorChange: (color: string, oklch: { l: number; c: number; h: number }) => void;
}

type ColorFormat = 'hex' | 'rgb' | 'oklch';

export function ColorPickerDialog({
  isOpen,
  onClose,
  colorName,
  initialColor,
  onColorChange,
}: ColorPickerDialogProps) {
  const [color, setColor] = useState(initialColor);
  const [oklch, setOklch] = useState(() => hexToOKLCH(initialColor));
  const [rgb, setRgb] = useState(() => hexToRGBA(initialColor));
  const [format, setFormat] = useState<ColorFormat>('hex');
  const [inputValue, setInputValue] = useState('');
  const [formatDropdownOpen, setFormatDropdownOpen] = useState(false);
  const [satGradient, setSatGradient] = useState('');
  const [hueGradient, setHueGradient] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setColor(initialColor);
    const newOklch = hexToOKLCH(initialColor);
    const newRgb = hexToRGBA(initialColor);
    setOklch(newOklch);
    setRgb(newRgb);
    updateInputValue(initialColor, format);
    updateGradients(newOklch);
  }, [initialColor, isOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setFormatDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const updateGradients = (oklchColor: { l: number; c: number; h: number }) => {
    // Saturation gradient (left: low saturation, right: full saturation)
    const leftColor = oklchToHex({ l: oklchColor.l, c: 0, h: oklchColor.h });
    const rightColor = oklchToHex({ l: oklchColor.l, c: 0.4, h: oklchColor.h });
    setSatGradient(`linear-gradient(to right, ${leftColor}, ${rightColor})`);

    // Hue gradient (full spectrum)
    const hueColors = Array.from({ length: 12 }, (_, i) =>
      oklchToHex({ l: oklchColor.l, c: oklchColor.c, h: i * 30 })
    );
    setHueGradient(`linear-gradient(to right, ${hueColors.join(', ')})`);
  };

  const updateInputValue = (hexColor: string, colorFormat: ColorFormat) => {
    switch (colorFormat) {
      case 'hex':
        setInputValue(hexColor.toUpperCase());
        break;
      case 'rgb':
        const rgba = hexToRGBA(hexColor);
        setInputValue(`rgb(${rgba.r}, ${rgba.g}, ${rgba.b})`);
        break;
      case 'oklch':
        const oklchVal = hexToOKLCH(hexColor);
        setInputValue(`oklch(${(oklchVal.l * 100).toFixed(2)}% ${oklchVal.c.toFixed(4)} ${oklchVal.h.toFixed(2)})`);
        break;
    }
  };

  const handleColorUpdate = (newColor: string, newOklch: { l: number; c: number; h: number }, newRgb: RGBAColor) => {
    setColor(newColor);
    setOklch(newOklch);
    setRgb(newRgb);
    updateInputValue(newColor, format);
    updateGradients(newOklch);
  };

  const handleRgbChange = (channel: 'r' | 'g' | 'b', value: number) => {
    const newRgb = { ...rgb, [channel]: value };
    setRgb(newRgb);
    const newColor = rgbaToHex(newRgb);
    const newOklch = hexToOKLCH(newColor);
    setColor(newColor);
    setOklch(newOklch);
    updateInputValue(newColor, format);
    updateGradients(newOklch);
  };

  const handleOklchChange = (property: 'l' | 'c' | 'h', value: number) => {
    const newOklch = { ...oklch, [property]: value };
    setOklch(newOklch);
    const newColor = oklchToHex(newOklch);
    const newRgb = hexToRGBA(newColor);
    setColor(newColor);
    setRgb(newRgb);
    updateInputValue(newColor, format);
    updateGradients(newOklch);
  };

  const handleTextInputChange = (value: string) => {
    setInputValue(value);
    const parsedColor = parseColorString(value);
    if (parsedColor) {
      const newOklch = hexToOKLCH(parsedColor);
      const newRgb = hexToRGBA(parsedColor);
      handleColorUpdate(parsedColor, newOklch, newRgb);
    }
  };

  const handleFormatChange = (newFormat: ColorFormat) => {
    setFormat(newFormat);
    updateInputValue(color, newFormat);
    setFormatDropdownOpen(false);
  };

  const handleSave = () => {
    onColorChange(color, oklch);
    onClose();
  };

  const formatLabel = format.toUpperCase();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div
        className="bg-[#2A2A2E] rounded-2xl shadow-2xl max-w-lg w-full mx-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg border-2 border-white/20"
              style={{ backgroundColor: color }}
            />
            <div>
              <h3 className="text-white font-medium">Edit Color</h3>
              <p className="text-sm text-gray-400">{colorName}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* 2D Saturation-Lightness Picker */}
          <div className="space-y-3">
            <div
              className="relative w-full h-48 rounded-xl overflow-hidden cursor-crosshair"
              style={{
                background: `
                  linear-gradient(to top, #000, transparent),
                  linear-gradient(to right, #fff, hsl(${oklch.h}, 100%, 50%))
                `
              }}
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = 1 - (e.clientY - rect.top) / rect.height;
                
                // Calculate new lightness and chroma based on position
                const newL = Math.max(0, Math.min(1, y));
                const newC = Math.max(0, Math.min(0.4, x * 0.4));
                
                handleOklchChange('l', newL);
                handleOklchChange('c', newC);
              }}
            >
              {/* Cursor indicator */}
              <div
                className="absolute w-5 h-5 border-2 border-white rounded-full shadow-lg pointer-events-none"
                style={{
                  left: `${(oklch.c / 0.4) * 100}%`,
                  top: `${(1 - oklch.l) * 100}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              />
            </div>

            {/* Hue Slider */}
            <div className="relative">
              <input
                type="range"
                min="0"
                max="360"
                step="0.1"
                value={oklch.h}
                onChange={(e) => handleOklchChange('h', parseFloat(e.target.value))}
                className="w-full h-3 appearance-none bg-transparent cursor-pointer"
                style={{
                  background: hueGradient,
                  borderRadius: '6px',
                }}
              />
            </div>
          </div>

          {/* Format Dropdown & Input */}
          <div className="space-y-2">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setFormatDropdownOpen(!formatDropdownOpen)}
                className="flex items-center justify-between w-full px-4 py-2 bg-[#1E1E22] text-white rounded-lg border border-white/10 hover:border-white/20 transition-colors"
              >
                <span className="font-medium">{formatLabel}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${formatDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {formatDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-[#1E1E22] rounded-lg border border-white/10 shadow-xl overflow-hidden z-10">
                  {(['hex', 'rgb', 'oklch'] as ColorFormat[]).map((f) => (
                    <button
                      key={f}
                      onClick={() => handleFormatChange(f)}
                      className={`w-full px-4 py-2 text-left transition-colors ${
                        format === f
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-300 hover:bg-white/5'
                      }`}
                    >
                      {f.toUpperCase()}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Color Value Input */}
            <div className="flex items-center gap-2 bg-[#1E1E22] rounded-lg border border-white/10 px-4 py-3">
              <div
                className="w-8 h-8 rounded-md flex-shrink-0"
                style={{ backgroundColor: color }}
              />
              <input
                type="text"
                value={inputValue}
                onChange={(e) => handleTextInputChange(e.target.value)}
                className="flex-1 bg-transparent text-white font-mono text-sm outline-none"
                placeholder={
                  format === 'hex' ? '#000000' :
                  format === 'rgb' ? 'rgb(0, 0, 0)' :
                  'oklch(0% 0 0)'
                }
              />
            </div>
          </div>

          {/* RGB or OKLCH Sliders based on format */}
          {format === 'rgb' ? (
            <div className="space-y-4">
              {/* Red */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm text-gray-300">Red</label>
                  <span className="text-sm text-gray-400 font-mono bg-[#1E1E22] px-2 py-1 rounded">
                    {Math.round(rgb.r)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="255"
                  step="1"
                  value={rgb.r}
                  onChange={(e) => handleRgbChange('r', parseFloat(e.target.value))}
                  className="w-full h-3 appearance-none rounded-lg cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, rgb(0, ${rgb.g}, ${rgb.b}), rgb(255, ${rgb.g}, ${rgb.b}))`
                  }}
                />
              </div>

              {/* Green */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm text-gray-300">Green</label>
                  <span className="text-sm text-gray-400 font-mono bg-[#1E1E22] px-2 py-1 rounded">
                    {Math.round(rgb.g)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="255"
                  step="1"
                  value={rgb.g}
                  onChange={(e) => handleRgbChange('g', parseFloat(e.target.value))}
                  className="w-full h-3 appearance-none rounded-lg cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, rgb(${rgb.r}, 0, ${rgb.b}), rgb(${rgb.r}, 255, ${rgb.b}))`
                  }}
                />
              </div>

              {/* Blue */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm text-gray-300">Blue</label>
                  <span className="text-sm text-gray-400 font-mono bg-[#1E1E22] px-2 py-1 rounded">
                    {Math.round(rgb.b)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="255"
                  step="1"
                  value={rgb.b}
                  onChange={(e) => handleRgbChange('b', parseFloat(e.target.value))}
                  className="w-full h-3 appearance-none rounded-lg cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, rgb(${rgb.r}, ${rgb.g}, 0), rgb(${rgb.r}, ${rgb.g}, 255))`
                  }}
                />
              </div>
            </div>
          ) : format === 'oklch' ? (
            <div className="space-y-4">
              {/* Lightness */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm text-gray-300">Lightness</label>
                  <span className="text-sm text-gray-400 font-mono bg-[#1E1E22] px-2 py-1 rounded">
                    {(oklch.l * 100).toFixed(2)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.001"
                  value={oklch.l}
                  onChange={(e) => handleOklchChange('l', parseFloat(e.target.value))}
                  className="w-full h-3 appearance-none rounded-lg cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, 
                      ${oklchToHex({ l: 0, c: oklch.c, h: oklch.h })}, 
                      ${oklchToHex({ l: 0.5, c: oklch.c, h: oklch.h })}, 
                      ${oklchToHex({ l: 1, c: oklch.c, h: oklch.h })}
                    )`
                  }}
                />
              </div>

              {/* Chroma */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm text-gray-300">Chroma</label>
                  <span className="text-sm text-gray-400 font-mono bg-[#1E1E22] px-2 py-1 rounded">
                    {oklch.c.toFixed(4)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="0.4"
                  step="0.001"
                  value={oklch.c}
                  onChange={(e) => handleOklchChange('c', parseFloat(e.target.value))}
                  className="w-full h-3 appearance-none rounded-lg cursor-pointer"
                  style={{ background: satGradient }}
                />
              </div>

              {/* Hue */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm text-gray-300">Hue</label>
                  <span className="text-sm text-gray-400 font-mono bg-[#1E1E22] px-2 py-1 rounded">
                    {oklch.h.toFixed(2)}°
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="360"
                  step="0.1"
                  value={oklch.h}
                  onChange={(e) => handleOklchChange('h', parseFloat(e.target.value))}
                  className="w-full h-3 appearance-none rounded-lg cursor-pointer"
                  style={{ background: hueGradient }}
                />
              </div>
            </div>
          ) : null}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-white/10">
          <button
            onClick={onClose}
            className="px-5 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
