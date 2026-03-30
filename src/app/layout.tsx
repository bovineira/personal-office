import type { Metadata } from "next";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Personal Office | Escritório Virtual na Zona Norte de São Paulo",
  description:
    "20 anos de credibilidade. Escritórios virtuais e compartilhados ao lado do Fórum de Santana. Planos flexíveis e infraestrutura premium.",
  keywords: [
    "escritório virtual",
    "São Paulo",
    "Santana",
    "salas compartilhadas",
    "Personal Office",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${plusJakarta.variable} ${montserrat.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-zinc-50 text-zinc-900">{children}</body>
    </html>
  );
}
