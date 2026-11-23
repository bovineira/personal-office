import type { Metadata } from "next";
import { BarraFixa } from "@/components/aluguel/BarraFixa";
import {
  ComoFunciona,
  CtaFinal,
  Depoimentos,
  Duvidas,
  Estrutura,
  Localizacao,
} from "@/components/aluguel/Conteudo";
import { EscolhaProvider } from "@/components/aluguel/EscolhaContext";
import { Galeria } from "@/components/aluguel/Galeria";
import { Hero } from "@/components/aluguel/Hero";
import { Salas } from "@/components/aluguel/Salas";

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
 * Landing /sala-reuniao: aluguel mensal de sala comercial (Frente 2 do Google Ads).
 * Design aprovado pelo cliente em 23/11/2026 (era a página de teste /v2/sala-comercial).
 * Único CTA: "Agendar visita" (links wa.me, medidos pelo GTM do layout do grupo "(site)").
 */
export default function SalaReuniaoPage() {
  return (
    <EscolhaProvider>
      <main>
        <Hero />
        <Galeria />
        <Salas />
        <Estrutura />
        <ComoFunciona />
        <Localizacao />
        <Depoimentos />
        <Duvidas />
      </main>
      <CtaFinal />
      <BarraFixa />
    </EscolhaProvider>
  );
}
