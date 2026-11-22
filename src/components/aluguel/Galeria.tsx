"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { fotosEspaco } from "@/data/salas";

/** Galeria de arrastar (scroll nativo) com contador e ampliação em tela cheia. */
export function Galeria() {
  const trilho = useRef<HTMLUListElement>(null);
  const dialogo = useRef<HTMLDialogElement>(null);
  const [atual, setAtual] = useState(0);
  const [ampliada, setAmpliada] = useState(0);
  const total = fotosEspaco.length;

  useEffect(() => {
    const el = trilho.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setAtual(Number((entry.target as HTMLElement).dataset.indice));
        }
      },
      { root: el, threshold: 0.6 }
    );
    for (const item of Array.from(el.children)) observer.observe(item);
    return () => observer.disconnect();
  }, []);

  const irPara = (indice: number) => {
    const el = trilho.current;
    const alvo = el?.children[(indice + total) % total] as HTMLElement | undefined;
    if (!el || !alvo) return;
    el.scrollTo({ left: alvo.offsetLeft - (el.clientWidth - alvo.clientWidth) / 2, behavior: "smooth" });
  };

  const abrir = (indice: number) => {
    setAmpliada(indice);
    dialogo.current?.showModal();
  };
  const trocar = (passo: number) => setAmpliada((i) => (i + passo + total) % total);

  return (
    <section className="bg-[#EEF4F5] py-16 lg:py-24" aria-labelledby="titulo-galeria">
      <div className="mx-auto flex max-w-6xl items-end justify-between gap-6 px-5 sm:px-8">
        <h2
          id="titulo-galeria"
          className="font-display text-balance text-[1.75rem] font-bold leading-tight tracking-[-0.015em] text-[#0D3B45] lg:text-4xl"
        >
          Conheça por dentro
        </h2>
        <p className="shrink-0 text-sm font-semibold tabular-nums text-[#0D3B45]/70" aria-live="polite">
          <span className="text-lg text-[#0D3B45]">{atual + 1}</span> / {total}
        </p>
      </div>

      <ul
        ref={trilho}
        className="trilho mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-[7vw] sm:gap-5 lg:mt-9 lg:px-[max(2rem,calc((100vw-72rem)/2+2rem))]"
      >
        {fotosEspaco.map((foto, i) => (
          <li
            key={foto.src}
            data-indice={i}
            className="w-[86vw] shrink-0 snap-center sm:w-[70vw] lg:w-[min(52rem,64vw)]"
          >
            <button
              type="button"
              onClick={() => abrir(i)}
              className="group relative block h-[58svh] max-h-[34rem] min-h-[20rem] w-full overflow-hidden rounded-3xl bg-[#0D3B45] text-left focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[#00829A]"
              aria-label={`Ampliar foto: ${foto.legenda}`}
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                sizes="(min-width: 1024px) 64vw, 86vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-[#062026]/85 to-transparent px-5 pb-5 pt-20 text-white">
                <span className="text-base font-semibold">{foto.legenda}</span>
                <span className="rounded-full bg-white/15 p-2.5 backdrop-blur-sm">
                  <Maximize2 className="h-4 w-4" aria-hidden />
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className="mx-auto mt-6 hidden max-w-6xl gap-3 px-8 lg:flex">
        <button type="button" aria-label="Foto anterior" onClick={() => irPara(atual - 1)} className="botao-redondo">
          <ChevronLeft className="h-5 w-5" aria-hidden />
        </button>
        <button type="button" aria-label="Próxima foto" onClick={() => irPara(atual + 1)} className="botao-redondo">
          <ChevronRight className="h-5 w-5" aria-hidden />
        </button>
      </div>

      <dialog
        ref={dialogo}
        aria-label="Foto ampliada"
        className="dialogo-foto"
        onClick={(e) => e.target === e.currentTarget && dialogo.current?.close()}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") trocar(-1);
          if (e.key === "ArrowRight") trocar(1);
        }}
      >
        <div className="relative h-[100dvh] w-screen">
          <Image
            src={fotosEspaco[ampliada].src}
            alt={fotosEspaco[ampliada].alt}
            fill
            sizes="100vw"
            className="object-contain"
          />
          <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-5 pb-8 pt-14 text-center font-semibold text-white">
            {fotosEspaco[ampliada].legenda} ({ampliada + 1} de {total})
          </p>
          <button
            type="button"
            aria-label="Fechar"
            onClick={() => dialogo.current?.close()}
            className="botao-redondo absolute right-4 top-4"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Foto anterior"
            onClick={() => trocar(-1)}
            className="botao-redondo absolute left-3 top-1/2 -translate-y-1/2"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Próxima foto"
            onClick={() => trocar(1)}
            className="botao-redondo absolute right-3 top-1/2 -translate-y-1/2"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </dialog>
    </section>
  );
}
