"use client";

import { cn } from "@/lib/utils";
import { TESTIMONIALS } from "@/data/testimonials";
import { useState } from "react";
import { Play } from "@phosphor-icons/react";

interface TestimonialCarouselProps {
  className?: string;
}

export function TestimonialCarousel({ className }: TestimonialCarouselProps) {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length);

  return (
    <div className={cn("flex flex-col items-center gap-10", className)}>
      <div className="flex items-center gap-6 w-full max-w-5xl">
        {/* Prev peek */}
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="hidden lg:block flex-shrink-0 w-48 aspect-[3/4] bg-plum-elev ring-1 ring-line-plum opacity-50 hover:opacity-70 transition-opacity relative overflow-hidden"
        >
          <div className="absolute inset-0 flex items-end p-4">
            <span className="font-mono text-[length:var(--text-label)] text-mute-plum uppercase tracking-widest">
              {TESTIMONIALS[(active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length].name}
            </span>
          </div>
        </button>

        {/* Main card */}
        <div className="flex-1 aspect-[3/4] max-h-[600px] ring-1 ring-violet-border relative overflow-hidden bg-plum-elev">
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              aria-label={`Play ${TESTIMONIALS[active].name}'s testimonial`}
              className="w-16 h-16 rounded-full bg-violet/90 flex items-center justify-center hover:bg-violet transition-colors"
            >
              <Play size={28} weight="fill" className="text-white translate-x-0.5" />
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-plum to-transparent">
            <p className="font-mono text-on-plum" style={{ fontSize: "var(--text-h3)" }}>
              {TESTIMONIALS[active].name}
            </p>
            <p className="font-sans text-mute-plum" style={{ fontSize: "var(--text-small)" }}>
              {TESTIMONIALS[active].role}
            </p>
          </div>
        </div>

        {/* Next peek */}
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="hidden lg:block flex-shrink-0 w-48 aspect-[3/4] bg-plum-elev ring-1 ring-line-plum opacity-50 hover:opacity-70 transition-opacity relative overflow-hidden"
        >
          <div className="absolute inset-0 flex items-end p-4">
            <span className="font-mono text-[length:var(--text-label)] text-mute-plum uppercase tracking-widest">
              {TESTIMONIALS[(active + 1) % TESTIMONIALS.length].name}
            </span>
          </div>
        </button>
      </div>

      {/* Mobile nav */}
      <div className="flex items-center gap-4 lg:hidden">
        <button onClick={prev} aria-label="Previous" className="text-mute-plum hover:text-on-plum">←</button>
        <span className="font-mono text-[length:var(--text-label)] text-mute-plum">
          {active + 1} / {TESTIMONIALS.length}
        </span>
        <button onClick={next} aria-label="Next" className="text-mute-plum hover:text-on-plum">→</button>
      </div>

      {/* Dots */}
      <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === active}
            aria-label={`Testimonial ${i + 1}`}
            onClick={() => setActive(i)}
            className={cn(
              "w-1.5 h-1.5 rounded-full transition-all",
              i === active ? "bg-violet w-6" : "bg-line-plum"
            )}
          />
        ))}
      </div>
    </div>
  );
}
