"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Globe } from "lucide-react";
import { fadeUp, softSpring } from "@/lib/motion";
import { WHATSAPP_URL } from "@/lib/whatsapp";

/** Mesmo local do box de contato, em forma que o Google Maps reconhece bem no embed. */
const MAP_ADDRESS_QUERY =
  "Av. Engenheiro Caetano Álvares, 530, Casa Verde, São Paulo, SP, Brasil";

const mapsEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
  MAP_ADDRESS_QUERY
)}&hl=pt-BR&z=17&ie=UTF8&output=embed`;

/** Dobra 5 — CTA final escuro, contato e placeholder do mapa. */
export function FooterCTA() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#004d5c] via-[#003a47] to-[#001a1f] py-24 text-white md:py-32">
      {/* Detalhes decorativos (laranja flutuante) */}
      <div
        className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-[#F58220]/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-32 h-56 w-56 rounded-full bg-[#00829A]/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-1/4 top-1/2 h-40 w-40 rounded-full border border-[#F58220]/20"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={softSpring}
          >
            <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl lg:text-[2.35rem]">
              Condições exclusivas para novos associados.
            </h2>
            <p className="mt-4 text-lg text-teal-100/95 md:text-xl">oferta válida por tempo limitado.</p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-200/95 md:text-lg">
              Credibilidade, estrutura e condições especiais esperam por você no Personal Office.
            </p>

            <motion.div
              className="mt-10"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer inline-flex w-full max-w-md items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-8 py-5 text-lg font-bold text-white shadow-2xl shadow-black/40 ring-2 ring-white/20 transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-xl"
              >
                <MessageCircle className="h-7 w-7 shrink-0" strokeWidth={2} aria-hidden />
                Solicite sua proposta exclusiva
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={softSpring}
          >
            <div className="rounded-3xl border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-[#F58220]">
                Contato
              </p>
              <ul className="mt-6 space-y-5 text-zinc-100">
                <li className="flex gap-3">
                  <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#F58220]" aria-hidden />
                  <div>
                    <span className="text-sm text-teal-200/80">WhatsApp</span>
                    <p className="font-medium">(11) 98715-0043</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#F58220]" aria-hidden />
                  <div>
                    <span className="text-sm text-teal-200/80">Endereço</span>
                    <p className="font-medium leading-relaxed">
                      Av. Engº Caetano Álvares, nº 530 – Casa Verde – São Paulo
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#F58220]" aria-hidden />
                  <div>
                    <span className="text-sm text-teal-200/80">E-mail</span>
                    <p className="font-medium break-all">atendimento@personaloffice.com.br</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Globe className="mt-0.5 h-5 w-5 shrink-0 text-[#F58220]" aria-hidden />
                  <div>
                    <span className="text-sm text-teal-200/80">Site</span>
                    <p className="font-medium">personaloffice.com.br</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Google Maps — endereço Av. Engº Caetano Álvares, 530 (Casa Verde, SP) */}
            <div className="overflow-hidden rounded-3xl border border-white/15 bg-zinc-900/40 shadow-2xl backdrop-blur-md">
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
            </div>
          </motion.div>
        </div>

        <p className="mt-16 text-center text-sm text-teal-200/70">
          © {new Date().getFullYear()} Personal Office. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
