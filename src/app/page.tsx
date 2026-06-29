import { Hero } from "@/components/sections/Hero";
import { CreativeWorkflow } from "@/components/sections/CreativeWorkflow";
import { ProductPhilosophy } from "@/components/sections/ProductPhilosophy";
import { ChooseYourCalibre } from "@/components/sections/ChooseYourCalibre";
import { Specifications } from "@/components/sections/Specifications";
import { Testimonials } from "@/components/sections/Testimonials";
import { FooterCta } from "@/components/sections/FooterCta";

export default function Home() {
  return (
    <>
      <Hero />
      <CreativeWorkflow />
      <ProductPhilosophy />
      <ChooseYourCalibre />
      <Specifications />
      <Testimonials />
      <FooterCta />
    </>
  );
}
