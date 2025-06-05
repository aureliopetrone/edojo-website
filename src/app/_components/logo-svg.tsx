"use client";

import { useState, useEffect } from "react";

export default function LogoSVG() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 0.02);
    }, 16); // 60 FPS

    return () => clearInterval(interval);
  }, []);

  // Calcola rotazioni e scale sottili per l'animazione
  const rotation1 = Math.sin(time) * 2;
  const rotation2 = Math.cos(time * 0.8) * 1.5;
  const scale1 = 1 + Math.sin(time * 0.6) * 0.02;
  const scale2 = 1 + Math.cos(time * 0.4) * 0.015;

  return (
    <div className="w-32 h-32 flex items-center justify-center">
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        className="drop-shadow-lg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Definizione gradienti */}
        <defs>
          {/* Gradiente principale - dal verde all'emerald */}
          <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" /> {/* emerald-500 */}
            <stop offset="100%" stopColor="#059669" /> {/* emerald-600 */}
          </linearGradient>
          
          {/* Gradiente secondario - dal giallo all'arancione */}
          <linearGradient id="secondaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" /> {/* amber-500 */}
            <stop offset="100%" stopColor="#ea580c" /> {/* orange-600 */}
          </linearGradient>
          
          {/* Gradiente accent - dal blu al viola */}
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" /> {/* blue-500 */}
            <stop offset="100%" stopColor="#8b5cf6" /> {/* violet-500 */}
          </linearGradient>
          
          {/* Gradiente neutro */}
          <linearGradient id="neutralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6b7280" /> {/* gray-500 */}
            <stop offset="100%" stopColor="#374151" /> {/* gray-700 */}
          </linearGradient>

          {/* Filtro per ombra sottile */}
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.1"/>
          </filter>
        </defs>

        {/* Gruppo principale con animazione globale */}
        <g transform="translate(60, 60)">
          
          {/* Quadrato superiore sinistro */}
          <g transform={`rotate(${rotation1}) scale(${scale1})`}>
            <rect
              x="-28"
              y="-28"
              width="24"
              height="24"
              rx="2"
              fill="url(#primaryGradient)"
              filter="url(#softShadow)"
            />
          </g>

          {/* Cerchio superiore destro */}
          <g transform={`rotate(${-rotation2}) scale(${scale2})`}>
            <circle
              cx="16"
              cy="-16"
              r="12"
              fill="url(#secondaryGradient)"
              filter="url(#softShadow)"
            />
          </g>

          {/* Triangolo inferiore sinistro */}
          <g transform={`rotate(${rotation2 * 0.5}) scale(${scale1})`}>
            <polygon
              points="-28,4 -4,4 -16,28"
              fill="url(#accentGradient)"
              filter="url(#softShadow)"
            />
          </g>

          {/* Cerchio inferiore destro con bordo */}
          <g transform={`rotate(${-rotation1 * 0.8}) scale(${scale2})`}>
            <circle
              cx="16"
              cy="16"
              r="12"
              fill="none"
              stroke="url(#neutralGradient)"
              strokeWidth="3"
              filter="url(#softShadow)"
            />
            <circle
              cx="16"
              cy="16"
              r="6"
              fill="url(#neutralGradient)"
              opacity="0.8"
            />
          </g>

          {/* Elemento centrale sottile per connessione visiva */}
          <circle
            cx="0"
            cy="0"
            r="2"
            fill="#ffffff"
            opacity="0.6"
            className="animate-pulse"
          />
        </g>

        {/* Linee di connessione sottili e animate */}
        <g opacity="0.2">
          <line
            x1="32"
            y1="32"
            x2="88"
            y2="44"
            stroke="url(#primaryGradient)"
            strokeWidth="1"
            strokeDasharray="2,4"
            className="animate-pulse"
          />
          <line
            x1="32"
            y1="88"
            x2="88"
            y2="76"
            stroke="url(#accentGradient)"
            strokeWidth="1"
            strokeDasharray="2,4"
            className="animate-pulse"
            style={{ animationDelay: '0.5s' }}
          />
        </g>
      </svg>
    </div>
  );
} 