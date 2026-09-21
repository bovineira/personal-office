import type { Metadata } from "next";
import { MarqueeBar } from "@/components/landing/MarqueeBar";
import { HeroSalaReuniao } from "@/components/landing/HeroSalaReuniao";
import { BenefitsSalaReuniao } from "@/components/landing/BenefitsSalaReuniao";
import { SocialProofSalaReuniao } from "@/components/landing/SocialProofSalaReuniao";
import { LocationSalaReuniao } from "@/components/landing/LocationSalaReuniao";

export const metadata: Metadata = {
  title: "Sala de Reunião na Zona Norte, ao Lado do Fórum de Santana | Personal Office",
  description:
    "Salas de reunião novas, equipadas e climatizadas na Zona Norte de SP. Estacionamento coberto, disponibilidade imediata e sem contrato longo. Alugue hoje pelo WhatsApp.",
  keywords: [
    "sala de reunião zona norte",
    "sala de reunião santana",
    "sala de reunião perto do fórum de santana",
    "aluguel de sala de reunião sp",
    "sala de reunião casa verde",
    "Personal Office",
  ],
};

/**
 * Landing /sala-reuniao — página dedicada a tráfego de Google Ads com message-match
 * na keyword "sala de reunião zona norte". Um único CTA (WhatsApp) repetido no Hero
 * e no CTA fixo mobile; sem navegação concorrente (sem Área do Cliente).
 */
export default function SalaReuniaoPage() {
  return (
    <>
      <MarqueeBar text="Salas Limitadas - Entre em contato o quanto antes" />
      <HeroSalaReuniao />
      <BenefitsSalaReuniao />
      <SocialProofSalaReuniao />
      <LocationSalaReuniao />
    </>
  );
}
