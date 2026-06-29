"use client";

import { cn } from "@/lib/utils";
import { PRODUCTS } from "@/data/products";
import { CtaButton } from "./CtaButton";
import { useState } from "react";
import { ImageCard } from "./ImageCard";

interface ProductVariantSelectorProps {
  className?: string;
}

export function ProductVariantSelector({ className }: ProductVariantSelectorProps) {
  const [selected, setSelected] = useState(0);
  const product = PRODUCTS[selected];

  return (
    <div className={cn("flex flex-col lg:flex-row gap-12 lg:gap-16 items-start", className)}>
      {/* Left: title + thumb rail */}
      <div className="flex flex-col gap-8 lg:w-64 flex-shrink-0">
        <div className="flex flex-col gap-2">
          <h2 className="font-mono text-on-plum" style={{ fontSize: "var(--text-h1)" }}>
            Choose your Calibre
          </h2>
          <p className="font-sans text-mute-plum" style={{ fontSize: "var(--text-small)" }}>
            Four keyboards, one philosophy. Pick the one that matches how you work.
          </p>
        </div>

        {/* Thumbnail rail */}
        <nav aria-label="Keyboard model selector">
          <ul className="flex flex-col gap-2">
            {PRODUCTS.map((p, i) => (
              <li key={p.id}>
                <button
                  onClick={() => setSelected(i)}
                  aria-pressed={i === selected}
                  className={cn(
                    "w-full flex items-center gap-3 p-3 text-left transition-colors duration-150",
                    "border border-transparent",
                    i === selected
                      ? "border-violet-border bg-plum-elev"
                      : "hover:bg-plum-elev/50"
                  )}
                >
                  <div
                    className={cn(
                      "w-1 self-stretch flex-shrink-0 rounded-full transition-colors",
                      i === selected ? "bg-violet" : "bg-line-plum"
                    )}
                  />
                  <div className="flex flex-col">
                    <span className="font-mono text-[length:var(--text-label)] text-on-plum uppercase tracking-widest">
                      {p.name}
                    </span>
                    <span className="font-mono text-[length:var(--text-label)] text-mute-plum mt-0.5">
                      {p.priceLabel}
                    </span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Right: main render */}
      <div className="flex-1 flex flex-col gap-6">
        <div className="relative">
          <ImageCard
            src={product.render}
            alt={product.name}
            width={900}
            height={600}
            placeholder
            className="w-full aspect-[3/2]"
          />
          <div className="absolute bottom-6 right-6">
            <CtaButton href="#" size="md" />
          </div>
        </div>
        <div className="flex items-baseline justify-between border-t border-line-plum pt-4">
          <span className="font-mono text-on-plum" style={{ fontSize: "var(--text-h3)" }}>
            {product.name}
          </span>
          <span className="font-mono text-violet tracking-widest" style={{ fontSize: "var(--text-h3)" }}>
            {product.priceLabel}
          </span>
        </div>
        <p className="font-sans text-mute-plum" style={{ fontSize: "var(--text-small)" }}>
          {product.description}
        </p>
      </div>
    </div>
  );
}
