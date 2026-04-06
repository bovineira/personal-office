"use client";

import { motion } from "framer-motion";
import { ExternalLink, UserRound } from "lucide-react";

const CLIENT_AREA_URL = "https://personaloffice.conexa.app";

/**
 * Botão fixo no topo direito para a área do cliente.
 * - Desktop: texto completo + ícone.
 * - Mobile: versão compacta.
 */
export function ClientAreaButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      className="fixed right-4 top-4 z-50 md:right-8 md:top-6"
    >
      <a
        href={CLIENT_AREA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white shadow-2xl shadow-black/25 backdrop-blur-xl transition-all hover:bg-white/15 hover:shadow-[0_18px_55px_rgba(0,0,0,0.38)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:px-5 md:py-3"
        aria-label="Ir para a área do cliente"
      >
        <span className="hidden md:inline">Área do cliente</span>
        <span className="inline md:hidden">Cliente</span>
        <span className="inline-flex items-center gap-2 text-white/90">
          <UserRound className="h-4 w-4 md:h-[18px] md:w-[18px]" aria-hidden />
          <ExternalLink className="h-4 w-4 md:h-[18px] md:w-[18px]" aria-hidden />
        </span>
      </a>
    </motion.div>
  );
}

