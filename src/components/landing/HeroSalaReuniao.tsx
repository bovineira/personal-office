"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { WHATSAPP_URL_SALA_REUNIAO } from "@/lib/whatsapp";

const trustItems = [
  "Salas novas e equipadas",
  "Estacionamento coberto",
  "Disponibilidade imediata",
];

const CTA_LABEL = "Quero Alugar Minha Sala de Reunião →";
const STICKY_DISCLAIMER = "Aproveite sua chance HOJE, pois as salas vão se esgotar logo!";

/** Dobra 1 — Hero da landing /sala-reuniao, com CTA fixo no mobile ao rolar. */
export function HeroSalaReuniao() {
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const el = ctaRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => setShowSticky(!entry.isIntersecting), {
      threshold: 0,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "14%"]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#0D3B45]">
      {/* Foto do escritório misturada ao azul da marca, com leve parallax no scroll */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }} aria-hidden>
        <Image
          src="/images/sala-reuniao/sala-reuniao-02.jpeg"
          alt=""
          fill
          loading="eager"
          className="scale-125 object-cover object-center"
          sizes="100vw"
        />
      </motion.div>
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-br from-[#0D3B45]/95 via-[#0D3B45]/85 to-[#001a1f]/95"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute -right-24 top-0 z-[2] h-96 w-96 rounded-full bg-[#00829A]/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 z-[2] h-72 w-72 rounded-full bg-[#F58220]/10 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-28 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.span
              variants={staggerItem}
              className="inline-flex items-center gap-2 rounded-full bg-[#F58220]/15 px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#F58220] ring-1 ring-[#F58220]/30 md:text-sm"
            >
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Novo: espaço totalmente remodelado
            </motion.span>

            <motion.h1
              variants={staggerItem}
              className="font-display mt-6 text-[2rem] font-bold leading-tight tracking-tight text-white md:text-5xl md:leading-[1.12]"
            >
              <span className="text-gradient-orange drop-shadow-[0_2px_12px_rgba(245,130,32,0.35)]">
                Sala de Reunião
              </span>{" "}
              na Zona Norte, ao Lado do Fórum de Santana
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="mt-5 text-lg leading-relaxed text-white/90 md:text-xl"
            >
              Salas novas, equipadas e climatizadas, prontas pra usar hoje —{" "}
              <span className="font-bold text-white">
                sem contrato longo e sem burocracia.
              </span>{" "}
              Melhor preço da zona norte, estacionamento coberto e mais de 20 anos de estrutura
              consolidada na região.
            </motion.p>

            <motion.div variants={staggerItem} className="mt-9">
              <a
                ref={ctaRef}
                href={WHATSAPP_URL_SALA_REUNIAO}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer inline-flex w-full items-center justify-center rounded-2xl bg-[#F58220] px-8 py-4 text-center text-base font-bold text-white shadow-2xl shadow-black/30 ring-1 ring-white/10 transition-transform duration-300 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F58220] sm:w-auto sm:text-lg"
              >
                {CTA_LABEL}
              </a>

              <p className="mt-4 text-sm font-medium text-white/75 md:text-base">
                {trustItems.join(" · ")}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl shadow-black/40 ring-1 ring-white/10 md:aspect-[16/11]">
              <Image
                src="/images/sala-reuniao/sala-reuniao-01.jpeg"
                alt="Sala de reunião remodelada, climatizada e pronta para uso"
                fill
                preload
                loading="eager"
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA fixo mobile — aparece quando o CTA do Hero sai da tela */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 96, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 96, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#0D3B45]/97 px-4 pb-[max(0.9rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md lg:hidden"
          >
            <a
              href={WHATSAPP_URL_SALA_REUNIAO}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer flex w-full items-center justify-center rounded-2xl bg-[#F58220] px-6 py-3.5 text-center text-sm font-bold text-white shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F58220]"
            >
              {CTA_LABEL}
            </a>
            <p className="mt-2 text-center text-xs font-semibold text-[#F58220]">
              {STICKY_DISCLAIMER}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
