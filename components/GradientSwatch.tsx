import React from 'react';
import { Copy, Check } from 'lucide-react';

interface GradientSwatchProps {
  name: string;
  startColor: string;
  endColor: string;
}

export function GradientSwatch({ name, startColor, endColor }: GradientSwatchProps) {
  const [copied, setCopied] = React.useState(false);

  const gradientValue = `linear-gradient(to right, ${startColor}, ${endColor})`;

  const handleCopy = () => {
    // Fallback copy method for when Clipboard API is blocked
    const textarea = document.createElement('textarea');
    textarea.value = gradientValue;
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

  return (
    <div className="group relative">
      <div
        className="h-24 rounded-lg transition-all cursor-pointer hover:scale-105"
        style={{ background: gradientValue }}
        onClick={handleCopy}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg bg-white/20">
          {copied ? (
            <Check className="w-6 h-6 text-white" />
          ) : (
            <Copy className="w-5 h-5 text-white" />
          )}
        </div>
      </div>
      <div className="mt-2 space-y-1">
        <p className="text-sm text-gray-600">{name}</p>
        <div className="space-y-0.5">
          <p className="text-xs text-gray-400 font-mono">Start: {startColor}</p>
          <p className="text-xs text-gray-400 font-mono">End: {endColor}</p>
        </div>
      </div>
    </div>
  );
}