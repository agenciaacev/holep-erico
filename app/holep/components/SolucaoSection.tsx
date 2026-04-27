import { WA_LINK } from "@/lib/constants";

const beneficios = [
  "Remoção completa do tecido obstrutivo (tratamento anatômico definitivo)",
  "Baixíssima taxa de reoperação (<1–2% em longo prazo)",
  "Preservação da continência urinária",
  "Baixo risco de sangramento (ideal inclusive para anticoagulados)",
  "Internação curta (24–48h)",
  "Retorno rápido às atividades habituais",
];

const tecnicas = [
  { sigla: "HoLEP", nome: "Holmium Laser", desc: "Padrão-ouro consolidado. Laser de Holmium com precisão milimétrica." },
  { sigla: "ThULEP", nome: "Thulium Laser", desc: "Tecnologia de ponta com laser de Thulium pulsado contínuo." },
  { sigla: "MiLEP", nome: "Micro-Laser", desc: "Técnica refinada para casos selecionados, menor morbidade." },
];

export default function SolucaoSection() {
  return (
    <section
      id="solucao"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#071120", fontFamily: "'Montserrat', sans-serif" }}
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
          background: "radial-gradient(ellipse 60% 50% at 60% 50%, rgba(245,197,24,0.05) 0%, transparent 70%)",
        }}
      />
      {/* Linha topo */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: "linear-gradient(to right, transparent, #f5c518 20%, #f5c518 80%, transparent)" }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
        
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div
            className="inline-flex items-center gap-2 text-[0.6rem] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full mb-6"
            style={{ background: "rgba(245,197,24,0.08)", border: "0.5px solid rgba(245,197,24,0.25)", color: "rgba(245,197,24,0.75)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#f5c518" }} />
            A solução definitiva
          </div>
          <h2
            className="font-black text-white leading-[1.08] mb-4"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
          >
            Por que o{" "}
            <span
              style={{
                display: "inline-block",
                background: "#f5c518",
                color: "#071120",
                padding: "1px 10px",
                borderRadius: 5,
                lineHeight: 1.25,
              }}
            >
              HoLEP
            </span>{" "}
            é o padrão-ouro mundial?
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)", maxWidth: 560 }}>
            A enucleação prostática a laser remove o tecido obstrutivo de forma completa, por via natural, sem incisões externas — com resultados que duram décadas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Benefícios */}
          <div className="flex flex-col gap-3">
            {beneficios.map((b, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-xl p-4"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "0.5px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(245,197,24,0.15)", border: "0.5px solid rgba(245,197,24,0.3)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f5c518" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>{b}</p>
              </div>
            ))}
          </div>

          {/* Técnicas */}
          <div className="flex flex-col gap-4">
            <p className="text-[0.65rem] font-bold tracking-[0.15em] uppercase mb-2" style={{ color: "rgba(245,197,24,0.6)" }}>
              Técnicas disponíveis
            </p>
            {tecnicas.map((t) => (
              <div
                key={t.sigla}
                className="rounded-2xl p-5"
                style={{
                  background: "rgba(245,197,24,0.05)",
                  border: "0.5px solid rgba(245,197,24,0.2)",
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center font-black"
                    style={{ background: "#f5c518", color: "#071120", fontSize: 12 }}
                  >
                    {t.sigla.slice(0, 2)}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{t.sigla}</p>
                    <p className="text-[0.65rem]" style={{ color: "rgba(245,197,24,0.6)" }}>{t.nome}</p>
                  </div>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{t.desc}</p>
              </div>
            ))}

            {/* CTA */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2.5 font-bold text-[.7rem] tracking-[.1em] uppercase px-7 py-[14px] rounded-full transition-all duration-200 hover:opacity-90"
              style={{ background: "#f5c518", color: "#071120" }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Quero saber se sou candidato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
