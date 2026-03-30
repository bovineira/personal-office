"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  MapPin,
  FileBadge2,
  Briefcase,
  Users,
} from "lucide-react";
import { fadeUp, softSpring } from "@/lib/motion";

const benefits = [
  {
    title: "Escritório Virtual",
    description:
      "estrutura completa e equipe de atendimento para dar suporte ao seu negócio.",
    icon: Building2,
  },
  {
    title: "Endereço Comercial",
    description:
      "use em cartão de visita, site e redes sociais, com recebimento seguro de correspondências.",
    icon: MapPin,
  },
  {
    title: "Endereço Fiscal",
    description: "atenda às exigências legais e abra sua empresa com tranquilidade.",
    icon: FileBadge2,
  },
  {
    title: "Sala Executiva",
    description: "espaço climatizado com internet e computador.",
    icon: Briefcase,
  },
  {
    title: "Sala de Reunião",
    description: "ambiente profissional ideal para encontros estratégicos.",
    icon: Users,
  },
];

/** Dobra 2 — Benefícios em grid com ícones Lucide e lift no hover. */
export function Benefits() {
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
            Flexibilidade e Planos que cabem no seu negócio.
          </h2>
          <p className="mt-4 text-lg text-zinc-600 md:text-xl">
            Conheça como o Personal Office valoriza seu trabalho com soluções sob medida.
          </p>
        </motion.div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <motion.div
            className="order-2 lg:order-1 lg:col-span-5"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={softSpring}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-zinc-900/15 ring-1 ring-zinc-200/80">
              <Image
                src="/section2-image.webp"
                alt="Sala executiva elegante"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#004d5c]/50 to-transparent"
                aria-hidden
              />
            </div>
          </motion.div>

          <div className="order-1 grid gap-6 sm:grid-cols-2 lg:order-2 lg:col-span-7">
            {benefits.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ ...softSpring, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-zinc-200/90 bg-white/80 p-6 shadow-xl shadow-zinc-900/5 backdrop-blur-sm transition-shadow duration-300 hover:shadow-2xl hover:shadow-[#00829A]/10 sm:col-span-1 last:sm:col-span-2 last:sm:mx-auto last:sm:max-w-md"
              >
                <div className="mb-4 inline-flex rounded-xl bg-[#00829A]/12 p-3 text-[#00829A] ring-1 ring-[#00829A]/20">
                  <item.icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="font-display text-lg font-bold text-zinc-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-base">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.p
          className="mt-16 max-w-4xl text-center text-lg font-medium leading-relaxed text-zinc-700 md:text-xl lg:mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...softSpring, delay: 0.1 }}
        >
          Mais do que um espaço, oferecemos credibilidade, praticidade e apoio completo para que
          você foque no que realmente importa: o crescimento do seu negócio.
        </motion.p>
      </div>
    </section>
  );
}
