import { RevealGroup } from "@/components/ui/RevealGroup";
import { RevealItem } from "@/components/ui/RevealItem";
import { RevealWords } from "@/components/ui/RevealWords";

export function MaximumFunctionality() {
  return (
    <section
      className="relative bg-white py-[clamp(5rem,9vw,9rem)]"
      aria-labelledby="functionality-heading"
    >
      <RevealGroup as="div" className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 flex flex-col items-center gap-6 text-center">

        {/* Headline — 2 lines */}
        <h2
          id="functionality-heading"
          className="font-mono text-ink"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          <span className="block">
            <RevealItem index={0} stagger={120} duration={560} display="block">
              Maximum functionality.
            </RevealItem>
          </span>
          <span className="block">
            <RevealItem index={1} stagger={120} duration={560} display="block">
              Minimal footprint.
            </RevealItem>
          </span>
        </h2>

        {/* Subtext */}
        <RevealWords
          text="A thoughtfully designed layout provides all the essential keys and controls while saving valuable desk space for tablets, mice, and creative equipment."
          baseDelay={260}
          stagger={12}
          duration={340}
          className="font-sans text-ink/80 justify-center max-w-[620px]"
          style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)", lineHeight: 1.6 }}
        />

      </RevealGroup>
    </section>
  );
}
