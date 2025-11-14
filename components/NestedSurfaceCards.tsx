import React from 'react';
import { useColors } from '../contexts/ColorContext';
import svgPaths from '../imports/svg-tktau4ghxt';
import { getContrastRatio, getWCAGLevel } from '../utils/contrastCalculator';

interface NestedSurfaceCardsProps {
  onCardClick: (cardKey: string) => void;
  selectedCard: string | null;
  showContrast: boolean;
}

export function NestedSurfaceCards({ onCardClick, selectedCard, showContrast }: NestedSurfaceCardsProps) {
  const { getAllGeneratedColors, semanticTokens, theme, useBgFromTheme } = useColors();
  const allColors = getAllGeneratedColors();
  
  const resolveSemanticToken = (tokenPath: string): string => {
    if (!tokenPath.startsWith('{') || !tokenPath.endsWith('}')) {
      return tokenPath;
    }
    
    const path = tokenPath.slice(1, -1).split('.');
    
    if (path.length >= 2) {
      const paletteKey = path[0];
      const step = path[1];
      
      if (allColors[paletteKey] && allColors[paletteKey][step]) {
        return allColors[paletteKey][step];
      }
    }
    
    return tokenPath;
  };

  const getColor = (path: string) => {
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

  // Helper function to get badge styles based on WCAG level
  const getBadgeStyle = (level: 'AAA' | 'AA' | 'Fail') => {
    switch (level) {
      case 'AAA':
        return 'bg-green-600 text-white';
      case 'AA':
        return 'bg-yellow-600 text-white';
      case 'Fail':
        return 'bg-red-600 text-white';
    }
  };

  // Render contrast badge
  const ContrastBadge = ({ textColor, surfaceColor }: { textColor: string; surfaceColor: string }) => {
    if (!showContrast) return null;
    
    const ratio = getContrastRatio(textColor, surfaceColor);
    const wcagResult = getWCAGLevel(ratio, false);
    const level = wcagResult.level;
    
    return (
      <span className={`inline-block ml-2 px-1.5 py-0.5 text-[10px] rounded ${getBadgeStyle(level)}`}>
        {level} {ratio.toFixed(2)}
      </span>
    );
  };

  // Render token pill header
  const TokenPillHeader = ({ tokenName, tokenValue }: { tokenName: string; tokenValue: string }) => (
    <div className="flex gap-2 items-center mb-6">
      <div className="bg-[#3e3e3e] box-border flex gap-2 items-center justify-center px-2 py-0.5 rounded border border-[#434343]">
        <p className="text-[#c5c5c5] text-base">{tokenName}</p>
      </div>
      <p className="text-xs text-white">{tokenValue}</p>
    </div>
  );

  // Render left column with on.surface tokens
  const LeftColumn = ({ textHeadColor, textBodyColor, textLabelColor, textDisabledColor, surfaceColor }: any) => (
    <div className="flex flex-col gap-6">
      {/* on.surface.head */}
      <div className="flex flex-col gap-3">
        <div className="inline-flex items-center">
          <p className="text-[26px] leading-[1.2]" style={{ color: textHeadColor }}>on.surface.head</p>
          <ContrastBadge textColor={textHeadColor} surfaceColor={surfaceColor} />
        </div>
        <div className="inline-flex items-center">
          <p className="text-[23px] leading-[1.2]" style={{ color: textHeadColor }}>on.surface.head</p>
          <ContrastBadge textColor={textHeadColor} surfaceColor={surfaceColor} />
        </div>
        <div className="inline-flex items-center">
          <p className="text-[23px] leading-[1.4]" style={{ color: textHeadColor }}>on.surface.head</p>
          <ContrastBadge textColor={textHeadColor} surfaceColor={surfaceColor} />
        </div>
      </div>

      {/* on.surface.body */}
      <div className="flex flex-col gap-3">
        <div className="inline-flex items-center">
          <p className="text-lg leading-[1.4]" style={{ color: textBodyColor }}>on.surface.body</p>
          <ContrastBadge textColor={textBodyColor} surfaceColor={surfaceColor} />
        </div>
        <div className="inline-flex items-center">
          <p className="text-base leading-[1.4]" style={{ color: textBodyColor }}>on.surface.body</p>
          <ContrastBadge textColor={textBodyColor} surfaceColor={surfaceColor} />
        </div>
        <div className="inline-flex items-center">
          <p className="text-sm leading-[1.4]" style={{ color: textBodyColor }}>on.surface.body</p>
          <ContrastBadge textColor={textBodyColor} surfaceColor={surfaceColor} />
        </div>
      </div>

      {/* on.surface.label */}
      <div className="flex flex-col gap-3">
        <div className="inline-flex items-center">
          <p className="text-[15px] font-bold leading-none" style={{ color: textLabelColor }}>on.surface.label</p>
          <ContrastBadge textColor={textLabelColor} surfaceColor={surfaceColor} />
        </div>
        <div className="inline-flex items-center">
          <p className="text-[13px] font-medium leading-none" style={{ color: textLabelColor }}>on.surface.label</p>
          <ContrastBadge textColor={textLabelColor} surfaceColor={surfaceColor} />
        </div>
        <div className="inline-flex items-center">
          <p className="text-xs font-medium leading-[1.2]" style={{ color: textLabelColor }}>on.surface.label</p>
          <ContrastBadge textColor={textLabelColor} surfaceColor={surfaceColor} />
        </div>
        <div className="inline-flex items-center">
          <p className="text-[10px] font-medium leading-none" style={{ color: textLabelColor }}>on.surface.label</p>
          <ContrastBadge textColor={textLabelColor} surfaceColor={surfaceColor} />
        </div>
      </div>

      {/* on.surface.disabled */}
      <div>
        <div className="inline-flex items-center">
          <p className="text-lg leading-[1.4]" style={{ color: textDisabledColor }}>on.surface.disabled</p>
          <ContrastBadge textColor={textDisabledColor} surfaceColor={surfaceColor} />
        </div>
      </div>

      {/* Separators */}
      <div className="flex flex-col w-full">
        <div className="h-8 flex items-center">
          <svg className="w-full h-8" fill="none" preserveAspectRatio="none" viewBox="0 0 166 32">
            <line stroke="rgba(255,255,255,0.1)" x2="166" y1="15.5" y2="15.5" />
          </svg>
        </div>
        <div className="h-8 flex items-center">
          <svg className="w-full h-8" fill="none" preserveAspectRatio="none" viewBox="0 0 166 32">
            <line stroke="rgba(255,255,255,0.15)" x2="166" y1="15.5" y2="15.5" />
          </svg>
        </div>
        <div className="h-8 flex items-center">
          <svg className="w-full h-8" fill="none" preserveAspectRatio="none" viewBox="0 0 166 32">
            <line stroke="rgba(255,255,255,0.2)" x2="166" y1="15.5" y2="15.5" />
          </svg>
        </div>
        <div className="h-8 flex items-center">
          <svg className="w-full h-8" fill="none" preserveAspectRatio="none" viewBox="0 0 166 32">
            <line stroke="rgba(255,255,255,0.25)" x2="166" y1="15.5" y2="15.5" />
          </svg>
        </div>
        <div className="h-8 flex items-center">
          <svg className="w-full h-8" fill="none" preserveAspectRatio="none" viewBox="0 0 166 32">
            <line stroke="rgba(255,255,255,0.05)" x2="166" y1="15.5" y2="15.5" />
          </svg>
        </div>
      </div>

      {/* inverted.on.surface.label */}
      <div className="inline-flex items-center">
        <p className="text-xs leading-[1.2]" style={{ color: textLabelColor }}>inverted.on.surface.label</p>
        <ContrastBadge textColor={textLabelColor} surfaceColor={surfaceColor} />
      </div>

      {/* Icons */}
      <div className="flex gap-6">
        <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
          <path d={svgPaths.p1ac21d80} fill={textHeadColor} />
        </svg>
        <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
          <path d={svgPaths.p1ac21d80} fill={textBodyColor} />
        </svg>
        <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
          <path d={svgPaths.p1ac21d80} fill={textLabelColor} />
        </svg>
      </div>
    </div>
  );

  // Render right column with semantic tokens
  const RightColumn = ({ 
    primaryHeadColor, primaryBodyColor, primaryLabelColor,
    secondaryHeadColor, secondaryBodyColor, secondaryLabelColor,
    successHeadColor, successBodyColor, successLabelColor,
    infoHeadColor, infoBodyColor, infoLabelColor,
    warningHeadColor, warningBodyColor, warningLabelColor,
    errorHeadColor, errorBodyColor, errorLabelColor
  }: any) => (
    <div className="flex flex-col gap-6">
      {/* Primary */}
      <div className="flex flex-col gap-3">
        <p className="text-[23px] leading-[1.2]" style={{ color: primaryHeadColor }}>on.surface.primary.head</p>
        <p className="text-base leading-[1.4]" style={{ color: primaryBodyColor }}>on.surface.primary.body</p>
        <p className="text-[13px] font-medium leading-none" style={{ color: primaryLabelColor }}>on.surface.primary.label</p>
      </div>

      {/* Secondary */}
      <div className="flex flex-col gap-3">
        <p className="text-[23px] leading-[1.2]" style={{ color: secondaryHeadColor }}>on.surface.secondary.head</p>
        <p className="text-base leading-[1.4]" style={{ color: secondaryBodyColor }}>on.surface.secondary.head</p>
        <p className="text-[13px] font-medium leading-none" style={{ color: secondaryLabelColor }}>on.surface.secondary.label</p>
      </div>

      {/* Success */}
      <div className="flex flex-col gap-3">
        <p className="text-[23px] leading-[1.2]" style={{ color: successHeadColor }}>on.surface.succes.head</p>
        <p className="text-base leading-[1.4]" style={{ color: successBodyColor }}>on.surface.succes.body</p>
        <p className="text-[13px] font-medium leading-none" style={{ color: successLabelColor }}>on.surface.succes.label</p>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-3">
        <p className="text-[23px] leading-[1.2]" style={{ color: infoHeadColor }}>on.surface.info.head</p>
        <p className="text-base leading-[1.4]" style={{ color: infoBodyColor }}>on.surface.info.body</p>
        <p className="text-[13px] font-medium leading-none" style={{ color: infoLabelColor }}>on.surface.info.label</p>
      </div>

      {/* Warning */}
      <div className="flex flex-col gap-3">
        <p className="text-[23px] leading-[1.2]" style={{ color: warningHeadColor }}>on.surface.warning.head</p>
        <p className="text-base leading-[1.4]" style={{ color: warningBodyColor }}>on.surface.warning.body</p>
        <p className="text-[13px] font-medium leading-none" style={{ color: warningLabelColor }}>on.surface.warning.label</p>
      </div>

      {/* Error */}
      <div className="flex flex-col gap-3">
        <p className="text-[23px] leading-[1.2]" style={{ color: errorHeadColor }}>on.surface.error.head</p>
        <p className="text-base leading-[1.4]" style={{ color: errorBodyColor }}>on.surface.error.body</p>
        <p className="text-[13px] font-medium leading-none" style={{ color: errorLabelColor }}>on.surface.error.label</p>
      </div>
    </div>
  );

  const bgColor = resolveSemanticToken(getColor('bg.default') || '');
  const surfaceDefaultColor = resolveSemanticToken(getColor('surface.default') || '');
  const surfaceStrongColor = resolveSemanticToken(getColor('surface.strong') || '');
  const surfaceStrongestColor = resolveSemanticToken(getColor('surface.strongest') || '');
  
  const textHeadColor = resolveSemanticToken(getColor('on.surface.head') || '');
  const textBodyColor = resolveSemanticToken(getColor('on.surface.body') || '');
  const textLabelColor = resolveSemanticToken(getColor('on.surface.label') || '');
  const textDisabledColor = resolveSemanticToken(getColor('on.surface.disabled') || '');

  const primaryHeadColor = resolveSemanticToken(getColor('on.surface.primary.head') || '');
  const primaryBodyColor = resolveSemanticToken(getColor('on.surface.primary.body') || '');
  const primaryLabelColor = resolveSemanticToken(getColor('on.surface.primary.label') || '');

  const secondaryHeadColor = resolveSemanticToken(getColor('on.surface.secondary.head') || '');
  const secondaryBodyColor = resolveSemanticToken(getColor('on.surface.secondary.body') || '');
  const secondaryLabelColor = resolveSemanticToken(getColor('on.surface.secondary.label') || '');

  const successHeadColor = resolveSemanticToken(getColor('on.surface.success.head') || '');
  const successBodyColor = resolveSemanticToken(getColor('on.surface.success.body') || '');
  const successLabelColor = resolveSemanticToken(getColor('on.surface.success.label') || '');

  const infoHeadColor = resolveSemanticToken(getColor('on.surface.info.head') || '');
  const infoBodyColor = resolveSemanticToken(getColor('on.surface.info.body') || '');
  const infoLabelColor = resolveSemanticToken(getColor('on.surface.info.label') || '');

  const warningHeadColor = resolveSemanticToken(getColor('on.surface.warning.head') || '');
  const warningBodyColor = resolveSemanticToken(getColor('on.surface.warning.body') || '');
  const warningLabelColor = resolveSemanticToken(getColor('on.surface.warning.label') || '');

  const errorHeadColor = resolveSemanticToken(getColor('on.surface.error.head') || '');
  const errorBodyColor = resolveSemanticToken(getColor('on.surface.error.body') || '');
  const errorLabelColor = resolveSemanticToken(getColor('on.surface.error.label') || '');

  // Background color: use theme token or fixed color based on switch
  const themeBgColor = resolveSemanticToken(getColor('bg.default') || '');
  const fixedBgColor = theme === 'dark' ? '#1C1B1F' : '#FFFFFF';
  const finalBgColor = useBgFromTheme ? themeBgColor : fixedBgColor;

  return (
    <div
      onClick={() => onCardClick('bg.default')}
      className={`p-6 rounded-lg cursor-pointer transition-all ${
        selectedCard === 'bg.default' ? 'ring-4 ring-blue-500' : 'hover:ring-2 hover:ring-gray-600'
      }`}
      style={{ backgroundColor: finalBgColor }}
    >
      <TokenPillHeader tokenName="bg.default" tokenValue="{grey.100}" />
      
      <div className="flex gap-6">
        <LeftColumn 
          textHeadColor={textHeadColor}
          textBodyColor={textBodyColor}
          textLabelColor={textLabelColor}
          textDisabledColor={textDisabledColor}
          surfaceColor={bgColor}
        />
        <RightColumn 
          primaryHeadColor={primaryHeadColor}
          primaryBodyColor={primaryBodyColor}
          primaryLabelColor={primaryLabelColor}
          secondaryHeadColor={secondaryHeadColor}
          secondaryBodyColor={secondaryBodyColor}
          secondaryLabelColor={secondaryLabelColor}
          successHeadColor={successHeadColor}
          successBodyColor={successBodyColor}
          successLabelColor={successLabelColor}
          infoHeadColor={infoHeadColor}
          infoBodyColor={infoBodyColor}
          infoLabelColor={infoLabelColor}
          warningHeadColor={warningHeadColor}
          warningBodyColor={warningBodyColor}
          warningLabelColor={warningLabelColor}
          errorHeadColor={errorHeadColor}
          errorBodyColor={errorBodyColor}
          errorLabelColor={errorLabelColor}
        />
      </div>

      {/* Nested surface.default */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          onCardClick('surface.default');
        }}
        className={`mt-6 p-6 rounded-lg cursor-pointer transition-all ${
          selectedCard === 'surface.default' ? 'ring-4 ring-blue-500' : 'hover:ring-2 hover:ring-gray-600'
        }`}
        style={{ backgroundColor: surfaceDefaultColor }}
      >
        <TokenPillHeader tokenName="surface.default" tokenValue="{grey.90}" />
        
        <div className="flex gap-6">
          <LeftColumn 
            textHeadColor={textHeadColor}
            textBodyColor={textBodyColor}
            textLabelColor={textLabelColor}
            textDisabledColor={textDisabledColor}
            surfaceColor={surfaceDefaultColor}
          />
          <RightColumn 
            primaryHeadColor={primaryHeadColor}
            primaryBodyColor={primaryBodyColor}
            primaryLabelColor={primaryLabelColor}
            secondaryHeadColor={secondaryHeadColor}
            secondaryBodyColor={secondaryBodyColor}
            secondaryLabelColor={secondaryLabelColor}
            successHeadColor={successHeadColor}
            successBodyColor={successBodyColor}
            successLabelColor={successLabelColor}
            infoHeadColor={infoHeadColor}
            infoBodyColor={infoBodyColor}
            infoLabelColor={infoLabelColor}
            warningHeadColor={warningHeadColor}
            warningBodyColor={warningBodyColor}
            warningLabelColor={warningLabelColor}
            errorHeadColor={errorHeadColor}
            errorBodyColor={errorBodyColor}
            errorLabelColor={errorLabelColor}
          />
        </div>

        {/* Nested surface.strong */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            onCardClick('surface.strong');
          }}
          className={`mt-6 p-6 rounded-lg cursor-pointer transition-all ${
            selectedCard === 'surface.strong' ? 'ring-4 ring-blue-500' : 'hover:ring-2 hover:ring-gray-600'
          }`}
          style={{ backgroundColor: surfaceStrongColor }}
        >
          <TokenPillHeader tokenName="surface.strong" tokenValue="{grey.80} / darken(0.14) / srgb" />
          
          <div className="flex gap-6">
            <LeftColumn 
              textHeadColor={textHeadColor}
              textBodyColor={textBodyColor}
              textLabelColor={textLabelColor}
              textDisabledColor={textDisabledColor}
              surfaceColor={surfaceStrongColor}
            />
            <RightColumn 
              primaryHeadColor={primaryHeadColor}
              primaryBodyColor={primaryBodyColor}
              primaryLabelColor={primaryLabelColor}
              secondaryHeadColor={secondaryHeadColor}
              secondaryBodyColor={secondaryBodyColor}
              secondaryLabelColor={secondaryLabelColor}
              successHeadColor={successHeadColor}
              successBodyColor={successBodyColor}
              successLabelColor={successLabelColor}
              infoHeadColor={infoHeadColor}
              infoBodyColor={infoBodyColor}
              infoLabelColor={infoLabelColor}
              warningHeadColor={warningHeadColor}
              warningBodyColor={warningBodyColor}
              warningLabelColor={warningLabelColor}
              errorHeadColor={errorHeadColor}
              errorBodyColor={errorBodyColor}
              errorLabelColor={errorLabelColor}
            />
          </div>

          {/* Nested surface.strongest */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              onCardClick('surface.strongest');
            }}
            className={`mt-6 p-6 rounded-lg cursor-pointer transition-all ${
              selectedCard === 'surface.strongest' ? 'ring-4 ring-blue-500' : 'hover:ring-2 hover:ring-gray-600'
            }`}
            style={{ backgroundColor: surfaceStrongestColor }}
          >
            <TokenPillHeader tokenName="surface.strongest" tokenValue="{grey.70} / darken(0.25) / srgb" />
            
            <div className="flex gap-6">
              <LeftColumn 
                textHeadColor={textHeadColor}
                textBodyColor={textBodyColor}
                textLabelColor={textLabelColor}
                textDisabledColor={textDisabledColor}
                surfaceColor={surfaceStrongestColor}
              />
              <RightColumn 
                primaryHeadColor={primaryHeadColor}
                primaryBodyColor={primaryBodyColor}
                primaryLabelColor={primaryLabelColor}
                secondaryHeadColor={secondaryHeadColor}
                secondaryBodyColor={secondaryBodyColor}
                secondaryLabelColor={secondaryLabelColor}
                successHeadColor={successHeadColor}
                successBodyColor={successBodyColor}
                successLabelColor={successLabelColor}
                infoHeadColor={infoHeadColor}
                infoBodyColor={infoBodyColor}
                infoLabelColor={infoLabelColor}
                warningHeadColor={warningHeadColor}
                warningBodyColor={warningBodyColor}
                warningLabelColor={warningLabelColor}
                errorHeadColor={errorHeadColor}
                errorBodyColor={errorBodyColor}
                errorLabelColor={errorLabelColor}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}