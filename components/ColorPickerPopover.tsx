import React, { useState, useEffect } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { hexToOKLCH, oklchToHex, hexToRGBA, rgbaToHex, hexToHSL, hslToHex } from '../utils/colorUtils';

interface ColorPickerPopoverProps {
  color: string;
  label: string;
  onChange: (color: string) => void;
  includeInPalette?: boolean;
  onIncludeChange?: (include: boolean) => void;
}

export function ColorPickerPopover({ 
  color, 
  label, 
  onChange, 
  includeInPalette = true,
  onIncludeChange 
}: ColorPickerPopoverProps) {
  const [open, setOpen] = useState(false);
  const [hexValue, setHexValue] = useState(color);
  const [rgbaValue, setRgbaValue] = useState('');
  const [oklchValue, setOklchValue] = useState('');
  const [hslValue, setHslValue] = useState('');

  // Update all format values when color changes
  useEffect(() => {
    setHexValue(color);
    
    // Convert to RGBA
    const rgba = hexToRGBA(color);
    setRgbaValue(`rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`);
    
    // Convert to OKLCH
    const oklch = hexToOKLCH(color);
    setOklchValue(`oklch(${oklch.l.toFixed(3)} ${oklch.c.toFixed(3)} ${oklch.h.toFixed(1)})`);
    
    // Convert to HSL
    const hsl = hexToHSL(color);
    setHslValue(`hsl(${hsl.h.toFixed(0)}, ${hsl.s.toFixed(0)}%, ${hsl.l.toFixed(0)}%)`);
  }, [color]);

  const handleHexChange = (value: string) => {
    setHexValue(value);
    if (/^#[0-9A-F]{6}$/i.test(value)) {
      onChange(value);
    }
  };

  const handleRgbaChange = (value: string) => {
    setRgbaValue(value);
    // Parse rgba(r, g, b, a) format
    const match = value.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
    if (match) {
      const r = parseInt(match[1]);
      const g = parseInt(match[2]);
      const b = parseInt(match[3]);
      if (r <= 255 && g <= 255 && b <= 255) {
        const hex = rgbaToHex({ r, g, b, a: 1 });
        onChange(hex);
      }
    }
  };

  const handleOklchChange = (value: string) => {
    setOklchValue(value);
    // Parse oklch(l c h) format
    const match = value.match(/oklch\(([\d.]+)\s+([\d.]+)\s+([\d.]+)\)/);
    if (match) {
      const l = parseFloat(match[1]);
      const c = parseFloat(match[2]);
      const h = parseFloat(match[3]);
      if (l >= 0 && l <= 1 && c >= 0 && h >= 0 && h <= 360) {
        const hex = oklchToHex({ l, c, h });
        onChange(hex);
      }
    }
  };

  const handleHslChange = (value: string) => {
    setHslValue(value);
    // Parse hsl(h, s%, l%) format
    const match = value.match(/hsl\(([\d.]+),\s*([\d.]+)%,\s*([\d.]+)%\)/);
    if (match) {
      const h = parseFloat(match[1]);
      const s = parseFloat(match[2]);
      const l = parseFloat(match[3]);
      if (h >= 0 && h <= 360 && s >= 0 && s <= 100 && l >= 0 && l <= 100) {
        const hex = hslToHex({ h, s, l });
        onChange(hex);
      }
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          className="w-full h-10 rounded border-2 border-gray-300 hover:border-gray-400 transition-colors cursor-pointer relative overflow-hidden group"
          style={{ backgroundColor: color }}
        >
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          <span className="absolute bottom-0 left-0 right-0 text-[10px] px-1 py-0.5 bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
            {label}
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80" side="right" align="start">
        <div className="space-y-4">
          <div>
            <h4 className="mb-3">{label}</h4>
            
            {/* Visual Color Picker */}
            <div className="mb-4">
              <input
                type="color"
                value={hexValue}
                onChange={(e) => handleHexChange(e.target.value)}
                className="w-full h-20 rounded border border-gray-300 cursor-pointer"
              />
            </div>

            {/* Include in Palette Checkbox */}
            {onIncludeChange && (
              <div className="flex items-center space-x-2 mb-4 p-3 bg-blue-50 dark:bg-blue-950 rounded">
                <Checkbox
                  id={`include-${label}`}
                  checked={includeInPalette}
                  onCheckedChange={(checked) => onIncludeChange(!!checked)}
                />
                <Label
                  htmlFor={`include-${label}`}
                  className="text-sm cursor-pointer"
                >
                  Include in palette (guaranteed shade)
                </Label>
              </div>
            )}

            {/* HEX Input */}
            <div className="space-y-1">
              <Label htmlFor={`hex-${label}`} className="text-xs text-gray-600">
                HEX
              </Label>
              <Input
                id={`hex-${label}`}
                value={hexValue}
                onChange={(e) => handleHexChange(e.target.value)}
                placeholder="#FC002E"
                className="font-mono text-sm"
              />
            </div>

            {/* RGBA Input */}
            <div className="space-y-1">
              <Label htmlFor={`rgba-${label}`} className="text-xs text-gray-600">
                RGBA
              </Label>
              <Input
                id={`rgba-${label}`}
                value={rgbaValue}
                onChange={(e) => handleRgbaChange(e.target.value)}
                placeholder="rgba(252, 0, 46, 1)"
                className="font-mono text-sm"
              />
            </div>

            {/* OKLCH Input */}
            <div className="space-y-1">
              <Label htmlFor={`oklch-${label}`} className="text-xs text-gray-600">
                OKLCH
              </Label>
              <Input
                id={`oklch-${label}`}
                value={oklchValue}
                onChange={(e) => handleOklchChange(e.target.value)}
                placeholder="oklch(0.557 0.228 27.3)"
                className="font-mono text-sm"
              />
            </div>

            {/* HSL Input */}
            <div className="space-y-1">
              <Label htmlFor={`hsl-${label}`} className="text-xs text-gray-600">
                HSL
              </Label>
              <Input
                id={`hsl-${label}`}
                value={hslValue}
                onChange={(e) => handleHslChange(e.target.value)}
                placeholder="hsl(349, 100%, 49%)"
                className="font-mono text-sm"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
