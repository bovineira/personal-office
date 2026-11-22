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

/**
 * PÁGINA DE TESTE para aprovação do cliente. Fora do Google (noindex aqui e no cabeçalho HTTP),
 * sem GTM (ver src/app/(site)/layout.tsx), sem links vindos do site e nunca destino de anúncio.
 * Depois de aprovada, este conteúdo substitui o da /sala-reuniao.
 */
export const metadata: Metadata = {
  title: "Sala Comercial para Alugar ao Lado do Fórum de Santana | Personal Office",
  description:
    "Salas comerciais privativas na Zona Norte de SP, ao lado do Fórum de Santana, com valor mensal e estacionamento coberto. Agende sua visita pelo WhatsApp.",
  keywords: null,
  robots: { index: false, follow: false },
};

export default function SalaComercialV2Page() {
  return (
    <EscolhaProvider paginaDeTeste>
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
