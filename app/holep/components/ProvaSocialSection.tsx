import type { LpVariant } from "@/lib/lpVariants";

const DEPOIMENTOS = [
  { stars: 5, text: "Melhor decisão que tomei para minha saúde. Resultado surpreendente.", autor: "Carlos M.", idade: "68 anos" },
  { stars: 5, text: "Voltei a viajar sem medo de ficar no meio do nada apertado. Incrível!", autor: "Roberto S.", idade: "71 anos" },
  { stars: 5, text: "Dormir 8h direto parecia impossível. Hoje é minha realidade.", autor: "Antônio F.", idade: "65 anos" },
  { stars: 5, text: "Procedimento na quinta, trabalhando na segunda. Incrível como foi rápido.", autor: "José L.", idade: "62 anos" },
  { stars: 5, text: "Acabei com os remédios que tomava há anos. Liberdade total.", autor: "Francisco R.", idade: "74 anos" },
  { stars: 5, text: "Dr. Érico tem mãos de ouro e trato de gente. Recomendo demais.", autor: "Marcos A.", idade: "69 anos" },
];

const SELOS = [
  {
    num: "+150",
    label: "avaliações no Google",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>
      </svg>
    ),
  },
  {
    num: "+1150",
    label: "avaliações Doctoralia",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21c-4-4-8-7.5-8-11a8 8 0 0116 0c0 3.5-4 7-8 11z"/><circle cx="12" cy="10" r="2"/>
      </svg>
    ),
  },
  {
    num: "5 ★",
    label: "nota média geral",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/>
      </svg>
    ),
  },
];

export default function ProvaSocialSection({ variant }: { variant: LpVariant }) {
  return (
    <section
      id="prova-social"
      className="relative overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif", backgroundColor: "#f4f2ed" }}
    >
      {/* Grade */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(7,17,32,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(7,17,32,0.05) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      {/* Linha topo */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: "linear-gradient(to right, transparent, #f5c518 20%, #f5c518 80%, transparent)" }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div
              className="inline-flex items-center gap-2 text-[0.6rem] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full mb-5"
              style={{ background: "rgba(7,17,32,0.07)", border: "0.5px solid rgba(7,17,32,0.15)", color: "rgba(7,17,32,0.45)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#071120" }} />
              Prova social
            </div>
            <h2
              className="font-black leading-[1.08]"
              style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)", color: "#071120" }}
            >
              {variant.testimonialHeadline}
            </h2>
          </div>

          {/* Selos */}
          <div className="flex flex-wrap gap-4">
            {SELOS.map(({ num, label, icon }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl px-4 py-3"
                style={{ background: "rgba(7,17,32,0.06)", border: "0.5px solid rgba(7,17,32,0.1)" }}
              >
                <div style={{ color: "#071120", opacity: 0.5 }}>{icon}</div>
                <div>
                  <p className="font-black text-lg leading-none" style={{ color: "#071120" }}>{num}</p>
                  <p className="text-[0.62rem] mt-0.5" style={{ color: "rgba(7,17,32,0.45)" }}>{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid de depoimentos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DEPOIMENTOS.map((d, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{ background: "#fff", border: "0.5px solid rgba(7,17,32,0.08)", boxShadow: "0 4px 24px rgba(7,17,32,0.05)" }}
            >
              {/* Estrelas */}
              <div className="flex gap-1">
                {Array.from({ length: d.stars }).map((_, si) => (
                  <svg key={si} width="14" height="14" viewBox="0 0 24 24" fill="#f5c518">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>
                  </svg>
                ))}
              </div>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(7,17,32,0.7)" }}>
                &ldquo;{d.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-3" style={{ borderTop: "0.5px solid rgba(7,17,32,0.07)" }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{ background: "#071120", color: "#f5c518" }}
                >
                  {d.autor[0]}
                </div>
                <div>
                  <p className="font-bold text-xs" style={{ color: "#071120" }}>{d.autor}</p>
                  <p className="text-[0.65rem]" style={{ color: "rgba(7,17,32,0.4)" }}>{d.idade} · Google</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
