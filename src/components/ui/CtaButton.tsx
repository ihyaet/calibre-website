"use client";

import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes } from "react";

interface CtaButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: 80,
  md: 112,
  lg: 144,
};

export function CtaButton({ href, size = "md", className, children = "Shop Now", ...props }: CtaButtonProps) {
  const diameter = sizeMap[size];

  const knob = (
    <span
      className={cn("inline-flex items-center justify-center select-none cursor-pointer transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-px motion-reduce:transform-none", className)}
      style={{
        width: diameter,
        height: diameter,
        borderRadius: "50%",
        // Outer dark bezel
        background: "radial-gradient(circle at 50% 40%, #2a2a2a 0%, #111010 60%, #0a0a0a 100%)",
        boxShadow: "0 6px 24px rgba(0,0,0,0.6), 0 2px 6px rgba(0,0,0,0.4)",
        padding: "7px",
      }}
      {...(href ? {} : props)}
    >
      {/* Inner face */}
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          // Subtle dome gradient — lighter at top-center, deeper toward bottom
          background: "radial-gradient(circle at 50% 32%, #7B5EFF 0%, #5B3DF5 40%, #4528D4 100%)",
          boxShadow: "inset 0 2px 4px rgba(255,255,255,0.12), inset 0 -3px 8px rgba(0,0,0,0.35)",
          fontFamily: "var(--font-mono)",
          fontSize: diameter * 0.13,
          fontWeight: 400,
          letterSpacing: "0.01em",
          color: "#fff",
        }}
      >
        Shop Now
      </span>
    </span>
  );

  if (href) {
    return <a href={href} className="inline-block">{knob}</a>;
  }

  return <button type="button" className="inline-block" {...props}>{knob}</button>;
}
