import type { Metadata } from "next";
import { HeroSalaReuniao } from "@/components/landing/HeroSalaReuniao";
import { BenefitsSalaReuniao } from "@/components/landing/BenefitsSalaReuniao";
import { SocialProofSalaReuniao } from "@/components/landing/SocialProofSalaReuniao";
import { LocationSalaReuniao } from "@/components/landing/LocationSalaReuniao";

export const metadata: Metadata = {
  title: "Sala Comercial para Alugar ao Lado do Fórum de Santana | Personal Office",
  description:
    "Salas comerciais privativas na Zona Norte de SP, ao lado do Fórum de Santana, com valor mensal e estacionamento coberto. Agende sua visita pelo WhatsApp.",
  keywords: [
    "sala comercial para alugar",
    "aluguel de sala comercial zona norte",
    "sala comercial perto do fórum de santana",
    "escritório para alugar zona norte",
    "sala comercial casa verde",
    "Personal Office",
  ],
};

/**
 * Landing /sala-reuniao — aluguel mensal de sala comercial (Frente 2 do Google Ads), com
 * message-match em "sala comercial para alugar". Um único CTA (WhatsApp) repetido no Hero
 * e no CTA fixo mobile; sem navegação concorrente (sem Área do Cliente).
 */
export default function SalaReuniaoPage() {
  return (
    <>
      <HeroSalaReuniao />
      <BenefitsSalaReuniao />
      <SocialProofSalaReuniao />
      <LocationSalaReuniao />
    </>
  );
}
