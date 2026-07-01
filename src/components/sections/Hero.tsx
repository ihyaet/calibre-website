"use client";

import { CtaButton } from "@/components/ui/CtaButton";
import { TypewriterWord } from "@/components/ui/TypewriterWord";
import Image from "next/image";

export function Hero() {
  return (
    <section
      className="relative flex flex-col overflow-hidden pt-10 min-h-[80vh] lg:min-h-screen"
      style={{ background: "#FFFFFF" }}
      aria-label="Hero"
    >
      <div className="relative z-10 flex-1 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 flex flex-col justify-between py-8 sm:py-10 lg:py-14">

        {/* Main composition */}
        <div className="relative flex-1 flex flex-col justify-center lg:min-h-[70vh] gap-6 lg:gap-0">

          {/* Keyboard — mobile/tablet: static below headline; desktop: absolute bleed right */}
          <div
            className="hero-keyboard lg:absolute lg:top-1/2 lg:-translate-y-1/2 pointer-events-none select-none z-20 order-2 lg:order-none w-full flex-1 lg:flex-none lg:w-auto lg:min-[1440px]:!right-[-902px] lg:min-[1600px]:!right-[-1030px]"
            style={{
              right: "max(calc(-30vw - 500px), -980px)",
            }}
            aria-label="Calibre keyboard render"
          >
            {/* Desktop image */}
            <Image
              src="/hero-keyboard.png"
              alt="Calibre keyboard with LCD strip showing app dock and violet-backlit WASD keys"
              width={900}
              height={620}
              priority
              className="hidden lg:block h-[min(110vh,1240px)] w-auto object-contain lg:w-[min(110vw,1760px)]"
              style={{ height: "min(110vh, 1240px)", width: "min(110vw, 1760px)" }}
            />
            {/* Mobile / tablet — wrapper fills vertically, image 50% bigger, shifted right 30% */}
            <div className="lg:hidden w-full h-full flex items-center">
              <Image
                src="/hero-keyboard.png"
                alt=""
                aria-hidden="true"
                width={900}
                height={620}
                priority
                className="w-full h-auto object-contain scale-[1.7] translate-x-[10%] origin-center"
              />
            </div>
          </div>

          {/* Headline with 3 ruled lines — one below each line */}
          <div className="relative z-10 flex flex-col w-full order-1 lg:order-none">
            <h1
              className="font-mono text-ink text-center lg:text-left lg:w-[60%]"
              style={{
                fontSize: "clamp(48px, 14vw, 158px)",
                fontWeight: 300,
                letterSpacing: "-0.06em",
                lineHeight: "1.1",
              }}
            >
              <span className="relative block">
                Creative
                <span className="absolute left-[-100vw] right-[-100vw] bottom-0" style={{ background: "#5B3DF5", height: "1px", transform: "translateZ(0)" }} aria-hidden="true" />
              </span>
              <span className="relative block">
                Workflow,
                <span className="absolute left-[-100vw] right-[-100vw] bottom-0" style={{ background: "#5B3DF5", height: "1px", transform: "translateZ(0)" }} aria-hidden="true" />
              </span>
              <span className="relative block">
                <TypewriterWord word="Simplified" typeDuration={1000} holdDuration={5000} />
                <span className="absolute left-[-100vw] right-[-100vw] bottom-0" style={{ background: "#5B3DF5", height: "1px", transform: "translateZ(0)" }} aria-hidden="true" />
              </span>
            </h1>
          </div>
        </div>

        {/* Bottom bar — mobile: subtext then CTA centered; desktop: CTA left, subtext right */}
        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-6 pt-6 items-center">
          <CtaButton href="#" size="lg" />
          <p
            className="font-sans text-ink max-w-[380px] text-center sm:text-right line-clamp-2 sm:line-clamp-none"
            style={{ fontSize: "clamp(15px, 2.2vw, 18px)", lineHeight: "150%", letterSpacing: "-0.04em" }}
          >
            Every key, considered. A screen that whispers never shouts. Engineered for people who think in long, unbroken stretches.
          </p>
        </div>

      </div>
    </section>
  );
}
