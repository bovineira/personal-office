"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type CarouselSlide = {
  src: string;
  alt: string;
  /** Se presente, renderiza como depoimento sobreposto à imagem (dobra de prova social). */
  quote?: string;
};

type ImageCarouselProps = {
  slides: CarouselSlide[];
  /** Intervalo do autoplay em ms. */
  intervalMs?: number;
  className?: string;
  aspectClassName?: string;
};

/** Carrossel leve de imagens (sem libs externas) — usado nas dobras de espaço e prova social. */
export function ImageCarousel({
  slides,
  intervalMs = 5000,
  className = "",
  aspectClassName = "aspect-[4/3]",
}: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const hasMultiple = slides.length > 1;

  useEffect(() => {
    if (!hasMultiple || paused) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [hasMultiple, paused, intervalMs, slides.length]);

  const goTo = (next: number) => {
    setIndex(((next % slides.length) + slides.length) % slides.length);
  };

  const slide = slides[index];

  return (
    <div
      className={`relative overflow-hidden rounded-3xl shadow-2xl shadow-zinc-900/15 ring-1 ring-zinc-200/80 ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={`relative w-full ${aspectClassName}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.src + index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
            {slide.quote && (
              <>
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
                  aria-hidden
                />
                <blockquote className="absolute inset-x-0 bottom-0 p-6 text-lg font-medium leading-relaxed text-white md:p-8 md:text-xl">
                  &ldquo;{slide.quote}&rdquo;
                </blockquote>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {hasMultiple && (
        <>
          <button
            type="button"
            aria-label="Foto anterior"
            onClick={() => goTo(index - 1)}
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/35 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Próxima foto"
            onClick={() => goTo(index + 1)}
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/35 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>

          <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.src + i}
                type="button"
                aria-label={`Ir para foto ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
