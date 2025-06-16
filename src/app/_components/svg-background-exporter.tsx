'use client';

import { useState } from 'react';

export default function SvgBackgroundExporter() {
  const [isExporting, setIsExporting] = useState(false);

  const generateCustomSvg = (width: number, height: number) => {
    // Calcola la densità delle forme in base alle dimensioni (molto ridotta)
    const area = width * height;
    const baseShapeCount = Math.floor(area / 200000); // Una forma ogni 200k pixel (4x meno)
    const minShapes = 3;
    const maxShapes = 8;
    const shapeCount = Math.max(minShapes, Math.min(maxShapes, baseShapeCount));
    
    // Genera forme geometriche distribuite
    const shapes = [];
    for (let i = 0; i < shapeCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const size = Math.random() * 60 + 20;
      const rotation = Math.random() * 360;
      const shapeType = Math.floor(Math.random() * 3); // 0=triangle, 1=square, 2=circle
      const gradientType = Math.random() > 0.5 ? 1 : 2;
      
      if (shapeType === 0) { // Triangle
        const points = `${x},${y-size/2} ${x-size/2},${y+size/2} ${x+size/2},${y+size/2}`;
        shapes.push(`<polygon points="${points}" fill="url(#brandGradient${gradientType})" transform="rotate(${rotation} ${x} ${y})" opacity="0.15" filter="url(#glow)"/>`);
      } else if (shapeType === 1) { // Square
        shapes.push(`<rect x="${x-size/2}" y="${y-size/2}" width="${size}" height="${size}" fill="url(#brandGradient${gradientType})" transform="rotate(${rotation} ${x} ${y})" opacity="0.15" filter="url(#glow)"/>`);
      } else { // Circle
        shapes.push(`<circle cx="${x}" cy="${y}" r="${size/2}" fill="url(#brandGradient${gradientType})" opacity="0.15" filter="url(#glow)"/>`);
      }
    }
    
    // Genera piccole forme fluttuanti (molto ridotte)
    const floatingShapes = [];
    const floatingCount = Math.floor(shapeCount / 3); // Ancora meno forme piccole
    for (let i = 0; i < floatingCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const size = Math.random() * 20 + 5;
      const shapeType = Math.floor(Math.random() * 3);
      const color = Math.random() > 0.5 ? '#e60012' : '#8b5cf6';
      
      if (shapeType === 0) { // Triangle
        const points = `${x},${y-size/2} ${x-size/2},${y+size/2} ${x+size/2},${y+size/2}`;
        floatingShapes.push(`<polygon points="${points}" fill="${color}" opacity="0.1" filter="url(#subtleGlow)"/>`);
      } else if (shapeType === 1) { // Square
        const rotation = Math.random() * 360;
        floatingShapes.push(`<rect x="${x-size/2}" y="${y-size/2}" width="${size}" height="${size}" fill="${color}" transform="rotate(${rotation} ${x} ${y})" opacity="0.1" filter="url(#subtleGlow)"/>`);
      } else { // Circle
        floatingShapes.push(`<circle cx="${x}" cy="${y}" r="${size/2}" fill="${color}" opacity="0.1" filter="url(#subtleGlow)"/>`);
      }
    }
    
    return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Filtri per il glow effect -->
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge> 
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    
    <filter id="subtleGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
      <feMerge> 
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    
    <linearGradient id="brandGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#e60012" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0.6"/>
    </linearGradient>
    
    <linearGradient id="brandGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#e60012" stop-opacity="0.6"/>
    </linearGradient>
  </defs>
  
     <rect width="${width}" height="${height}" fill="#050505"/>
   
   <g>
     ${shapes.join('\n    ')}
   </g>
   
   <g>
     ${floatingShapes.join('\n    ')}
   </g>
</svg>`;
  };

  const exportSvgToPng = async (width: number, height: number, filename: string) => {
    setIsExporting(true);
    
    try {
      // Genera SVG personalizzato per le dimensioni specifiche
      const svgContent = generateCustomSvg(width, height);
      
      // Crea un canvas
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Converti SVG in data URL
      const svgBlob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
      const svgUrl = URL.createObjectURL(svgBlob);

      // Crea un'immagine e disegnala sul canvas
      const img = new Image();
      img.onload = () => {
        // Abilita antialiasing per una migliore qualità
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        
        // Riempi il canvas con un colore di base per evitare trasparenze
        ctx.fillStyle = '#050505';
        ctx.fillRect(0, 0, width, height);
        
        // Disegna l'SVG
        ctx.drawImage(img, 0, 0, width, height);
        
        // Converti canvas in PNG con qualità ottimizzata
        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
          }
          setIsExporting(false);
        }, 'image/png', 1.0); // Qualità massima
        
        URL.revokeObjectURL(svgUrl);
      };
      
      img.src = svgUrl;
    } catch (error) {
      console.error('Errore durante l\'export:', error);
      setIsExporting(false);
    }
  };

  const presetSizes = [
    { name: 'Facebook Cover', width: 820, height: 461 },
    { name: 'LinkedIn Cover', width: 1584, height: 396 },
    { name: 'Background 1000x600', width: 1000, height: 600 },
    { name: 'Instagram Post', width: 1080, height: 1080 },
    { name: 'Twitter Header', width: 1500, height: 500 },
    { name: 'Desktop Wallpaper', width: 1920, height: 1080 },
    { name: 'Mobile Wallpaper', width: 1080, height: 1920 },
  ];

  return (
    <div className="p-6 bg-white border-t border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
        📥 Esporta Background in PNG
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 max-w-6xl mx-auto">
        {presetSizes.map((preset) => (
          <button
            key={preset.name}
            onClick={() => exportSvgToPng(preset.width, preset.height, `edojo-background-${preset.name.toLowerCase().replace(/\s+/g, '-')}.png`)}
            disabled={isExporting}
            className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-purple-50 to-red-50 hover:from-purple-100 hover:to-red-100 border border-purple-200 rounded-lg transition-all duration-200 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
              {preset.name.includes('Facebook') ? '📘' : 
               preset.name.includes('LinkedIn') ? '💼' : 
               preset.name.includes('Instagram') ? '📸' : 
               preset.name.includes('Twitter') ? '🐦' : 
               preset.name.includes('Desktop') ? '🖥️' : 
               preset.name.includes('Mobile') ? '📱' : '🎨'}
            </div>
            <div className="text-sm font-medium text-gray-900 text-center mb-1">
              {preset.name}
            </div>
            <div className="text-xs text-gray-600">
              {preset.width} × {preset.height}
            </div>
          </button>
        ))}
      </div>

      {isExporting && (
        <div className="mt-4 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-lg">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Esportazione in corso...
          </div>
        </div>
      )}

      <div className="mt-4 text-center text-sm text-gray-500">
        💡 Clicca su una dimensione per scaricare il background in formato PNG
      </div>
    </div>
  );
} 