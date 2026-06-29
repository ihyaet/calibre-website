import { GhostWord } from "@/components/ui/GhostWord";
import { LcdDisplay } from "@/components/ui/LcdDisplay";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { RuledLines } from "@/components/ui/RuledLines";

export function CreativeWorkflow() {
  return (
    <section
      className="relative overflow-hidden py-[clamp(6rem,12vw,12rem)]"
      style={{ background: "var(--wash)" }}
      aria-labelledby="workflow-heading"
    >
      {/* Purple band accents */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #E8DFFE, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #E8DFFE, transparent)" }}
        aria-hidden="true"
      />

      {/* Ghost wordmark */}
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none">
        <GhostWord text="Everyday Tools" className="-translate-x-24" />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <h2
            id="workflow-heading"
            className="font-mono text-ink leading-tight tracking-tight"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Where Creativity
            <br />
            Meets Control
          </h2>
          <p
            className="font-sans text-mute max-w-xs sm:text-right"
            style={{ fontSize: "var(--text-small)" }}
          >
            A smarter workspace for designers, editors, streamers, and digital creators.
          </p>
        </div>

        <RuledLines />

        {/* Main content: laptop + keyboard */}
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Laptop placeholder */}
          <div
            className="lg:col-span-3 aspect-video bg-ink/5 border border-line flex items-center justify-center"
            aria-label="NLE video editor on laptop"
          >
            <div className="flex flex-col items-center gap-3 opacity-30">
              <div className="w-32 h-20 bg-ink/20 rounded-sm" />
              <div className="flex gap-1">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="w-10 h-3 bg-violet/60 rounded-[1px]" />
                ))}
              </div>
            </div>
          </div>

          {/* Keyboard with LCD */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <div
              className="w-full aspect-[16/9] bg-ink/5 border border-line flex flex-col justify-end p-4"
              aria-label="Calibre keyboard with video timeline on LCD strip"
            >
              <span className="font-mono text-[length:var(--text-label)] text-mute uppercase tracking-widest mb-2">
                Timeline mode
              </span>
              <LcdDisplay state="timeline" />
            </div>
            <p className="font-sans text-mute" style={{ fontSize: "var(--text-small)" }}>
              The LCD strip shows your video timeline — clip thumbnails, scrubber, timecode — without leaving your keys.
            </p>
          </div>
        </div>

        <SectionDivider label="§02 — Workflow" />
      </div>
    </section>
  );
}
