import React from "react";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { CtaButton } from "@/components/ui/CtaButton";
import { GhostWord } from "@/components/ui/GhostWord";
import { LcdDisplay } from "@/components/ui/LcdDisplay";
import { RuledLines } from "@/components/ui/RuledLines";
import { FOOTER_NAV } from "@/data/footer-nav";
import { FacebookLogo, InstagramLogo, LinkedinLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr";

export function FooterCta() {
  return (
    <footer aria-label="Footer">
      {/* Dark top band — typewriter headline */}
      <div className="bg-plum text-on-plum py-[clamp(4rem,8vw,8rem)] border-t border-line-plum relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 flex flex-col gap-6 relative z-10">
          <RuledLines dark />
          <AnimatedHeadline
            as="h2"
            typewriter
            className="text-on-plum leading-[1.05] tracking-tight"
            style={{ fontSize: "var(--text-display)" } as React.CSSProperties}
          >
            Engineered for the hour before the world catches up
          </AnimatedHeadline>
          <RuledLines dark />
        </div>
      </div>

      {/* Diagonal split — light section with keyboard + CTA */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(170deg, #1E0D22 50%, var(--color-paper) 50%)",
        }}
        aria-label="Shop now section"
      >
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-12 py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Ghost wordmark */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center">
            <GhostWord text="Creative Workflow" className="opacity-[0.05] text-on-plum" />
          </div>

          {/* Keyboard placeholder */}
          <div className="relative flex-1 z-10">
            <div
              className="w-full aspect-[16/9] border border-line-plum bg-plum-elev flex flex-col justify-end p-4"
              aria-label="Calibre keyboard with hand typing, LCD showing app dock"
            >
              <span className="font-mono text-[length:var(--text-label)] text-mute-plum uppercase tracking-widest mb-2">
                App dock mode
              </span>
              <LcdDisplay state="dock" />
            </div>
            <div className="absolute -bottom-4 -right-4 z-20">
              <CtaButton href="#" size="lg" />
            </div>
          </div>

          {/* Right: body copy */}
          <div className="flex-1 z-10 flex flex-col gap-6">
            <p className="font-sans text-ink/70 leading-relaxed" style={{ fontSize: "var(--text-body)" }}>
              Every key, considered. A screen that whispers — never shouts. Engineered for people who think in long, unbroken stretches.
            </p>
          </div>
        </div>
      </div>

      {/* Footer nav */}
      <div className="bg-paper border-t border-line py-16">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-4">
            <span className="font-mono text-ink text-lg font-semibold">Calibre.</span>
            <p className="font-sans text-mute" style={{ fontSize: "var(--text-small)" }}>
              A smarter workspace for designers, editors, streamers, and digital creators.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" aria-label="Facebook" className="text-mute hover:text-ink transition-colors">
                <FacebookLogo size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-mute hover:text-ink transition-colors">
                <InstagramLogo size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-mute hover:text-ink transition-colors">
                <LinkedinLogo size={20} />
              </a>
              <a href="#" aria-label="YouTube" className="text-mute hover:text-ink transition-colors">
                <YoutubeLogo size={20} />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_NAV.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <span className="font-mono text-[length:var(--text-label)] text-ink uppercase tracking-widest">
                {col.heading}
              </span>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-sans text-mute hover:text-ink transition-colors"
                      style={{ fontSize: "var(--text-small)" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 mt-12 pt-6 border-t border-line flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <span className="font-mono text-[length:var(--text-label)] text-mute">
            © 2025 Calibre Inc.
          </span>
          <div className="flex gap-6">
            <a href="#" className="font-sans text-mute hover:text-ink transition-colors" style={{ fontSize: "var(--text-label)" }}>
              Cookies Policy
            </a>
            <a href="#" className="font-sans text-mute hover:text-ink transition-colors" style={{ fontSize: "var(--text-label)" }}>
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
