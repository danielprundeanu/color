import React, { useState, useRef, useEffect } from 'react';

interface BezierCurveEditorProps {
  lightnessSteps: number[];
  onLightnessChange: (steps: number[]) => void;
}

interface ControlPoint {
  x: number;
  y: number;
}

export function BezierCurveEditor({ lightnessSteps, onLightnessChange }: BezierCurveEditorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [dragging, setDragging] = useState<number | null>(null);
  const [dimensions, setDimensions] = useState({ width: 200, height: 320 });
  const [controlPoints, setControlPoints] = useState<ControlPoint[]>([
    { x: 0.33, y: 0.66 },
    { x: 0.66, y: 0.33 },
  ]);

  const padding = 15;

  // Update dimensions when container resizes
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth || 200;
        const height = containerRef.current.offsetHeight || 320;
        setDimensions({ width: Math.max(width, 100), height: Math.max(height, 100) });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    // Use ResizeObserver for more accurate detection
    const resizeObserver = new ResizeObserver(updateDimensions);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('resize', updateDimensions);
      resizeObserver.disconnect();
    };
  }, []);

  // Convert lightness steps to Bezier control points
  useEffect(() => {
    // Calculate control points from current lightness distribution
    const cp1 = {
      x: 0.33,
      y: lightnessSteps[4] / 100,
    };
    const cp2 = {
      x: 0.66,
      y: lightnessSteps[8] / 100,
    };

    setControlPoints([cp1, cp2]);
  }, []); // Only run once on mount

  // Convert Bezier curve to lightness steps
  const updateLightnessFromCurve = (cp1: ControlPoint, cp2: ControlPoint) => {
    const newSteps: number[] = [];
    const numSteps = 13;

    for (let i = 0; i < numSteps; i++) {
      const t = i / (numSteps - 1);
      // Cubic Bezier formula: P = (1-t)³P0 + 3(1-t)²tP1 + 3(1-t)t²P2 + t³P3
      const y = 
        Math.pow(1 - t, 3) * 1 + // Start at top (lightness 100)
        3 * Math.pow(1 - t, 2) * t * cp1.y +
        3 * (1 - t) * Math.pow(t, 2) * cp2.y +
        Math.pow(t, 3) * 0; // End at bottom (lightness 0)

      // Convert y (0-1) to lightness (0-100)
      const lightness = y * 100;
      newSteps.push(Math.max(0, Math.min(100, lightness)));
    }

    onLightnessChange(newSteps);
  };

  const handleMouseDown = (index: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    setDragging(index);
  };

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (dragging === null || !svgRef.current) return;

    const rect = svgRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - padding) / (dimensions.width - padding * 2);
    const y = (e.clientY - rect.top - padding) / (dimensions.height - padding * 2);

    const newControlPoints = [...controlPoints];
    newControlPoints[dragging] = {
      x: Math.max(0, Math.min(1, x)),
      y: Math.max(0, Math.min(1, y)),
    };

    setControlPoints(newControlPoints);
    updateLightnessFromCurve(newControlPoints[0], newControlPoints[1]);
  };

  const handleMouseUp = () => {
    setDragging(null);
  };

  useEffect(() => {
    if (dragging !== null) {
      const handleGlobalMouseUp = () => setDragging(null);
      window.addEventListener('mouseup', handleGlobalMouseUp);
      return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
    }
  }, [dragging]);

  // Calculate Bezier curve path (VERTICAL orientation)
  const startX = padding;
  const startY = padding; // Top = 100% lightness
  const endX = padding + (dimensions.width - padding * 2);
  const endY = padding + (dimensions.height - padding * 2); // Bottom = 0% lightness

  // Ensure control points are valid numbers
  const safeCP1 = {
    x: isFinite(controlPoints[0]?.x) ? controlPoints[0].x : 0.33,
    y: isFinite(controlPoints[0]?.y) ? controlPoints[0].y : 0.66
  };
  const safeCP2 = {
    x: isFinite(controlPoints[1]?.x) ? controlPoints[1].x : 0.66,
    y: isFinite(controlPoints[1]?.y) ? controlPoints[1].y : 0.33
  };

  const cp1X = padding + safeCP1.x * (dimensions.width - padding * 2);
  const cp1Y = padding + safeCP1.y * (dimensions.height - padding * 2);
  const cp2X = padding + safeCP2.x * (dimensions.width - padding * 2);
  const cp2Y = padding + safeCP2.y * (dimensions.height - padding * 2);

  const curvePath = `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;

  return (
    <div ref={containerRef} className="w-full h-full">
      <svg
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
        className="bg-gray-900 rounded cursor-crosshair border border-gray-700"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((t) => (
          <React.Fragment key={t}>
            {/* Horizontal lines */}
            <line
              x1={padding}
              y1={padding + t * (dimensions.height - padding * 2)}
              x2={padding + (dimensions.width - padding * 2)}
              y2={padding + t * (dimensions.height - padding * 2)}
              stroke="#374151"
              strokeWidth="1"
              strokeDasharray="2,2"
            />
            {/* Vertical lines */}
            <line
              x1={padding + t * (dimensions.width - padding * 2)}
              y1={padding}
              x2={padding + t * (dimensions.width - padding * 2)}
              y2={padding + (dimensions.height - padding * 2)}
              stroke="#374151"
              strokeWidth="1"
              strokeDasharray="2,2"
            />
          </React.Fragment>
        ))}

        {/* Axes */}
        {/* Y axis (left) - lightness scale */}
        <line
          x1={padding}
          y1={padding}
          x2={padding}
          y2={padding + (dimensions.height - padding * 2)}
          stroke="#9CA3AF"
          strokeWidth="2"
        />
        {/* Y axis (right) - mirror */}
        <line
          x1={padding + (dimensions.width - padding * 2)}
          y1={padding}
          x2={padding + (dimensions.width - padding * 2)}
          y2={padding + (dimensions.height - padding * 2)}
          stroke="#9CA3AF"
          strokeWidth="2"
        />

        {/* Control lines */}
        <line
          x1={startX}
          y1={startY}
          x2={cp1X}
          y2={cp1Y}
          stroke="#60A5FA"
          strokeWidth="1"
          strokeDasharray="4,4"
          opacity="0.5"
        />
        <line
          x1={endX}
          y1={endY}
          x2={cp2X}
          y2={cp2Y}
          stroke="#60A5FA"
          strokeWidth="1"
          strokeDasharray="4,4"
          opacity="0.5"
        />

        {/* Bezier curve */}
        <path
          d={curvePath}
          fill="none"
          stroke="#3B82F6"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Start and end points */}
        <circle cx={startX} cy={startY} r="4" fill="#10B981" />
        <circle cx={endX} cy={endY} r="4" fill="#EF4444" />

        {/* Control points */}
        {controlPoints.map((cp, index) => (
          <circle
            key={index}
            cx={padding + cp.x * (dimensions.width - padding * 2)}
            cy={padding + cp.y * (dimensions.height - padding * 2)}
            r="6"
            fill="#60A5FA"
            stroke="#1E40AF"
            strokeWidth="2"
            className="cursor-move"
            onMouseDown={handleMouseDown(index)}
            style={{ cursor: dragging === index ? 'grabbing' : 'grab' }}
          />
        ))}

        {/* Labels - minimal */}
        <text x={2} y={padding + 4} fill="#9CA3AF" fontSize="9">
          100
        </text>
        <text x={5} y={padding + (dimensions.height - padding * 2) + 3} fill="#9CA3AF" fontSize="9">
          0
        </text>
      </svg>
    </div>
  );
}