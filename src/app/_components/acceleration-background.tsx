"use client";

import { useEffect, useRef } from "react";
import { cn } from "~/lib/utils";

interface AccelerationBackgroundProps {
  className?: string;
}

export default function AccelerationBackground({ className }: AccelerationBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // 3D Warp Speed lines (moving along Z-axis)
    const warpLines: Array<{
      x: number;
      y: number;
      z: number;
      length: number;
      speed: number;
      opacity: number;
      color: string;
      prevX: number;
      prevY: number;
    }> = [];

    // Giant elements (larger moving shapes)
    const giants: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      acceleration: number;
    }> = [];

    // Initialize 3D warp speed lines - colori meno rossi e più tech
    for (let i = 0; i < 150; i++) {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      // Colori più tech e meno rossi - usando la palette del progetto
      const colors = ['#dc2626', '#3b82f6', '#06b6d4', '#8b5cf6', '#64748b'];
      
      const startX = centerX + (Math.random() - 0.5) * canvas.width * 1.5;
      const startY = centerY + (Math.random() - 0.5) * canvas.height * 1.5;
      
      warpLines.push({
        x: startX,
        y: startY,
        z: Math.random() * 1500 + 500,
        length: Math.random() * 50 + 20,
        speed: Math.random() * 18 + 12, // Increased speed significantly
        opacity: Math.random() * 0.7 + 0.3, // Aumentata opacità per maggiore visibilità
        color: colors[Math.floor(Math.random() * colors.length)] || '#dc2626',
        prevX: startX,
        prevY: startY,
      });
    }

    // Initialize giants
    for (let i = 0; i < 8; i++) {
      giants.push({
        x: -100,
        y: Math.random() * canvas.height,
        size: Math.random() * 150 + 100,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.15 + 0.08, // Aumentata opacità per maggiore visibilità
        acceleration: 1.001 + Math.random() * 0.002,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Create gradient background effect - più scuro e meno rosso
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, Math.max(canvas.width, canvas.height) / 2
      );
      // Gradiente più luminoso per maggiore visibilità dell'effetto
      gradient.addColorStop(0, "rgba(76, 76, 76, 0.2)"); // Più luminoso
      gradient.addColorStop(0.3, "rgba(40, 40, 40, 0.3)"); // Più luminoso
      gradient.addColorStop(0.7, "rgba(20, 20, 20, 0.5)"); // Più luminoso
      gradient.addColorStop(1, "rgba(0, 0, 0, 0.95)"); // Leggermente più luminoso
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw 3D warp speed lines
      warpLines.forEach((line, index) => {
        // Calculate perspective projection
        const perspective = 400;
        const projectedX = centerX + (line.x - centerX) * (perspective / line.z);
        const projectedY = centerY + (line.y - centerY) * (perspective / line.z);
        const projectedLength = line.length * (perspective / line.z);

        // Only draw if line is in front and on screen
        if (line.z > 0 && projectedX > -50 && projectedX < canvas.width + 50 && 
            projectedY > -50 && projectedY < canvas.height + 50) {
          
          // Calculate line stretch based on speed and distance
          const stretchFactor = (2000 - line.z) / 2000; // Closer = more stretch
          const lineStretch = stretchFactor * 80 + 30; // Much longer lines
          
          // Calculate direction from center
          const distance = Math.sqrt((line.x - centerX) ** 2 + (line.y - centerY) ** 2);
          const dirX = distance > 0 ? (line.x - centerX) / distance : 0;
          const dirY = distance > 0 ? (line.y - centerY) / distance : 0;
          
          // Start point (further back)
          const startX = projectedX - dirX * lineStretch;
          const startY = projectedY - dirY * lineStretch;
          
          // Create gradient for line
          const lineGradient = ctx.createLinearGradient(startX, startY, projectedX, projectedY);
          lineGradient.addColorStop(0, 'transparent');
          lineGradient.addColorStop(0.4, line.color + '60'); // Aumentata opacità
          lineGradient.addColorStop(1, line.color);
          
          // Draw stretched line
          ctx.save();
          ctx.globalAlpha = line.opacity * Math.min(stretchFactor + 0.3, 1.0); // Aumentata visibilità
          ctx.strokeStyle = lineGradient;
          ctx.lineWidth = Math.max(1, stretchFactor * 3); // Aumentato
          ctx.lineCap = 'round';
          
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo(projectedX, projectedY);
          ctx.stroke();
          
          // Add bright glow for closer lines - aumentato
          if (line.z < 500) {
            ctx.shadowColor = line.color;
            ctx.shadowBlur = 8; // Riportato al valore originale
            ctx.lineWidth = Math.max(1, stretchFactor * 3); // Aumentato
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(projectedX, projectedY);
            ctx.stroke();
          }
          
          ctx.restore();
        }
        
        // Move line along Z-axis (towards viewer) with consistent speed
        line.z -= line.speed;

        // Reset when line passes through viewer
        if (line.z <= 0) {
          line.x = centerX + (Math.random() - 0.5) * canvas.width * 1.5;
          line.y = centerY + (Math.random() - 0.5) * canvas.height * 1.5;
          line.z = Math.random() * 1500 + 1000;
          line.speed = Math.random() * 18 + 12; // Match the faster speed range
        }
      });

      // Draw giants (large moving elements) - meno rossi
      giants.forEach((giant, index) => {
        ctx.save();
        ctx.globalAlpha = giant.opacity;
        
        // Create radial gradient for giant - colori meno rossi
        const giantGradient = ctx.createRadialGradient(
          giant.x, giant.y, 0,
          giant.x, giant.y, giant.size
        );
        // Colori più luminosi per maggiore visibilità
        giantGradient.addColorStop(0, "rgba(100, 116, 139, 0.8)"); // Più luminoso
        giantGradient.addColorStop(0.5, "rgba(71, 85, 105, 0.6)"); // Più luminoso
        giantGradient.addColorStop(1, "rgba(30, 41, 59, 0.2)"); // Più luminoso
        
        ctx.fillStyle = giantGradient;
        ctx.beginPath();
        ctx.arc(giant.x, giant.y, giant.size, 0, Math.PI * 2);
        ctx.fill();

        // Add speed trail - più visibile
        ctx.globalAlpha = giant.opacity * 0.8; // Aumentata opacità
        ctx.fillStyle = "rgba(71, 85, 105, 0.4)"; // Più luminoso
        ctx.beginPath();
        ctx.ellipse(giant.x - giant.size, giant.y, giant.size * 2.5, giant.size * 0.4, 0, 0, Math.PI * 2);
        ctx.fill();

        // Move and accelerate
        giant.x += giant.speed;
        giant.speed *= giant.acceleration;

        // Reset when off screen
        if (giant.x > canvas.width + giant.size) {
          giant.x = -giant.size;
          giant.y = Math.random() * canvas.height;
          giant.speed = Math.random() * 0.8 + 0.3;
        }

        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: "blur(0.3px)" }}
      />
      
      {/* CSS-based 3D perspective lines - più visibili */}
      <div className="absolute inset-0" style={{ perspective: "1000px" }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 bg-gradient-to-t from-slate-600/0 via-slate-500/60 to-slate-400/0 opacity-60"
            style={{
              left: `${15 + (i * 45)}%`,
              height: "220vh",
              top: "-60vh",
              transform: `rotateX(75deg) translateZ(${i * 50}px)`,
              animation: `perspective3d ${1.8 + Math.random()}s linear infinite`,
              animationDelay: `${Math.random() * 1.8}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes perspective3d {
          0% {
            transform: rotateX(75deg) translateZ(-200px);
            opacity: 0;
          }
          10% {
            opacity: 0.2;
          }
          90% {
            opacity: 0.2;
          }
          100% {
            transform: rotateX(75deg) translateZ(800px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
} 