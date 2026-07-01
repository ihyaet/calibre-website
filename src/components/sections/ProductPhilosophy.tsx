import { FeatureCarousel } from "@/components/ui/FeatureCarousel";

export function ProductPhilosophy() {
  return (
    <section
      className="relative py-[clamp(6rem,10vw,10rem)] bg-white overflow-visible"
      aria-labelledby="philosophy-heading"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 flex flex-col items-center" style={{ gap: "clamp(56px, 10vw, 114px)" }}>

        {/* Centered headline */}
        <div className="text-center">
          <h2
            id="philosophy-heading"
            className="font-mono text-ink leading-[1.15]"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 400 }}
          >
            You didn&apos;t lose focus.<br />
            Your tools took it.
          </h2>
        </div>

        {/* Interactive five-card carousel */}
        <FeatureCarousel />

        {/* Stat copy */}
        <p
          className="font-sans text-ink text-center max-w-[520px] leading-relaxed"
          style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}
        >
          It takes an average of 23 minutes to fully return to a task after an interruption. Most of those interruptions? They came from the tools that were supposed to help you.
        </p>

      </div>
    </section>
  );
}
