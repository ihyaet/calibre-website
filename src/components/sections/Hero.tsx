"use client";

import { CtaButton } from "@/components/ui/CtaButton";
import Image from "next/image";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden pt-16"
      style={{ background: "#FFFFFF" }}
      aria-label="Hero"
    >
      <div className="relative z-10 flex-1 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 flex flex-col justify-between py-10 lg:py-14">

        {/* Main composition */}
        <div className="relative flex-1 flex flex-col justify-center min-h-[70vh]">

          {/* Keyboard — front, half visible, bleeding off right */}
          <div
            className="absolute top-1/2 -translate-y-1/2 pointer-events-none select-none z-20"
            style={{
              right: "max(calc(-30vw - 500px), -980px)",
              width: "min(110vw, 1760px)",
              height: "min(110vh, 1240px)",
            }}
            aria-label="Calibre keyboard render"
          >
            <Image
              src="/hero-keyboard.png"
              alt="Calibre keyboard with LCD strip showing app dock and violet-backlit WASD keys"
              width={900}
              height={620}
              priority
              className="h-full w-auto object-contain"
            />
          </div>

          {/* Headline with 3 ruled lines — one below each line */}
          <div className="relative z-10 flex flex-col w-full">
            <h1
              className="font-mono text-ink lg:w-[60%]"
              style={{
                fontSize: "clamp(56px, 14vw, 158px)",
                fontWeight: 300,
                letterSpacing: "-0.06em",
                lineHeight: "1.1",
              }}
            >
              <span className="relative block">
                Creative
                <span className="absolute left-[-100vw] right-[-100vw] h-px bottom-0" style={{ background: "#5B3DF5" }} aria-hidden="true" />
              </span>
              <span className="relative block">
                Workflow,
                <span className="absolute left-[-100vw] right-[-100vw] h-px bottom-0" style={{ background: "#5B3DF5" }} aria-hidden="true" />
              </span>
              <span className="relative block">
                Simplified
                <span className="absolute left-[-100vw] right-[-100vw] h-px bottom-0" style={{ background: "#5B3DF5" }} aria-hidden="true" />
              </span>
            </h1>
          </div>
        </div>

        {/* Bottom bar — Shop Now left, body copy right */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 pt-6">
          <CtaButton href="#" size="lg" />
          <p
            className="font-sans text-ink max-w-[380px] sm:text-right line-clamp-2"
            style={{ fontSize: "18px", lineHeight: "150%", letterSpacing: "-0.04em" }}
          >
            Every key, considered. A screen that whispers — never shouts. Engineered for people who think in long, unbroken stretches.
          </p>
        </div>

      </div>
    </section>
  );
}
