"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const proofItems = [
  { icon: "📍", text: "Ao lado do Fórum de Santana" },
  { icon: "🅿️", text: "Estacionamento coberto" },
  { icon: "🔒", text: "Recebimento de correspondências" },
  { icon: "⚡", text: "Ativação imediata" },
];

/**
 * Hero A/B — variante /teste01 para tráfego Google Ads (coworking / endereço comercial).
 */
export function HeroTeste01() {
  return (
    <section className="relative overflow-hidden bg-[#0D3B45]">
      {/* Background: imagem + degradê azul (mesmo efeito da home) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg-herosection.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#002830]/82 via-[#004d5c]/68 to-black/80"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-0 pt-24 md:px-10 md:pt-28 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Mobile: imagem acima; desktop: texto à esquerda */}
          <motion.div
            className="order-2 lg:order-1"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={staggerItem}
              className="inline-flex items-center rounded-full bg-[#F97316]/15 px-4 py-2 text-sm font-semibold text-[#F97316] ring-1 ring-[#F97316]/30"
            >
              ⭐ 20 anos de experiência • Zona Norte de SP
            </motion.span>

            <motion.h1
              variants={staggerItem}
              className="font-display mt-6 text-[2rem] font-bold leading-tight tracking-tight text-white md:text-5xl md:leading-[1.12]"
            >
              Seu{" "}
              <span className="text-[#F97316] drop-shadow-[0_2px_12px_rgba(249,115,22,0.4)]">
                endereço comercial
              </span>{" "}
              e coworking
              <br />
              <span className="text-[#F97316] drop-shadow-[0_2px_12px_rgba(249,115,22,0.4)]">
                ao lado do Fórum de Santana
              </span>
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="mt-5 text-lg font-normal leading-relaxed text-white/90 md:text-[1.125rem]"
            >
              Sala executiva, endereço fiscal e sala de reunião —{" "}
              <span className="font-bold text-white">tudo no mesmo lugar, sem burocracia.</span>
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="mt-8 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm md:inline-flex md:items-end md:gap-4"
            >
              <div>
                <p className="text-sm text-zinc-300">Planos a partir de:</p>
                <p className="font-display text-3xl font-bold text-[#F97316] md:text-4xl">
                  R$ 100/mês
                </p>
              </div>
              <p className="mt-2 text-sm text-zinc-300 md:mb-1 md:mt-0">
                • Sem fidelidade • Cancele quando quiser
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="mt-8 flex flex-col items-start gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer inline-flex items-center justify-center rounded-full bg-[#F97316] px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-black/30 transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F97316]"
              >
                Ver planos e preços →
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white/90 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                💬 Falar com um consultor pelo WhatsApp
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          >
            <div className="relative h-[260px] w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/40 lg:h-[420px]">
              <Image
                src="/section2-image-v2.webp"
                alt="Sala executiva Personal Office"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Faixa de prova social dentro do hero */}
      <div className="relative z-10 mt-10 border-t border-white/10 bg-white/95">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-zinc-200 md:grid-cols-4 md:divide-y-0">
          {proofItems.map((item) => (
            <div
              key={item.text}
              className="flex min-h-20 flex-col items-center justify-center gap-1 px-4 py-4 text-center md:min-h-[5rem] md:flex-row md:gap-2"
            >
              <span className="text-lg" aria-hidden>
                {item.icon}
              </span>
              <span className="text-xs font-medium leading-snug text-zinc-700 md:text-sm">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
