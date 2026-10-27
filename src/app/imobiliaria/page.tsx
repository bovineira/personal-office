import type { Metadata } from "next";
import Image from "next/image";
import { AdvantagesShowcase } from "@/components/landing/AdvantagesShowcase";
import { PartnerForm } from "@/components/landing/PartnerForm";
import { OFFICE_ADDRESS_SHORT } from "@/lib/location";

/**
 * Página de abordagem direta a parceiros: fora do índice do Google para não competir com as
 * páginas de aluguel. Para liberar a indexação, troque para `true`.
 * (O projeto não tem sitemap.xml, então a página também não está em nenhum sitemap.)
 */
const INDEXABLE = false;

export const metadata: Metadata = {
  title: "Parceria para Imobiliárias e Corretores | Personal Office",
  description:
    "Seja parceiro da Personal Office: tenha salas comerciais prontas para indicar aos seus clientes e receba aviso sempre que uma sala ficar disponível.",
  robots: INDEXABLE ? { index: true, follow: true } : { index: false, follow: false },
};

const steps = [
  {
    title: "Você se cadastra",
    description: "Preencha seu nome e CRECI no formulário.",
  },
  {
    title: "Conversamos pelo WhatsApp",
    description: "Alinhamos como a parceria vai funcionar. Condições alinhadas no primeiro contato.",
  },
  {
    title: "Você recebe os avisos",
    description: "Sempre que uma sala ficar disponível, avisamos você para indicar aos seus clientes.",
  },
];

/** LP /imobiliaria — captação de imobiliárias e corretores parceiros (CTA único: WhatsApp). */
export default function ImobiliariaPage() {
  return (
    <main>
      {/* Seção 1 — Hero com formulário */}
      <section className="relative overflow-hidden bg-[#0D3B45]">
        <Image
          src="/images/sala-reuniao/sala-reuniao-02.jpeg"
          alt=""
          fill
          loading="eager"
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0D3B45]/95 via-[#0D3B45]/88 to-[#001a1f]/96"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#00829A]/20 blur-3xl"
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-10 md:px-10 md:py-16 lg:px-8">
          <div className="inline-flex rounded-2xl bg-white px-4 py-2.5 shadow-lg shadow-black/20">
            <Image
              src="/logo-personal-certo-03.svg"
              alt="Personal Office"
              width={578}
              height={150}
              className="h-auto w-[150px] md:w-[180px]"
            />
          </div>

          <div className="mt-10 grid items-center gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="inline-flex items-center rounded-full bg-[#F58220]/15 px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#F58220] ring-1 ring-[#F58220]/30 md:text-sm">
                Parceria para o mercado imobiliário
              </span>
              <h1 className="font-display mt-6 text-[2rem] font-bold leading-tight tracking-tight text-white md:text-5xl md:leading-[1.12]">
                Imobiliárias e corretores: sejam{" "}
                <span className="text-gradient-orange drop-shadow-[0_2px_12px_rgba(245,130,32,0.35)]">
                  parceiros
                </span>{" "}
                da Personal Office
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-white/90 md:text-xl">
                Tenha salas comerciais prontas para indicar aos seus clientes.{" "}
                <span className="font-bold text-white">
                  Avisamos você sempre que uma sala ficar disponível.
                </span>
              </p>
            </div>

            <div id="parceria" className="scroll-mt-6">
              <PartnerForm location="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2 — Por que indicar */}
      <section className="overflow-hidden bg-gradient-to-br from-[#062026] via-[#0A2D36] to-[#04141A] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              Por que indicar as salas da{" "}
              <span className="text-gradient-orange drop-shadow-[0_2px_12px_rgba(245,130,32,0.3)]">
                Personal Office
              </span>
            </h2>
            <p className="mt-4 text-lg text-white/80 md:text-xl">
              Vantagens para o seu cliente que procura uma{" "}
              <span className="font-bold text-white">sala comercial na Zona Norte.</span>
            </p>
          </div>

          <div className="mt-14 md:mt-16">
            <AdvantagesShowcase />
          </div>
        </div>
      </section>

      {/* Seção 3 — Como funciona */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 md:px-10 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
              Como funciona a{" "}
              <span className="text-gradient-orange">parceria</span>
            </h2>
            <p className="mt-4 text-lg text-zinc-600 md:text-xl">
              Três passos simples, <span className="font-bold text-zinc-900">sem burocracia.</span>
            </p>
          </div>

          <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step, i) => (
              <li key={step.title} className="text-center">
                <span
                  className="font-display mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#0D3B45] text-lg font-bold text-white"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <h3 className="font-display mt-5 text-lg font-bold text-zinc-900">
                  <span className="sr-only">Passo {i + 1}: </span>
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-base">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Seção 4 — CTA final + rodapé */}
      <footer className="relative overflow-hidden bg-gradient-to-br from-[#004d5c] via-[#003a47] to-[#001a1f] py-20 text-white md:py-28">
        <div
          className="pointer-events-none absolute -left-16 bottom-24 h-56 w-56 rounded-full bg-[#F58220]/10 blur-3xl"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-xl px-6">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Vamos{" "}
              <span className="text-gradient-orange drop-shadow-[0_2px_12px_rgba(245,130,32,0.3)]">
                fechar parceria?
              </span>
            </h2>
            <p className="mt-4 text-lg text-white/85">
              Cadastre-se e{" "}
              <span className="font-bold text-white">
                receba aviso das salas disponíveis para indicar.
              </span>
            </p>
          </div>

          <div className="mt-10">
            <PartnerForm location="cta_final" />
          </div>

          <address className="mt-14 text-center text-sm not-italic text-white/60">
            {OFFICE_ADDRESS_SHORT}
          </address>
          <p className="mt-2 text-center text-sm text-white/60">
            © {new Date().getFullYear()} Personal Office. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
