const SYMPTOMS = [
  { n: "01", text: "Acorda 2 ou mais vezes à noite para urinar (noctúria)" },
  { n: "02", text: "Sensação de esvaziamento incompleto da bexiga" },
  { n: "03", text: "Jato urinário fraco, lento ou intermitente" },
  { n: "04", text: "Necessidade frequente de urinar durante o dia" },
  { n: "05", text: "Uso de medicações com resposta parcial ou temporária" },
  { n: "06", text: "Impacto no sono, cansaço e qualidade de vida" },
];

export default function IdentificacaoSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif", background: "#071120" }}
    >
      {/* Grade fina */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-16 lg:pt-24 pb-16 lg:pb-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
          {/* Título */}
          <div className="max-w-xl">
            <p className="text-[0.58rem] font-black tracking-[0.28em] uppercase mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>
              Diagnóstico rápido
            </p>
            <h2
              className="font-black leading-[1.04]"
              style={{ fontSize: "clamp(2rem, 4.2vw, 3.2rem)", color: "#ffffff" }}
            >
              Você reconhece<br />
              algum desses{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                sintomas?
                <span
                  style={{
                    position: "absolute",
                    bottom: 3,
                    left: 0,
                    right: 0,
                    height: 5,
                    background: "#f5c518",
                    borderRadius: 3,
                    zIndex: -1,
                  }}
                />
              </span>
            </h2>
          </div>

          <p className="text-xs leading-relaxed max-w-[240px]" style={{ color: "rgba(255,255,255,0.42)" }}>
            Se você identificar pelo menos <strong className="text-white">2 desses sinais</strong>, é hora de conversar com um especialista.
          </p>
        </div>

        {/* Sintomas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SYMPTOMS.map(({ n, text }) => (
            <div
              key={n}
              className="relative flex gap-4 items-start rounded-xl p-5 group transition-all duration-200 hover:border-yellow-400/40"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "0.5px solid rgba(255,255,255,0.07)",
              }}
            >
              <span
                className="flex-shrink-0 font-black"
                style={{ fontSize: 28, lineHeight: 1, color: "rgba(245,197,24,0.25)", fontVariantNumeric: "tabular-nums" }}
              >
                {n}
              </span>
              <p className="text-sm leading-relaxed pt-1" style={{ color: "rgba(255,255,255,0.65)" }}>
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Card de reconhecimento */}
        <div
          className="mt-10 rounded-2xl px-6 py-6 flex flex-col sm:flex-row items-center gap-4"
          style={{ background: "rgba(245,197,24,0.07)", border: "0.5px solid rgba(245,197,24,0.2)" }}
        >
          <div className="flex-1">
            <p className="font-black text-white text-lg leading-snug">
              Esses sintomas formam o quadro clínico da{" "}
              <span style={{ color: "#f5c518" }}>Hiperplasia Prostática Benigna (HPB)</span>
            </p>
            <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.5)" }}>
              Condição tratável de forma definitiva com tecnologia laser — sem cirurgia aberta.
            </p>
          </div>
          <div
            className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center"
            style={{ background: "#f5c518" }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#071120" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12l2 2 4-4" />
              <path d="M12 3l7 3v5c0 4-3 7-7 9-4-2-7-5-7-9V6l7-3z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
