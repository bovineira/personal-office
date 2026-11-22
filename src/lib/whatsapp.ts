export const WHATSAPP_PHONE = "5511987150043";

/** Mensagem pré-preenchida de cada página (a origem, quando conhecida, entra no fim). */
export const WHATSAPP_MESSAGES = {
  assinatura: "Olá! Quero conhecer os planos da Personal Office.",
  aluguel: "Olá! Quero agendar uma visita para conhecer as salas da Personal Office.",
} as const;

export type WhatsAppPage = keyof typeof WHATSAPP_MESSAGES;

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = buildWhatsAppUrl(WHATSAPP_MESSAGES.assinatura);

const PARAM_MAX_LENGTH = 30;

/** Só letras, números, espaço, ponto e hífen, para nada estranho cair na mensagem do WhatsApp. */
function cleanParam(value: string | null) {
  return (value ?? "")
    .replace(/[-_+]+/g, " ")
    .replace(/[^\p{L}\p{N} .]/gu, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, PARAM_MAX_LENGTH)
    .trim();
}

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

/** Parâmetros que o Google Ads acrescenta sozinho na URL de destino. */
const GOOGLE_ADS_PARAMS = ["gclid", "gbraid", "wbraid", "gad_source", "gad_campaignid"];

/**
 * Origem da visita a partir da URL: `?origem=` tem prioridade; sem ele, reconhece clique do Google Ads.
 * `?ref=` acrescenta quem indicou. Sem nenhum sinal, devolve "" (não inventa origem).
 */
export function describeOrigin(search: string) {
  const params = new URLSearchParams(search);
  const origem = cleanParam(params.get("origem"));
  const ref = cleanParam(params.get("ref"));
  const source =
    capitalize(origem) || (GOOGLE_ADS_PARAMS.some((key) => params.get(key)) ? "Google" : "");

  const parts = [source && `via ${source}`, ref && `ref: ${ref}`].filter(Boolean);
  return parts.length > 0 ? ` (${parts.join(", ")})` : "";
}

/** Link atual da /sala-reuniao (sem origem). */
export const WHATSAPP_URL_SALA_REUNIAO = buildWhatsAppUrl(
  "Olá! Tenho interesse em alugar a sala de reunião da Personal Office."
);
