import React from "react";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { LcdDisplay } from "@/components/ui/LcdDisplay";
import { RuledLines } from "@/components/ui/RuledLines";
import { SectionDivider } from "@/components/ui/SectionDivider";

export function ProductPhilosophy() {
  return (
    <section
      className="relative py-[clamp(6rem,12vw,12rem)] overflow-hidden"
      style={{ background: "var(--wash)" }}
      aria-labelledby="philosophy-heading"
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 flex flex-col items-center gap-16">
        {/* Centered headline */}
        <div className="text-center flex flex-col gap-4">
          <AnimatedHeadline
            as="h2"
            className="text-ink leading-[1.05] tracking-tight"
            style={{ fontSize: "var(--text-display)" } as React.CSSProperties}
          >
            You didn't lose focus.
          </AnimatedHeadline>
          <AnimatedHeadline
            as="p"
            className="text-ink leading-[1.05] tracking-tight"
            style={{ fontSize: "var(--text-display)" } as React.CSSProperties}
          >
            Your tools took it.
          </AnimatedHeadline>
        </div>

        <RuledLines />

        {/* Three-card image trio */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full items-center">
          {/* Left: MAC/WIN toggle detail */}
          <div
            className="aspect-square bg-ink/5 border border-line flex flex-col items-center justify-center gap-4 p-8 opacity-90 hover:opacity-100 transition-opacity"
            aria-label="MAC/WIN toggle detail with violet slider"
          >
            <span className="font-mono text-[length:var(--text-label)] text-mute uppercase tracking-widest">
              Platform
            </span>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm text-mute">MAC</span>
              <div className="relative w-12 h-6 bg-violet rounded-full flex items-center px-1">
                <div className="w-4 h-4 rounded-full bg-white shadow translate-x-6 transition-transform" />
              </div>
              <span className="font-mono text-sm text-ink font-semibold">WIN</span>
            </div>
          </div>

          {/* Center: main card with violet border */}
          <div
            className="aspect-square ring-1 ring-violet-border bg-ink/5 flex flex-col items-center justify-center gap-4 p-6"
            aria-label="LCD clock mode with media visualizer"
          >
            <div
              className="w-full border border-line"
              style={{ aspectRatio: "16/3" }}
            >
              <LcdDisplay state="clock" />
            </div>
            <span className="font-mono text-[length:var(--text-label)] text-mute uppercase tracking-widest">
              Clock + Media
            </span>
            {/* Simulated violet backlit keys */}
            <div className="flex gap-1">
              {["W", "A", "S", "D"].map((k) => (
                <div
                  key={k}
                  className="w-8 h-8 flex items-center justify-center font-mono text-xs font-bold rounded-[2px]"
                  style={{ background: "#5B3DF5", color: "#ECE9FE", boxShadow: "0 0 8px rgba(91,61,245,0.6)" }}
                >
                  {k}
                </div>
              ))}
            </div>
          </div>

          {/* Right: switch detail */}
          <div
            className="aspect-square bg-ink/5 border border-line flex flex-col items-center justify-center gap-4 p-8 opacity-90 hover:opacity-100 transition-opacity"
            aria-label="Tactile Cherry-style switch"
          >
            <span className="font-mono text-[length:var(--text-label)] text-mute uppercase tracking-widest">
              Switch
            </span>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-sm bg-violet/20 border border-violet/40 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-violet" />
              </div>
              <span className="font-mono text-[length:var(--text-label)] text-mute">Tactile 45g</span>
            </div>
          </div>
        </div>

        {/* Stat copy */}
        <div className="max-w-2xl text-center flex flex-col gap-4">
          <RuledLines />
          <p className="font-sans text-ink/70 leading-relaxed" style={{ fontSize: "var(--text-body)" }}>
            It takes an average of <strong className="text-ink font-semibold">23 minutes</strong> to fully return to a task after an interruption. Most of those interruptions? They came from the tools that were supposed to help you.
          </p>
          <RuledLines />
        </div>

        <SectionDivider label="§03 — Philosophy" />
      </div>
    </section>
  );
}
