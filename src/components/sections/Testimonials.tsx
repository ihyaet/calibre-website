import Image from "next/image";
import { RevealGroup } from "@/components/ui/RevealGroup";
import { RevealItem } from "@/components/ui/RevealItem";

const testimonials = [
  { name: "Sarah Lin", role: "Designer", image: "/testimonial-1.png" },
  { name: "Jhon Doe", role: "Content Creator", image: "/testimonial.png" },
  { name: "Mei Tanaka", role: "Streamer", image: "/testimonial-2.png" },
];

export function Testimonials() {
  return (
    <section
      className="text-on-plum py-[clamp(6rem,12vw,12rem)] overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #2A072A, #110311)" }}
      aria-labelledby="testimonials-heading"
    >
      <RevealGroup as="div" className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 flex flex-col items-center" style={{ gap: "clamp(48px, 8vw, 100px)" }}>

        {/* Centered headline */}
        <h2
          id="testimonials-heading"
          className="font-mono text-on-plum text-center"
          style={{ fontSize: "clamp(32px, 5.5vw, 52px)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.03em" }}
        >
          <span className="block"><RevealItem index={0} stagger={110} duration={520} display="block">From people with</RevealItem></span>
          <span className="block"><RevealItem index={1} stagger={110} duration={520} display="block">better things to do</RevealItem></span>
          <span className="block"><RevealItem index={2} stagger={110} duration={520} display="block">than write reviews.</RevealItem></span>
        </h2>

        {/* 3-card row */}
        <div className="flex items-center justify-center w-full" style={{ gap: "40px" }}>
          {/* Left peek */}
          <div className="hidden md:block flex-shrink-0 opacity-50 relative z-0" style={{ width: "clamp(200px, 28vw, 400px)" }}>
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src={testimonials[0].image}
                alt={testimonials[0].name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Center — active card with frame border */}
          <div
            className="flex-shrink-0 relative z-10"
            style={{ width: "clamp(280px, 50vw, 640px)", border: "20px solid rgba(255,255,255,0.2)" }}
          >
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src={testimonials[1].image}
                alt={testimonials[1].name}
                fill
                className="object-cover"
                priority
              />

              {/* Play button */}
              <button
                type="button"
                aria-label={`Play testimonial from ${testimonials[1].name}`}
                className="absolute inset-0 flex items-center justify-center group"
              >
                <svg
                  width="56"
                  height="64"
                  viewBox="0 0 56 64"
                  fill="none"
                  aria-hidden="true"
                  className="transition-transform group-hover:scale-105 drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
                >
                  <path d="M0 0 L56 32 L0 64 Z" fill="#ffffff" />
                </svg>
              </button>

              {/* Name + role overlay */}
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-6 pb-5 text-white">
                <span
                  className="font-sans"
                  style={{ fontSize: "18px", fontWeight: 500, letterSpacing: "-0.01em" }}
                >
                  {testimonials[1].name}
                </span>
                <span
                  className="font-sans"
                  style={{ fontSize: "14px", opacity: 0.85 }}
                >
                  {testimonials[1].role}
                </span>
              </div>
            </div>
          </div>

          {/* Right peek */}
          <div className="hidden md:block flex-shrink-0 opacity-50 relative z-0" style={{ width: "clamp(200px, 28vw, 400px)" }}>
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src={testimonials[2].image}
                alt={testimonials[2].name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </RevealGroup>
    </section>
  );
}
