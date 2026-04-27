import { WA_LINK } from "@/lib/constants";
import type { LpVariant } from "@/lib/lpVariants";

export function CTAFinalSection({ variant }: { variant: LpVariant }) {
  return (
    <section
      id="contato"
      className="relative overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif", backgroundColor: "#071120" }}
    >
      {/* Grade */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      {/* Glow dourado */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(245,197,24,0.07) 0%, transparent 70%)",
        }}
      />
      {/* Linha topo */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: "linear-gradient(to right, transparent, #f5c518 20%, #f5c518 80%, transparent)" }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-32">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-8">

          {/* Logo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logo_1.png"
            alt="Dr. Érico Diógenes — Urologista"
            style={{ height: 52, width: "auto", filter: "brightness(0) invert(1)" }}
          />

          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 text-[0.6rem] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full"
            style={{ background: "rgba(245,197,24,0.08)", border: "0.5px solid rgba(245,197,24,0.25)", color: "rgba(245,197,24,0.75)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#f5c518" }} />
            Agende sua avaliação
          </div>

          {/* H2 — usa o CTA da variante */}
          <h2
            className="font-black text-white leading-[1.06]"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            {variant.ctaText.split("—")[0]?.trim() || "Dê o primeiro passo"}{" "}
            <span
              style={{
                display: "inline-block",
                background: "#f5c518",
                color: "#071120",
                padding: "2px 12px",
                borderRadius: 6,
                lineHeight: 1.25,
              }}
            >
              hoje.
            </span>
          </h2>

          {/* Texto */}
          <p className="text-sm leading-relaxed max-w-lg" style={{ color: "rgba(255,255,255,0.5)" }}>
            Minha equipe está pronta para encontrar o melhor horário para você em Fortaleza.{" "}
            <strong className="text-white">Atendimento rápido, discreto e humanizado</strong> via WhatsApp.
          </p>

          {/* Divisor */}
          <div className="flex items-center gap-4 w-full max-w-xs">
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="w-2 h-2 rounded-full" style={{ background: "#f5c518" }} />
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 font-bold text-[.7rem] tracking-[.1em] uppercase px-8 py-4 rounded-full transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: "#f5c518", color: "#071120", boxShadow: "0 8px 32px rgba(245,197,24,0.25)" }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {variant.ctaText}
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            {[
              { n: "21+", l: "anos de experiência" },
              { n: "5★", l: "no Google" },
              { n: "24-48h", l: "alta após cirurgia" },
            ].map(({ n, l }) => (
              <div key={l} className="flex flex-col items-center gap-1">
                <span className="font-black text-xl" style={{ color: "#f5c518" }}>{n}</span>
                <span className="text-[0.62rem]" style={{ color: "rgba(255,255,255,0.35)" }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer
      className="relative"
      style={{ fontFamily: "'Montserrat', sans-serif", background: "#040d1a", borderTop: "0.5px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/logo_1.png"
          alt="Dr. Érico Diógenes"
          style={{ height: 28, width: "auto", filter: "brightness(0) invert(1)", opacity: 0.5 }}
        />
        <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.25)" }}>
          © {new Date().getFullYear()} Dr. Érico Diógenes — Urologista em Fortaleza-CE · CRM-CE 6777
        </p>
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
          HoLEP · ThULEP · MiLEP
        </p>
      </div>
    </footer>
  );
}
