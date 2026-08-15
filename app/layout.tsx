import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CaixaVerde | Manual dos 7 Ralos do Mercadinho",
  description: "Descubra os 7 ralos que podem estar consumindo o lucro do seu mercadinho.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
