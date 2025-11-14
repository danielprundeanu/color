import React from 'react';
import { Palette, Moon, Sun, Upload, Save, FilePlus } from 'lucide-react';
import { toast } from 'sonner';
import { Toaster } from './components/ui/sonner';
import { ColorGenerator } from './components/ColorGenerator';
import { BaseTokensView } from './components/BaseTokensView';
import { SemanticTokensView } from './components/SemanticTokensView';
import { ColorSidebar } from './components/ColorSidebar';
import { SemanticTokensSidebar } from './components/SemanticTokensSidebar';
import { ColorProvider, useColors } from './contexts/ColorContext';

function AppContent() {
  const [view, setView] = React.useState<'base' | 'semantic' | 'generator'>('generator');
  const [selectedPalette, setSelectedPalette] = React.useState(0);
  const { 
    getAllGeneratedColors, 
    theme, 
    setTheme, 
    importProject, 
    saveProject, 
    hasImportedProject, 
    newProject,
    selectedSemanticCard,
    setSelectedSemanticCard,
    semanticTokens
  } = useColors();
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // Get background color from semantic token
  const allColors = getAllGeneratedColors();
  const resolveSemanticToken = (tokenPath: string): string => {
    if (!tokenPath?.startsWith('{') || !tokenPath?.endsWith('}')) {
      return tokenPath || '#000000';
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

  const bgColor = semanticTokens[theme]?.bg?.default?.$value 
    ? resolveSemanticToken(semanticTokens[theme].bg.default.$value)
    : '#000000';

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      await importProject(e.target.files);
    }
  };

  const exportAsJSON = () => {
    const allColors = getAllGeneratedColors();
    const exportData: any = {};

    Object.entries(allColors).forEach(([paletteKey, colors]) => {
      exportData[paletteKey] = {};
      Object.entries(colors).forEach(([step, color]) => {
        exportData[paletteKey][step] = {
          "$type": "color",
          "$value": color
        };
      });
    });

    const json = JSON.stringify(exportData, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'generated-colors.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportAsCSS = () => {
    const allColors = getAllGeneratedColors();
    let css = ':root {\n';

    Object.entries(allColors).forEach(([paletteKey, colors]) => {
      Object.entries(colors).forEach(([step, color]) => {
        css += `  --${paletteKey}-${step}: ${color};\n`;
      });
    });

    css += '}';

    const blob = new Blob([css], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'generated-colors.css';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: bgColor }}>
      <Toaster position="bottom-right" />
      
      {/* Left Sidebar */}
      <ColorSidebar 
        selectedPalette={selectedPalette}
        setSelectedPalette={setSelectedPalette}
        onExportJSON={exportAsJSON}
        onExportCSS={exportAsCSS}
      />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-[1400px] mx-auto px-6 py-12">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <Palette className="w-8 h-8 text-gray-700" />
                <h1>Design System Color Palette</h1>
              </div>
              <div className="flex items-center gap-2">
                {/* New Project Button */}
                <button
                  onClick={() => {
                    if (hasImportedProject) {
                      if (confirm('Sigur vrei să creezi un proiect nou? Toate modificările din proiectul importat vor fi pierdute.')) {
                        newProject();
                      }
                    } else {
                      newProject();
                    }
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                >
                  <FilePlus className="w-4 h-4" />
                  New Project
                </button>
                
                {/* Import Button */}
                <input
                  ref={fileInputRef}
                  type="file"
                  /* @ts-ignore */
                  webkitdirectory=""
                  directory=""
                  multiple
                  onChange={handleImport}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <Upload className="w-4 h-4" />
                  Import Project
                </button>
                
                {/* Save Button */}
                {hasImportedProject && (
                  <button
                    onClick={saveProject}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                  >
                    <Save className="w-4 h-4" />
                    Save Project
                  </button>
                )}
                
                {/* Theme Toggle - Always visible */}
                <div className="flex items-center gap-1 bg-white border border-gray-300 rounded-lg p-1">
                  <button
                    onClick={() => setTheme('light')}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded transition-colors ${
                      theme === 'light'
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Sun className="w-4 h-4" />
                    Light
                  </button>
                  <button
                    onClick={() => setTheme('dark')}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded transition-colors ${
                      theme === 'dark'
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Moon className="w-4 h-4" />
                    Dark
                  </button>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Generează și explorează paletele de culori din design system-ul tău
            </p>
            
            {/* View Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setView('generator')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  view === 'generator' 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-white text-gray-700 border border-gray-300'
                }`}
              >
                Color Generator
              </button>
              <button
                onClick={() => setView('base')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  view === 'base' 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-white text-gray-700 border border-gray-300'
                }`}
              >
                Primitives
              </button>
              <button
                onClick={() => setView('semantic')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  view === 'semantic' 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-white text-gray-700 border border-gray-300'
                }`}
              >
                Semantic Tokens
              </button>
            </div>
          </div>

          {view === 'generator' ? (
            <ColorGenerator selectedPalette={selectedPalette} />
          ) : view === 'base' ? (
            <BaseTokensView />
          ) : (
            <SemanticTokensView />
          )}
        </div>
      </div>

      {/* Right Semantic Sidebar */}
      {view === 'semantic' && selectedSemanticCard && (
        <SemanticTokensSidebar
          cardKey={selectedSemanticCard}
          onClose={() => setSelectedSemanticCard(null)}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <ColorProvider>
      <AppContent />
    </ColorProvider>
  );
}