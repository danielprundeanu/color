import { useRef, useEffect } from 'react';
import { useColors } from '../contexts/ColorContext';

export function ChangesView() {
  const { theme, importedTokens, getAllGeneratedColors, semanticTokens, originalSemanticTokens } = useColors();

  // Get current generated colors for primitives
  const currentPrimitives = getAllGeneratedColors();
  
  // Get baseline primitives - use imported tokens (what was loaded from template/import)
  const baselinePrimitives = importedTokens[theme] || {};
  
  // Get current semantic tokens for current theme
  const currentSemanticTokens = semanticTokens[theme] || {};
  
  // Get baseline semantic tokens - use original semantic tokens (what was loaded from template/import)
  const baselineSemanticTokens = originalSemanticTokens[theme] || {};

  // Format JSON with proper indentation
  const formatJSON = (obj: any): string => {
    return JSON.stringify(obj, null, 2);
  };

  // Convert primitives to proper JSON format
  const formatPrimitivesAsJSON = (colors: { [key: string]: { [step: string]: string } }): any => {
    const result: any = {};
    Object.entries(colors).forEach(([paletteKey, steps]) => {
      result[paletteKey] = {};
      Object.entries(steps).forEach(([step, color]) => {
        result[paletteKey][step] = {
          "$type": "color",
          "$value": color
        };
      });
    });
    return result;
  };

  const formattedBaselinePrimitives = formatJSON(formatPrimitivesAsJSON(baselinePrimitives));
  const formattedCurrentPrimitives = formatJSON(formatPrimitivesAsJSON(currentPrimitives));
  const formattedBaselineSemantic = formatJSON(baselineSemanticTokens);
  const formattedCurrentSemantic = formatJSON(currentSemanticTokens);

  // Split content into lines for diff display
  const getLines = (content: string): string[] => {
    return content.split('\n');
  };



  // Better diff algorithm
  const getLineDiff = (originalContent: string, currentContent: string) => {
    const originalLines = getLines(originalContent);
    const currentLines = getLines(currentContent);
    
    const changes: Array<{
      leftLine: string | null;
      rightLine: string | null;
      leftLineNum: number | null;
      rightLineNum: number | null;
      status: 'unchanged' | 'changed' | 'added' | 'removed';
    }> = [];

    const maxLines = Math.max(originalLines.length, currentLines.length);
    let leftNum = 1;
    let rightNum = 1;

    for (let i = 0; i < maxLines; i++) {
      const leftLine = originalLines[i];
      const rightLine = currentLines[i];

      if (leftLine === rightLine) {
        changes.push({
          leftLine: leftLine || '',
          rightLine: rightLine || '',
          leftLineNum: leftLine !== undefined ? leftNum++ : null,
          rightLineNum: rightLine !== undefined ? rightNum++ : null,
          status: 'unchanged'
        });
      } else if (leftLine !== undefined && rightLine !== undefined) {
        changes.push({
          leftLine,
          rightLine,
          leftLineNum: leftNum++,
          rightLineNum: rightNum++,
          status: 'changed'
        });
      } else if (leftLine === undefined && rightLine !== undefined) {
        changes.push({
          leftLine: '',
          rightLine,
          leftLineNum: null,
          rightLineNum: rightNum++,
          status: 'added'
        });
      } else if (leftLine !== undefined && rightLine === undefined) {
        changes.push({
          leftLine,
          rightLine: '',
          leftLineNum: leftNum++,
          rightLineNum: null,
          status: 'removed'
        });
      }
    }

    return changes;
  };

  const primitivesDiff = getLineDiff(formattedBaselinePrimitives, formattedCurrentPrimitives);
  const semanticDiff = getLineDiff(formattedBaselineSemantic, formattedCurrentSemantic);

  // Check if there are actual changes
  const hasPrimitivesChanges = formattedBaselinePrimitives !== formattedCurrentPrimitives;
  const hasSemanticChanges = formattedBaselineSemantic !== formattedCurrentSemantic;

  // JSON Viewer component (when no changes)
  const JSONViewer = ({ title, content }: { title: string; content: string }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const minimapRef = useRef<HTMLCanvasElement>(null);
    const lines = getLines(content);

    // Draw minimap
    useEffect(() => {
      const canvas = minimapRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const height = canvas.height;
      const lineHeight = height / lines.length;

      ctx.clearRect(0, 0, canvas.width, height);

      lines.forEach((_, idx) => {
        const y = idx * lineHeight;
        ctx.fillStyle = '#374151'; // gray for all lines
        ctx.fillRect(0, y, canvas.width, Math.max(1, lineHeight));
      });
    }, [lines]);

    return (
      <div className="mb-6">
        <div className="bg-[#1e1e1e] border border-[#3e3e42] rounded-lg overflow-hidden">
          {/* Header with filename */}
          <div className="bg-[#252526] border-b border-[#3e3e42] px-4 py-2 flex items-center justify-between">
            <span className="text-[#cccccc] font-mono text-sm">{title}</span>
            <span className="text-xs text-[#858585]">Readonly</span>
          </div>

          {/* JSON content with minimap */}
          <div className="flex">
            {/* Main JSON area */}
            <div 
              ref={scrollRef}
              className="flex-1 font-mono text-[13px] max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#424242] scrollbar-track-[#1e1e1e]"
            >
              {lines.map((line, idx) => (
                <div key={idx} className="flex">
                  <span className="inline-block w-12 text-[#858585] select-none text-right pr-3 py-[2px] border-r border-[#3e3e42] bg-[#1e1e1e] flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span className="flex-1 px-3 py-[2px] whitespace-pre text-[#cccccc]">
                    {line}
                  </span>
                </div>
              ))}
            </div>

            {/* Minimap */}
            <div className="w-16 bg-[#1e1e1e] border-l border-[#3e3e42] flex-shrink-0">
              <canvas 
                ref={minimapRef}
                width={64}
                height={600}
                className="w-full h-[600px] cursor-pointer"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const y = e.clientY - rect.top;
                  const percentage = y / rect.height;
                  
                  if (scrollRef.current) {
                    const scrollHeight = scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
                    scrollRef.current.scrollTop = scrollHeight * percentage;
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const DiffViewer = ({ 
    title, 
    diff
  }: { 
    title: string;
    diff: Array<{
      leftLine: string | null;
      rightLine: string | null;
      leftLineNum: number | null;
      rightLineNum: number | null;
      status: 'unchanged' | 'changed' | 'added' | 'removed';
    }>;
  }) => {
    const leftScrollRef = useRef<HTMLDivElement>(null);
    const rightScrollRef = useRef<HTMLDivElement>(null);
    const minimapRef = useRef<HTMLCanvasElement>(null);

    // Sync scrolling between left and right
    const syncScroll = (source: 'left' | 'right') => {
      if (source === 'left' && leftScrollRef.current && rightScrollRef.current) {
        rightScrollRef.current.scrollTop = leftScrollRef.current.scrollTop;
      } else if (source === 'right' && leftScrollRef.current && rightScrollRef.current) {
        leftScrollRef.current.scrollTop = rightScrollRef.current.scrollTop;
      }
    };

    // Draw minimap
    useEffect(() => {
      const canvas = minimapRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const height = canvas.height;
      const lineHeight = height / diff.length;

      ctx.clearRect(0, 0, canvas.width, height);

      diff.forEach((item, idx) => {
        const y = idx * lineHeight;
        
        if (item.status === 'changed') {
          ctx.fillStyle = '#fbbf24'; // yellow
        } else if (item.status === 'added') {
          ctx.fillStyle = '#10b981'; // green
        } else if (item.status === 'removed') {
          ctx.fillStyle = '#ef4444'; // red
        } else {
          ctx.fillStyle = '#374151'; // gray
        }
        
        ctx.fillRect(0, y, canvas.width, Math.max(1, lineHeight));
      });
    }, [diff]);

    return (
      <div className="mb-6">
        <div className="bg-[#1e1e1e] border border-[#3e3e42] rounded-lg overflow-hidden">
          {/* Header with filename */}
          <div className="bg-[#252526] border-b border-[#3e3e42] px-4 py-2 flex items-center justify-between">
            <span className="text-[#cccccc] font-mono text-sm">{title}</span>
            <div className="flex items-center gap-2 text-xs text-[#858585]">
              <span>Baseline</span>
              <span className="text-[#3e3e42]">|</span>
              <span>Modified</span>
            </div>
          </div>

          {/* Diff content with minimap */}
          <div className="flex">
            {/* Main diff area */}
            <div className="flex-1 grid grid-cols-2 font-mono text-[13px] max-h-[600px] overflow-hidden">
              {/* Left side (baseline) */}
              <div 
                ref={leftScrollRef}
                onScroll={() => syncScroll('left')}
                className="border-r border-[#3e3e42] overflow-y-auto scrollbar-thin scrollbar-thumb-[#424242] scrollbar-track-[#1e1e1e]"
              >
                {diff.map((item, idx) => (
                  <div 
                    key={`left-${idx}`}
                    className={`flex ${
                      item.status === 'removed' ? 'bg-[#4B1818]' :
                      item.status === 'changed' ? 'bg-[#4B3D1E]' :
                      item.status === 'added' ? '' :
                      ''
                    }`}
                  >
                    <span className="inline-block w-12 text-[#858585] select-none text-right pr-3 py-[2px] border-r border-[#3e3e42] bg-[#1e1e1e] flex-shrink-0">
                      {item.leftLineNum || ''}
                    </span>
                    <span className={`flex-1 px-3 py-[2px] whitespace-pre ${
                      item.status === 'removed' ? 'text-[#f48771]' :
                      item.status === 'changed' ? 'text-[#d4a067]' :
                      'text-[#cccccc]'
                    }`}>
                      {item.leftLine !== null ? item.leftLine : ''}
                    </span>
                  </div>
                ))}
              </div>

              {/* Right side (modified) */}
              <div 
                ref={rightScrollRef}
                onScroll={() => syncScroll('right')}
                className="overflow-y-auto scrollbar-thin scrollbar-thumb-[#424242] scrollbar-track-[#1e1e1e]"
              >
                {diff.map((item, idx) => (
                  <div 
                    key={`right-${idx}`}
                    className={`flex ${
                      item.status === 'added' ? 'bg-[#1B4721]' :
                      item.status === 'changed' ? 'bg-[#1B4721]' :
                      item.status === 'removed' ? '' :
                      ''
                    }`}
                  >
                    <span className="inline-block w-12 text-[#858585] select-none text-right pr-3 py-[2px] border-r border-[#3e3e42] bg-[#1e1e1e] flex-shrink-0">
                      {item.rightLineNum || ''}
                    </span>
                    <span className={`flex-1 px-3 py-[2px] whitespace-pre ${
                      item.status === 'added' ? 'text-[#89d185]' :
                      item.status === 'changed' ? 'text-[#89d185]' :
                      'text-[#cccccc]'
                    }`}>
                      {item.rightLine !== null ? item.rightLine : ''}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Minimap */}
            <div className="w-16 bg-[#1e1e1e] border-l border-[#3e3e42] flex-shrink-0">
              <canvas 
                ref={minimapRef}
                width={64}
                height={600}
                className="w-full h-[600px] cursor-pointer"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const y = e.clientY - rect.top;
                  const percentage = y / rect.height;
                  
                  if (leftScrollRef.current && rightScrollRef.current) {
                    const scrollHeight = leftScrollRef.current.scrollHeight - leftScrollRef.current.clientHeight;
                    leftScrollRef.current.scrollTop = scrollHeight * percentage;
                    rightScrollRef.current.scrollTop = scrollHeight * percentage;
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 bg-[#1e1e1e] min-h-screen">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#cccccc] mb-2">Changes</h2>
        <p className="text-[#858585]">
          Viewing {theme} theme - {hasPrimitivesChanges || hasSemanticChanges ? 'Changes detected' : 'No changes'}
        </p>
      </div>

      {/* Show message when no changes */}
      {!hasPrimitivesChanges && !hasSemanticChanges && (
        <div className="bg-[#252526] border border-[#3e3e42] rounded-lg p-4 mb-6 text-[#4ec9b0]">
          ✓ No changes detected. Viewing baseline tokens from template.
        </div>
      )}

      {/* Primitives - show diff if changes, otherwise show JSON viewer */}
      {hasPrimitivesChanges ? (
        <DiffViewer 
          title="primitives/color.json"
          diff={primitivesDiff}
        />
      ) : (
        <JSONViewer 
          title="primitives/color.json"
          content={formattedCurrentPrimitives}
        />
      )}

      {/* Semantic - show diff if changes, otherwise show JSON viewer */}
      {hasSemanticChanges ? (
        <DiffViewer 
          title="semantic/color.json"
          diff={semanticDiff}
        />
      ) : (
        <JSONViewer 
          title="semantic/color.json"
          content={formattedCurrentSemantic}
        />
      )}
    </div>
  );
}
