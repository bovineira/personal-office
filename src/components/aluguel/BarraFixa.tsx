"use client";

import { useEffect, useState } from "react";
import { BotaoVisita } from "@/components/aluguel/BotaoVisita";
import { useEscolha } from "@/components/aluguel/EscolhaContext";

/** Barra fixa com o único CTA. Some enquanto o botão da primeira tela ou o do final está visível. */
export function BarraFixa() {
  const { sala } = useEscolha();
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const alvos = ["cta-principal", "cta-final"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const naTela = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) naTela.add(entry.target);
        else naTela.delete(entry.target);
      }
      setVisivel(naTela.size === 0);
    });
    alvos.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      inert={!visivel}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#062C35]/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md transition-transform duration-300 lg:inset-x-auto lg:bottom-6 lg:right-6 lg:rounded-3xl lg:border lg:p-3 ${
        visivel ? "translate-y-0" : "translate-y-[130%]"
      }`}
    >
      <BotaoVisita
        label={sala ? `Agendar visita · ${sala.nome.toLowerCase()}` : "Agendar visita"}
        className="w-full shadow-none"
      />
    </div>
  );
}
