"use client";

import { cn } from "@/lib/utils";

interface GhostWordProps {
  text: string;
  dark?: boolean;
  className?: string;
}

export function GhostWord({ text, dark = false, className }: GhostWordProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "font-mono whitespace-nowrap pointer-events-none select-none",
        "text-[clamp(5rem,18vw,20rem)] leading-none tracking-tight",
        dark ? "text-on-plum opacity-[0.07]" : "text-ink opacity-[0.07]",
        className
      )}
    >
      {text}
    </span>
  );
}
