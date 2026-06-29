import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { SectionDivider } from "@/components/ui/SectionDivider";

export function Testimonials() {
  return (
    <section
      className="bg-plum text-on-plum py-[clamp(6rem,12vw,12rem)] border-t border-line-plum"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 flex flex-col items-center gap-16">
        {/* Centered mono headline */}
        <div className="text-center">
          <h2
            id="testimonials-heading"
            className="font-mono text-on-plum leading-[1.1] tracking-tight"
            style={{ fontSize: "var(--text-h1)" }}
          >
            From people with
            <br />
            better things to do
            <br />
            than write reviews.
          </h2>
        </div>

        <TestimonialCarousel className="w-full" />

        <SectionDivider label="§06 — Testimonials" dark />
      </div>
    </section>
  );
}
