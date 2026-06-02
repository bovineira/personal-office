"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { fadeUp, softSpring } from "@/lib/motion";
import { WhatsAppCtaButton } from "@/components/landing/WhatsAppCtaButton";

const quotes = [
  "A localização é perfeita, ao lado do Fórum de Santana, com estacionamento coberto e com seguro.",
  "As salas são ótimas e equipadas, ideais para reuniões importantes.",
  "O atendimento humano faz toda a diferença, sempre prestativo e ágil.",
  "Os preços são justos e me ajudaram a reduzir custos sem perder qualidade.",
];

type TestimonialsProps = {
  /** Exibe CTA de WhatsApp ao final da seção (usado em /teste01). */
  showWhatsAppCta?: boolean;
};

/** Dobra 4 — Depoimentos em grid estilo masonry (alturas variadas). */
export function Testimonials({ showWhatsAppCta = false }: TestimonialsProps) {
  return (
    <section className="relative bg-zinc-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={softSpring}
          className="max-w-3xl"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            20 anos de credibilidade comprovada.
          </h2>
          <p className="mt-4 text-lg text-zinc-600 md:text-xl">
            a confiança de quem já escolheu a Personal Office:
          </p>
        </motion.div>

        <div className="mt-14 columns-1 gap-6 md:columns-2">
          {quotes.map((text, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ ...softSpring, delay: i * 0.08 }}
              className={`mb-6 break-inside-avoid rounded-2xl border border-zinc-200/90 bg-white p-8 shadow-xl shadow-zinc-900/5 ${
                i % 2 === 0 ? "md:mt-0" : ""
              }`}
            >
              <Quote
                className="h-10 w-10 text-[#00829A]"
                strokeWidth={1.25}
                aria-hidden
              />
              <blockquote className="mt-4 text-base leading-relaxed text-zinc-700 md:text-lg">
                &ldquo;{text}&rdquo;
              </blockquote>
            </motion.figure>
          ))}
        </div>

        <motion.p
          className="mt-12 max-w-4xl text-lg font-medium leading-relaxed text-zinc-700 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={softSpring}
        >
          Duas décadas oferecendo profissionalismo, infraestrutura e confiança. O Personal Office
          é referência em escritórios virtuais e salas comerciais na zona norte de São Paulo.
        </motion.p>

        {showWhatsAppCta && (
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={softSpring}
          >
            <WhatsAppCtaButton />
          </motion.div>
        )}
      </div>
    </section>
  );
}
