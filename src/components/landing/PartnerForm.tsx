"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import {
  buildPartnerWhatsAppUrl,
  trackLeadImobiliaria,
  validateCreci,
  validateName,
} from "@/lib/imobiliaria";

type PartnerFormProps = {
  /** Identifica de qual formulário veio o lead (hero ou cta_final) no evento de tracking. */
  location: string;
};

const inputClass =
  "mt-1.5 block w-full rounded-xl border bg-white px-4 py-3 text-base text-zinc-900 placeholder:text-zinc-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00829A] focus-visible:ring-offset-1";

/** Formulário de parceria (Nome + CRECI) que, se válido, abre o WhatsApp com mensagem pronta. */
export function PartnerForm({ location }: PartnerFormProps) {
  const uid = useId();
  const nameId = `${uid}-name`;
  const creciId = `${uid}-creci`;
  const nameErrorId = `${nameId}-error`;
  const creciErrorId = `${creciId}-error`;
  const creciHintId = `${creciId}-hint`;

  const nameRef = useRef<HTMLInputElement>(null);
  const creciRef = useRef<HTMLInputElement>(null);
  const trackedUrlRef = useRef<string | null>(null);

  const [name, setName] = useState("");
  const [creci, setCreci] = useState("");
  const [nameError, setNameError] = useState<string | null>(null);
  const [creciError, setCreciError] = useState<string | null>(null);
  const [whatsAppUrl, setWhatsAppUrl] = useState<string | null>(null);

  const openWhatsApp = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextNameError = validateName(name);
    const nextCreciError = validateCreci(creci);
    setNameError(nextNameError);
    setCreciError(nextCreciError);
    setWhatsAppUrl(null);

    if (nextNameError) {
      nameRef.current?.focus();
      return;
    }
    if (nextCreciError) {
      creciRef.current?.focus();
      return;
    }

    const url = buildPartnerWhatsAppUrl(name, creci);
    if (trackedUrlRef.current !== url) {
      trackedUrlRef.current = url;
      trackLeadImobiliaria(location);
    }
    setWhatsAppUrl(url);
    openWhatsApp(url);
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-6 text-left shadow-2xl shadow-black/30 ring-1 ring-black/5 md:p-8"
    >
      <div>
        <label htmlFor={nameId} className="block text-sm font-semibold text-zinc-800">
          Nome
        </label>
        <input
          ref={nameRef}
          id={nameId}
          name="nome"
          type="text"
          autoComplete="name"
          enterKeyHint="next"
          required
          aria-required="true"
          aria-invalid={nameError ? true : undefined}
          aria-describedby={nameError ? nameErrorId : undefined}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (nameError && !validateName(e.target.value)) setNameError(null);
          }}
          placeholder="Seu nome"
          className={`${inputClass} ${nameError ? "border-red-600" : "border-zinc-300"}`}
        />
        {nameError && (
          <p id={nameErrorId} role="alert" className="mt-1.5 text-sm font-medium text-red-700">
            {nameError}
          </p>
        )}
      </div>

      <div className="mt-5">
        <label htmlFor={creciId} className="block text-sm font-semibold text-zinc-800">
          CRECI
        </label>
        <input
          ref={creciRef}
          id={creciId}
          name="creci"
          type="text"
          autoComplete="off"
          autoCapitalize="characters"
          enterKeyHint="go"
          required
          aria-required="true"
          aria-invalid={creciError ? true : undefined}
          aria-describedby={creciError ? `${creciErrorId} ${creciHintId}` : creciHintId}
          value={creci}
          onChange={(e) => {
            setCreci(e.target.value);
            if (creciError && !validateCreci(e.target.value)) setCreciError(null);
          }}
          placeholder="Ex.: 123456-F"
          className={`${inputClass} ${creciError ? "border-red-600" : "border-zinc-300"}`}
        />
        <p id={creciHintId} className="mt-1.5 text-xs text-zinc-600">
          Aceitamos formatos como 123456, 123456-F ou CRECI-SP 123456.
        </p>
        {creciError && (
          <p id={creciErrorId} role="alert" className="mt-1.5 text-sm font-medium text-red-700">
            {creciError}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="btn-shimmer mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#F58220] px-6 py-4 text-center text-base font-bold text-[#062026] shadow-xl transition-transform hover:scale-[1.01] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#062026]"
      >
        <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
        Quero ser parceiro pelo WhatsApp
      </button>

      <div aria-live="polite">
        {whatsAppUrl && (
          <p className="mt-3 text-center text-sm text-zinc-700">
            Abrindo o WhatsApp… Se não abrir,{" "}
            <button
              type="button"
              onClick={() => openWhatsApp(whatsAppUrl)}
              className="font-semibold text-[#00829A] underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00829A]"
            >
              toque aqui
            </button>
            .
          </p>
        )}
      </div>

      <p className="mt-4 text-center text-sm font-medium text-zinc-700">
        Parceria exclusiva para imobiliárias e corretores com CRECI.
      </p>
      <p className="mt-3 text-center text-xs leading-relaxed text-zinc-600">
        Seu nome e CRECI vão na mensagem de WhatsApp e são usados apenas para contato sobre a
        parceria. {/* TODO: linkar a política de privacidade quando existir (hoje o site não tem). */}
      </p>
    </form>
  );
}
