"use client";

import { motion } from "framer-motion";
import { Award, Focus, Wifi, MapPin, CalendarClock, Handshake } from "lucide-react";
import { fadeUp, softSpring } from "@/lib/motion";
import { ImageCarousel, type CarouselSlide } from "@/components/landing/ImageCarousel";

const benefits = [
  {
    title: "Autoridade Profissional",
    description:
      "Receber clientes e parceiros em um ambiente executivo reforça a credibilidade do seu trabalho desde o primeiro aperto de mão.",
    icon: Award,
  },
  {
    title: "Espaço Só Seu, Para Focar",
    description:
      "Um ambiente exclusivo para a sua reunião, sem as distrações do home office ou de espaços compartilhados e barulhentos.",
    icon: Focus,
  },
  {
    title: "Estrutura Completa",
    description: "Internet de alta velocidade, ar-condicionado e tudo que você precisa pronto — é só chegar.",
    icon: Wifi,
  },
  {
    title: "Localização Estratégica",
    description:
      "Ao lado do Fórum de Santana, na Zona Norte, com estacionamento coberto e fácil acesso para você e seus clientes.",
    icon: MapPin,
  },
  {
    title: "Flexibilidade Total",
    description: "Alugue só quando precisar — sem contrato longo, sem burocracia e sem taxas escondidas.",
    icon: CalendarClock,
  },
  {
    title: "Atendimento Humano",
    description: "Recepção e portaria prontas para receber você e seus convidados com toda atenção.",
    icon: Handshake,
  },
];

const spaceSlides: CarouselSlide[] = [
  {
    src: "/images/sala-reuniao/sala-reuniao-01.jpeg",
    alt: "Sala de reunião remodelada, climatizada e equipada",
  },
  {
    src: "/images/sala-reuniao/sala-reuniao-02.jpeg",
    alt: "Sala de reunião com mesa de trabalho e ambiente climatizado",
  },
  {
    src: "/images/sala-reuniao/sala-reuniao-03.jpeg",
    alt: "Sala de reunião executiva com mesa de vidro e ambientação moderna",
  },
];

/** Dobra 2 — Benefícios em cards + carrossel de fotos do espaço. */
export function BenefitsSalaReuniao() {
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
            Muito Além de uma{" "}
            <span className="text-gradient-orange">Sala de Reunião</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-600 md:text-xl">
            Um espaço remodelado, pensado para valorizar a forma como você{" "}
            <span className="font-bold text-zinc-900">
              recebe seus clientes e conduz o seu trabalho.
            </span>
          </p>
        </motion.div>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="order-1 grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {benefits.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ ...softSpring, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-zinc-200/90 bg-white/80 p-6 shadow-xl shadow-zinc-900/5 backdrop-blur-sm transition-shadow duration-300 hover:shadow-2xl hover:shadow-[#00829A]/10"
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

          <motion.div
            className="order-2 lg:col-span-5"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={softSpring}
          >
            <ImageCarousel slides={spaceSlides} aspectClassName="aspect-[4/5]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
