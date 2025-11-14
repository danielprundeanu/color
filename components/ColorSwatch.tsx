import React from 'react';
import { Copy, Check } from 'lucide-react';

interface ColorSwatchProps {
  name: string;
  value: string;
  showBorder?: boolean;
}

export function ColorSwatch({ name, value, showBorder = false }: ColorSwatchProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    // Fallback copy method for when Clipboard API is blocked
    const textarea = document.createElement('textarea');
    textarea.value = value;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
    document.body.removeChild(textarea);
  };

  const isLight = (color: string) => {
    if (color === 'transparent' || color.startsWith('rgba(255,255,255')) {
      return true;
    }
    
    const hex = color.replace('#', '');
    if (hex.length === 3 || hex.length === 6) {
      const r = parseInt(hex.length === 3 ? hex[0] + hex[0] : hex.slice(0, 2), 16);
      const g = parseInt(hex.length === 3 ? hex[1] + hex[1] : hex.slice(2, 4), 16);
      const b = parseInt(hex.length === 3 ? hex[2] + hex[2] : hex.slice(4, 6), 16);
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      return brightness > 155;
    }
    return false;
  };

  const light = isLight(value);

  return (
    <div className="group relative">
      <div
        className={`h-24 rounded-lg transition-all cursor-pointer hover:scale-105 ${
          showBorder || value === 'transparent' ? 'border-2 border-gray-200' : ''
        }`}
        style={{ backgroundColor: value }}
        onClick={handleCopy}
      >
        <div
          className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg ${
            light ? 'bg-black/20' : 'bg-white/20'
          }`}
        >
          {copied ? (
            <Check className={`w-6 h-6 ${light ? 'text-black' : 'text-white'}`} />
          ) : (
            <Copy className={`w-5 h-5 ${light ? 'text-black' : 'text-white'}`} />
          )}
        </div>
      </div>
      <div className="mt-2 space-y-1">
        <p className="text-sm text-gray-600">{name}</p>
        <p className="text-xs text-gray-400 font-mono">{value}</p>
      </div>
    </div>
  );
}