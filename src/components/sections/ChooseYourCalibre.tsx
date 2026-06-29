import { ProductVariantSelector } from "@/components/ui/ProductVariantSelector";
import { SectionDivider } from "@/components/ui/SectionDivider";

export function ChooseYourCalibre() {
  return (
    <section
      id="product"
      className="bg-plum text-on-plum py-[clamp(6rem,12vw,12rem)]"
      aria-labelledby="choose-heading"
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        <ProductVariantSelector />
        <SectionDivider label="§04 — Models" dark />
      </div>
    </section>
  );
}
