"use client";

import { useSyncExternalStore } from "react";
import {
  buildWhatsAppUrl,
  describeOrigin,
  WHATSAPP_MESSAGES,
  type WhatsAppPage,
} from "@/lib/whatsapp";

const subscribe = () => () => {};
const getSearch = () => window.location.search;
const getServerSearch = () => "";

/**
 * Link do WhatsApp com a mensagem da página + origem da visita.
 * Lê `window.location` em vez de `useSearchParams` para a página continuar 100% pré-renderizada:
 * o HTML já sai com um link válido e a origem entra após a hidratação.
 */
export function useWhatsAppUrl(page: WhatsAppPage) {
  const search = useSyncExternalStore(subscribe, getSearch, getServerSearch);
  return buildWhatsAppUrl(WHATSAPP_MESSAGES[page] + describeOrigin(search));
}
