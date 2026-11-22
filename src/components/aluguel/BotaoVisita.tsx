"use client";

import { useLinkVisita } from "@/components/aluguel/EscolhaContext";
import { IconeWhatsApp } from "@/components/aluguel/IconeWhatsApp";
import type { Sala } from "@/data/salas";

type BotaoVisitaProps = {
  sala?: Sala;
  label?: string;
  className?: string;
  id?: string;
};

/** Único CTA da página. Texto escuro sobre laranja para manter o contraste. */
export function BotaoVisita({ sala, label = "Agendar visita", className = "", id }: BotaoVisitaProps) {
  const href = useLinkVisita(sala);
  return (
    <a
      id={id}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-14 items-center justify-center gap-2.5 rounded-2xl bg-[#F58220] px-4 text-base sm:px-7 font-bold text-[#062026] shadow-[0_14px_34px_-12px_rgba(245,130,32,0.75)] transition-[transform,background-color] duration-200 hover:bg-[#ff9338] active:scale-[0.98] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-[#F58220] ${className}`}
    >
      <IconeWhatsApp className="h-5 w-5 shrink-0" />
      {label}
    </a>
  );
}
