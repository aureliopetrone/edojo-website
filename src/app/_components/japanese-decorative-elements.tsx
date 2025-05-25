"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "~/lib/utils";

// Componente per fiori di ciliegio che cadono
interface SakuraPetalsProps {
  count?: number;
  className?: string;
}

export function SakuraPetals({ count = 10, className }: SakuraPetalsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [petals, setPetals] = useState<Array<{
    id: number;
    x: number;
    y: number;
    rotation: number;
    animationDuration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    const newPetals = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -10,
      rotation: Math.random() * 360,
      animationDuration: 8 + Math.random() * 4,
      delay: Math.random() * 5
    }));
    setPetals(newPetals);
  }, [count]);

  return (
    <div 
      ref={containerRef}
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
    >
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute w-2 h-2 opacity-30"
          style={{
            left: `${petal.x}%`,
            animationDuration: `${petal.animationDuration}s`,
            animationDelay: `${petal.delay}s`,
            transform: `rotate(${petal.rotation}deg)`,
          }}
        >
          <div 
            className="w-full h-full bg-pink-300 rounded-full animate-pulse"
            style={{
              animation: `fall ${petal.animationDuration}s linear infinite ${petal.delay}s, 
                         sway 2s ease-in-out infinite ${petal.delay}s`,
            }}
          />
        </div>
      ))}
      
      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(110vh) rotate(360deg);
          }
        }
        
        @keyframes sway {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(20px);
          }
        }
      `}</style>
    </div>
  );
}

// Componente per onde giapponesi
interface JapaneseWavesProps {
  variant?: "subtle" | "prominent";
  className?: string;
}

export function JapaneseWaves({ variant = "subtle", className }: JapaneseWavesProps) {
  const opacity = variant === "subtle" ? "opacity-10" : "opacity-20";
  
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <svg
        className={cn("absolute bottom-0 w-full h-32", opacity)}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          fill="currentColor"
          className="text-blue-200"
        />
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          fill="currentColor"
          className="text-blue-300"
        />
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          fill="currentColor"
          className="text-blue-400"
        />
      </svg>
    </div>
  );
}

// Componente per pattern bamboo
interface BambooPatternProps {
  className?: string;
}

export function BambooPattern({ className }: BambooPatternProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none opacity-5", className)}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="bamboo" x="0" y="0" width="20" height="100" patternUnits="userSpaceOnUse">
            <rect width="2" height="100" fill="currentColor" className="text-green-600" />
            <circle cx="1" cy="20" r="1.5" fill="currentColor" className="text-green-700" />
            <circle cx="1" cy="40" r="1.5" fill="currentColor" className="text-green-700" />
            <circle cx="1" cy="60" r="1.5" fill="currentColor" className="text-green-700" />
            <circle cx="1" cy="80" r="1.5" fill="currentColor" className="text-green-700" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bamboo)" />
      </svg>
    </div>
  );
}

// Componente per cerchi zen
interface ZenCirclesProps {
  count?: number;
  className?: string;
}

export function ZenCircles({ count = 3, className }: ZenCirclesProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className="absolute border border-neutral-300 rounded-full opacity-10"
          style={{
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
            top: `${20 + i * 10}%`,
            left: `${10 + i * 20}%`,
            animation: `zenFloat ${8 + i * 2}s ease-in-out infinite ${i * 0.5}s`,
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes zenFloat {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-20px) scale(1.05);
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
}

// Componente per montagne stilizzate
interface MountainSilhouetteProps {
  className?: string;
}

export function MountainSilhouette({ className }: MountainSilhouetteProps) {
  return (
    <div className={cn("absolute bottom-0 w-full h-64 overflow-hidden pointer-events-none", className)}>
      <svg
        className="absolute bottom-0 w-full h-full opacity-10"
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
      >
        {/* Montagna principale */}
        <path
          d="M0,300 L200,100 L400,150 L600,50 L800,120 L1000,80 L1200,180 L1200,300 Z"
          fill="currentColor"
          className="text-neutral-700"
        />
        {/* Montagna secondaria */}
        <path
          d="M0,300 L150,180 L350,200 L550,130 L750,160 L950,140 L1200,220 L1200,300 Z"
          fill="currentColor"
          className="text-neutral-600 opacity-70"
        />
        {/* Montagna di sfondo */}
        <path
          d="M0,300 L100,220 L300,240 L500,200 L700,230 L900,210 L1200,260 L1200,300 Z"
          fill="currentColor"
          className="text-neutral-500 opacity-50"
        />
      </svg>
    </div>
  );
}

// Componente combinato per sfondo giapponese completo
interface JapaneseBackgroundProps {
  elements?: Array<"sakura" | "waves" | "bamboo" | "zen" | "mountains">;
  className?: string;
}

export function JapaneseBackground({ 
  elements = ["sakura", "zen"], 
  className 
}: JapaneseBackgroundProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {elements.includes("mountains") && <MountainSilhouette />}
      {elements.includes("waves") && <JapaneseWaves />}
      {elements.includes("bamboo") && <BambooPattern />}
      {elements.includes("zen") && <ZenCircles />}
      {elements.includes("sakura") && <SakuraPetals />}
    </div>
  );
} 