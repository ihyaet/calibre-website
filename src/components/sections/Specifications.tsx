import { SpecificationTable } from "@/components/ui/SpecificationTable";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { RuledLines } from "@/components/ui/RuledLines";

export function Specifications() {
  return (
    <section
      className="bg-plum text-on-plum py-[clamp(6rem,12vw,12rem)] border-t border-line-plum"
      aria-labelledby="specs-heading"
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <RuledLines dark />
            <h2
              id="specs-heading"
              className="font-mono text-on-plum leading-tight tracking-tight"
              style={{ fontSize: "var(--text-h1)" }}
            >
              For those who want the details.
            </h2>
            <p className="font-sans text-mute-plum" style={{ fontSize: "var(--text-small)" }}>
              Every material choice is a decision. Here's what went into Calibre.
            </p>
          </div>

          {/* Right: spec table */}
          <div>
            <SpecificationTable />
          </div>
        </div>

        <div className="mt-16">
          <SectionDivider label="§05 — Specifications" dark />
        </div>
      </div>
    </section>
  );
}
