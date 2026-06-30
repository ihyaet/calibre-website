import Image from "next/image";
import { CtaButton } from "@/components/ui/CtaButton";
import { FOOTER_NAV } from "@/data/footer-nav";
import { FacebookLogo, InstagramLogo, LinkedinLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr";

export function FooterCta() {
  return (
    <footer aria-label="Footer" className="relative">

      {/* Dark top band — headline framed by ruled lines */}
      <div className="relative text-on-plum" style={{ background: "#110311" }}>
        <div className="relative max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 pt-[clamp(4rem,7vw,7rem)]">
          <h2
            className="font-mono text-center text-white py-10"
            style={{ fontSize: "clamp(40px, 8vw, 88px)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.03em" }}
          >
            <span className="relative block">
              Engineered for the
              <span
                className="absolute left-[-100vw] right-[-100vw] h-px bottom-0"
                style={{ background: "rgba(255,255,255,0.4)" }}
                aria-hidden="true"
              />
            </span>
            <span className="relative block">
              hour before the world
              <span
                className="absolute left-[-100vw] right-[-100vw] h-px bottom-0"
                style={{ background: "rgba(255,255,255,0.4)" }}
                aria-hidden="true"
              />
            </span>
            <span className="relative block">
              catches up
              <span
                className="absolute left-[-100vw] right-[-100vw] h-px bottom-0"
                style={{ background: "rgba(255,255,255,0.4)" }}
                aria-hidden="true"
              />
            </span>
          </h2>

          {/* Shop Now knob — anchored to this 1440px container, hangs below */}
          <div className="absolute left-5 sm:left-8 lg:left-10 z-20" style={{ bottom: "clamp(-552px, calc(-150px - 25vw), -150px)" }}>
            <CtaButton href="#" size="lg" />
          </div>
        </div>
      </div>

      {/* CTA + footer with cta-footer.png as background */}
      <div className="relative" style={{ background: "#F2EFEC" }}>
        {/* Background image */}
        <Image
          src="/cta-footer.png"
          alt=""
          fill
          aria-hidden="true"
          className="object-cover object-center select-none pointer-events-none"
          priority={false}
        />

        {/* Foreground content */}
        <div className="relative max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 pb-10 flex flex-col" style={{ minHeight: "min(110vh, 1100px)" }}>

          {/* Spacer to let the bg keyboard breathe */}
          <div className="flex-1" />

          {/* Blank spacer */}
          <div style={{ height: "clamp(200px, 35vw, 500px)" }} aria-hidden="true" />

          {/* Giant ghost marquee */}
          <div
            className="relative overflow-hidden"
            style={{ marginLeft: "-10vw", marginRight: "-10vw", marginTop: "clamp(120px, 22vw, 300px)" }}
            aria-hidden="true"
          >
            <div className="flex whitespace-nowrap calibre-footer-marquee">
              {Array.from({ length: 4 }).map((_, i) => (
                <span
                  key={i}
                  className="font-mono text-white shrink-0 pr-[0.3em]"
                  style={{
                    fontSize: "clamp(96px, 22vw, 268px)",
                    fontWeight: 300,
                    letterSpacing: "-0.06em",
                    lineHeight: 1,
                    opacity: 0.2,
                  }}
                >
                  Creative Workflow, Simplified
                </span>
              ))}
            </div>
            <style>{`
              @keyframes calibre-footer-marquee-scroll {
                from { transform: translate3d(0,0,0); }
                to { transform: translate3d(-50%,0,0); }
              }
              .calibre-footer-marquee {
                animation: calibre-footer-marquee-scroll 60s linear infinite;
                will-change: transform;
              }
              @media (prefers-reduced-motion: reduce) {
                .calibre-footer-marquee { animation: none; }
              }
            `}</style>
          </div>

          {/* Footer row — subcopy+socials on left, nav columns on right */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 pt-16 text-white">

            {/* Left: subcopy + socials */}
            <div className="flex flex-col gap-6">
              <p
                className="font-sans max-w-[380px]"
                style={{ fontSize: "16px", lineHeight: 1.6 }}
              >
                Every key, considered. A screen that whispers — never shouts. Engineered for people who think in long, unbroken stretches.
              </p>
              <div className="flex gap-5 mt-2">
                <a href="#" aria-label="Facebook" className="hover:opacity-70 transition-opacity">
                  <FacebookLogo size={22} weight="fill" />
                </a>
                <a href="#" aria-label="Instagram" className="hover:opacity-70 transition-opacity">
                  <InstagramLogo size={22} />
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:opacity-70 transition-opacity">
                  <LinkedinLogo size={22} weight="fill" />
                </a>
                <a href="#" aria-label="YouTube" className="hover:opacity-70 transition-opacity">
                  <YoutubeLogo size={22} weight="fill" />
                </a>
              </div>
            </div>

            {/* Right: nav columns wrapped together with 40px gap */}
            <div className="flex" style={{ gap: "40px" }}>
              {FOOTER_NAV.map((col) => (
                <div key={col.heading} className="flex flex-col gap-4">
                  <span
                    className="font-sans text-white/70"
                    style={{ fontSize: "15px" }}
                  >
                    {col.heading}
                  </span>
                  <ul className="flex flex-col gap-3">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="font-sans hover:opacity-70 transition-opacity"
                          style={{ fontSize: "15px" }}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t text-white" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
            <span className="font-mono text-white/70" style={{ fontSize: "13px" }}>
              © 2026 Calibre Inc.
            </span>
            <div className="flex gap-8">
              <a href="#" className="font-sans text-white/70 hover:text-white transition-colors" style={{ fontSize: "13px" }}>
                Cookies Policy
              </a>
              <a href="#" className="font-sans text-white/70 hover:text-white transition-colors" style={{ fontSize: "13px" }}>
                Privacy Policy
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
