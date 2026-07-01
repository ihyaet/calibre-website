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

// Duplicate so there are always peek cards on both sides of the active one.
const SLIDES: Slide[] = [...BASE, ...BASE, ...BASE];
const START = BASE.length; // start in the middle copy

export function FeatureCarousel() {
  const [active, setActive] = useState(START);

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
    track.style.transition = animate
      ? "transform 620ms cubic-bezier(0.65,0,0.35,1)"
      : "none";
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

  return (
    <div ref={containerRef} className="w-full overflow-visible">
      <div
        ref={trackRef}
        className="flex items-center will-change-transform"
        style={{ gap: "clamp(12px, 2vw, 28px)" }}
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
              onClick={() => setActive(i)}
              className="flex-shrink-0 relative cursor-pointer transition-[transform,opacity] duration-[620ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
              style={{
                width: "clamp(220px, 30vw, 360px)",
                transform: isActive ? "scale(1.15)" : "scale(0.9)",
                opacity: isActive ? 1 : 0.45,
                zIndex: isActive ? 10 : 0,
              }}
            >
              {/* Active gets the gradient border + square ratio; others 4:5 */}
              <div
                className="w-full p-[1px]"
                style={{
                  background: isActive
                    ? "linear-gradient(to bottom, #622CC2, #C22C90)"
                    : "transparent",
                }}
              >
                <div
                  className={`w-full bg-[#F5F5F7] overflow-hidden ${isActive ? "aspect-square" : "aspect-[4/5]"}`}
                >
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
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
