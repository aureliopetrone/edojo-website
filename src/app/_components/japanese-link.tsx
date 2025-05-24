import Link from "next/link";
import { type ComponentProps } from "react";
import { cn } from "~/lib/utils";

interface JapaneseLinkProps extends ComponentProps<typeof Link> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export default function JapaneseLink({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: JapaneseLinkProps) {
  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-primary-600 text-neutral-50 hover:bg-primary-500 focus:ring-primary-500",
    secondary: "bg-neutral-800 text-neutral-50 hover:bg-neutral-700 focus:ring-neutral-500",
    outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-md",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-xl"
  };

  return (
    <Link
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        "group",
        className
      )}
      {...props}
    >
      {/* Decorative elements */}
      <span className="absolute inset-0 overflow-hidden rounded-lg">
        <span className="absolute -inset-x-4 -inset-y-4 bg-gradient-to-r from-primary-400/20 to-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </span>
      
      {/* Content */}
      <span className="relative flex items-center gap-2">
        {children}
        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
} 