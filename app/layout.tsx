import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Érico Diógenes — Urologista em Fortaleza | HoLEP",
  description:
    "Especialista em HoLEP, ThULEP e MiLEP em Fortaleza-CE. +21 anos de experiência. Padrão-ouro mundial no tratamento da próstata.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Montserrat', sans-serif", margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
