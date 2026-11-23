"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { useWhatsAppUrlFor } from "@/hooks/useWhatsAppUrl";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import type { Sala } from "@/data/salas";

type Escolha = {
  sala: Sala | null;
  escolher: (sala: Sala | null) => void;
  /** Acrescentado ao fim da mensagem em páginas de teste (paginaDeTeste), para não virar lead. */
  sufixoMensagem: string;
};

const EscolhaContext = createContext<Escolha | null>(null);

export function EscolhaProvider({
  children,
  paginaDeTeste = false,
}: {
  children: ReactNode;
  paginaDeTeste?: boolean;
}) {
  const [sala, escolher] = useState<Sala | null>(null);
  const value = useMemo(
    () => ({ sala, escolher, sufixoMensagem: paginaDeTeste ? " (página de teste)" : "" }),
    [sala, paginaDeTeste]
  );
  return <EscolhaContext.Provider value={value}>{children}</EscolhaContext.Provider>;
}

export function useEscolha() {
  const ctx = useContext(EscolhaContext);
  if (!ctx) throw new Error("useEscolha precisa do EscolhaProvider");
  return ctx;
}

/** Link "Agendar visita" com a sala escolhida e a origem da visita na mensagem. */
export function useLinkVisita(salaDoCard?: Sala) {
  const { sala, sufixoMensagem } = useEscolha();
  const alvo = salaDoCard ?? sala;
  const interesse = alvo
    ? ` Tenho interesse em: ${alvo.nome.toLowerCase()} (${alvo.metragem.toLowerCase()}).`
    : "";
  return useWhatsAppUrlFor(WHATSAPP_MESSAGES.aluguel + interesse, sufixoMensagem);
}
