import { Benefits } from "@/components/landing/Benefits";
import { ClientAreaButton } from "@/components/landing/ClientAreaButton";
import { FooterCTA } from "@/components/landing/FooterCTA";
import { HeroTeste01 } from "@/components/landing/HeroTeste01";
import { Plans } from "@/components/landing/Plans";
import { Testimonials } from "@/components/landing/Testimonials";

/**
 * Landing SPA — Personal Office (home)
 * Hero otimizado para conversão + demais seções com CTAs de WhatsApp.
 */
export default function Home() {
  return (
    <>
      <ClientAreaButton />
      <HeroTeste01 />
      <Benefits showWhatsAppCta />
      <div id="planos">
        <Plans />
      </div>
      <Testimonials showWhatsAppCta />
      <FooterCTA />
    </>
  );
}
