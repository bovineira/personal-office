const WHATSAPP_PHONE = "5511987150043";

const WHATSAPP_MESSAGE =
  "Olá! Tenho interesse em conhecer os planos da Personal Office.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const WHATSAPP_MESSAGE_SALA_REUNIAO =
  "Olá! Tenho interesse em alugar a sala de reunião da Personal Office.";

/** CTA da landing /sala-reuniao — mesma mensagem padrão "tenho interesse", mas falando da sala de reunião. */
export const WHATSAPP_URL_SALA_REUNIAO = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE_SALA_REUNIAO)}`;
