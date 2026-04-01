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

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-24 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <motion.div
          className="max-w-3xl lg:col-span-7"
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
            na melhor localização da zona norte de São Paulo, ao lado do Fórum de Santana.
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-6 text-lg leading-relaxed text-zinc-100/95 md:text-xl"
          >
            com 20 anos de experiência, oferecemos soluções práticas e profissionais para quem
            busca escritórios sem arcar com os altos custos de um escritório físico.
            <br />
            <br />
            <span className="font-bold text-white">
              Conforto, eficiência e infraestrutura que você precisa,{" "}
              <span className="text-[#F58220]">pagando o que cabe no seu bolso.</span>
            </span>
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-10 flex"
          >
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer group relative inline-flex items-center justify-center rounded-2xl bg-[#F58220] px-8 py-4 text-center text-base font-semibold text-white shadow-2xl shadow-black/30 ring-1 ring-white/10 transition-transform duration-300 hover:scale-[1.03] hover:animate-pulse hover:shadow-[0_0_28px_rgba(245,130,32,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F58220]"
            >
              Garanta seu espaço agora
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 1.02 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.22, ease: "easeOut" }}
          className="relative mt-8 md:mt-10 lg:col-span-5 lg:mt-0"
        >
          {/* Imagem grande com corte natural: topo e base extrapolam a seção. */}
          <div className="relative h-64 w-full overflow-hidden rounded-[2rem] border border-white/15 shadow-[0_20px_55px_rgba(0,0,0,0.34)] sm:h-80 md:h-[28rem] lg:-my-20 lg:h-[112vh] lg:min-h-[760px] lg:rounded-[2.25rem] lg:shadow-[0_28px_80px_rgba(0,0,0,0.42)]">
            <Image
              src="/aperto-mao-session1.webp"
              alt="Aperto de mãos representando parceria profissional"
              fill
              priority
              className="object-cover object-[82%_center]"
              sizes="(min-width: 1024px) 34vw, 100vw"
            />
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
