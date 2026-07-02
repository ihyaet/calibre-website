"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";

interface Slide {
  src: string;
  alt: string;
}

const BASE: Slide[] = [
  { src: "/feature-bg.png", alt: "Calibre keyboard showing 9:80 clock and purple waveform on LCD strip with violet-backlit WASD keys" },
  { src: "/feature-bg-1.png", alt: "MAC/WIN toggle switch on Calibre keyboard side" },
  { src: "/feature-bg-2.png", alt: "Tactile mechanical switch cross-section" },
];

const SLIDES = BASE;
const START = 1; // middle card — covered by the floating active display

// Shared width so the active slot's box matches the floating overlay exactly —
// that's what makes the gap land against the overlay's real edges.
const OVERLAY_WIDTH = "clamp(330px, 45vw, 540px)";
const GAP = "134px";
const DURATION = 620;
const EASE = "cubic-bezier(0.65,0,0.35,1)";

interface State {
  active: number;
  prev: number;
  dir: 1 | -1;
}

export function FeatureCarousel() {
  const [{ active, prev, dir }, setState] = useState<State>({ active: START, prev: START, dir: 1 });

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Center the active card by translating the track. Layout box (offsetLeft/Width)
  // ignores the scale transform, so the active card lands dead-center.
  const recenter = (animate: boolean) => {
    const container = containerRef.current;
    const track = trackRef.current;
    const item = itemRefs.current[active];
    if (!container || !track || !item) return;
    const target = container.clientWidth / 2 - (item.offsetLeft + item.offsetWidth / 2);
    track.style.transition = animate ? `transform ${DURATION}ms ${EASE}` : "none";
    track.style.transform = `translateX(${target}px)`;
  };

  useLayoutEffect(() => {
    recenter(false); // first paint: no animation
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    recenter(true); // active changed: slide into place
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  useEffect(() => {
    const onResize = () => recenter(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const selectItem = (i: number) => {
    if (i === active) return;
    setState((s) => ({ active: i, prev: s.active, dir: i > s.active ? 1 : -1 }));
  };

  const activeSlide = SLIDES[active];
  const reveal = dir === 1 ? "reveal-from-right" : "reveal-from-left";
  // Outgoing base image nudges opposite the incoming direction — exits left when new comes from right.
  const exit = dir === 1 ? "exit-to-left" : "exit-to-right";

  return (
    <div className="relative w-full self-stretch">
      {/* Floating "active" display — the image transitions with a clip-path reveal
          plus a slight translation, coming from the direction it was selected from. */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="p-[1px]"
          style={{
            width: OVERLAY_WIDTH,
            background: "linear-gradient(to bottom, #622CC2, #C22C90)",
          }}
        >
          <div className="w-full aspect-square bg-[#F5F5F7] overflow-hidden relative">
            {/* Base layer — previous image, nudged slightly opposite the incoming direction */}
            <div key={`prev-${prev}`} className={`absolute inset-0 ${exit}`}>
              <Image
                src={SLIDES[prev].src}
                alt=""
                aria-hidden="true"
                fill
                sizes="45vw"
                className="object-cover"
              />
            </div>
            {/* Top layer — new image reveals over the base */}
            <div key={activeSlide.src} className={`absolute inset-0 ${reveal}`}>
              <Image
                src={activeSlide.src}
                alt={activeSlide.alt}
                fill
                priority
                sizes="45vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Carousel track — the active slot reserves the overlay's exact width (kept
          invisible), so the visible neighbors sit a true gap from the overlay. */}
      <div ref={containerRef} className="w-full overflow-visible">
        <div
          ref={trackRef}
          className="flex items-center will-change-transform"
          style={{ gap: GAP }}
        >
          {SLIDES.map((slide, i) => {
            const isActive = i === active;
            return (
              <button
                key={i}
                ref={(el) => { itemRefs.current[i] = el; }}
                type="button"
                aria-label={slide.alt}
                aria-current={isActive}
                onClick={() => selectItem(i)}
                className={`flex-shrink-0 relative z-0 transition-opacity duration-300 ${
                  isActive ? "pointer-events-none opacity-60" : "cursor-pointer opacity-60 hover:opacity-80"
                }`}
                style={{ width: "clamp(220px, 30vw, 360px)" }}
              >
                {/* Slides naturally to the middle; the floating overlay (higher z-index)
                    covers it once it arrives — no manual show/hide needed. */}
                <div className="w-full bg-[#F5F5F7] overflow-hidden aspect-[4/5]">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={900}
                    height={900}
                    priority={i === START}
                    sizes="(min-width:1024px) 360px, 30vw"
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes reveal-from-right-kf {
          from { transform: translateX(18%); clip-path: inset(0 0 0 100%); }
          to   { transform: translateX(0);   clip-path: inset(0 0 0 0); }
        }
        @keyframes reveal-from-left-kf {
          from { transform: translateX(-18%); clip-path: inset(0 100% 0 0); }
          to   { transform: translateX(0);    clip-path: inset(0 0 0 0); }
        }
        .reveal-from-right { animation: reveal-from-right-kf ${DURATION}ms ${EASE} both; }
        .reveal-from-left  { animation: reveal-from-left-kf ${DURATION}ms ${EASE} both; }

        @keyframes exit-to-left-kf {
          from { transform: translateX(0); }
          to   { transform: translateX(-10%); }
        }
        @keyframes exit-to-right-kf {
          from { transform: translateX(0); }
          to   { transform: translateX(10%); }
        }
        .exit-to-left  { animation: exit-to-left-kf ${DURATION}ms ${EASE} both; }
        .exit-to-right { animation: exit-to-right-kf ${DURATION}ms ${EASE} both; }

        @media (prefers-reduced-motion: reduce) {
          .reveal-from-right, .reveal-from-left, .exit-to-left, .exit-to-right { animation: none; }
        }
      `}</style>
    </div>
  );
}
