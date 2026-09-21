"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeUp, softSpring } from "@/lib/motion";

/**
 * Depoimentos reais já usados hoje no site (mesmos textos da dobra de prova social da home).
 * Trocar/complementar quando o Denis trouxer depoimentos específicos das novas salas.
 */
const testimonials = [
  "A localização é perfeita, ao lado do Fórum de Santana, com estacionamento coberto e com seguro.",
  "As salas são ótimas e equipadas, ideais para reuniões importantes.",
  "O atendimento humano faz toda a diferença, sempre prestativo e ágil.",
  "Os preços são justos e me ajudaram a reduzir custos sem perder qualidade.",
];

const ROTATION_MS = 7000;

/** Dobra 3 — Prova social: nota 5 estrelas + depoimentos passando devagar, um por vez. */
export function SocialProofSalaReuniao() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, ROTATION_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 md:px-10 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={softSpring}
          className="text-center"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            Quem Já Alugou uma{" "}
            <span className="text-gradient-orange">Sala de Reunião</span>, Recomenda
          </h2>
          <p className="mt-4 text-lg text-zinc-600 md:text-xl">
            Veja a experiência de quem já utilizou as{" "}
            <span className="font-bold text-zinc-900">novas salas</span> para reuniões e
            atendimentos.
          </p>
        </motion.div>

        <motion.div
          className="mt-14 rounded-3xl border border-zinc-200/90 bg-zinc-50/60 px-6 py-12 shadow-xl shadow-zinc-900/5 md:px-16 md:py-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={softSpring}
        >
          <div className="flex items-center justify-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.span
                key={i}
                animate={{ opacity: [0.8, 1, 0.8], scale: [1, 1.06, 1] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.18,
                }}
              >
                <Star
                  className="h-5 w-5 text-amber-400 md:h-6 md:w-6"
                  fill="currentColor"
                  strokeWidth={0}
                  aria-hidden
                />
              </motion.span>
            ))}
          </div>

          <div className="mt-8 min-h-[100px] md:min-h-[80px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="flex items-start justify-center gap-3"
              >
                <span
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F58220]"
                  aria-hidden
                />
                <p className="max-w-xl text-left text-lg leading-relaxed text-zinc-700 md:text-xl">
                  {testimonials[index]}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ver depoimento ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-[#F58220]" : "w-1.5 bg-zinc-300 hover:bg-zinc-400"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
