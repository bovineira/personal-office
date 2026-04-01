"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeUp, softSpring } from "@/lib/motion";

const WHATSAPP = "https://wa.me/5511987150043";

const plans = [
  {
    name: "Light",
    price: "R$ 280,00",
    highlight: true,
    lines: [
      "Utilização de 2h sala de reunião",
      "Utilização de 8h - sala executiva",
      "Uso em cartão, site e mídias sociais, portaria e gerenciamento de correspondência.",
    ],
  },
  {
    name: "Endereço comercial e fiscal",
    price: "R$ 200,00",
    highlight: false,
    lines: [
      "Apenas para empresas prestadores de serviço sem Inscrição Estadual",
      "Uso em cartão, site e mídias sociais, portaria e gerenciamento de correspondência.",
    ],
  },
  {
    name: "Atendimento telefônico exclusivo",
    price: "R$ 100,00",
    highlight: false,
    lines: [
      "Fornecimento de linha exclusiva e atendimento com script personalizado",
      "Uso em cartão, site e mídias sociais, portaria e gerenciamento de correspondência.",
    ],
  },
];

/** Dobra 3 — Pricing cards com destaque no plano Light. */
export function Plans() {
  return (
    <section className="relative bg-geometric-subtle py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={softSpring}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            Planos que cabem no seu negócio.
          </h2>
          <p className="mt-4 text-lg text-zinc-600 md:text-xl">
            escolha o plano ideal para você. -Escritório Virtual: a partir de R$ 200/mês
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ ...softSpring, delay: i * 0.1 }}
              className="relative flex flex-col rounded-3xl bg-white/90 p-8 shadow-xl ring-2 ring-[#F58220] backdrop-blur-md transition-shadow duration-300 hover:shadow-2xl hover:shadow-[0_24px_60px_-12px_rgba(245,130,32,0.25)]"
            >
              <h3 className="font-display text-xl font-bold text-zinc-900">{plan.name}</h3>
              <p className="mt-4 font-display text-3xl font-bold text-[#00829A]">{plan.price}</p>
              <ul className="mt-6 flex flex-1 flex-col gap-4 text-sm leading-relaxed text-zinc-600 md:text-base">
                {plan.lines.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-0.5 shrink-0 text-[#00829A]">
                      <Check className="h-5 w-5" strokeWidth={2} aria-hidden />
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14 flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={softSpring}
        >
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer inline-flex items-center justify-center rounded-2xl bg-[#F58220] px-10 py-4 text-base font-semibold text-white shadow-2xl transition-transform duration-300 hover:scale-[1.02] hover:animate-pulse focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F58220]"
          >
            Valores válidos por tempo determinado – aproveite agora!
          </a>
          <p className="max-w-3xl text-center text-lg leading-relaxed text-zinc-700">
            Planos flexíveis, acessíveis e pensados para diferentes perfis de profissionais e
            empresas. Aqui, você encontra a solução certa para cada fase do seu negócio.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
