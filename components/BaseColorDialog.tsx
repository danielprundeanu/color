import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { hexToOKLCH, oklchToHex } from '../utils/colorUtils';
import { 
  hexToRGBA, 
  hexToHSL, 
  formatRGBA, 
  formatHSL,
  parseColorString,
} from '../utils/colorConversions';

interface BaseColorDialogProps {
  isOpen: boolean;
  onClose: () => void;
  colorName: string;
  initialColor: string;
  onColorChange: (color: string, hue: number, chroma: number) => void;
}

type ColorFormat = 'hex' | 'rgb' | 'hsl' | 'oklch';

export function BaseColorDialog({
  isOpen,
  onClose,
  colorName,
  initialColor,
  onColorChange,
}: BaseColorDialogProps) {
  const [color, setColor] = useState(initialColor);
  const [oklch, setOklch] = useState(() => hexToOKLCH(initialColor));
  const [format, setFormat] = useState<ColorFormat>('hex');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (isOpen) {
      setColor(initialColor);
      const newOklch = hexToOKLCH(initialColor);
      setOklch(newOklch);
      updateInputValue(initialColor, format);
    }
  }, [initialColor, isOpen]);

  const updateInputValue = (hexColor: string, colorFormat: ColorFormat) => {
    switch (colorFormat) {
      case 'hex':
        setInputValue(hexColor);
        break;
      case 'rgb':
        const rgba = hexToRGBA(hexColor);
        setInputValue(formatRGBA(rgba));
        break;
      case 'hsl':
        const hsl = hexToHSL(hexColor);
        setInputValue(formatHSL(hsl));
        break;
      case 'oklch':
        const oklchVal = hexToOKLCH(hexColor);
        setInputValue(`oklch(${(oklchVal.l * 100).toFixed(1)}% ${oklchVal.c.toFixed(3)} ${oklchVal.h.toFixed(1)})`);
        break;
    }
  };

  const handleColorInputChange = (newColor: string) => {
    setColor(newColor);
    const newOklch = hexToOKLCH(newColor);
    setOklch(newOklch);
    updateInputValue(newColor, format);
  };

  const handleTextInputChange = (value: string) => {
    setInputValue(value);
    const parsedColor = parseColorString(value);
    if (parsedColor) {
      setColor(parsedColor);
      const newOklch = hexToOKLCH(parsedColor);
      setOklch(newOklch);
    }
  };

  const handleFormatChange = (newFormat: ColorFormat) => {
    setFormat(newFormat);
    updateInputValue(color, newFormat);
  };

  const handleSave = () => {
    onColorChange(color, oklch.h, oklch.c);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div
        className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Edit Base Color</h3>
            <p className="text-sm text-gray-500">{colorName}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Color Preview & Picker */}
          <div className="flex items-center gap-4">
            <div
              className="w-24 h-24 rounded-lg border-2 border-gray-300 shadow-sm"
              style={{ backgroundColor: color }}
            />
            <div className="flex-1 space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Color Picker
                </label>
                <input
                  type="color"
                  value={color}
                  onChange={(e) => handleColorInputChange(e.target.value)}
                  className="w-full h-12 rounded border border-gray-300 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Format Selector & Input */}
          <div>
            <div className="flex gap-2 mb-2">
              {(['hex', 'rgb', 'hsl', 'oklch'] as ColorFormat[]).map((f) => (
                <button
                  key={f}
                  onClick={() => handleFormatChange(f)}
                  className={`px-3 py-1 text-xs rounded transition-colors ${
                    format === f
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {f.toUpperCase()}
                </button>
              ))}
            </div>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => handleTextInputChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg font-mono text-sm"
              placeholder={
                format === 'hex' ? '#000000' :
                format === 'rgb' ? 'rgb(0, 0, 0)' :
                format === 'hsl' ? 'hsl(0, 0%, 0%)' :
                'oklch(0% 0 0)'
              }
            />
          </div>

          {/* OKLCH Info */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-2">
            <p className="text-xs font-medium text-gray-700 mb-2">Calculated OKLCH Values:</p>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="text-[10px] text-gray-500 uppercase">Lightness</p>
                <p className="text-sm font-mono text-gray-900">{(oklch.l * 100).toFixed(1)}%</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase">Chroma</p>
                <p className="text-sm font-mono text-gray-900">{oklch.c.toFixed(3)}</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase">Hue</p>
                <p className="text-sm font-mono text-gray-900">{oklch.h.toFixed(1)}°</p>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-3">
              Note: Hue and Chroma will be applied to the OKLCH curves automatically.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
