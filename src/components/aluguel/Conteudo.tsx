import {
  Car,
  ConciergeBell,
  DoorClosed,
  Headset,
  Plus,
  Quote,
  Snowflake,
  Sparkles,
  Users,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import { BotaoVisita } from "@/components/aluguel/BotaoVisita";
import { depoimentos } from "@/data/salas";
import { mapsEmbedSrc, OFFICE_ADDRESS_SHORT } from "@/lib/location";

const tituloClasse =
  "font-display text-balance text-[1.75rem] font-bold leading-tight tracking-[-0.015em] lg:text-4xl";

type Item = { icone: LucideIcon; titulo: string; texto: string };

const noEspaco: Item[] = [
  { icone: DoorClosed, titulo: "Sala privativa", texto: "Porta fechada e espaço só seu." },
  { icone: Users, titulo: "Reuniões na sua sala", texto: "Privacidade para receber clientes e parceiros." },
  { icone: Car, titulo: "Estacionamento coberto", texto: "Mais conforto para você e para quem visita." },
  { icone: ConciergeBell, titulo: "Recepção e portaria", texto: "Alguém para receber os seus convidados." },
  { icone: Snowflake, titulo: "Salas climatizadas", texto: "Ambiente confortável o dia todo." },
  { icone: Sparkles, titulo: "Espaço remodelado", texto: "Um ambiente que valoriza o seu trabalho." },
];

const opcionais: Item[] = [
  { icone: Wifi, titulo: "Internet", texto: "Na sua sala." },
  { icone: Sparkles, titulo: "Limpeza", texto: "Da sua sala." },
  { icone: Headset, titulo: "Atendimento telefônico", texto: "Com o seu nome." },
];

/** O que o espaço oferece × serviços opcionais. */
export function Estrutura() {
  return (
    <section className="bg-white py-16 text-[#0D3B45] lg:py-24" aria-labelledby="titulo-estrutura">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.7fr_1fr] lg:gap-16">
        <div>
          <h2 id="titulo-estrutura" className={tituloClasse}>
            O que o espaço oferece
          </h2>
          <ul className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {noEspaco.map(({ icone: Icone, titulo, texto }) => (
              <li key={titulo} className="revela flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E1EFF2] text-[#006E82]">
                  <Icone className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                </span>
                <div>
                  <h3 className="font-display font-bold">{titulo}</h3>
                  <p className="mt-0.5 leading-relaxed text-[#0D3B45]/75">{texto}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-[#0D3B45] p-6 text-white lg:p-8">
          <h2 className="font-display text-xl font-bold lg:text-2xl">Serviços opcionais</h2>
          <p className="mt-2 leading-relaxed text-white/80">Você contrata só o que precisar.</p>
          <ul className="mt-6 divide-y divide-white/15">
            {opcionais.map(({ icone: Icone, titulo, texto }) => (
              <li key={titulo} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                <Icone className="h-6 w-6 shrink-0 text-[#FF9A45]" strokeWidth={1.75} aria-hidden />
                <p className="leading-snug">
                  <span className="block font-bold">{titulo}</span>
                  <span className="text-sm text-white/75">{texto}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const passos = [
  { titulo: "Escolha o tamanho", texto: "Veja qual sala combina com o seu trabalho." },
  { titulo: "Agende a visita", texto: "Combine o dia e o horário pelo WhatsApp." },
  { titulo: "Comece a usar", texto: "Gostou? A equipe orienta os próximos passos." },
];

export function ComoFunciona() {
  return (
    <section className="bg-[#EEF4F5] py-16 text-[#0D3B45] lg:py-24" aria-labelledby="titulo-passos">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 id="titulo-passos" className={tituloClasse}>
          Da visita à sua sala
        </h2>
        <ol className="relative mt-9 grid gap-9 lg:grid-cols-3 lg:gap-10">
          <span
            className="absolute bottom-6 left-6 top-6 w-0.5 bg-[#00829A]/25 lg:bottom-auto lg:left-6 lg:right-[33%] lg:top-6 lg:h-0.5 lg:w-auto"
            aria-hidden
          />
          {passos.map((passo, i) => (
            <li key={passo.titulo} className="revela relative flex gap-5 lg:block">
              <span className="font-display flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0D3B45] text-lg font-bold text-white ring-8 ring-[#EEF4F5]">
                {i + 1}
              </span>
              <div className="lg:mt-5">
                <h3 className="font-display text-lg font-bold">{passo.titulo}</h3>
                <p className="mt-1 leading-relaxed text-[#0D3B45]/75">{passo.texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Localizacao() {
  return (
    <section className="bg-[#0D3B45] text-white" aria-labelledby="titulo-local">
      <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
        <div className="px-5 py-16 sm:px-8 lg:py-24">
          <h2 id="titulo-local" className={tituloClasse}>
            Ao lado do Fórum de Santana
          </h2>
          <address className="mt-5 max-w-[40ch] text-lg not-italic leading-relaxed text-white/85">
            {OFFICE_ADDRESS_SHORT}
          </address>
          <p className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 font-semibold">
            <Car className="h-5 w-5 text-[#FF9A45]" aria-hidden />
            Estacionamento coberto no local
          </p>
        </div>
        <div className="relative min-h-[22rem] bg-[#072F39] lg:min-h-full">
          <iframe
            title="Mapa: Personal Office, ao lado do Fórum de Santana"
            src={mapsEmbedSrc}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

export function Depoimentos() {
  return (
    <section className="bg-white py-16 text-[#0D3B45] lg:py-24" aria-labelledby="titulo-depoimentos">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 id="titulo-depoimentos" className={tituloClasse}>
          Quem já usa, recomenda
        </h2>
      </div>
      <ul className="trilho mx-auto mt-7 flex max-w-6xl snap-x snap-mandatory gap-4 overflow-x-auto px-5 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-6 lg:overflow-visible">
        {depoimentos.map((texto) => (
          <li key={texto} className="w-[82vw] max-w-[24rem] shrink-0 snap-center rounded-3xl bg-[#EEF4F5] p-6 lg:w-auto lg:max-w-none lg:p-8">
            <Quote className="h-7 w-7 text-[#F58220]" strokeWidth={1.75} aria-hidden />
            <blockquote className="mt-3 text-lg font-medium leading-relaxed">{texto}</blockquote>
          </li>
        ))}
      </ul>
    </section>
  );
}

const duvidas = [
  {
    p: "Qual é o valor?",
    r: "O valor é mensal e depende do tamanho da sala. Agende a visita pelo WhatsApp para conhecer as opções.",
  },
  {
    p: "O espaço é compartilhado?",
    r: "Não. As salas são privativas.",
  },
  {
    p: "Posso fazer reuniões na sala?",
    r: "Sim. A sala é sua para trabalhar, receber clientes e fazer reuniões com privacidade.",
  },
  {
    p: "Internet e limpeza estão incluídas?",
    r: "São serviços opcionais. Você contrata só o que precisar.",
  },
  {
    p: "Tem estacionamento?",
    r: "Sim, estacionamento coberto no local.",
  },
];

/** Perguntas com <details>: funciona sem JavaScript. */
export function Duvidas() {
  return (
    <section className="bg-[#EEF4F5] py-16 text-[#0D3B45] lg:py-24" aria-labelledby="titulo-duvidas">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <h2 id="titulo-duvidas" className={tituloClasse}>
          Dúvidas rápidas
        </h2>
        <div className="divide-y divide-[#0D3B45]/15 border-y border-[#0D3B45]/15">
          {duvidas.map(({ p, r }) => (
            <details key={p} className="group">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-base font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00829A] lg:text-lg [&::-webkit-details-marker]:hidden">
                {p}
                <Plus
                  className="h-5 w-5 shrink-0 text-[#006E82] transition-transform duration-300 group-open:rotate-45"
                  aria-hidden
                />
              </summary>
              <p className="max-w-[60ch] pb-5 leading-relaxed text-[#0D3B45]/80">{r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaFinal() {
  return (
    <footer className="bg-[#062C35] px-5 pb-10 pt-20 text-center text-white sm:px-8 lg:pt-28">
      <h2 className="font-display mx-auto max-w-[18ch] text-balance text-[2.1rem] font-extrabold leading-[1.1] tracking-[-0.02em] lg:text-5xl">
        Venha ver a sua sala de perto
      </h2>
      <p className="mx-auto mt-4 max-w-[44ch] text-lg leading-relaxed text-white/80">
        Escolha o dia pelo WhatsApp e conheça o espaço pessoalmente.
      </p>
      <BotaoVisita
        id="cta-final"
        label="Agendar visita pelo WhatsApp"
        className="mt-8 w-full max-w-md lg:min-h-16 lg:text-lg"
      />
      <p className="mt-20 text-sm text-white/60">{OFFICE_ADDRESS_SHORT}</p>
      <p className="mt-1 text-sm text-white/60">
        © {new Date().getFullYear()} Personal Office. Todos os direitos reservados.
      </p>
    </footer>
  );
}
