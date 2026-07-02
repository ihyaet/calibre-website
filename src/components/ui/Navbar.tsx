"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";

const NAV_LEFT = [
  { label: "About", href: "#" },
  { label: "Product", href: "#product" },
];
const NAV_RIGHT = [
  { label: "Resource", href: "#" },
  { label: "Contact", href: "#" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 motion-reduce:!translate-y-0",
        scrolled
          ? "bg-paper/95 backdrop-blur border-b border-line shadow-sm"
          : "bg-transparent"
      )}
      style={{
        transform: entered ? "translateY(0)" : "translateY(-100%)",
        transition:
          "transform 700ms cubic-bezier(0.16,1,0.3,1), background-color 300ms, border-color 300ms, box-shadow 300ms",
      }}
    >
      <nav
        className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Left */}
        <ul className="hidden lg:flex items-center gap-8 flex-1">
          {NAV_LEFT.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-sans text-[18px] tracking-normal text-ink hover:opacity-70 transition-opacity"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Wordmark */}
        <a
          href="/"
          className="text-ink text-lg tracking-tight font-semibold font-sans lg:font-mono lg:absolute lg:left-1/2 lg:-translate-x-1/2"
          aria-label="Calibre home"
        >
          Calibre.
        </a>

        {/* Right */}
        <ul className="hidden lg:flex items-center gap-8 flex-1 justify-end">
          {NAV_RIGHT.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-sans text-[18px] tracking-normal text-ink hover:opacity-70 transition-opacity"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden ml-auto text-ink"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-paper border-t border-line px-6 py-6 flex flex-col gap-4">
          {[...NAV_LEFT, ...NAV_RIGHT].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-sans text-ink text-base"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
