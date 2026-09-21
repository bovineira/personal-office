"use client";

import { motion } from "framer-motion";
import { fadeUp, softSpring } from "@/lib/motion";
import { mapsEmbedSrc } from "@/lib/location";

/** Dobra 4 — Localização (sem CTA): reforça confiança geográfica para busca "perto de mim". */
export function LocationSalaReuniao() {
  return (
    <footer className="relative bg-zinc-900 pb-32 pt-20 text-white md:pt-28 lg:pb-28">
      <div className="mx-auto max-w-4xl px-6 md:px-10 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={softSpring}
          className="text-center"
        >
          <h2 className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
            Sua Sala de Reunião na Zona Norte, Bem Aqui do Lado do{" "}
            <span className="text-gradient-orange drop-shadow-[0_2px_12px_rgba(245,130,32,0.3)]">
              Fórum de Santana
            </span>
          </h2>
          <p className="mt-3 text-base text-zinc-300 md:text-lg">
            Av. Engº Caetano Álvares, 530 – Casa Verde, São Paulo —{" "}
            <span className="font-bold text-white">
              fácil acesso e estacionamento coberto.
            </span>
          </p>
        </motion.div>

        <motion.div
          className="mt-10 overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={softSpring}
        >
          <div className="relative aspect-[16/10] w-full min-h-[240px]">
            <iframe
              title="Mapa — Personal Office, Av. Engº Caetano Álvares, 530, Casa Verde, São Paulo"
              src={mapsEmbedSrc}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </motion.div>

        <p className="mt-12 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Personal Office. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
