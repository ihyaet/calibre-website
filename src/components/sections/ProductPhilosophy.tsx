import { FeatureCarousel } from "@/components/ui/FeatureCarousel";
import { RevealGroup } from "@/components/ui/RevealGroup";
import { RevealItem } from "@/components/ui/RevealItem";
import { RevealWords } from "@/components/ui/RevealWords";

export function ProductPhilosophy() {
  return (
    <section
      className="relative py-[clamp(6rem,10vw,10rem)] bg-white overflow-visible"
      aria-labelledby="philosophy-heading"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 flex flex-col items-center" style={{ gap: "clamp(56px, 10vw, 114px)" }}>

        {/* Centered headline */}
        <RevealGroup as="div" className="text-center">
          <h2
            id="philosophy-heading"
            className="font-mono text-ink leading-[1.15]"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 400 }}
          >
            <span className="block">
              <RevealItem index={0} stagger={120} duration={560} display="block">
                You didn&apos;t lose focus.
              </RevealItem>
            </span>
            <span className="block">
              <RevealItem index={1} stagger={120} duration={560} display="block">
                Your tools took it.
              </RevealItem>
            </span>
          </h2>
        </RevealGroup>

        {/* Interactive five-card carousel */}
        <FeatureCarousel />

        {/* Stat copy */}
        <RevealGroup as="div" className="w-full flex justify-center">
          <RevealWords
            text="It takes an average of 23 minutes to fully return to a task after an interruption. Most of those interruptions? They came from the tools that were supposed to help you."
            stagger={12}
            duration={340}
            className="font-sans text-ink justify-center max-w-[520px] leading-relaxed"
            style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}
          />
        </RevealGroup>

      </div>
    </section>
  );
}
