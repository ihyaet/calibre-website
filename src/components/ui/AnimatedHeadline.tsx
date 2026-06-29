"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState, type CSSProperties } from "react";

interface AnimatedHeadlineProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p";
  typewriter?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function AnimatedHeadline({
  children,
  as = "h2",
  typewriter = false,
  className,
  style,
}: AnimatedHeadlineProps) {
  const [displayed, setDisplayed] = useState(typewriter ? "" : children);
  const [showCursor, setShowCursor] = useState(typewriter);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!typewriter) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setDisplayed(children);
      setShowCursor(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let i = 0;
          const interval = setInterval(() => {
            i++;
            setDisplayed(children.slice(0, i));
            if (i >= children.length) {
              clearInterval(interval);
              setTimeout(() => setShowCursor(false), 1200);
            }
          }, 40);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [children, typewriter]);

  const Tag = as;

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={cn("font-mono tracking-tight", className)}
      style={style}
    >
      {displayed}
      {showCursor && (
        <span
          className="inline-block w-0.5 h-[0.85em] bg-current ml-1 align-middle animate-[blink_1s_step-end_infinite]"
          aria-hidden="true"
        />
      )}
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </Tag>
  );
}
