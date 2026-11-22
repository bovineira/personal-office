/**
 * Dados das salas da página de aluguel. Tudo o que muda (metragem, valor, disponibilidade, fotos)
 * fica aqui: nenhum preço é escrito nos componentes.
 *
 * Situação em 22/11/2026: preços, salas livres e fotos por sala ainda não confirmados.
 * - `valorMensal: null` mostra "Valor sob consulta".
 * - Enquanto não houver sala confirmada, cada card é uma FAIXA de tamanho com planta de exemplo.
 * - Para mostrar uma sala real: crie um item com `fotos` e `metragem` confirmadas e o `valorMensal`.
 */

export type TamanhoId = "compacta" | "media" | "ampla";

export type Foto = { src: string; alt: string };

/** Medidas em metros, usadas só para desenhar a planta em escala. */
export type Planta = {
  largura: number;
  profundidade: number;
  mesas: { x: number; y: number; w: number; h: number; cadeiras: { x: number; y: number }[] }[];
};

export type Sala = {
  id: string;
  tamanho: TamanhoId;
  nome: string;
  /** Texto de metragem exibido no card. */
  metragem: string;
  descricao: string;
  ideal: string[];
  /** Valor em reais por mês; `null` enquanto não houver confirmação. */
  valorMensal: number | null;
  /** O que o valor inclui (só aparece junto com o valor). */
  valorInclui?: string;
  /** Fotos reais DESTA sala. Vazio = o card mostra a planta em escala. */
  fotos: Foto[];
  planta: Planta;
};

export const salas: Sala[] = [
  {
    id: "compacta",
    tamanho: "compacta",
    nome: "Sala compacta",
    metragem: "De 5 a 8 m²",
    descricao: "Para trabalhar com privacidade, de porta fechada.",
    ideal: ["1 pessoa", "Recebe 1 a 2 clientes"],
    valorMensal: null,
    fotos: [],
    planta: {
      largura: 2.8,
      profundidade: 2.5,
      mesas: [
        {
          x: 0.7,
          y: 0.85,
          w: 1.4,
          h: 0.65,
          cadeiras: [
            { x: 1.4, y: 0.45 },
            { x: 1.4, y: 1.92 },
          ],
        },
      ],
    },
  },
  {
    id: "media",
    tamanho: "media",
    nome: "Sala média",
    metragem: "De 9 a 14 m²",
    descricao: "Espaço para uma mesa de trabalho e um canto para receber clientes.",
    ideal: ["1 a 2 pessoas", "Recebe 2 a 3 clientes"],
    valorMensal: null,
    fotos: [],
    planta: {
      largura: 4,
      profundidade: 3,
      mesas: [
        {
          x: 0.45,
          y: 0.95,
          w: 1.5,
          h: 0.7,
          cadeiras: [
            { x: 1.2, y: 0.5 },
            { x: 0.85, y: 2.1 },
            { x: 1.55, y: 2.1 },
          ],
        },
        {
          x: 2.75,
          y: 0.55,
          w: 0.85,
          h: 0.85,
          cadeiras: [
            { x: 2.4, y: 0.98 },
            { x: 3.18, y: 1.78 },
          ],
        },
      ],
    },
  },
  {
    id: "ampla",
    tamanho: "ampla",
    nome: "Sala ampla",
    metragem: "Acima de 14 m²",
    descricao: "Para equipe, com mesas separadas e área de reunião na própria sala.",
    ideal: ["2 a 4 pessoas", "Reuniões na própria sala"],
    valorMensal: null,
    fotos: [],
    planta: {
      largura: 5,
      profundidade: 3.6,
      mesas: [
        { x: 0.4, y: 0.75, w: 1.4, h: 0.65, cadeiras: [{ x: 1.1, y: 0.4 }] },
        { x: 0.4, y: 2.2, w: 1.4, h: 0.65, cadeiras: [{ x: 1.1, y: 3.15 }] },
        {
          x: 2.95,
          y: 0.9,
          w: 1,
          h: 1.4,
          cadeiras: [
            { x: 2.6, y: 1.25 },
            { x: 2.6, y: 1.95 },
            { x: 4.3, y: 1.25 },
            { x: 4.3, y: 1.95 },
          ],
        },
      ],
    },
  },
];

const formatadorReais = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

export function textoValor(sala: Sala) {
  return sala.valorMensal === null
    ? "Valor sob consulta"
    : `${formatadorReais.format(sala.valorMensal)}/mês`;
}

/** Fotos reais do espaço, usadas na galeria. */
export const fotosEspaco: (Foto & { legenda: string })[] = [
  {
    src: "/images/sala-reuniao/sala-reuniao-01.jpeg",
    alt: "Sala privativa com mesa de trabalho e mesa de apoio, piso de madeira e paredes claras",
    legenda: "Sala privativa com duas mesas",
  },
  {
    src: "/images/sala-reuniao/sala-reuniao-03.jpeg",
    alt: "Sala de reunião com mesa de vidro e painel de cidade ao fundo",
    legenda: "Sala de reunião",
  },
  {
    src: "/images/sala-reuniao/sala-reuniao-02.jpeg",
    alt: "Sala privativa com mesa de trabalho, mesa de apoio e cadeiras",
    legenda: "Sala privativa com área de apoio",
  },
];

export const depoimentos = [
  "A localização é perfeita, ao lado do Fórum de Santana, com estacionamento coberto e com seguro.",
  "As salas são ótimas e equipadas, ideais para reuniões importantes.",
  "O atendimento humano faz toda a diferença, sempre prestativo e ágil.",
  "Os preços são justos e me ajudaram a reduzir custos sem perder qualidade.",
];
