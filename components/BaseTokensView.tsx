import React from 'react';
import { ColorSwatch } from './ColorSwatch';
import { useColors } from '../contexts/ColorContext';

export function BaseTokensView() {
  const { getAllGeneratedColors, palettes } = useColors();
  const allColors = getAllGeneratedColors();

  const renderColorScale = (name: string, colors: { [key: string]: string }) => {
    // Apply custom colors if they exist
    const palette = palettes.find(p => p.key === name);
    const displayColors = palette?.customColors 
      ? { ...colors, ...palette.customColors }
      : colors;

    const entries = Object.entries(displayColors).sort((a, b) => {
      const numA = parseInt(a[0]);
      const numB = parseInt(b[0]);
      return numA - numB;
    });

    return (
      <div key={name} className="mb-8">
        <h2 className="mb-3 capitalize text-lg">{name.replace(/-/g, ' ')}</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="grid grid-cols-13 gap-2">
            {entries.map(([key, color]) => (
              <ColorSwatch
                key={key}
                name={`${name}.${key}`}
                value={color}
                showBorder={name === 'white' || name === 'transparent'}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {Object.entries(allColors)
        .filter(([key]) => key !== 'transparent')
        .map(([name, colors]) => renderColorScale(name, colors))}
      
      {/* Transparent */}
      {allColors.transparent && (
        <div className="mb-12">
          <h2 className="mb-4">Transparent</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
            <ColorSwatch
              name="transparent"
              value={allColors.transparent['100']}
              showBorder={true}
            />
          </div>
        </div>
      )}
    </>
  );
}