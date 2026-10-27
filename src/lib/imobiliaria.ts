import { WHATSAPP_PHONE } from "@/lib/whatsapp";

/** Evento próprio da LP /imobiliaria — separado das conversões de sala de reunião/assinatura. */
export const LEAD_IMOBILIARIA_EVENT = "lead_imobiliaria";

const NAME_MAX_LENGTH = 100;
const CRECI_MAX_LENGTH = 30;

function collapseSpaces(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

export function validateName(raw: string): string | null {
  const name = collapseSpaces(raw);
  if (!name) return "Informe seu nome.";
  if (name.length < 2 || !/\p{L}/u.test(name)) return "Informe seu nome completo.";
  if (name.length > NAME_MAX_LENGTH) return "O nome está muito longo.";
  return null;
}

/**
 * Filtro apenas de FORMATO (não consulta nenhum cadastro do CRECI).
 * Aceita variações como "123456", "123456-F", "12345-J", "CRECI 123456", "CRECI-SP 123456":
 * exige ao menos uma sequência de 4 a 7 dígitos.
 */
export function validateCreci(raw: string): string | null {
  const creci = collapseSpaces(raw);
  if (!creci) return "Informe seu CRECI.";
  if (creci.length > CRECI_MAX_LENGTH || !/^[\p{L}\d\s./:-]+$/u.test(creci)) {
    return "CRECI inválido. Use apenas letras, números e hífen, como 123456-F.";
  }
  const hasValidDigits = (creci.match(/\d+/g) ?? []).some((run) => run.length >= 4 && run.length <= 7);
  if (!hasValidDigits) {
    return "CRECI inválido. Digite o número com 4 a 7 dígitos, como 123456-F ou CRECI-SP 123456.";
  }
  return null;
}

/** Remove o prefixo "CRECI" digitado pelo usuário para não duplicar na mensagem. */
function normalizeCreci(raw: string) {
  return collapseSpaces(raw).replace(/^creci[\s:.-]*/i, "");
}

export function buildPartnerWhatsAppUrl(rawName: string, rawCreci: string) {
  const name = collapseSpaces(rawName);
  const creci = normalizeCreci(rawCreci);
  const message = `Olá! Meu nome é ${name}, CRECI ${creci}. Tenho interesse em ser parceiro(a) da Personal Office para indicar salas comerciais aos meus clientes.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

type DataLayerWindow = Window & { dataLayer?: Record<string, unknown>[] };

/** Envia o evento ao GTM. A conversão só existe se houver trigger/tag para este evento no GTM. */
export function trackLeadImobiliaria(formLocation: string) {
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: LEAD_IMOBILIARIA_EVENT,
    lead_source: "lp_imobiliaria",
    form_location: formLocation,
  });
}
