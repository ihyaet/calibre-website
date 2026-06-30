import { Hero } from "@/components/sections/Hero";
import { ProductPhilosophy } from "@/components/sections/ProductPhilosophy";
import { ChooseYourCalibre } from "@/components/sections/ChooseYourCalibre";
import { CreativeWorkflow } from "@/components/sections/CreativeWorkflow";
import { Specifications } from "@/components/sections/Specifications";
import { Testimonials } from "@/components/sections/Testimonials";
import { FooterCta } from "@/components/sections/FooterCta";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductPhilosophy />
      <ChooseYourCalibre />
      <CreativeWorkflow />
      <Specifications />
      <Testimonials />
      <FooterCta />
    </>
  );
}
