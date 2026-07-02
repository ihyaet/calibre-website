"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CtaButton } from "@/components/ui/CtaButton";
import { RevealGroup } from "@/components/ui/RevealGroup";
import { RevealItem } from "@/components/ui/RevealItem";
import { RevealWords } from "@/components/ui/RevealWords";

const variants = [
  {
    id: 0,
    name: "Calibre-01 Standard",
    price: "$99",
    image: "/product-var.png",
    thumb: "/product-var.png",
  },
  {
    id: 1,
    name: "Calibre-01 Pro",
    price: "$149",
    image: "/product-var-1.png",
    thumb: "/product-var-1.png",
  },
  {
    id: 2,
    name: "Calibre-01 Ultra",
    price: "$199",
    image: "/product-var-2.png",
    thumb: "/product-var-2.png",
  },
];

export function ChooseYourCalibre() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = scrollRef.current;
    const item = itemRefs.current[active];
    if (!container || !item) return;
    const top = item.offsetTop - (container.clientHeight - item.clientHeight) / 2;
    container.scrollTo({ top, behavior: "smooth" });
  }, [active]);

  return (
    <section
      id="product"
      className="relative overflow-hidden lg:h-screen"
      style={{ background: "#1E0D22" }}
      aria-labelledby="choose-heading"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 h-full pt-16 pb-16 lg:pb-0 flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">

        {/* Left column */}
        <div className="flex flex-col gap-8 w-full lg:w-[48%] flex-shrink-0">

          {/* Headline — 2 lines */}
          <RevealGroup as="div" className="flex flex-col gap-4">
            <h2
              id="choose-heading"
              className="font-mono text-white"
              style={{ fontSize: "clamp(40px, 7vw, 64px)", fontWeight: 300, lineHeight: "1", letterSpacing: "-0.04em" }}
            >
              <span className="block"><RevealItem index={0} stagger={110} duration={520} display="block">Choose your</RevealItem></span>
              <span className="block"><RevealItem index={1} stagger={110} duration={520} display="block">Calibre</RevealItem></span>
            </h2>
            <RevealWords
              text="Four keyboards, one philosophy. Pick the one that matches how you work."
              baseDelay={240}
              stagger={12}
              duration={340}
              className="font-sans text-white w-full"
              style={{ fontSize: "18px", lineHeight: "1.6" }}
            />
          </RevealGroup>

          {/* Thumbnail rail — 180px wide images, 16:10 ratio, name on right */}
          <div className="hidden lg:flex flex-col gap-3">
            {variants.map((v, i) => (
              <button
                key={v.id}
                onClick={() => setActive(i)}
                className="flex items-start gap-4 text-left focus-visible:outline-none group"
                aria-label={`Select ${v.name}`}
              >
                {/* Thumbnail — 180px wide, 16:10 ratio */}
                <div
                  className="flex-shrink-0 overflow-hidden transition-opacity duration-200"
                  style={{ width: "180px", aspectRatio: "16/10", opacity: active === i ? 1 : 0.4 }}
                >
                  <Image
                    src={v.thumb}
                    alt={v.name}
                    width={180}
                    height={113}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Active indicator — 20px square to the right of the card */}
                <span
                  className="flex-shrink-0 transition-opacity duration-200"
                  style={{ width: "20px", height: "20px", background: "#ffffff", opacity: active === i ? 1 : 0 }}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right column — all variant renders stacked */}
        <div
          ref={scrollRef}
          className="flex-1 flex flex-col gap-5 min-w-0 overflow-y-auto [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {variants.map((v, i) => (
            <div
              key={v.id}
              ref={(el) => { itemRefs.current[i] = el; }}
              className="flex flex-col"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={v.image}
                  alt={v.name}
                  fill
                  className="object-cover"
                  priority={i === 0}
                />
                {active === i && (
                  <div className="hidden lg:block absolute bottom-6 left-8 z-10">
                    <CtaButton href="#" size="lg" />
                  </div>
                )}
              </div>

              <div
                className="flex items-center justify-between pt-4 pb-1"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: "1px" }}
              >
                <span
                  className="font-mono text-white"
                  style={{ fontSize: "clamp(18px, 4vw, 32px)", fontWeight: 300, letterSpacing: "-0.02em" }}
                >
                  {v.name}
                </span>
                <span
                  className="font-mono text-white/70"
                  style={{ fontSize: "clamp(14px, 3vw, 24px)", fontWeight: 300, letterSpacing: "0.04em" }}
                >
                  [ {v.price} ]
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
