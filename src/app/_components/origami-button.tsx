import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "~/lib/utils";

interface OrigamiButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function OrigamiButton({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: OrigamiButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none overflow-hidden";
  
  const variants = {
    primary: "bg-neutral-900 text-neutral-50 hover:bg-neutral-800",
    secondary: "bg-neutral-800 text-neutral-50 hover:bg-neutral-700",
    outline: "border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-50"
  };

  const sizes = {
    sm: "px-6 py-3 text-sm min-h-[40px]",
    md: "px-8 py-4 text-base min-h-[50px]",
    lg: "px-10 py-5 text-lg min-h-[60px]"
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        "group",
        className
      )}
      style={{
        clipPath: "polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)",
        borderRadius: "0",
      }}
      {...props}
    >
      {/* Brush stroke texture overlay */}
      <div 
        className="absolute inset-0 opacity-20 mix-blend-multiply"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(0,0,0,0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(0,0,0,0.2) 0%, transparent 50%),
            radial-gradient(ellipse at 40% 80%, rgba(0,0,0,0.1) 0%, transparent 50%)
          `
        }}
      />
      
      {/* Ink bleeding effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
        style={{
          background: `
            radial-gradient(circle at 10% 20%, rgba(255,255,255,0.1) 0%, transparent 30%),
            radial-gradient(circle at 90% 80%, rgba(255,255,255,0.1) 0%, transparent 30%),
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 40%)
          `
        }}
      />
      
      {/* Content */}
      <span className="relative flex items-center gap-3 z-10">
        <span className="font-bold tracking-wide">
          {children}
        </span>
        <span 
          className="inline-block transition-transform duration-300 group-hover:translate-x-1 text-xl"
          style={{ fontFamily: "serif" }}
        >
          削
        </span>
      </span>
      
      {/* Brush stroke shadow */}
      <div 
        className="absolute -bottom-1 left-2 right-4 h-1 bg-black/10 blur-sm"
        style={{
          clipPath: "polygon(5% 0%, 95% 0%, 90% 100%, 10% 100%)"
        }}
      />
    </button>
  );
} 