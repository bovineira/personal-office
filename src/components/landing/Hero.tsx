"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";

const WHATSAPP = "https://wa.me/5511987150043";

/**
 * Dobra 1 — Hero com imagem de escritório luxuoso, overlay em teal/preto e CTAs premium.
 */
export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Imagem de fundo + overlay em gradiente */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-herosection.png"
          alt="Escritório Personal Office — ambiente moderno e profissional"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#002830]/95 via-[#004d5c]/88 to-black/95"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col justify-center px-6 py-28 md:px-10 lg:px-8">
        <motion.div
          className="max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={staggerItem}
            className="font-display text-3xl font-bold leading-tight tracking-tight text-white drop-shadow-2xl md:text-4xl lg:text-[2.65rem] lg:leading-[1.15]"
          >
            Personal Office: seu{" "}
            <span className="text-[#F58220] drop-shadow-[0_2px_12px_rgba(245,130,32,0.45)]">
              ESCRITÓRIO VIRTUAL
            </span>{" "}
            na melhor localização da{" "}
            <span className="text-[#F58220] drop-shadow-[0_2px_12px_rgba(245,130,32,0.45)]">
              zona norte de São Paulo
            </span>
            , ao lado do Fórum de Santana
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-6 text-lg leading-relaxed text-zinc-100/95 md:text-xl"
          >
            com 20 anos de experiência, oferecemos soluções práticas e profissionais para quem
            busca escritórios compartilhados sem arcar com os altos custos de um escritório
            físico. Tenha todo o conforto, eficiência e infraestrutura que você precisa, pagando o
            que cabe no seu bolso.
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-teal-100/90 md:text-lg"
          >
            Transforme a forma como você trabalha: tenha um endereço de prestígio adequado para
            você, infraestrutura moderna e serviços que elevam a credibilidade do seu negócio.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer group relative inline-flex items-center justify-center rounded-2xl bg-[#F58220] px-8 py-4 text-center text-base font-semibold text-white shadow-2xl shadow-black/30 ring-1 ring-white/10 transition-transform duration-300 hover:scale-[1.03] hover:animate-pulse hover:shadow-[0_0_28px_rgba(245,130,32,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F58220]"
            >
              Garanta seu espaço agora
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border-2 border-[#00829A]/80 bg-white/10 px-8 py-4 text-base font-semibold text-white shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-[#00829A] hover:bg-[#00829A]/25 hover:shadow-[0_12px_40px_rgba(0,130,154,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Solicite sua proposta exclusiva
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
