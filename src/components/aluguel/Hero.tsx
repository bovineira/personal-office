import Image from "next/image";
import { Car, DoorClosed, Landmark } from "lucide-react";
import { BotaoVisita } from "@/components/aluguel/BotaoVisita";

const selos = [
  { icone: Landmark, texto: "Ao lado do Fórum de Santana" },
  { icone: Car, texto: "Estacionamento coberto" },
  { icone: DoorClosed, texto: "Sala privativa" },
];

/** Primeira tela. Sem animação de entrada no texto: ele já vem visível no HTML. */
export function Hero() {
  return (
    <section className="relative isolate flex min-h-[max(100svh,46rem)] flex-col overflow-hidden bg-[#0D3B45] text-white lg:min-h-[min(100svh,860px)]">
      <div className="absolute inset-x-0 top-0 -z-10 h-[max(66svh,30rem)] overflow-hidden lg:inset-y-0 lg:left-[42%] lg:h-auto">
        <Image
          src="/section2-image-v2.webp"
          alt="Sala privativa da Personal Office com mesa de trabalho e mesa de apoio"
          fill
          preload
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="hero-foto object-cover object-[70%_62%] lg:object-[50%_60%]"
        />
        <div
          className="absolute -inset-0.5 bg-[linear-gradient(to_top,#0D3B45_5%,rgba(13,59,69,0.82)_24%,rgba(13,59,69,0.08)_52%,rgba(13,59,69,0.25)_100%)] lg:bg-[linear-gradient(to_right,#0D3B45_2%,rgba(13,59,69,0.55)_22%,rgba(13,59,69,0)_55%)]"
          aria-hidden
        />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 pb-7 pt-5 sm:px-8 lg:justify-center lg:py-12">
        <div className="inline-flex w-fit rounded-xl bg-white px-3.5 py-2 shadow-lg shadow-black/20 lg:absolute lg:top-8">
          <Image
            src="/logo-personal-certo-03.svg"
            alt="Personal Office"
            width={578}
            height={150}
            loading="eager"
            className="h-auto w-[128px] lg:w-[160px]"
          />
        </div>

        <div className="mt-auto lg:mt-0 lg:max-w-[34rem]">
          <h1 className="font-display text-balance text-[2.2rem] font-extrabold leading-[1.06] tracking-[-0.02em] sm:text-5xl lg:text-[3.6rem]">
            Sala comercial para alugar{" "}
            <span className="block text-[#FF9A45]">ao lado do Fórum de Santana</span>
          </h1>
          <p className="mt-4 max-w-[46ch] text-[1.05rem] leading-relaxed text-white/90 lg:mt-6 lg:text-xl">
            Um espaço só seu na Zona Norte, com valor mensal, para trabalhar e receber clientes.
          </p>

          <BotaoVisita
            id="cta-principal"
            label="Agendar visita pelo WhatsApp"
            className="mt-6 w-full sm:w-auto lg:mt-8 lg:min-h-16 lg:px-9 lg:text-lg"
          />

          <ul className="mt-6 grid grid-cols-3 gap-3 border-t border-white/20 pt-5 lg:mt-10 lg:gap-6 lg:pt-7">
            {selos.map(({ icone: Icone, texto }) => (
              <li key={texto} className="text-[0.8rem] font-semibold leading-snug text-white/90 lg:text-sm">
                <Icone className="mb-1.5 h-5 w-5 text-[#FF9A45]" strokeWidth={1.9} aria-hidden />
                {texto}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
