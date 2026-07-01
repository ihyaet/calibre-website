"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterWordProps {
  /** Full word to type out. */
  word: string;
  /** Total time (ms) to type the whole word once. Default 1000ms. */
  typeDuration?: number;
  /** How long (ms) to hold the finished word before deleting. Default 5000ms. */
  holdDuration?: number;
  /** Total time (ms) to delete the whole word. Default 600ms. */
  deleteDuration?: number;
}

type Phase = "typing" | "holding" | "deleting";

export function TypewriterWord({
  word,
  typeDuration = 1000,
  holdDuration = 5000,
  deleteDuration = 600,
}: TypewriterWordProps) {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const perCharType = Math.max(typeDuration / word.length, 20);
  const perCharDelete = Math.max(deleteDuration / word.length, 20);

  useEffect(() => {
    // Respect reduced-motion: show the full word, no animation.
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(word.length);
      setPhase("holding");
      return;
    }

    if (phase === "typing") {
      if (count < word.length) {
        timer.current = setTimeout(() => setCount((c) => c + 1), perCharType);
      } else {
        setPhase("holding");
      }
    } else if (phase === "holding") {
      timer.current = setTimeout(() => setPhase("deleting"), holdDuration);
    } else if (phase === "deleting") {
      if (count > 0) {
        timer.current = setTimeout(() => setCount((c) => c - 1), perCharDelete);
      } else {
        setPhase("typing");
      }
    }

    return () => clearTimeout(timer.current);
  }, [count, phase, word.length, perCharType, perCharDelete, holdDuration]);

  return (
    <span aria-label={word} className="whitespace-nowrap inline-block">
      <span aria-hidden="true">{word.slice(0, count)}</span>
      <span className="calibre-caret" aria-hidden="true">|</span>
      <style>{`
        @keyframes calibre-caret-blink {
          0%, 45% { opacity: 1; }
          50%, 95% { opacity: 0; }
          100% { opacity: 1; }
        }
        .calibre-caret {
          display: inline-block;
          margin-left: 0.02em;
          font-weight: 300;
          color: #0E0E10;
          animation: calibre-caret-blink 1s steps(1, end) infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .calibre-caret { animation: none; }
        }
      `}</style>
    </span>
  );
}
