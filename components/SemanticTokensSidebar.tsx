import React, { useState, useRef, useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { useColors } from '../contexts/ColorContext';
import { semanticColors } from '../semanticColors';
import { Resizable } from 're-resizable';

interface SemanticTokensSidebarProps {
  cardKey: string;
  onClose: () => void;
}

export function SemanticTokensSidebar({ cardKey, onClose }: SemanticTokensSidebarProps) {
  const { semanticTokens, theme, getAllGeneratedColors, setSemanticTokens, originalSemanticTokens } = useColors();
  const [modifiedTokens, setModifiedTokens] = React.useState<Set<string>>(new Set());
  
  const allColors = getAllGeneratedColors();

  // Sidebar uses a fixed neutral background color (theme-agnostic)
  const sidebarBgColor = '#1f2937'; // gray-800

  const [editingToken, setEditingToken] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestionFilter, setSuggestionFilter] = useState('');
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(0);
  const [autoContrast, setAutoContrast] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Auto-scroll to selected suggestion
  useEffect(() => {
    if (selectedSuggestionIndex >= 0 && suggestionRefs.current[selectedSuggestionIndex]) {
      suggestionRefs.current[selectedSuggestionIndex]?.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth'
      });
    }
  }, [selectedSuggestionIndex]);

  // Use imported semantic tokens if available, otherwise fallback to hardcoded ones
  const activeSemanticColors = semanticTokens[theme] || semanticColors;
  const originalColors = semanticColors;

  // Resolve semantic token value to primitive token reference
  const resolveSemanticTokenValue = (tokenPath: string): { value: string; rawValue: string } => {
    if (!tokenPath.startsWith('{') || !tokenPath.endsWith('}')) {
      return { value: tokenPath, rawValue: tokenPath };
    }
    
    const path = tokenPath.slice(1, -1).split('.');
    
    // Navigate through the generated colors
    if (path.length >= 2) {
      const paletteKey = path[0];
      const step = path[1];
      
      if (allColors[paletteKey] && allColors[paletteKey][step]) {
        return {
          value: `${paletteKey}.${step}`,
          rawValue: allColors[paletteKey][step]
        };
      }
    }
    
    return { value: tokenPath, rawValue: tokenPath };
  };

  // Helper to safely get color value from path
  const getColorValue = (path: string) => {
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

  // Build the list of tokens actually used in the selected card
  const getUsedTokens = (): Array<{ name: string; originalValue: string; value: string; rawValue: string }> => {
    const tokens: Array<{ name: string; originalValue: string; value: string; rawValue: string }> = [];
    
    // Define tokens used for each card type
    const cardTokenMaps: { [key: string]: string[] } = {
      'bg.default': [
        'bg.default',
        'on.surface.head',
        'on.surface.body',
        'on.surface.label',
        'on.surface.disabled',
        'on.surface.primary.head',
        'on.surface.primary.body',
        'on.surface.primary.label',
        'on.surface.secondary.head',
        'on.surface.secondary.body',
        'on.surface.secondary.label',
        'on.surface.success.head',
        'on.surface.success.body',
        'on.surface.success.label',
        'on.surface.info.head',
        'on.surface.info.body',
        'on.surface.info.label',
        'on.surface.warning.head',
        'on.surface.warning.body',
        'on.surface.warning.label',
        'on.surface.error.head',
        'on.surface.error.body',
        'on.surface.error.label',
      ],
      'surface.default': [
        'surface.default',
        'on.surface.head',
        'on.surface.body',
        'on.surface.label',
        'on.surface.disabled',
        'on.surface.primary.head',
        'on.surface.primary.body',
        'on.surface.primary.label',
        'on.surface.secondary.head',
        'on.surface.secondary.body',
        'on.surface.secondary.label',
        'on.surface.success.head',
        'on.surface.success.body',
        'on.surface.success.label',
        'on.surface.info.head',
        'on.surface.info.body',
        'on.surface.info.label',
        'on.surface.warning.head',
        'on.surface.warning.body',
        'on.surface.warning.label',
        'on.surface.error.head',
        'on.surface.error.body',
        'on.surface.error.label',
      ],
      'surface.strong': [
        'surface.strong',
        'on.surface.head',
        'on.surface.body',
        'on.surface.label',
        'on.surface.disabled',
        'on.surface.primary.head',
        'on.surface.primary.body',
        'on.surface.primary.label',
        'on.surface.secondary.head',
        'on.surface.secondary.body',
        'on.surface.secondary.label',
        'on.surface.success.head',
        'on.surface.success.body',
        'on.surface.success.label',
        'on.surface.info.head',
        'on.surface.info.body',
        'on.surface.info.label',
        'on.surface.warning.head',
        'on.surface.warning.body',
        'on.surface.warning.label',
        'on.surface.error.head',
        'on.surface.error.body',
        'on.surface.error.label',
      ],
      'surface.strongest': [
        'surface.strongest',
        'on.surface.head',
        'on.surface.body',
        'on.surface.label',
        'on.surface.disabled',
        'on.surface.primary.head',
        'on.surface.primary.body',
        'on.surface.primary.label',
        'on.surface.secondary.head',
        'on.surface.secondary.body',
        'on.surface.secondary.label',
        'on.surface.success.head',
        'on.surface.success.body',
        'on.surface.success.label',
        'on.surface.info.head',
        'on.surface.info.body',
        'on.surface.info.label',
        'on.surface.warning.head',
        'on.surface.warning.body',
        'on.surface.warning.label',
        'on.surface.error.head',
        'on.surface.error.body',
        'on.surface.error.label',
      ],
      'primary': [
        'primary.surface.default',
        'primary.on.surface.default',
        'on.surface.head',
        'on.surface.body',
        'on.surface.label',
        'primary.fill.default',
        'primary.fill.hover',
        'primary.fill.active',
        'primary.fill.focus',
        'primary.fill.disabled',
        'primary.on.fill.default',
        'surface.default',
        'on.surface.primary.head',
        'on.surface.primary.body',
        'on.surface.primary.label',
      ],
      'secondary': [
        'secondary.surface.default',
        'secondary.on.surface.default',
        'on.surface.head',
        'on.surface.body',
        'on.surface.label',
        'secondary.fill.default',
        'secondary.fill.active',
        'secondary.fill.disabled',
        'secondary.on.fill.default',
        'surface.default',
        'on.surface.secondary.head',
        'on.surface.secondary.body',
        'on.surface.secondary.label',
      ],
      'sbrand-01': [
        'sbrand-01.surface.default',
        'sbrand-01.on.surface.default',
        'on.surface.head',
        'on.surface.body',
        'on.surface.label',
        'sbrand-01.fill.default',
        'sbrand-01.fill.active',
        'sbrand-01.fill.disabled',
        'sbrand-01.on.fill.default',
        'surface.default',
        'on.surface.sbrand-01.head',
        'on.surface.sbrand-01.body',
        'on.surface.sbrand-01.label',
      ],
      'sbrand-02': [
        'sbrand-02.surface.default',
        'sbrand-02.on.surface.default',
        'on.surface.head',
        'on.surface.body',
        'on.surface.label',
        'sbrand-02.fill.default',
        'sbrand-02.fill.active',
        'sbrand-02.fill.disabled',
        'sbrand-02.on.fill.default',
        'surface.default',
        'on.surface.sbrand-02.head',
        'on.surface.sbrand-02.body',
        'on.surface.sbrand-02.label',
      ],
      'success': [
        'success.surface.default',
        'success.on.surface.default',
        'on.surface.head',
        'on.surface.body',
        'on.surface.label',
        'success.fill.default',
        'success.fill.active',
        'success.fill.disabled',
        'success.on.fill.default',
        'surface.default',
        'on.surface.success.head',
        'on.surface.success.body',
        'on.surface.success.label',
      ],
      'info': [
        'info.surface.default',
        'info.on.surface.default',
        'on.surface.head',
        'on.surface.body',
        'on.surface.label',
        'info.fill.default',
        'info.fill.active',
        'info.fill.disabled',
        'info.on.fill.default',
        'surface.default',
        'on.surface.info.head',
        'on.surface.info.body',
        'on.surface.info.label',
      ],
      'warning': [
        'warning.surface.default',
        'warning.on.surface.default',
        'on.surface.head',
        'on.surface.body',
        'on.surface.label',
        'warning.fill.default',
        'warning.fill.active',
        'warning.fill.disabled',
        'warning.on.fill.default',
        'surface.default',
        'on.surface.warning.head',
        'on.surface.warning.body',
        'on.surface.warning.label',
      ],
      'error': [
        'error.surface.default',
        'error.on.surface.default',
        'on.surface.head',
        'on.surface.body',
        'on.surface.label',
        'error.fill.default',
        'error.fill.active',
        'error.fill.disabled',
        'error.on.fill.default',
        'surface.default',
        'on.surface.error.head',
        'on.surface.error.body',
        'on.surface.error.label',
      ],
    };

    const tokenPaths = cardTokenMaps[cardKey] || [];
    
    tokenPaths.forEach(path => {
      const value = getColorValue(path);
      if (value) {
        const resolved = resolveSemanticTokenValue(value);
        tokens.push({
          name: path,
          originalValue: value,
          value: resolved.value,
          rawValue: resolved.rawValue
        });
      }
    });

    return tokens;
  };

  const colorTokens = getUsedTokens();

  // Check if a token is modified compared to original
  const isTokenModified = (tokenName: string, currentValue: string): boolean => {
    // If no original semantic tokens exist for current theme, nothing is modified
    if (!originalSemanticTokens[theme] || Object.keys(originalSemanticTokens[theme]).length === 0) {
      return false;
    }
    
    // tokenName includes the full path (e.g., "primary.surface.default")
    // Navigate through original tokens to find the value
    const tokenKeys = tokenName.split('.');
    let originalData: any = originalSemanticTokens[theme];
    
    for (const key of tokenKeys) {
      if (originalData && originalData[key]) {
        originalData = originalData[key];
      } else {
        return false;
      }
    }
    
    // Compare $value
    if (originalData && typeof originalData === 'object' && '$value' in originalData) {
      return originalData.$value !== currentValue;
    }
    
    return false;
  };

  // Generate suggestions from all primitive tokens
  const generateSuggestions = (filter: string) => {
    const suggestions: string[] = [];
    
    Object.entries(allColors).forEach(([paletteKey, steps]) => {
      Object.keys(steps).forEach(step => {
        const tokenRef = `{${paletteKey}.${step}}`;
        if (tokenRef.toLowerCase().includes(filter.toLowerCase())) {
          suggestions.push(tokenRef);
        }
      });
    });
    
    return suggestions.slice(0, 10); // Limit to 10 suggestions
  };

  const handleEditClick = (tokenName: string, currentValue: string) => {
    setEditingToken(tokenName);
    setEditValue(currentValue);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEditValue(value);
    
    // Check if user typed "{"
    if (value.includes('{') && !value.endsWith('}')) {
      const lastOpenBrace = value.lastIndexOf('{');
      const filterText = value.substring(lastOpenBrace + 1);
      setSuggestionFilter(filterText);
      setShowSuggestions(true);
      setSelectedSuggestionIndex(0); // Reset selection when showing suggestions
    } else {
      setShowSuggestions(false);
      setSelectedSuggestionIndex(0);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    // Replace everything after the last "{" with the suggestion
    const lastOpenBrace = editValue.lastIndexOf('{');
    const newValue = editValue.substring(0, lastOpenBrace) + suggestion;
    setEditValue(newValue);
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  const handleSave = () => {
    if (editingToken && editValue) {
      // editingToken already includes full path (e.g., "primary.surface.default")
      const fullPath = `${theme}.${editingToken}`;
      
      // Update semantic token
      const newSemanticTokens = JSON.parse(JSON.stringify(semanticTokens));
      const pathParts = fullPath.split('.');
      let current: any = newSemanticTokens;
      
      for (let i = 0; i < pathParts.length - 1; i++) {
        const part = pathParts[i];
        if (!current[part]) {
          current[part] = {};
        }
        current = current[part];
      }
      
      const lastPart = pathParts[pathParts.length - 1];
      if (!current[lastPart]) {
        current[lastPart] = {};
      }
      current[lastPart].$value = editValue;
      
      setSemanticTokens(newSemanticTokens);
      setEditingToken(null);
      setEditValue('');
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Allow native keyboard shortcuts (Cmd+A, Cmd+C, Cmd+V, etc.)
    if (e.metaKey || e.ctrlKey) {
      return; // Let browser handle Cmd/Ctrl shortcuts
    }

    // Arrow Down: Navigate down through suggestions
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (showSuggestions && suggestions.length > 0) {
        setSelectedSuggestionIndex(prev => Math.min(prev + 1, suggestions.length - 1));
      }
    } 
    // Arrow Up: Navigate up through suggestions
    else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (showSuggestions && suggestions.length > 0) {
        setSelectedSuggestionIndex(prev => Math.max(prev - 1, 0));
      }
    } 
    // Enter: Select suggestion if shown, otherwise save
    else if (e.key === 'Enter') {
      e.preventDefault();
      if (showSuggestions && suggestions.length > 0) {
        handleSuggestionClick(suggestions[selectedSuggestionIndex]);
      } else {
        handleSave();
      }
    } 
    // Escape: Cancel editing
    else if (e.key === 'Escape') {
      setEditingToken(null);
      setEditValue('');
      setShowSuggestions(false);
      setSelectedSuggestionIndex(0);
    }
    // Tab: Select suggestion if shown
    else if (e.key === 'Tab') {
      if (showSuggestions && suggestions.length > 0) {
        e.preventDefault();
        handleSuggestionClick(suggestions[selectedSuggestionIndex]);
      }
    }
  };

  const suggestions = showSuggestions ? generateSuggestions(suggestionFilter) : [];

  return (
    <Resizable
      defaultSize={{ width: 600, height: '100vh' }}
      minWidth={300}
      maxWidth={600}
      enable={{ left: true }}  // Enable left handle for dragging
      handleClasses={{
        left: 'resize-handle'  // Left handle styling
      }}
      style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        backgroundColor: sidebarBgColor
      }}
      className="text-white border-l border-gray-700"
    >
      <div className="h-full overflow-y-auto p-6 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg">Color Tokens</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-800 rounded transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Theme badge */}
        <div className="inline-flex px-2 py-1 bg-blue-600 rounded text-xs">
          {theme} theme
        </div>

        {/* Auto Contrast Toggle */}
        <div className="flex items-center gap-2 p-3 bg-gray-800 rounded">
          <input
            id="auto-contrast"
            type="checkbox"
            checked={autoContrast}
            onChange={(e) => setAutoContrast(e.target.checked)}
            className="w-4 h-4 accent-blue-600 cursor-pointer"
          />
          <label htmlFor="auto-contrast" className="text-sm text-gray-300 cursor-pointer">
            Auto Contrast
          </label>
          <span className="text-xs text-gray-500">
            (Automatically optimize contrast when editing tokens)
          </span>
        </div>

        {/* Table */}
        {colorTokens.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 px-2 text-xs text-gray-400">Name</th>
                  <th className="text-left py-2 px-2 text-xs text-gray-400 w-48">Value</th>
                  <th className="text-left py-2 px-2 text-xs text-gray-400">Raw Value</th>
                </tr>
              </thead>
              <tbody>
                {colorTokens.map((token, index) => {
                  const isModified = isTokenModified(token.name, token.originalValue);
                  
                  return (
                    <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/50">
                      <td className="py-3 px-2">
                        <div className="flex items-center gap-2">
                          {isModified && (
                            <div 
                              className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" 
                              title="Modified"
                            />
                          )}
                          <div className="font-mono text-xs text-blue-400 break-all">
                            {token.name}
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-2 w-48">
                        {editingToken === token.name ? (
                          <div className="relative">
                            <input
                              ref={inputRef}
                              type="text"
                              value={editValue}
                              onChange={handleInputChange}
                              onKeyDown={handleKeyDown}
                              className="w-full bg-gray-800 text-xs text-gray-300 px-2 py-1 rounded border border-blue-500 focus:outline-none"
                              placeholder="{palette.step}"
                            />
                            {showSuggestions && suggestions.length > 0 && (
                              <div className="absolute z-10 mt-1 w-full bg-gray-800 border border-gray-700 rounded shadow-lg max-h-40 overflow-y-auto">
                                {suggestions.map((suggestion, i) => (
                                  <button
                                    key={i}
                                    ref={el => suggestionRefs.current[i] = el}
                                    onClick={() => handleSuggestionClick(suggestion)}
                                    className={`w-full text-left px-3 py-2 text-xs hover:bg-gray-700 transition-colors font-mono text-gray-300 ${i === selectedSuggestionIndex ? 'bg-gray-700' : ''}`}
                                  >
                                    {suggestion}
                                  </button>
                                ))}
                              </div>
                            )}
                            <button
                              onClick={handleSave}
                              className="absolute right-1 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-700 rounded"
                              title="Save"
                            >
                              <Check className="w-3 h-3 text-green-500" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleEditClick(token.name, token.originalValue)}
                            className="font-mono text-xs text-gray-300 hover:text-blue-400 transition-colors"
                          >
                            {token.originalValue}
                          </button>
                        )}
                      </td>
                      <td className="py-3 px-2">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-4 h-4 rounded border border-gray-600 flex-shrink-0"
                            style={{ backgroundColor: token.rawValue }}
                          />
                          <div className="font-mono text-xs text-gray-400 break-all">
                            {token.rawValue}
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center text-gray-500 py-8">
            No color tokens found
          </div>
        )}
      </div>
    </Resizable>
  );
}