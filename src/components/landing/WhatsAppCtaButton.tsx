import { WHATSAPP_URL } from "@/lib/whatsapp";

type WhatsAppCtaButtonProps = {
  label?: string;
  className?: string;
};

/** Botão laranja padrão para CTAs de WhatsApp nas seções claras. */
export function WhatsAppCtaButton({
  label = "💬 Falar com um consultor pelo WhatsApp",
  className = "",
}: WhatsAppCtaButtonProps) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-shimmer inline-flex items-center justify-center rounded-2xl bg-[#F58220] px-8 py-4 text-base font-semibold text-white shadow-xl transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F58220] ${className}`}
    >
      {label}
    </a>
  );
}
