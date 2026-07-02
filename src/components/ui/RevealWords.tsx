"use client";

import type { CSSProperties } from "react";
import { RevealItem } from "./RevealItem";

interface RevealWordsProps {
  text: string;
  className?: string;
  style?: CSSProperties;
  baseDelay?: number;
  stagger?: number;
  duration?: number;
  as?: "p" | "span" | "div";
}

/** Splits text into words and slides each one up into place, staggered. */
export function RevealWords({
  text,
  className,
  style,
  baseDelay = 0,
  stagger = 22,
  duration = 550,
  as: Tag = "p",
}: RevealWordsProps) {
  const words = text.split(" ");
  return (
    <Tag
      className={className}
      style={{ display: "flex", flexWrap: "wrap", rowGap: "0.2em", columnGap: "0.3em", ...style }}
    >
      {words.map((word, i) => (
        <RevealItem key={`${word}-${i}`} index={i} baseDelay={baseDelay} stagger={stagger} duration={duration}>
          {word}
        </RevealItem>
      ))}
    </Tag>
  );
}
