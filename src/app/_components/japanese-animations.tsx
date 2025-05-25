"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "~/lib/utils";

// Hook per intersection observer
export function useInView(threshold = 0.1) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

// Hook per parallax
export function useParallax(speed = 0.5) {
  const [offsetY, setOffsetY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrolled = window.pageYOffset;
        setOffsetY(scrolled * speed);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return { ref, offsetY };
}

// Componente per fade in dal basso (stile giapponese)
interface FadeInUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FadeInUp({ children, delay = 0, duration = 0.8, className }: FadeInUpProps) {
  const { ref, isInView } = useInView(0.2);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-out",
        isInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8",
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  );
}

// Componente per slide in dalla sinistra (come un paravento giapponese)
interface SlideInLeftProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function SlideInLeft({ children, delay = 0, duration = 0.8, className }: SlideInLeftProps) {
  const { ref, isInView } = useInView(0.2);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-out",
        isInView
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-16",
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  );
}

// Componente per slide in dalla destra
interface SlideInRightProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function SlideInRight({ children, delay = 0, duration = 0.8, className }: SlideInRightProps) {
  const { ref, isInView } = useInView(0.2);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-out",
        isInView
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-16",
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  );
}

// Componente per effetto scale (come un fiore di ciliegio che sboccia)
interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function ScaleIn({ children, delay = 0, duration = 0.8, className }: ScaleInProps) {
  const { ref, isInView } = useInView(0.2);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-out",
        isInView
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95",
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  );
}

// Componente per animazione staggered (come foglie che cadono)
interface StaggeredAnimationProps {
  children: React.ReactNode[];
  staggerDelay?: number;
  animation?: "fadeUp" | "slideLeft" | "slideRight" | "scale";
  className?: string;
}

export function StaggeredAnimation({ 
  children, 
  staggerDelay = 100, 
  animation = "fadeUp", 
  className 
}: StaggeredAnimationProps) {
  const AnimationComponent = {
    fadeUp: FadeInUp,
    slideLeft: SlideInLeft,
    slideRight: SlideInRight,
    scale: ScaleIn,
  }[animation];

  return (
    <div className={className}>
      {children.map((child, index) => (
        <AnimationComponent key={index} delay={index * staggerDelay}>
          {child}
        </AnimationComponent>
      ))}
    </div>
  );
}

// Componente per parallax background
interface ParallaxBackgroundProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  backgroundPattern?: "sakura" | "bamboo" | "waves" | "mountain";
}

export function ParallaxBackground({ 
  children, 
  speed = 0.5, 
  className,
  backgroundPattern = "sakura"
}: ParallaxBackgroundProps) {
  const { ref, offsetY } = useParallax(speed);

  const patterns = {
    sakura: "bg-gradient-to-br from-pink-50/30 to-purple-50/30",
    bamboo: "bg-gradient-to-br from-green-50/30 to-emerald-50/30", 
    waves: "bg-gradient-to-br from-blue-50/30 to-cyan-50/30",
    mountain: "bg-gradient-to-br from-slate-50/30 to-neutral-50/30"
  };

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      {/* Pattern di sfondo con parallax */}
      <div 
        className={cn(
          "absolute inset-0 opacity-50",
          patterns[backgroundPattern]
        )}
        style={{
          transform: `translateY(${offsetY}px)`,
        }}
      />
      
      {/* Elementi decorativi giapponesi */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translateY(${offsetY * 0.3}px)`,
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255, 192, 203, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(255, 182, 193, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 40% 40%, rgba(255, 228, 225, 0.3) 0%, transparent 50%)`,
        }}
      />
      
      {/* Contenuto */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

// Componente per linea decorativa giapponese
interface JapaneseLineProps {
  orientation?: "horizontal" | "vertical";
  variant?: "thin" | "thick" | "double";
  className?: string;
}

export function JapaneseLine({ 
  orientation = "horizontal", 
  variant = "thin", 
  className 
}: JapaneseLineProps) {
  const { ref, isInView } = useInView(0.5);

  const orientationClasses = {
    horizontal: "w-full h-px",
    vertical: "w-px h-full"
  };

  const variantClasses = {
    thin: "bg-gradient-to-r from-transparent via-neutral-300 to-transparent",
    thick: "bg-gradient-to-r from-transparent via-primary-400 to-transparent h-0.5",
    double: "relative bg-gradient-to-r from-transparent via-neutral-300 to-transparent after:content-[''] after:absolute after:top-1 after:left-0 after:right-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-neutral-300 after:to-transparent"
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-out",
        orientationClasses[orientation],
        variantClasses[variant],
        isInView ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0",
        className
      )}
    />
  );
}

// Componente per testo con effetto brush giapponese
interface JapaneseTextProps {
  children: React.ReactNode;
  variant?: "title" | "subtitle" | "body";
  brushEffect?: boolean;
  className?: string;
}

export function JapaneseText({ 
  children, 
  variant = "body", 
  brushEffect = false, 
  className 
}: JapaneseTextProps) {
  const { ref, isInView } = useInView(0.3);

  const variants = {
    title: "text-3xl md:text-5xl font-bold",
    subtitle: "text-xl md:text-2xl font-semibold", 
    body: "text-base md:text-lg"
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-out",
        variants[variant],
        brushEffect && "relative",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className
      )}
    >
      {brushEffect && (
        <span 
          className="absolute inset-0 bg-gradient-to-r from-primary-200/50 to-transparent transform -skew-x-12 scale-110 opacity-0 transition-opacity duration-1000"
          style={{
            opacity: isInView ? 0.7 : 0,
            transitionDelay: "0.3s"
          }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </div>
  );
} 