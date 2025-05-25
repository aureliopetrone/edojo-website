"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "~/lib/utils";

// Floating geometric shapes with glassmorphism
interface FloatingGeometryProps {
  variant?: "circles" | "squares" | "triangles" | "mixed";
  count?: number;
  darkMode?: boolean;
  className?: string;
}

export function FloatingGeometry({ variant = "mixed", count = 8, darkMode = false, className }: FloatingGeometryProps) {
  const [shapes, setShapes] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    rotation: number;
    animationDuration: number;
    delay: number;
    type: "circle" | "square" | "triangle";
  }>>([]);

  useEffect(() => {
    const getShapeTypes = (variant: string): ("circle" | "square" | "triangle")[] => {
      if (variant === "mixed") return ["circle", "square", "triangle"];
      if (variant === "circles") return ["circle"];
      if (variant === "squares") return ["square"];
      if (variant === "triangles") return ["triangle"];
      return ["circle"];
    };
    
    const types = getShapeTypes(variant);
    
    const newShapes = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 40 + Math.random() * 80,
      rotation: Math.random() * 360,
      animationDuration: 15 + Math.random() * 10,
      delay: Math.random() * 5,
      type: types[Math.floor(Math.random() * types.length)]!
    }));
    setShapes(newShapes);
  }, [variant, count]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute opacity-40"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            animation: `modernFloat ${shape.animationDuration}s ease-in-out infinite ${shape.delay}s`,
          }}
        >
          {shape.type === "circle" && (
            <div className={`w-full h-full rounded-full backdrop-blur-sm border shadow-lg ${
              darkMode 
                ? "bg-gradient-to-br from-white/20 to-white/5 border-white/10" 
                : "bg-gradient-to-br from-black/15 to-black/5 border-black/10"
            }`} />
          )}
          {shape.type === "square" && (
            <div 
              className={`w-full h-full backdrop-blur-sm border shadow-lg ${
                darkMode 
                  ? "bg-gradient-to-br from-white/15 to-white/5 border-white/10" 
                  : "bg-gradient-to-br from-black/12 to-black/4 border-black/10"
              }`}
              style={{ transform: `rotate(${shape.rotation}deg)` }}
            />
          )}
          {shape.type === "triangle" && (
            <div 
              className={`w-full h-full backdrop-blur-sm border shadow-lg ${
                darkMode 
                  ? "bg-gradient-to-br from-white/15 to-white/5 border-white/10" 
                  : "bg-gradient-to-br from-black/12 to-black/4 border-black/10"
              }`}
              style={{ 
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                transform: `rotate(${shape.rotation}deg)`
              }}
            />
          )}
        </div>
      ))}
      
      <style jsx>{`
        @keyframes modernFloat {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(90deg) scale(1.1);
          }
          50% {
            transform: translateY(-10px) translateX(-10px) rotate(180deg) scale(0.9);
          }
          75% {
            transform: translateY(-30px) translateX(5px) rotate(270deg) scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}

// Animated mesh gradient background
interface MeshGradientProps {
  colors?: string[];
  speed?: number;
  className?: string;
}

export function MeshGradient({ 
  colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57"], 
  speed = 1,
  className 
}: MeshGradientProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, ${colors[0]}22 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, ${colors[1]}22 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, ${colors[2]}22 0%, transparent 50%),
            radial-gradient(circle at 90% 90%, ${colors[3]}22 0%, transparent 50%),
            radial-gradient(circle at 10% 10%, ${colors[4]}22 0%, transparent 50%)
          `,
          animation: `meshMove ${20 / speed}s ease-in-out infinite`,
        }}
      />
      
      <style jsx>{`
        @keyframes meshMove {
          0%, 100% {
            transform: translateX(0) translateY(0) scale(1);
          }
          25% {
            transform: translateX(-10px) translateY(-20px) scale(1.1);
          }
          50% {
            transform: translateX(10px) translateY(10px) scale(0.95);
          }
          75% {
            transform: translateX(-5px) translateY(15px) scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}

// Morphing blob shapes
interface MorphingBlobsProps {
  count?: number;
  colors?: string[];
  className?: string;
}

export function MorphingBlobs({ count = 3, colors = ["rgba(99, 102, 241, 0.1)", "rgba(168, 85, 247, 0.1)", "rgba(236, 72, 153, 0.1)"], className }: MorphingBlobsProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${20 + (i * 30)}%`,
            top: `${10 + (i * 20)}%`,
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
            background: colors[i % colors.length],
            borderRadius: "50%",
            filter: "blur(40px)",
            animation: `morphBlob ${8 + i * 2}s ease-in-out infinite ${i * 1}s`,
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes morphBlob {
          0%, 100% {
            border-radius: 50% 30% 70% 40%;
            transform: scale(1) rotate(0deg);
          }
          25% {
            border-radius: 30% 60% 40% 70%;
            transform: scale(1.1) rotate(90deg);
          }
          50% {
            border-radius: 60% 40% 30% 70%;
            transform: scale(0.9) rotate(180deg);
          }
          75% {
            border-radius: 40% 70% 60% 30%;
            transform: scale(1.05) rotate(270deg);
          }
        }
      `}</style>
    </div>
  );
}

// Animated grid pattern
interface AnimatedGridProps {
  size?: number;
  color?: string;
  className?: string;
}

export function AnimatedGrid({ size = 50, color = "rgba(255, 255, 255, 0.1)", className }: AnimatedGridProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(${color} 1px, transparent 1px),
            linear-gradient(90deg, ${color} 1px, transparent 1px)
          `,
          backgroundSize: `${size}px ${size}px`,
          animation: "gridPulse 4s ease-in-out infinite",
        }}
      />
      
      <style jsx>{`
        @keyframes gridPulse {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.02);
          }
        }
      `}</style>
    </div>
  );
}

// Particle constellation effect
interface ParticleConstellationProps {
  count?: number;
  color?: string;
  className?: string;
}

export function ParticleConstellation({ count = 50, color = "rgba(255, 255, 255, 0.6)", className }: ParticleConstellationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    // Initialize particles
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = color.replace(/[\d\.]+\)$/, `${0.3 * (1 - distance / 100)})`);
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [count, color]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 w-full h-full pointer-events-none", className)}
    />
  );
}

// Main modern background component
interface ModernBackgroundProps {
  variant?: "floating" | "mesh" | "morphing" | "grid" | "constellation" | "mixed";
  intensity?: "subtle" | "moderate" | "intense";
  colorScheme?: "blue" | "purple" | "green" | "pink" | "neutral";
  darkMode?: boolean;
  className?: string;
}

export function ModernBackground({ 
  variant = "mixed", 
  intensity = "moderate",
  colorScheme = "blue",
  darkMode = false,
  className 
}: ModernBackgroundProps) {
  const colorSchemes = {
    blue: ["#3b82f6", "#1d4ed8", "#06b6d4", "#0891b2"],
    purple: ["#8b5cf6", "#7c3aed", "#a855f7", "#9333ea"],
    green: ["#10b981", "#059669", "#22c55e", "#16a34a"],
    pink: ["#ec4899", "#db2777", "#f472b6", "#e879f9"],
    neutral: ["#6b7280", "#4b5563", "#9ca3af", "#374151"]
  };

  const intensitySettings = {
    subtle: { opacity: "opacity-30", count: 3 },
    moderate: { opacity: "opacity-50", count: 5 },
    intense: { opacity: "opacity-70", count: 8 }
  };

  const settings = intensitySettings[intensity];
  const colors = colorSchemes[colorScheme];

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", settings.opacity, className)}>
      {(variant === "floating" || variant === "mixed") && (
        <FloatingGeometry count={settings.count} darkMode={darkMode} />
      )}
      
      {(variant === "mesh" || variant === "mixed") && (
        <MeshGradient colors={colors} />
      )}
      
      {(variant === "morphing" || variant === "mixed") && (
        <MorphingBlobs 
          count={Math.ceil(settings.count / 2)} 
          colors={colors.map(c => c + "20")} 
        />
      )}
      
      {variant === "grid" && (
        <AnimatedGrid color={colors[0] + "30"} />
      )}
      
      {variant === "constellation" && (
        <ParticleConstellation 
          count={settings.count * 10} 
          color={colors[0] + "80"} 
        />
      )}
    </div>
  );
} 