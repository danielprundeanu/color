import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { hexToOKLCH, oklchToHex } from '../utils/colorUtils';

interface BaseColorEditorProps {
  isOpen: boolean;
  onClose: () => void;
  colorName: string;
  initialColor: string;
  onColorChange: (color: string, hue: number, chroma: number) => void;
}

export function BaseColorEditor({
  isOpen,
  onClose,
  colorName,
  initialColor,
  onColorChange,
}: BaseColorEditorProps) {
  const [color, setColor] = useState(initialColor);
  const oklch = hexToOKLCH(color);
  const [lightness, setLightness] = useState(oklch.l);
  const [chroma, setChroma] = useState(oklch.c);
  const [hue, setHue] = useState(oklch.h);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      
      // Position to the right of the anchor, or left if not enough space
      let left = 8;
      if (left + dropdownRect.width > window.innerWidth) {
        left = window.innerWidth - dropdownRect.width - 8;
      }
      
      // Center vertically relative to anchor
      let top = (window.innerHeight / 2) - (dropdownRect.height / 2);
      
      // Keep within viewport
      if (top < 8) top = 8;
      if (top + dropdownRect.height > window.innerHeight) {
        top = window.innerHeight - dropdownRect.height - 8;
      }
      
      setPosition({ top, left });
    }
  }, [isOpen]);

  useEffect(() => {
    const oklch = hexToOKLCH(initialColor);
    setColor(initialColor);
    setLightness(oklch.l);
    setChroma(oklch.c);
    setHue(oklch.h);
  }, [initialColor]);

  const updateColor = (l: number, c: number, h: number) => {
    setLightness(l);
    setChroma(c);
    setHue(h);
    const newColor = oklchToHex({ l, c, h });
    setColor(newColor);
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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
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
      <div className="fixed inset-0 z-40" />
      
      {/* Dropdown */}
      <div
        ref={dropdownRef}
        className="fixed z-50 w-[320px] bg-gray-800 text-white rounded-lg shadow-2xl border border-gray-700"
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
            className="h-24 rounded-lg border border-gray-600"
            style={{ backgroundColor: color }}
          />

          {/* Color Values */}
          <div className="space-y-1 text-xs">
            <p className="text-gray-400">HEX: <span className="text-white font-mono">{color}</span></p>
            <p className="text-gray-400">
              OKLCH: <span className="text-white font-mono">
                oklch({Math.round(lightness * 100)}, {chroma.toFixed(2)}, {Math.round(hue)})
              </span>
            </p>
          </div>

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
      </div>
    </>
  );
}