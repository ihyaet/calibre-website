"use client";

import { createContext, useContext, useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

const RevealContext = createContext(false);

/** Read from inside a RevealGroup to know whether the group has entered the viewport. */
export function useReveal() {
  return useContext(RevealContext);
}

interface RevealGroupProps {
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
  /** Fraction of the group that must be visible before it triggers. */
  threshold?: number;
  /** Shifts the trigger point; negative bottom margin fires slightly before full visibility. */
  rootMargin?: string;
}

/**
 * Wrap a block of headline/body text (or any staggered children) in this once.
 * It fires a single IntersectionObserver and exposes `inView` via context so every
 * nested RevealItem can compute its own delay without each mounting its own observer.
 */
export function RevealGroup({
  as: Tag = "div",
  className,
  style,
  children,
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
}: RevealGroupProps) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <Tag ref={ref} className={className} style={style}>
      <RevealContext.Provider value={inView}>{children}</RevealContext.Provider>
    </Tag>
  );
}
