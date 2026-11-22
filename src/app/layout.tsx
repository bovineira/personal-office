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
  title: "Escritório Virtual e Endereço Comercial ao Lado do Fórum de Santana | Personal Office",
  description:
    "Escritório virtual, endereço comercial e fiscal, sala executiva e sala de reunião ao lado do Fórum de Santana. Plano de atendimento telefônico a partir de R$ 100/mês.",
  keywords: [
    "escritório virtual",
    "escritório virtual zona norte sp",
    "endereço comercial",
    "endereço fiscal",
    "São Paulo",
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
      <body className="min-h-screen bg-zinc-50 text-zinc-900">
        {children}
      </body>
    </html>
  );
}
