import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Érico Diógenes — Urologista em Fortaleza | HoLEP",
  description:
    "Especialista em HoLEP, ThULEP e MiLEP em Fortaleza-CE. +21 anos de experiência. Padrão-ouro mundial no tratamento da próstata.",
  verification: {
    google: "VX6UZuYWHDqFCzTfdKaQE1hS-A3Vq01VLu4dVIIrLao",
  },
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          fontFamily: "'Montserrat', sans-serif",
          margin: 0,
          padding: 0,
        }}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BBEKZTYL2Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BBEKZTYL2Z');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
