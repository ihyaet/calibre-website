"use client";

import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes } from "react";

interface CtaButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  size?: "sm" | "md" | "lg";
}

export function CtaButton({ href, size = "md", className, children = "Shop Now", ...props }: CtaButtonProps) {
  const sizeClasses = {
    sm: "h-10 px-6 text-xs",
    md: "h-14 px-8 text-sm",
    lg: "h-16 px-10 text-base",
  };

  const inner = (
    <span
      className={cn(
        "inline-flex items-center justify-center font-mono tracking-widest uppercase",
        "rounded-full select-none cursor-pointer transition-all duration-200",
        "text-paper",
        sizeClasses[size],
        // Glossy violet coin treatment
        "bg-gradient-to-b from-[#7C5BFF] via-[#5B3DF5] to-[#4328D0]",
        "ring-1 ring-[#3320A8]/60",
        "shadow-[0_4px_20px_rgba(91,61,245,0.45),0_1px_0_rgba(255,255,255,0.15)_inset]",
        "hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(91,61,245,0.55),0_1px_0_rgba(255,255,255,0.15)_inset]",
        "active:translate-y-0.5 active:shadow-[0_2px_10px_rgba(91,61,245,0.3),0_1px_0_rgba(255,255,255,0.1)_inset]",
        "motion-reduce:transform-none",
        className
      )}
      {...(href ? {} : props)}
    >
      {children}
    </span>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {inner}
      </a>
    );
  }

  return (
    <button type="button" className="inline-block" {...props}>
      {inner}
    </button>
  );
}
