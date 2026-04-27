import { WA_LINK } from "@/lib/constants";
import type { LpVariant } from "@/lib/lpVariants";

const STATS = [
  { num: "21+", label: "anos de\nexperiência" },
  { num: "5★",  label: "avaliação\nno Google" },
  { num: "24-48h", label: "alta após\ncirurgia" },
];

const PILLS = [
  { text: "Padrão-ouro mundial",  cls: "pill-float-1", top: "28%",  right: "8%",  left: "auto", bottom: "auto" },
  { text: "Sem cortes externos",  cls: "pill-float-2", top: "auto", right: "auto", left: "6%",  bottom: "28%"  },
  { text: "Alta em 24-48h",       cls: "pill-float-3", top: "auto", right: "6%",  left: "auto", bottom: "14%"  },
];

export default function HeroSection({ variant }: { variant: LpVariant }) {
  return (
    <section
      id="hero"
      className="relative flex flex-col lg:flex-row overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif", minHeight: "100svh" }}
    >
      {/* MOBILE — foto */}
      <div className="block lg:hidden w-full relative flex-shrink-0" style={{ height: "60vw" }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/assets/dr-erico-holep.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, transparent 55%, #ffffff 100%)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(255,255,255,.15) 0%, transparent 50%)" }}
        />
      </div>

      {/* PAINEL ESQUERDO — branco */}
      <div
        className="relative flex flex-col justify-start lg:justify-center w-full lg:w-[55%]
                   px-6 sm:px-10 lg:px-16 pt-8 pb-12 lg:py-20 bg-white lg:min-h-screen"
        style={{ zIndex: 2 }}
      >
        {/* Linha de acento vertical — desktop only */}
        <div
          className="hidden lg:block absolute left-0 top-[15%] bottom-[15%] w-[3px] rounded-full"
          style={{ background: "linear-gradient(to bottom, transparent, #f5c518 30%, #f5c518 70%, transparent)" }}
        />

        <div className="hero-left-content flex flex-col gap-0">

          {/* LOGO */}
          <div className="mb-8 lg:mb-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo_1.png"
              alt="Dr. Érico Diógenes — Urologista"
              className="w-auto"
              style={{ height: 48, objectFit: "contain", maxWidth: 240, filter: "brightness(0)" }}
            />
          </div>

          {/* Eyebrow + badge */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <div
              className="inline-flex items-center gap-2 text-[0.6rem] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full w-fit"
              style={{ background: "rgba(0,0,0,.05)", border: "0.5px solid rgba(0,0,0,.1)", color: "rgba(0,0,0,.5)" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Urologista em Fortaleza
            </div>
            <span style={{ color: "rgba(0,0,0,.2)", fontSize: 12 }}>·</span>
            <span
              className="text-[0.6rem] font-bold tracking-[0.15em] uppercase"
              style={{ color: "rgba(0,0,0,.3)" }}
            >
              Especialista em HoLEP
            </span>
          </div>

          {/* H1 — variável por página */}
          <h1
            className="font-black leading-[1.08] mb-4"
            style={{ fontSize: "clamp(1.7rem, 3.6vw, 2.6rem)", color: "#071120" }}
          >
            {variant.heroTitle}
            <br />
            <span
              style={{
                display: "inline-block",
                background: "#071120",
                color: "#f5c518",
                padding: "2px 10px",
                borderRadius: 6,
                lineHeight: 1.2,
                fontSize: "clamp(1.1rem, 2.2vw, 1.7rem)",
                marginTop: 8,
              }}
            >
              {variant.heroSubtitle}
            </span>
          </h1>

          {/* Subtítulo fixo técnico */}
          <p
            className="leading-relaxed mb-8 max-w-[420px]"
            style={{ fontSize: "clamp(.8rem, 1.1vw, .95rem)", color: "rgba(0,0,0,.48)" }}
          >
            A Enucleação da próstata a laser{" "}
            <strong style={{ color: "#071120" }}>(HoLEP)</strong> é o padrão-ouro mundial para o
            tratamento do crescimento benigno da próstata.{" "}
            <strong style={{ color: "#071120" }}>
              Minimamente invasivo, resultado definitivo, baixa taxa de recorrência e recuperação
              rápida.
            </strong>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 font-bold text-[.7rem] tracking-[.1em] uppercase px-7 py-[14px] rounded-full transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{
                background: "#071120",
                color: "#fff",
                boxShadow: "0 8px 32px rgba(7,17,32,.18)",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {variant.ctaText}
            </a>
            <a
              href="#sobre"
              className="flex items-center justify-center px-6 py-[14px] rounded-full font-semibold text-sm transition-all duration-200 hover:bg-black/5"
              style={{ border: "0.5px solid rgba(0,0,0,.18)", color: "rgba(0,0,0,.55)" }}
            >
              Conhecer o Dr. Érico
            </a>
          </div>

          <p style={{ fontSize: 11, color: "rgba(0,0,0,.28)", marginLeft: 2 }}>
            Atendimento via WhatsApp — rápido e discreto
          </p>

          {/* Stats */}
          <div
            className="flex gap-8 sm:gap-12 mt-10 pt-8"
            style={{ borderTop: "0.5px solid rgba(0,0,0,.07)" }}
          >
            {STATS.map(({ num, label }) => (
              <div key={num}>
                <div
                  className="hero-stat-num font-black leading-none"
                  style={{ fontSize: "clamp(1.6rem,2.8vw,2.2rem)", color: "#071120" }}
                >
                  {num}
                </div>
                <div
                  className="text-[.68rem] mt-1 leading-snug whitespace-pre-line"
                  style={{ color: "rgba(0,0,0,.35)" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PAINEL DIREITO — escuro desktop */}
      <div
        className="hidden lg:block absolute right-0 top-0 w-[45%] h-full overflow-hidden"
        style={{ background: "#060f1d" }}
      >
        <div
          className="absolute inset-0 hero-fade-in"
          style={{
            backgroundImage: "url(/assets/laser.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            opacity: 0.28,
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #060f1d 0%, rgba(6,15,29,.4) 35%, transparent 100%)" }}
        />
        <div className="scan" />

        {/* SVG central */}
        <div
          className="absolute"
          style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 280, height: 280 }}
        >
          <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
            <circle cx="140" cy="140" r="128" stroke="rgba(245,197,24,.15)" strokeWidth="0.5" className="draw-circle-anim" />
            <circle cx="140" cy="140" r="90"  stroke="rgba(245,197,24,.22)" strokeWidth="0.5" />
            <circle cx="140" cy="140" r="54"  stroke="rgba(245,197,24,.35)" strokeWidth="0.5" />
            {([[140,12],[268,140],[140,268],[12,140]] as [number,number][]).map(([cx,cy],i) => (
              <circle key={i} cx={cx} cy={cy} r="3" fill="rgba(245,197,24,.5)" />
            ))}
            <line x1="140" y1="12"  x2="140" y2="268" stroke="rgba(245,197,24,.06)" strokeWidth="0.5" />
            <line x1="12"  y1="140" x2="268" y2="140" stroke="rgba(245,197,24,.06)" strokeWidth="0.5" />
            <circle cx="140" cy="140" r="42" fill="rgba(245,197,24,.1)" stroke="rgba(245,197,24,.3)" strokeWidth="0.5" />
            <circle cx="140" cy="140" r="30" fill="#f5c518" />
            <text x="140" y="147" textAnchor="middle" fontFamily="'Montserrat', sans-serif" fontWeight="900" fontSize="22" fill="#071120">H</text>
            <text x="140" y="198" textAnchor="middle" fontFamily="'Montserrat', sans-serif" fontWeight="700" fontSize="9" letterSpacing="5" fill="rgba(245,197,24,.65)">HOLEP</text>
          </svg>
        </div>

        {/* Pills */}
        {PILLS.map(({ text, cls, top, right, left, bottom }) => (
          <div
            key={text}
            className={`absolute font-semibold rounded-full px-4 py-2 ${cls}`}
            style={{
              top, right, left, bottom,
              background: "rgba(245,197,24,.12)",
              border: "0.5px solid rgba(245,197,24,.3)",
              color: "rgba(245,197,24,.8)",
              fontSize: 10,
              letterSpacing: "0.07em",
              backdropFilter: "blur(6px)",
              whiteSpace: "nowrap",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            {text}
          </div>
        ))}

        {/* Marca d'água */}
        <div
          className="absolute bottom-8 right-8 font-black select-none pointer-events-none"
          style={{
            fontSize: 96,
            lineHeight: 1,
            color: "rgba(245,197,24,.04)",
            fontFamily: "'Montserrat', sans-serif",
            letterSpacing: "-0.04em",
          }}
        >
          HoLEP
        </div>
      </div>
    </section>
  );
}
