"use client";

import { CtaButton } from "@/components/ui/CtaButton";
import { LcdDisplay } from "@/components/ui/LcdDisplay";
import { RuledLines } from "@/components/ui/RuledLines";
import { GhostWord } from "@/components/ui/GhostWord";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden pt-16"
      style={{ background: "var(--wash)" }}
      aria-label="Hero"
    >
      {/* Ghost wordmark */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <GhostWord text="Creative Workflow" />
      </div>

      <div className="relative z-10 flex-1 max-w-screen-xl mx-auto w-full px-6 lg:px-12 flex flex-col justify-between py-16 lg:py-24 gap-12">

        {/* Top ruled line */}
        <RuledLines />

        {/* Main composition */}
        <div className="flex-1 grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: headline */}
          <div className="flex flex-col gap-8">
            <h1
              className="font-mono text-ink leading-[1.0] tracking-tight"
              style={{ fontSize: "var(--text-display)" }}
            >
              Creative
              <br />
              Workflow,
              <br />
              Simplified
            </h1>

            <div className="flex flex-col gap-6">
              <CtaButton href="#" size="lg" />
            </div>
          </div>

          {/* Right: keyboard render placeholder + LCD */}
          <div className="flex flex-col gap-4">
            {/* Keyboard render placeholder */}
            <div
              className="w-full aspect-[16/9] bg-ink/5 border border-line flex flex-col justify-end p-4 relative overflow-hidden"
              aria-label="Calibre keyboard render"
            >
              {/* Key backlight simulation */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="w-3/4 h-1/2 grid grid-cols-10 gap-1">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-sm"
                      style={{
                        backgroundColor: [0, 1, 2, 3, 14, 15, 16, 17].includes(i)
                          ? "#5B3DF5"
                          : "#333",
                        height: "100%",
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="relative">
                <span className="font-mono text-[length:var(--text-label)] text-mute uppercase tracking-widest block mb-2">
                  Calibre-01 — LCD Strip
                </span>
                <LcdDisplay state="dock" className="w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom ruled line + body copy */}
        <div className="flex flex-col gap-4">
          <RuledLines />
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <span className="font-mono text-[length:var(--text-label)] text-mute uppercase tracking-widest">
              §01 — Hero
            </span>
            <p
              className="font-sans text-mute max-w-sm text-right sm:text-right"
              style={{ fontSize: "var(--text-small)" }}
            >
              Every key, considered. A screen that whispers — never shouts.
              Engineered for people who think in long, unbroken stretches.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
