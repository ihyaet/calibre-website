import Image from "next/image";

export function CreativeWorkflow() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ marginBottom: "-100px" }}
      aria-labelledby="workflow-heading"
    >
      {/* Background */}
      <Image
        src="/var-bg.png"
        alt=""
        fill
        aria-hidden="true"
        className="object-cover -z-10 select-none pointer-events-none"
      />

      {/* Bottom overlay — fade to next section */}
      <div
        className="absolute left-0 right-0 bottom-0 pointer-events-none z-0"
        style={{ height: "600px", background: "linear-gradient(to bottom, rgba(42,7,42,0), #2A072A 70%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 pt-20 flex flex-col">

        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-10 pb-10">
          <h2
            id="workflow-heading"
            className="font-mono text-ink"
            style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.2 }}
          >
            Where Creativity Meets Control
          </h2>
          <p
            className="font-sans text-ink/80 md:text-right max-w-[360px]"
            style={{ fontSize: "14px", lineHeight: 1.5 }}
          >
            A smarter workspace for designers, editors,<br />streamers, and digital creators.
          </p>
        </div>

        {/* Oversized headline — infinite marquee */}
        <div
          className="relative mt-16 overflow-hidden"
          style={{ marginLeft: "-10vw", marginRight: "-10vw" }}
          aria-label="Your Everyday Tools"
        >
          <div className="flex whitespace-nowrap calibre-marquee">
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className="font-mono text-ink shrink-0 pr-[0.3em]"
                style={{
                  fontSize: "clamp(60px, 14vw, 158px)",
                  fontWeight: 300,
                  letterSpacing: "-0.1em",
                  lineHeight: 1,
                }}
                aria-hidden={i > 0}
              >
                Your Everyday Tools —
              </span>
            ))}
          </div>
          <style>{`
            @keyframes calibre-marquee-scroll {
              from { transform: translate3d(0, 0, 0); }
              to { transform: translate3d(-50%, 0, 0); }
            }
            .calibre-marquee {
              animation: calibre-marquee-scroll 30s linear infinite;
              will-change: transform;
            }
            @media (prefers-reduced-motion: reduce) {
              .calibre-marquee { animation: none; }
            }
          `}</style>
        </div>

        {/* Keyboard render */}
        <div className="relative w-full flex justify-center -mt-[10vw]">
          <div className="relative w-[88%] aspect-[4/5]">
            <Image
              src="/var-1.png"
              alt="Calibre keyboard with monitor showing video editing timeline mirrored on the LCD strip"
              fill
              className="object-contain"
              sizes="(min-width: 1440px) 1200px, 90vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
