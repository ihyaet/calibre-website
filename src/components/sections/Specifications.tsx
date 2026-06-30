import { SpecificationTable } from "@/components/ui/SpecificationTable";

export function Specifications() {
  return (
    <section
      className="text-on-plum py-[clamp(6rem,12vw,12rem)]"
      style={{ background: "#2A072A" }}
      aria-labelledby="specs-heading"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <h2
              id="specs-heading"
              className="font-mono text-on-plum"
              style={{ fontSize: "clamp(34px, 5.5vw, 52px)", fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.03em" }}
            >
              For those who want the details.
            </h2>
          </div>

          {/* Right: spec table */}
          <div>
            <SpecificationTable />
          </div>
        </div>

      </div>
    </section>
  );
}
