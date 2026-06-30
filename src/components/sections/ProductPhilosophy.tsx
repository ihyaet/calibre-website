import Image from "next/image";

export function ProductPhilosophy() {
  return (
    <section
      className="relative py-[clamp(6rem,10vw,10rem)] bg-white overflow-hidden"
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

        {/* Five-card carousel row */}
        <div className="flex items-center justify-center w-full lg:scale-150 origin-center" style={{ gap: "13px" }}>

          {/* Far left peek */}
          <div className="hidden md:block flex-shrink-0 w-[14%] opacity-40 relative z-0">
            <div className="w-full aspect-[4/5] bg-[#F5F5F7] overflow-hidden flex items-center justify-center">
              <Image
                src="/feature-bg-2.png"
                alt="Mechanical switch detail"
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Left peek — MAC/WIN toggle */}
          <div className="flex-shrink-0 w-[20%] opacity-60 relative z-0">
            <div className="w-full aspect-[4/5] bg-[#F5F5F7] overflow-hidden flex items-center justify-center">
              <Image
                src="/feature-bg-1.png"
                alt="MAC/WIN toggle switch on Calibre keyboard side"
                width={600}
                height={750}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center — active card with gradient border */}
          <div
            className="flex-shrink-0 w-[28%] relative z-10 p-[1px]"
            style={{
              background: "linear-gradient(to bottom, #622CC2, #C22C90)",
              borderRadius: "0px",
            }}
          >
            <div className="w-full aspect-square bg-[#F5F5F7] overflow-hidden">
              <Image
                src="/feature-bg.png"
                alt="Calibre keyboard showing 9:80 clock and purple waveform on LCD strip with violet-backlit WASD keys"
                width={900}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right peek — mechanical switch */}
          <div className="flex-shrink-0 w-[20%] opacity-60 relative z-0">
            <div className="w-full aspect-[4/5] bg-[#F5F5F7] overflow-hidden flex items-center justify-center">
              <Image
                src="/feature-bg-2.png"
                alt="Tactile mechanical switch cross-section"
                width={600}
                height={750}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Far right peek */}
          <div className="hidden md:block flex-shrink-0 w-[14%] opacity-40 relative z-0">
            <div className="w-full aspect-[4/5] bg-[#F5F5F7] overflow-hidden flex items-center justify-center">
              <Image
                src="/feature-bg-1.png"
                alt="MAC/WIN toggle detail"
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

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
