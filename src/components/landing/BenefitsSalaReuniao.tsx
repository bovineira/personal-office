"use client";

import { motion } from "framer-motion";
import { Award, Focus, Wifi, MapPin, Users, Handshake } from "lucide-react";
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
      "Uma sala privativa para trabalhar com foco, sem as distrações do home office ou de espaços compartilhados e barulhentos.",
    icon: Focus,
  },
  {
    title: "Estrutura Sob Medida",
    description:
      "Sala climatizada, com internet, limpeza e atendimento telefônico como serviços opcionais, conforme a sua necessidade.",
    icon: Wifi,
  },
  {
    title: "Localização Estratégica",
    description:
      "Ao lado do Fórum de Santana, na Zona Norte, com estacionamento coberto e fácil acesso para você e seus clientes.",
    icon: MapPin,
  },
  {
    title: "Também Para Suas Reuniões",
    description:
      "Trabalhe e faça suas reuniões na mesma sala, com privacidade para receber clientes e parceiros.",
    icon: Users,
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
    alt: "Sala privativa remodelada com duas mesas de trabalho",
  },
  {
    src: "/images/sala-reuniao/sala-reuniao-02.jpeg",
    alt: "Sala privativa com mesa de trabalho e mesa de apoio",
  },
  {
    src: "/images/sala-reuniao/sala-reuniao-03.jpeg",
    alt: "Sala de reunião executiva com mesa de vidro e ambientação moderna",
  },
];

/** Dobra 2 — intro centralizada, carrossel em vitrine e checklist enxuto. */
export function BenefitsSalaReuniao() {
  return (
    <section className="relative bg-geometric-subtle py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-10 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={softSpring}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            Muito Além de uma{" "}
            <span className="text-gradient-orange">Sala Comercial</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-600 md:text-xl">
            Um espaço remodelado, pensado para valorizar a forma como você{" "}
            <span className="font-bold text-zinc-900">
              recebe seus clientes e conduz o seu trabalho.
            </span>
          </p>
        </motion.div>

        {/* Carrossel em vitrine — cheio, acima do checklist */}
        <motion.div
          className="mx-auto mt-14 max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={softSpring}
        >
          <ImageCarousel slides={spaceSlides} aspectClassName="aspect-[16/10]" />
        </motion.div>

        {/* Checklist enxuto — sem cards com borda, ícone alinhado ao texto */}
        <div className="mt-16 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ ...softSpring, delay: i * 0.05 }}
              className="flex items-start gap-4"
            >
              <span className="inline-flex shrink-0 rounded-full bg-[#00829A]/12 p-2.5 text-[#00829A] ring-1 ring-[#00829A]/20">
                <item.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-base font-bold text-zinc-900">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
