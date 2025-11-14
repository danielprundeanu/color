import React from 'react';
import { SemanticTokenCard } from './SemanticTokenCard';
import { NestedSurfaceCards } from './NestedSurfaceCards';
import { useColors } from '../contexts/ColorContext';
import { semanticColors } from '../semanticColors';
import { Eye, EyeOff } from 'lucide-react';

export function SemanticTokensView() {
  const { 
    getAllGeneratedColors, 
    semanticTokens, 
    theme,
    selectedSemanticCard,
    setSelectedSemanticCard,
    setCardUsedTokens
  } = useColors();
  const allColors = getAllGeneratedColors();
  const [showContrast, setShowContrast] = React.useState(false);
  const [showBackgroundSection, setShowBackgroundSection] = React.useState(true);

  // Use imported semantic tokens if available, otherwise fallback to hardcoded ones
  const activeSemanticColors = semanticTokens[theme] || semanticColors;

  const resolveSemanticToken = (tokenPath: string): string => {
    if (!tokenPath.startsWith('{') || !tokenPath.endsWith('}')) {
      return tokenPath;
    }
    
    const path = tokenPath.slice(1, -1).split('.');
    
    // Navigate through the generated colors
    if (path.length >= 2) {
      const paletteKey = path[0];
      const step = path[1];
      
      if (allColors[paletteKey] && allColors[paletteKey][step]) {
        return allColors[paletteKey][step];
      }
    }
    
    return tokenPath;
  };

  const handleCardClick = (cardKey: string) => {
    setSelectedSemanticCard(selectedSemanticCard === cardKey ? null : cardKey);
  };

  // Helper to get colors with safe fallbacks
  const getColor = (path: string) => {
    const parts = path.split('.');
    let current: any = activeSemanticColors;
    
    for (const part of parts) {
      if (current && current[part]) {
        current = current[part];
      } else {
        return null;
      }
    }
    
    return current?.$value;
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex items-center justify-end gap-6">
        {/* Show contrast toggle */}
        <div className="flex items-center gap-2">
          <label htmlFor="show-contrast" className="text-sm text-gray-400 cursor-pointer">
            Show Contrast Ratios
          </label>
          <input
            id="show-contrast"
            type="checkbox"
            checked={showContrast}
            onChange={(e) => setShowContrast(e.target.checked)}
            className="w-4 h-4 accent-blue-600 cursor-pointer"
          />
        </div>
      </div>

      {/* Surface Sections */}
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl text-white">Background & Surface Tokens</h3>
          <button
            onClick={() => setShowBackgroundSection(!showBackgroundSection)}
            className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white rounded transition-colors"
          >
            {showBackgroundSection ? (
              <>
                <EyeOff className="w-4 h-4" />
                Hide
              </>
            ) : (
              <>
                <Eye className="w-4 h-4" />
                Show
              </>
            )}
          </button>
        </div>
        
        {/* Single nested structure: bg.default contains all nested surfaces */}
        {showBackgroundSection && (
          <NestedSurfaceCards
            onCardClick={handleCardClick}
            selectedCard={selectedSemanticCard}
            showContrast={showContrast}
          />
        )}
      </div>

      {/* Semantic Cards */}
      <div className="space-y-4">
        <h3 className="text-xl text-white mb-4">Semantic Tokens</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* PRIMARY GROUP */}
          {/* Card 1: primary.surface.default */}
          <SemanticTokenCard
            title="primary.on.surface.default"
            surfaceToken="primary.surface.default"
            surfaceColor={resolveSemanticToken(getColor('primary.surface.default') || '')}
            mainTitleColor={resolveSemanticToken(getColor('primary.on.surface.default') || '')}
            textHeadColor={resolveSemanticToken(getColor('on.surface.head') || '')}
            textBodyColor={resolveSemanticToken(getColor('on.surface.body') || '')}
            textLabelColor={resolveSemanticToken(getColor('on.surface.label') || '')}
            fillDefault={resolveSemanticToken(getColor('primary.fill.default') || '')}
            fillOnDefault={resolveSemanticToken(getColor('primary.on.fill.default') || '')}
            fillHover={resolveSemanticToken(getColor('primary.fill.hover') || '')}
            fillActive={resolveSemanticToken(getColor('primary.fill.active') || '')}
            fillFocus={resolveSemanticToken(getColor('primary.fill.focus') || '')}
            fillDisabled={resolveSemanticToken(getColor('primary.fill.disabled') || '')}
            description={activeSemanticColors.primary?.surface?.default?.$description}
            onClick={() => handleCardClick('primary')}
            isSelected={selectedSemanticCard === 'primary'}
            showContrast={showContrast}
            cardType="branded"
          />

          {/* Card 2: surface.default with primary text */}
          <SemanticTokenCard
            title="on.surface.primary.head"
            surfaceToken="surface.default"
            surfaceColor={resolveSemanticToken(getColor('surface.default') || '')}
            textHeadColor={resolveSemanticToken(getColor('on.surface.primary.head') || '')}
            textBodyColor={resolveSemanticToken(getColor('on.surface.body') || '')}
            textLabelColor={resolveSemanticToken(getColor('on.surface.label') || '')}
            fillDefault={resolveSemanticToken(getColor('primary.fill.default') || '')}
            fillOnDefault={resolveSemanticToken(getColor('primary.on.fill.default') || '')}
            fillHover={resolveSemanticToken(getColor('primary.fill.hover') || '')}
            fillActive={resolveSemanticToken(getColor('primary.fill.active') || '')}
            fillFocus={resolveSemanticToken(getColor('primary.fill.focus') || '')}
            fillDisabled={resolveSemanticToken(getColor('primary.fill.disabled') || '')}
            description={activeSemanticColors.surface?.default?.$description}
            onClick={() => handleCardClick('primary')}
            isSelected={selectedSemanticCard === 'primary'}
            showContrast={showContrast}
            cardType="neutral"
          />

          {/* SECONDARY GROUP */}
          {/* Card 1: secondary.surface.default */}
          <SemanticTokenCard
            title="secondary.on.surface.default"
            surfaceToken="secondary.surface.default"
            surfaceColor={resolveSemanticToken(getColor('secondary.surface.default') || '')}
            mainTitleColor={resolveSemanticToken(getColor('secondary.on.surface.default') || '')}
            textHeadColor={resolveSemanticToken(getColor('on.surface.head') || '')}
            textBodyColor={resolveSemanticToken(getColor('on.surface.body') || '')}
            textLabelColor={resolveSemanticToken(getColor('on.surface.label') || '')}
            fillDefault={resolveSemanticToken(getColor('secondary.fill.default') || '')}
            fillOnDefault={resolveSemanticToken(getColor('secondary.on.fill.default') || '')}
            fillActive={resolveSemanticToken(getColor('secondary.fill.active') || '')}
            fillDisabled={resolveSemanticToken(getColor('secondary.fill.disabled') || '')}
            description={activeSemanticColors.secondary?.surface?.default?.$description}
            onClick={() => handleCardClick('secondary')}
            isSelected={selectedSemanticCard === 'secondary'}
            showContrast={showContrast}
            cardType="branded"
          />

          {/* Card 2: surface.default with secondary text */}
          <SemanticTokenCard
            title="on.surface.secondary.head"
            surfaceToken="surface.default"
            surfaceColor={resolveSemanticToken(getColor('surface.default') || '')}
            textHeadColor={resolveSemanticToken(getColor('on.surface.secondary.head') || '')}
            textBodyColor={resolveSemanticToken(getColor('on.surface.body') || '')}
            textLabelColor={resolveSemanticToken(getColor('on.surface.label') || '')}
            fillDefault={resolveSemanticToken(getColor('secondary.fill.default') || '')}
            fillOnDefault={resolveSemanticToken(getColor('secondary.on.fill.default') || '')}
            fillActive={resolveSemanticToken(getColor('secondary.fill.active') || '')}
            fillDisabled={resolveSemanticToken(getColor('secondary.fill.disabled') || '')}
            description={activeSemanticColors.surface?.default?.$description}
            onClick={() => handleCardClick('secondary')}
            isSelected={selectedSemanticCard === 'secondary'}
            showContrast={showContrast}
            cardType="neutral"
          />

          {/* SUB-BRAND-01 GROUP */}
          {/* Card 1: sbrand-01.surface.default */}
          <SemanticTokenCard
            title="sbrand-01.on.surface.default"
            surfaceToken="sbrand-01.surface.default"
            surfaceColor={resolveSemanticToken(getColor('sbrand-01.surface.default') || '')}
            mainTitleColor={resolveSemanticToken(getColor('sbrand-01.on.surface.default') || '')}
            textHeadColor={resolveSemanticToken(getColor('on.surface.head') || '')}
            textBodyColor={resolveSemanticToken(getColor('on.surface.body') || '')}
            textLabelColor={resolveSemanticToken(getColor('on.surface.label') || '')}
            fillDefault={resolveSemanticToken(getColor('sbrand-01.fill.default') || '')}
            fillOnDefault={resolveSemanticToken(getColor('sbrand-01.on.fill.default') || '')}
            fillActive={resolveSemanticToken(getColor('sbrand-01.fill.active') || '')}
            fillDisabled={resolveSemanticToken(getColor('sbrand-01.fill.disabled') || '')}
            description={activeSemanticColors['sbrand-01']?.surface?.default?.$description}
            onClick={() => handleCardClick('sbrand-01')}
            isSelected={selectedSemanticCard === 'sbrand-01'}
            showContrast={showContrast}
            cardType="branded"
          />

          {/* Card 2: surface.default with sbrand-01 text */}
          <SemanticTokenCard
            title="on.surface.sbrand-01.head"
            surfaceToken="surface.default"
            surfaceColor={resolveSemanticToken(getColor('surface.default') || '')}
            textHeadColor={resolveSemanticToken(getColor('on.surface.sbrand-01.head') || '')}
            textBodyColor={resolveSemanticToken(getColor('on.surface.body') || '')}
            textLabelColor={resolveSemanticToken(getColor('on.surface.label') || '')}
            fillDefault={resolveSemanticToken(getColor('sbrand-01.fill.default') || '')}
            fillOnDefault={resolveSemanticToken(getColor('sbrand-01.on.fill.default') || '')}
            fillActive={resolveSemanticToken(getColor('sbrand-01.fill.active') || '')}
            fillDisabled={resolveSemanticToken(getColor('sbrand-01.fill.disabled') || '')}
            description={activeSemanticColors.surface?.default?.$description}
            onClick={() => handleCardClick('sbrand-01')}
            isSelected={selectedSemanticCard === 'sbrand-01'}
            showContrast={showContrast}
            cardType="neutral"
          />

          {/* SUB-BRAND-02 GROUP */}
          {/* Card 1: sbrand-02.surface.default */}
          <SemanticTokenCard
            title="sbrand-02.on.surface.default"
            surfaceToken="sbrand-02.surface.default"
            surfaceColor={resolveSemanticToken(getColor('sbrand-02.surface.default') || '')}
            mainTitleColor={resolveSemanticToken(getColor('sbrand-02.on.surface.default') || '')}
            textHeadColor={resolveSemanticToken(getColor('on.surface.head') || '')}
            textBodyColor={resolveSemanticToken(getColor('on.surface.body') || '')}
            textLabelColor={resolveSemanticToken(getColor('on.surface.label') || '')}
            fillDefault={resolveSemanticToken(getColor('sbrand-02.fill.default') || '')}
            fillOnDefault={resolveSemanticToken(getColor('sbrand-02.on.fill.default') || '')}
            fillActive={resolveSemanticToken(getColor('sbrand-02.fill.active') || '')}
            fillDisabled={resolveSemanticToken(getColor('sbrand-02.fill.disabled') || '')}
            description={activeSemanticColors['sbrand-02']?.surface?.default?.$description}
            onClick={() => handleCardClick('sbrand-02')}
            isSelected={selectedSemanticCard === 'sbrand-02'}
            showContrast={showContrast}
            cardType="branded"
          />

          {/* Card 2: surface.default with sbrand-02 text */}
          <SemanticTokenCard
            title="on.surface.sbrand-02.head"
            surfaceToken="surface.default"
            surfaceColor={resolveSemanticToken(getColor('surface.default') || '')}
            textHeadColor={resolveSemanticToken(getColor('on.surface.sbrand-02.head') || '')}
            textBodyColor={resolveSemanticToken(getColor('on.surface.body') || '')}
            textLabelColor={resolveSemanticToken(getColor('on.surface.label') || '')}
            fillDefault={resolveSemanticToken(getColor('sbrand-02.fill.default') || '')}
            fillOnDefault={resolveSemanticToken(getColor('sbrand-02.on.fill.default') || '')}
            fillActive={resolveSemanticToken(getColor('sbrand-02.fill.active') || '')}
            fillDisabled={resolveSemanticToken(getColor('sbrand-02.fill.disabled') || '')}
            description={activeSemanticColors.surface?.default?.$description}
            onClick={() => handleCardClick('sbrand-02')}
            isSelected={selectedSemanticCard === 'sbrand-02'}
            showContrast={showContrast}
            cardType="neutral"
          />

          {/* SUCCESS GROUP */}
          {/* Card 1: success.surface.default */}
          <SemanticTokenCard
            title="success.on.surface.default"
            surfaceToken="success.surface.default"
            surfaceColor={resolveSemanticToken(getColor('success.surface.default') || '')}
            mainTitleColor={resolveSemanticToken(getColor('success.on.surface.default') || '')}
            textHeadColor={resolveSemanticToken(getColor('on.surface.head') || '')}
            textBodyColor={resolveSemanticToken(getColor('on.surface.body') || '')}
            textLabelColor={resolveSemanticToken(getColor('on.surface.label') || '')}
            fillDefault={resolveSemanticToken(getColor('success.fill.default') || '')}
            fillOnDefault={resolveSemanticToken(getColor('success.on.fill.default') || '')}
            fillActive={resolveSemanticToken(getColor('success.fill.active') || '')}
            fillDisabled={resolveSemanticToken(getColor('success.fill.disabled') || '')}
            onClick={() => handleCardClick('success')}
            isSelected={selectedSemanticCard === 'success'}
            showContrast={showContrast}
            cardType="branded"
          />

          {/* Card 2: surface.default with success text */}
          <SemanticTokenCard
            title="on.surface.success.head"
            surfaceToken="surface.default"
            surfaceColor={resolveSemanticToken(getColor('surface.default') || '')}
            textHeadColor={resolveSemanticToken(getColor('on.surface.success.head') || '')}
            textBodyColor={resolveSemanticToken(getColor('on.surface.body') || '')}
            textLabelColor={resolveSemanticToken(getColor('on.surface.label') || '')}
            fillDefault={resolveSemanticToken(getColor('success.fill.default') || '')}
            fillOnDefault={resolveSemanticToken(getColor('success.on.fill.default') || '')}
            fillActive={resolveSemanticToken(getColor('success.fill.active') || '')}
            fillDisabled={resolveSemanticToken(getColor('success.fill.disabled') || '')}
            onClick={() => handleCardClick('success')}
            isSelected={selectedSemanticCard === 'success'}
            showContrast={showContrast}
            cardType="neutral"
          />

          {/* INFO GROUP */}
          {/* Card 1: info.surface.default */}
          <SemanticTokenCard
            title="info.on.surface.default"
            surfaceToken="info.surface.default"
            surfaceColor={resolveSemanticToken(getColor('info.surface.default') || '')}
            mainTitleColor={resolveSemanticToken(getColor('info.on.surface.default') || '')}
            textHeadColor={resolveSemanticToken(getColor('on.surface.head') || '')}
            textBodyColor={resolveSemanticToken(getColor('on.surface.body') || '')}
            textLabelColor={resolveSemanticToken(getColor('on.surface.label') || '')}
            fillDefault={resolveSemanticToken(getColor('info.fill.default') || '')}
            fillOnDefault={resolveSemanticToken(getColor('info.on.fill.default') || '')}
            fillActive={resolveSemanticToken(getColor('info.fill.active') || '')}
            fillDisabled={resolveSemanticToken(getColor('info.fill.disabled') || '')}
            onClick={() => handleCardClick('info')}
            isSelected={selectedSemanticCard === 'info'}
            showContrast={showContrast}
            cardType="branded"
          />

          {/* Card 2: surface.default with info text */}
          <SemanticTokenCard
            title="on.surface.info.head"
            surfaceToken="surface.default"
            surfaceColor={resolveSemanticToken(getColor('surface.default') || '')}
            textHeadColor={resolveSemanticToken(getColor('on.surface.info.head') || '')}
            textBodyColor={resolveSemanticToken(getColor('on.surface.body') || '')}
            textLabelColor={resolveSemanticToken(getColor('on.surface.label') || '')}
            fillDefault={resolveSemanticToken(getColor('info.fill.default') || '')}
            fillOnDefault={resolveSemanticToken(getColor('info.on.fill.default') || '')}
            fillActive={resolveSemanticToken(getColor('info.fill.active') || '')}
            fillDisabled={resolveSemanticToken(getColor('info.fill.disabled') || '')}
            onClick={() => handleCardClick('info')}
            isSelected={selectedSemanticCard === 'info'}
            showContrast={showContrast}
            cardType="neutral"
          />

          {/* WARNING GROUP */}
          {/* Card 1: warning.surface.default */}
          <SemanticTokenCard
            title="warning.on.surface.default"
            surfaceToken="warning.surface.default"
            surfaceColor={resolveSemanticToken(getColor('warning.surface.default') || '')}
            mainTitleColor={resolveSemanticToken(getColor('warning.on.surface.default') || '')}
            textHeadColor={resolveSemanticToken(getColor('on.surface.head') || '')}
            textBodyColor={resolveSemanticToken(getColor('on.surface.body') || '')}
            textLabelColor={resolveSemanticToken(getColor('on.surface.label') || '')}
            fillDefault={resolveSemanticToken(getColor('warning.fill.default') || '')}
            fillOnDefault={resolveSemanticToken(getColor('warning.on.fill.default') || '')}
            fillActive={resolveSemanticToken(getColor('warning.fill.active') || '')}
            fillDisabled={resolveSemanticToken(getColor('warning.fill.disabled') || '')}
            onClick={() => handleCardClick('warning')}
            isSelected={selectedSemanticCard === 'warning'}
            showContrast={showContrast}
            cardType="branded"
          />

          {/* Card 2: surface.default with warning text */}
          <SemanticTokenCard
            title="on.surface.warning.head"
            surfaceToken="surface.default"
            surfaceColor={resolveSemanticToken(getColor('surface.default') || '')}
            textHeadColor={resolveSemanticToken(getColor('on.surface.warning.head') || '')}
            textBodyColor={resolveSemanticToken(getColor('on.surface.body') || '')}
            textLabelColor={resolveSemanticToken(getColor('on.surface.label') || '')}
            fillDefault={resolveSemanticToken(getColor('warning.fill.default') || '')}
            fillOnDefault={resolveSemanticToken(getColor('warning.on.fill.default') || '')}
            fillActive={resolveSemanticToken(getColor('warning.fill.active') || '')}
            fillDisabled={resolveSemanticToken(getColor('warning.fill.disabled') || '')}
            onClick={() => handleCardClick('warning')}
            isSelected={selectedSemanticCard === 'warning'}
            showContrast={showContrast}
            cardType="neutral"
          />

          {/* ERROR GROUP */}
          {/* Card 1: error.surface.default */}
          <SemanticTokenCard
            title="error.on.surface.default"
            surfaceToken="error.surface.default"
            surfaceColor={resolveSemanticToken(getColor('error.surface.default') || '')}
            mainTitleColor={resolveSemanticToken(getColor('error.on.surface.default') || '')}
            textHeadColor={resolveSemanticToken(getColor('on.surface.head') || '')}
            textBodyColor={resolveSemanticToken(getColor('on.surface.body') || '')}
            textLabelColor={resolveSemanticToken(getColor('on.surface.label') || '')}
            fillDefault={resolveSemanticToken(getColor('error.fill.default') || '')}
            fillOnDefault={resolveSemanticToken(getColor('error.on.fill.default') || '')}
            fillActive={resolveSemanticToken(getColor('error.fill.active') || '')}
            fillDisabled={resolveSemanticToken(getColor('error.fill.disabled') || '')}
            onClick={() => handleCardClick('error')}
            isSelected={selectedSemanticCard === 'error'}
            showContrast={showContrast}
            cardType="branded"
          />

          {/* Card 2: surface.default with error text */}
          <SemanticTokenCard
            title="on.surface.error.head"
            surfaceToken="surface.default"
            surfaceColor={resolveSemanticToken(getColor('surface.default') || '')}
            textHeadColor={resolveSemanticToken(getColor('on.surface.error.head') || '')}
            textBodyColor={resolveSemanticToken(getColor('on.surface.body') || '')}
            textLabelColor={resolveSemanticToken(getColor('on.surface.label') || '')}
            fillDefault={resolveSemanticToken(getColor('error.fill.default') || '')}
            fillOnDefault={resolveSemanticToken(getColor('error.on.fill.default') || '')}
            fillActive={resolveSemanticToken(getColor('error.fill.active') || '')}
            fillDisabled={resolveSemanticToken(getColor('error.fill.disabled') || '')}
            onClick={() => handleCardClick('error')}
            isSelected={selectedSemanticCard === 'error'}
            showContrast={showContrast}
            cardType="neutral"
          />
        </div>
      </div>
    </div>
  );
}