"use client";

import { useRef } from "react";
import Image from "next/image";
import { Check, Users } from "lucide-react";
import { BotaoVisita } from "@/components/aluguel/BotaoVisita";
import { useEscolha } from "@/components/aluguel/EscolhaContext";
import { PlantaEscala } from "@/components/aluguel/PlantaEscala";
import { salas, textoValor, type Sala } from "@/data/salas";

/** Escolha do tamanho: os chips marcam a sala, levam até o card e mudam a barra fixa. */
export function Salas() {
  const { sala: escolhida, escolher } = useEscolha();
  const trilho = useRef<HTMLUListElement>(null);

  const selecionar = (sala: Sala) => {
    const jaEscolhida = escolhida?.id === sala.id;
    escolher(jaEscolhida ? null : sala);
    if (jaEscolhida) return;
    const el = trilho.current;
    const card = el?.querySelector<HTMLElement>(`[data-sala="${sala.id}"]`);
    if (!el || !card) return;
    el.scrollTo({ left: card.offsetLeft - (el.clientWidth - card.clientWidth) / 2, behavior: "smooth" });
  };

  return (
    <section className="bg-[#0D3B45] py-16 text-white lg:py-24" aria-labelledby="titulo-salas">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2
          id="titulo-salas"
          className="font-display text-balance text-[1.75rem] font-bold leading-tight tracking-[-0.015em] lg:text-4xl"
        >
          Qual tamanho combina com o seu trabalho?
        </h2>
        <p className="mt-3 max-w-[56ch] leading-relaxed text-white/80 lg:text-lg">
          As plantas estão na mesma escala, para você comparar o espaço de verdade.
        </p>

        <div className="mt-6 grid grid-cols-3 gap-1.5 rounded-2xl bg-[#062C35] p-1.5 sm:max-w-md" role="group" aria-label="Tamanho da sala">
          {salas.map((sala) => {
            const ativa = escolhida?.id === sala.id;
            return (
              <button
                key={sala.id}
                type="button"
                aria-pressed={ativa}
                onClick={() => selecionar(sala)}
                className={`min-h-12 rounded-xl px-2 text-sm font-bold capitalize transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF9A45] ${
                  ativa ? "bg-[#F58220] text-[#062026]" : "text-white/85 hover:bg-white/10"
                }`}
              >
                {sala.nome.replace(/^Sala /, "")}
              </button>
            );
          })}
        </div>
      </div>

      <ul
        ref={trilho}
        className="trilho mx-auto mt-7 flex max-w-6xl snap-x snap-mandatory gap-4 overflow-x-auto px-5 py-1.5 sm:px-8 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible"
      >
        {salas.map((sala) => (
          <CardSala
            key={sala.id}
            sala={sala}
            escolhida={escolhida?.id === sala.id}
            aoEscolher={() => selecionar(sala)}
          />
        ))}
      </ul>
      <p className="mx-auto mt-5 max-w-6xl px-5 text-sm leading-relaxed text-white/65 sm:px-8">
        Plantas de exemplo: o formato da sala e os móveis são ilustrativos.
      </p>
    </section>
  );
}

function CardSala({
  sala,
  escolhida,
  aoEscolher,
}: {
  sala: Sala;
  escolhida: boolean;
  aoEscolher: () => void;
}) {
  return (
    <li
      data-sala={sala.id}
      className={`flex w-[84vw] max-w-[22rem] shrink-0 snap-center flex-col overflow-hidden rounded-3xl bg-white text-[#0D3B45] transition-shadow duration-300 lg:w-auto lg:max-w-none ${
        escolhida ? "shadow-[0_0_0_4px_#F58220]" : "shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
      }`}
    >
      <div className="bg-[#072F39] px-3 py-2">
        {sala.fotos.length > 0 ? (
          <div className="trilho -mx-3 -my-2 flex snap-x snap-mandatory overflow-x-auto">
            {sala.fotos.map((foto) => (
              <div key={foto.src} className="relative aspect-[4/3] w-full shrink-0 snap-center">
                <Image src={foto.src} alt={foto.alt} fill sizes="(min-width: 1024px) 33vw, 84vw" className="object-cover" />
              </div>
            ))}
          </div>
        ) : (
          <PlantaEscala planta={sala.planta} titulo={sala.nome} />
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 lg:p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl font-bold">{sala.nome}</h3>
          <p className="shrink-0 text-sm font-bold text-[#006E82]">{sala.metragem}</p>
        </div>
        <p className="mt-2 leading-relaxed text-[#0D3B45]/80">{sala.descricao}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {sala.ideal.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#EEF4F5] px-3 py-1.5 text-sm font-semibold"
            >
              <Users className="h-4 w-4 text-[#006E82]" aria-hidden />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <p className="font-display text-lg font-bold">{textoValor(sala)}</p>
          {sala.valorMensal !== null && sala.valorInclui && (
            <p className="mt-0.5 text-sm text-[#0D3B45]/75">{sala.valorInclui}</p>
          )}
          <BotaoVisita sala={sala} className="mt-4 w-full shadow-none" />
          <button
            type="button"
            aria-pressed={escolhida}
            onClick={aoEscolher}
            className="mt-2 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl text-sm font-bold text-[#006E82] hover:bg-[#EEF4F5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00829A]"
          >
            {escolhida ? (
              <>
                <Check className="h-4 w-4" aria-hidden /> Tamanho escolhido
              </>
            ) : (
              "Escolher este tamanho"
            )}
          </button>
        </div>
      </div>
    </li>
  );
}
