import { Benefits } from "@/components/landing/Benefits";
import { FooterCTA } from "@/components/landing/FooterCTA";
import { Hero } from "@/components/landing/Hero";
import { Plans } from "@/components/landing/Plans";
import { Testimonials } from "@/components/landing/Testimonials";

/**
 * Landing SPA — Personal Office
 * Seções: Hero → Benefícios → Planos → Prova social → CTA / Contato.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Plans />
      <Testimonials />
      <FooterCTA />
    </>
  );
}
