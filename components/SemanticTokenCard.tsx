import React from 'react';
import { getContrastRatio, formatContrastRatio, getWCAGLevel } from '../utils/contrastCalculator';

interface SemanticTokenCardProps {
  title: string;
  surfaceToken: string;
  surfaceColor: string;
  borderColor?: string;
  // Text colors
  mainTitleColor?: string; // For primary.on.surface.default or similar
  textHeadColor: string;
  textBodyColor: string;
  textLabelColor: string;
  // Fill colors
  fillDefault: string;
  fillOnDefault: string;
  fillHover?: string;
  fillActive?: string;
  fillFocus?: string;
  fillDisabled?: string;
  description?: string;
  onClick?: () => void;
  isSelected?: boolean;
  showContrast?: boolean;
  cardType?: 'branded' | 'neutral'; // To differentiate between the two card types
}

export function SemanticTokenCard({
  title,
  surfaceToken,
  surfaceColor,
  borderColor,
  mainTitleColor,
  textHeadColor,
  textBodyColor,
  textLabelColor,
  fillDefault,
  fillOnDefault,
  fillHover,
  fillActive,
  fillFocus,
  fillDisabled,
  description,
  onClick,
  isSelected,
  showContrast = false,
  cardType = 'branded'
}: SemanticTokenCardProps) {
  // Calculate contrast ratios
  const mainTitleContrast = mainTitleColor ? getContrastRatio(surfaceColor, mainTitleColor) : 0;
  const headContrast = getContrastRatio(surfaceColor, textHeadColor);
  const bodyContrast = getContrastRatio(surfaceColor, textBodyColor);
  const labelContrast = getContrastRatio(surfaceColor, textLabelColor);
  const fillContrast = getContrastRatio(fillDefault, fillOnDefault);
  const fillHoverContrast = fillHover ? getContrastRatio(fillHover, fillOnDefault) : 0;
  const fillActiveContrast = fillActive ? getContrastRatio(fillActive, fillOnDefault) : 0;
  const fillFocusContrast = fillFocus ? getContrastRatio(fillFocus, fillOnDefault) : 0;
  const fillDisabledContrast = fillDisabled ? getContrastRatio(fillDisabled, fillOnDefault) : 0;
  
  const mainTitleWCAG = mainTitleColor ? getWCAGLevel(mainTitleContrast, true) : null;
  const headWCAG = getWCAGLevel(headContrast, true);
  const bodyWCAG = getWCAGLevel(bodyContrast, false);
  const labelWCAG = getWCAGLevel(labelContrast, false);
  const fillWCAG = getWCAGLevel(fillContrast, false);
  const fillHoverWCAG = fillHover ? getWCAGLevel(fillHoverContrast, false) : null;
  const fillActiveWCAG = fillActive ? getWCAGLevel(fillActiveContrast, false) : null;
  const fillFocusWCAG = fillFocus ? getWCAGLevel(fillFocusContrast, false) : null;
  const fillDisabledWCAG = fillDisabled ? getWCAGLevel(fillDisabledContrast, false) : null;

  // Contrast Badge Component
  const ContrastBadge = ({ ratio, wcag }: { ratio: number; wcag: { level: string; color: string } }) => (
    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
      <span className="text-[10px]" style={{ color: '#fff' }}>{formatContrastRatio(ratio)}:1</span>
      <span 
        className="text-[9px] px-1 py-0.5 rounded font-medium" 
        style={{ backgroundColor: wcag.color, color: '#000' }}
      >
        {wcag.level}
      </span>
    </span>
  );

  return (
    <div 
      className={`relative w-full rounded-lg overflow-hidden cursor-pointer transition-all ${
        isSelected ? 'ring-2 ring-blue-500' : 'hover:ring-2 hover:ring-gray-600'
      }`}
      style={{ backgroundColor: surfaceColor, border: borderColor ? `1px solid ${borderColor}` : 'none' }}
      onClick={onClick}
    >
      {/* Token Badge */}
      <div className="absolute left-6 top-6 flex items-center gap-3">
        <div className="bg-gray-100 px-2 py-1 rounded border border-gray-300">
          <p className="text-xs font-mono text-gray-900">{surfaceToken}</p>
        </div>
      </div>

      {/* Content */}
      <div className="pt-20 px-6 pb-6 space-y-6">
        {/* Title & Text Hierarchy */}
        <div className="space-y-2">
          {/* Main Title */}
          {mainTitleColor && (
            <div className="flex items-center gap-2">
              <h3 className="text-2xl" style={{ color: mainTitleColor }}>{title}</h3>
              {showContrast && mainTitleWCAG && <ContrastBadge ratio={mainTitleContrast} wcag={mainTitleWCAG} />}
            </div>
          )}
          
          {/* Text Hierarchy */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <p style={{ color: textHeadColor }}>
                {cardType === 'branded' ? 'on.surface.head' : 'on.surface.primary.head'}
              </p>
              {showContrast && <ContrastBadge ratio={headContrast} wcag={headWCAG} />}
            </div>
            <div className="flex items-center gap-2">
              <p style={{ color: textBodyColor }}>
                {cardType === 'branded' ? 'on.surface.body' : 'on.surface.body'}
              </p>
              {showContrast && <ContrastBadge ratio={bodyContrast} wcag={bodyWCAG} />}
            </div>
            <div className="flex items-center gap-2">
              <p className="text-sm" style={{ color: textLabelColor }}>
                {cardType === 'branded' ? 'on.surface.label' : 'on.surface.label'}
              </p>
              {showContrast && <ContrastBadge ratio={labelContrast} wcag={labelWCAG} />}
            </div>
            {description && (
              <p className="text-sm pt-2" style={{ color: textBodyColor }}>
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-400 opacity-30" />

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap">
          <div className="flex flex-col gap-1">
            <button 
              className="px-4 py-3 rounded-lg"
              style={{ backgroundColor: fillDefault, color: fillOnDefault }}
            >
              Default
            </button>
            {showContrast && (
              <div className="flex justify-center">
                <ContrastBadge ratio={fillContrast} wcag={fillWCAG} />
              </div>
            )}
          </div>
          
          {fillHover && (
            <div className="flex flex-col gap-1">
              <button 
                className="px-4 py-3 rounded-lg"
                style={{ backgroundColor: fillHover, color: fillOnDefault }}
              >
                Hover
              </button>
              {showContrast && fillHoverWCAG && (
                <div className="flex justify-center">
                  <ContrastBadge ratio={fillHoverContrast} wcag={fillHoverWCAG} />
                </div>
              )}
            </div>
          )}
          
          {fillActive && (
            <div className="flex flex-col gap-1">
              <button 
                className="px-4 py-3 rounded-lg"
                style={{ backgroundColor: fillActive, color: fillOnDefault }}
              >
                Active
              </button>
              {showContrast && fillActiveWCAG && (
                <div className="flex justify-center">
                  <ContrastBadge ratio={fillActiveContrast} wcag={fillActiveWCAG} />
                </div>
              )}
            </div>
          )}
          
          {fillFocus && (
            <div className="flex flex-col gap-1">
              <button 
                className="px-4 py-3 rounded-lg ring-2 ring-offset-2"
                style={{ backgroundColor: fillFocus, color: fillOnDefault, ringColor: fillFocus }}
              >
                Focus
              </button>
              {showContrast && fillFocusWCAG && (
                <div className="flex justify-center">
                  <ContrastBadge ratio={fillFocusContrast} wcag={fillFocusWCAG} />
                </div>
              )}
            </div>
          )}
          
          {fillDisabled && (
            <div className="flex flex-col gap-1">
              <button 
                className="px-4 py-3 rounded-lg opacity-50"
                style={{ backgroundColor: fillDisabled, color: fillOnDefault }}
              >
                Disabled
              </button>
              {showContrast && fillDisabledWCAG && (
                <div className="flex justify-center">
                  <ContrastBadge ratio={fillDisabledContrast} wcag={fillDisabledWCAG} />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Button Icon Variants */}
        <div className="flex gap-2 flex-wrap">
          <button 
            className="p-3 rounded-lg"
            style={{ backgroundColor: fillDefault, color: fillOnDefault }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <button 
            className="px-3 py-2 rounded-lg flex items-center gap-2"
            style={{ backgroundColor: fillDefault, color: fillOnDefault }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="text-sm">button</span>
          </button>
          <button 
            className="px-3 py-2 rounded-lg flex items-center gap-2"
            style={{ backgroundColor: fillDefault, color: fillOnDefault }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 8L7 11L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm">button</span>
          </button>
        </div>

        {/* Color Swatches */}
        <div className="space-y-1">
          <div 
            className="p-3 rounded flex items-center justify-between"
            style={{ backgroundColor: fillDefault }}
          >
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 px-2 py-1 rounded border border-gray-300">
                <p className="text-xs font-mono text-gray-900">fill.default</p>
              </div>
              <p className="text-xs font-mono" style={{ color: fillOnDefault }}>{fillDefault}</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-sm" style={{ color: fillOnDefault }}>on.fill.default</p>
              {showContrast && <ContrastBadge ratio={fillContrast} wcag={fillWCAG} />}
            </div>
          </div>
          
          {fillActive && (
            <div 
              className="p-3 rounded flex items-center justify-between"
              style={{ backgroundColor: fillActive }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 px-2 py-1 rounded border border-gray-300">
                  <p className="text-xs font-mono text-gray-900">fill.active</p>
                </div>
                <p className="text-xs font-mono" style={{ color: fillOnDefault }}>{fillActive}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm" style={{ color: fillOnDefault }}>on.fill.default</p>
                {showContrast && fillActiveWCAG && <ContrastBadge ratio={fillActiveContrast} wcag={fillActiveWCAG} />}
              </div>
            </div>
          )}

          {fillDisabled && (
            <div 
              className="p-3 rounded flex items-center justify-between opacity-50"
              style={{ backgroundColor: fillDisabled }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 px-2 py-1 rounded border border-gray-300">
                  <p className="text-xs font-mono text-gray-900">fill.disabled</p>
                </div>
                <p className="text-xs font-mono" style={{ color: fillOnDefault }}>{fillDisabled}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm" style={{ color: fillOnDefault }}>on.fill.default</p>
                {showContrast && fillDisabledWCAG && <ContrastBadge ratio={fillDisabledContrast} wcag={fillDisabledWCAG} />}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
