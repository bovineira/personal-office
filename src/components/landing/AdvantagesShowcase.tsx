"use client";

import { useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Award,
  ChevronLeft,
  ChevronRight,
  ConciergeBell,
  KeyRound,
  MapPinned,
  Sparkles,
  SquareParking,
  type LucideIcon,
} from "lucide-react";

type Advantage = {
  tag: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

// TODO (Denis): confirmar se os itens abaixo valem para as salas que serão indicadas pelos parceiros.
const advantages: Advantage[] = [
  {
    tag: "Localização",
    title: "Localização estratégica",
    description:
      "Av. Engº Caetano Álvares, 530, Casa Verde — ao lado do Fórum de Santana, na Zona Norte de São Paulo.",
    icon: MapPinned,
  },
  {
    tag: "Comodidade",
    title: "Estacionamento coberto",
    description: "Mais facilidade para o seu cliente receber visitas e atender os clientes dele.",
    icon: SquareParking,
  },
  {
    tag: "Estrutura",
    title: "Salas novas e equipadas",
    description: "Espaço totalmente remodelado, com salas equipadas e climatizadas, prontas para usar.",
    icon: Sparkles,
  },
  {
    // TODO (Denis): hoje o site diz "sem contrato longo e sem burocracia" para salas de reunião — confirmar para as demais salas.
    tag: "Flexibilidade",
    title: "Sem contrato longo",
    description: "Locação sem contrato longo e sem burocracia, do jeito que o cliente precisa.",
    icon: KeyRound,
  },
  {
    tag: "Atendimento",
    title: "Atendimento humano",
    description: "Recepção e portaria prontas para receber o seu cliente e os convidados dele.",
    icon: ConciergeBell,
  },
  {
    tag: "Tradição",
    title: "Mais de 20 anos de estrutura",
    description: "Estrutura consolidada na região há mais de 20 anos.",
    icon: Award,
  },
];

const total = advantages.length;

/** Cor de fundo do card conforme a profundidade na pilha (0 = frente). */
const cardBackground = ["#ffffff", "#d9dee1", "#b7c0c5"];

const textItem: Variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 26 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  exit: (dir: number) => ({ opacity: 0, x: dir * -18, transition: { duration: 0.22 } }),
};

const textContainer: Variants = {
  enter: {},
  center: { transition: { staggerChildren: 0.07 } },
  exit: { transition: { staggerChildren: 0.02 } },
};

function Card({ item, number }: { item: Advantage; number: number }) {
  const Icon = item.icon;
  return (
    <div className="flex h-full flex-col rounded-[2rem] p-4 md:p-5">
      <div className="relative aspect-[4/3.7] overflow-hidden rounded-[1.4rem] bg-gradient-to-br from-[#00829A] via-[#0D3B45] to-[#062026]">
        <div
          className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#F58220]/30 blur-2xl"
          aria-hidden
        />
        <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
          <span className="absolute h-40 w-40 rounded-full border border-white/10 md:h-48 md:w-48" />
          <span className="absolute h-60 w-60 rounded-full border border-white/[0.07] md:h-72 md:w-72" />
          <span className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/25 backdrop-blur-sm">
            <Icon className="h-11 w-11 text-white" strokeWidth={1.4} />
          </span>
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-[#F58220] px-2.5 py-1 text-[11px] font-bold text-[#062026]">
          {String(number).padStart(2, "0")}
        </span>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <p className="font-display text-base font-bold leading-snug text-zinc-900 md:text-lg">
          {item.title}
        </p>
        <p className="mt-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#C2570C]">
          {item.tag}
        </p>
      </div>
    </div>
  );
}

/** Vantagens em cards empilhados + painel de texto que troca com animação suave. */
export function AdvantagesShowcase() {
  const reduceMotion = useReducedMotion();
  const [[active, direction], setState] = useState<[number, number]>([0, 1]);

  const go = (dir: 1 | -1) => setState(([i]) => [(i + dir + total) % total, dir]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") go(1);
    if (event.key === "ArrowLeft") go(-1);
  };

  const stackTransition = reduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 170, damping: 24, mass: 0.9 };

  const current = advantages[active];

  return (
    <div
      role="region"
      aria-roledescription="carrossel"
      aria-label="Vantagens de indicar as salas da Personal Office"
      onKeyDown={handleKeyDown}
      className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8"
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="relative mx-auto h-[390px] w-[250px] sm:h-[430px] sm:w-[280px] md:h-[470px] md:w-[320px]"
          style={{ touchAction: "pan-y" }}
          onPanEnd={(_, info) => {
            if (info.offset.x < -50) go(1);
            else if (info.offset.x > 50) go(-1);
          }}
          aria-hidden
        >
          {advantages.map((item, i) => {
            const rel = (i - active + total) % total;
            const depth = Math.min(rel, 2);
            return (
              <motion.div
                key={item.title}
                className="absolute inset-0 rounded-[2rem] shadow-2xl shadow-black/40"
                style={{ zIndex: total - rel }}
                initial={false}
                animate={{
                  x: `${depth * 9}%`,
                  y: `${depth * -2.5}%`,
                  rotate: depth * 5,
                  scale: 1 - depth * 0.035,
                  opacity: rel > 2 ? 0 : 1,
                  backgroundColor: cardBackground[depth],
                }}
                transition={stackTransition}
              >
                <Card item={item} number={i + 1} />
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-8 flex items-center gap-5">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Vantagem anterior"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#062026] shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F58220]"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <span className="min-w-14 text-center text-sm font-semibold tracking-widest text-white/80" aria-hidden>
            {active + 1} / {total}
          </span>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Próxima vantagem"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#062026] shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F58220]"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </div>

      <div className="min-h-[220px] text-center lg:min-h-[260px] lg:pl-8 lg:text-left" aria-live="polite" aria-atomic="true">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={active}
            custom={direction}
            variants={reduceMotion ? undefined : textContainer}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <motion.p
              custom={direction}
              variants={reduceMotion ? undefined : textItem}
              className="text-sm font-bold uppercase tracking-[0.2em] text-[#F58220]"
            >
              <span className="sr-only">Vantagem {active + 1} de {total}: </span>
              {current.tag}
            </motion.p>
            <motion.h3
              custom={direction}
              variants={reduceMotion ? undefined : textItem}
              className="font-display mt-3 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl"
            >
              {current.title}
            </motion.h3>
            <motion.p
              custom={direction}
              variants={reduceMotion ? undefined : textItem}
              className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-white/80 lg:mx-0"
            >
              {current.description}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
