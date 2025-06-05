"use client";

import { useEffect, useRef } from "react";
import { cn } from "~/lib/utils";

interface BrandGeometricBackgroundProps {
  className?: string;
  intensity?: "subtle" | "medium" | "bold";
  variant?: "floating" | "orbital" | "particles";
}

export default function BrandGeometricBackground({ 
  className, 
  intensity = "subtle",
  variant = "floating"
}: BrandGeometricBackgroundProps) {
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

    // Brand colors from CSS variables
    const brandRed = "#e60012";
    const brandPurple = "#8b5cf6";
    
    // Geometric shapes with brand gradient
    const shapes: Array<{
      x: number;
      y: number;
      size: number;
      type: "triangle" | "square" | "circle";
      color: string;
      rotation: number;
      rotationSpeed: number;
      speed: { x: number; y: number };
      opacity: number;
      pulsePhase: number;
    }> = [];

    // Initialize shapes
    const shapeCount = intensity === "subtle" ? 12 : intensity === "medium" ? 18 : 25;
    
    for (let i = 0; i < shapeCount; i++) {
      const types: Array<"triangle" | "square" | "circle"> = ["triangle", "square", "circle"];
      const isRed = Math.random() > 0.5;
      
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 60 + 20,
        type: types[Math.floor(Math.random() * types.length)]!,
        color: isRed ? brandRed : brandPurple,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        speed: {
          x: (Math.random() - 0.5) * 0.5,
          y: (Math.random() - 0.5) * 0.5
        },
        opacity: Math.random() * 0.15 + 0.05,
        pulsePhase: Math.random() * Math.PI * 2
      });
    }

    let animationId: number;
    let time = 0;

    const drawTriangle = (x: number, y: number, size: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      ctx.moveTo(0, -size / 2);
      ctx.lineTo(-size / 2, size / 2);
      ctx.lineTo(size / 2, size / 2);
      ctx.closePath();
      ctx.restore();
    };

    const drawSquare = (x: number, y: number, size: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      ctx.rect(-size / 2, -size / 2, size, size);
      ctx.restore();
    };

    const drawCircle = (x: number, y: number, size: number) => {
      ctx.beginPath();
      ctx.arc(x, y, size / 2, 0, Math.PI * 2);
    };

    const createGradient = (x: number, y: number, size: number, color: string) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
      const otherColor = color === brandRed ? brandPurple : brandRed;
      gradient.addColorStop(0, color + "80");
      gradient.addColorStop(0.7, color + "40");
      gradient.addColorStop(1, otherColor + "20");
      return gradient;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      shapes.forEach((shape, index) => {
        // Update position based on variant
        if (variant === "floating") {
          shape.x += shape.speed.x;
          shape.y += shape.speed.y;
        } else if (variant === "orbital") {
          const centerX = canvas.width / 2;
          const centerY = canvas.height / 2;
          const radius = 200 + index * 30;
          const angle = time * 0.5 + index * 0.5;
          shape.x = centerX + Math.cos(angle) * radius;
          shape.y = centerY + Math.sin(angle) * radius;
        } else if (variant === "particles") {
          shape.x += Math.sin(time + index) * 0.5;
          shape.y += Math.cos(time + index * 0.7) * 0.3;
        }

        // Wrap around screen edges
        if (shape.x < -50) shape.x = canvas.width + 50;
        if (shape.x > canvas.width + 50) shape.x = -50;
        if (shape.y < -50) shape.y = canvas.height + 50;
        if (shape.y > canvas.height + 50) shape.y = -50;

        // Update rotation
        shape.rotation += shape.rotationSpeed;

        // Pulse effect
        const pulse = Math.sin(time * 2 + shape.pulsePhase) * 0.5 + 0.5;
        const currentOpacity = shape.opacity * (0.7 + pulse * 0.3);

        // Create gradient
        const gradient = createGradient(shape.x, shape.y, shape.size, shape.color);

        // Draw shape with gradient and glow
        ctx.save();
        ctx.globalAlpha = currentOpacity;
        ctx.fillStyle = gradient;

        // Add subtle glow
        ctx.shadowColor = shape.color;
        ctx.shadowBlur = 20;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;

        // Draw based on type
        if (shape.type === "triangle") {
          drawTriangle(shape.x, shape.y, shape.size, shape.rotation);
        } else if (shape.type === "square") {
          drawSquare(shape.x, shape.y, shape.size, shape.rotation);
        } else {
          drawCircle(shape.x, shape.y, shape.size);
        }

        ctx.fill();
        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [intensity, variant]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: "multiply" }}
      />
      
      {/* Additional CSS-based geometric elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i * 8)}%`,
              width: `${30 + i * 5}px`,
              height: `${30 + i * 5}px`,
              background: i % 2 === 0 
                ? "linear-gradient(45deg, #e60012, #8b5cf6)" 
                : "linear-gradient(135deg, #8b5cf6, #e60012)",
              transform: `rotate(${i * 45}deg)`,
              animation: `geometricFloat ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
              borderRadius: i % 3 === 0 ? "50%" : i % 3 === 1 ? "0%" : "20%"
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes geometricFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.1;
          }
          25% {
            transform: translateY(-10px) rotate(90deg);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-5px) rotate(180deg);
            opacity: 0.15;
          }
          75% {
            transform: translateY(-15px) rotate(270deg);
            opacity: 0.25;
          }
        }
      `}</style>
    </div>
  );
} 