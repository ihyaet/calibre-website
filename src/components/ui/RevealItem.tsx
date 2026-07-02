"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";
import { useReveal } from "./RevealGroup";

interface RevealItemProps {
  children: ReactNode;
  /** Position in the stagger sequence — delay = baseDelay + index * stagger. */
  index?: number;
  stagger?: number;
  baseDelay?: number;
  duration?: number;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  display?: "inline-block" | "block";
}

/**
 * Reveals its content by translating it up 100% of its own box height
 * (fully offscreen -> fully in place), masked within a local overflow-hidden
 * box scoped to just this line/word. Extra top padding (offset by an equal
 * negative top margin, so it doesn't push the line lower or grow the gap to
 * the line above) keeps tall ascenders from clipping against the mask.
 */
export function RevealItem({
  children,
  index = 0,
  stagger = 80,
  baseDelay = 0,
  duration = 450,
  as: Tag = "span",
  className,
  style,
  display = "inline-block",
}: RevealItemProps) {
  const inView = useReveal();
  const delay = baseDelay + index * stagger;

  return (
    <span
      style={{
        // Always shrink-to-fit the content's own width — if this were "block"
        // it would stretch to the parent's constrained width (e.g. the
        // headline's lg:w-[60%]) and clip any text wider than that.
        display: "inline-block",
        overflow: "hidden",
        paddingRight: "0.15em",
      }}
    >
      <Tag
        className={className}
        style={{
          display,
          transform: inView ? "translateY(0)" : "translateY(100%)",
          transition: `transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
          willChange: "transform",
          ...style,
        }}
      >
        {children}
      </Tag>
    </span>
  );
}
