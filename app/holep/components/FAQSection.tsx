"use client";

import { useState } from "react";
import { WA_LINK } from "@/lib/constants";
import type { LpVariant } from "@/lib/lpVariants";

const FAQS = [
  {
    n: "01",
    q: "O HoLEP é feito com robô?",
    a: "Não. O HoLEP é realizado com laser de alta precisão, sem uso de robô. Todo o procedimento é feito por via natural (uretra), sem cortes externos.",
  },
  {
    n: "02",
    q: "Qual o tempo de recuperação?",
    a: "A maioria dos pacientes recebe alta entre 24h e 48h. Em poucos dias já é possível retomar atividades leves, com melhora progressiva do fluxo urinário.",
  },
  {
    n: "03",
    q: "O procedimento causa dor?",
    a: "Não. O procedimento é realizado sob anestesia, sem dor durante a cirurgia. No pós-operatório, o desconforto costuma ser leve e transitório.",
  },
  {
    n: "04",
    q: "Existe risco de impotência ou incontinência?",
    a: "O risco de incontinência urinária é baixo e geralmente temporário. A função erétil, na maioria dos casos, é preservada. Cada caso deve ser avaliado individualmente.",
  },
  {
    n: "05",
    q: "O HoLEP é melhor que a cirurgia tradicional?",
    a: "O HoLEP apresenta vantagens em relação às técnicas tradicionais: menor sangramento, recuperação mais rápida e resultados mais duradouros — sendo o padrão-ouro internacional para HPB.",
  },
  {
    n: "06",
    q: "Vou precisar de sonda?",
    a: "Sim, geralmente por um curto período (1 a 2 dias), sendo retirada ainda durante a internação na maioria dos casos.",
  },
  {
    n: "07",
    q: "O plano de saúde cobre?",
    a: "Na maioria dos casos, cobre os custos hospitalares e internação. Equipamentos e honorários podem variar — a equipe médica analisa cada caso individualmente.",
  },
];

export default function FAQSection({ variant }: { variant: LpVariant }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif", backgroundColor: "#ffffff" }}
    >
      {/* Linha topo */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: "linear-gradient(to right, transparent, #f5c518 20%, #f5c518 80%, transparent)" }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-start">

          {/* FAQ */}
          <div>
            <div
              className="inline-flex items-center gap-2 text-[0.6rem] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full mb-6"
              style={{ background: "rgba(7,17,32,0.06)", border: "0.5px solid rgba(7,17,32,0.15)", color: "rgba(7,17,32,0.4)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#071120" }} />
              Tire suas dúvidas
            </div>

            <h2
              className="font-black leading-[1.08] mb-3"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#071120" }}
            >
              {variant.faqHeadline}
            </h2>
            <p className="text-sm leading-relaxed mb-10" style={{ color: "rgba(7,17,32,0.45)", maxWidth: 560 }}>
              Respondemos com clareza para você tomar a melhor decisão com total segurança.
            </p>

            {/* Accordion */}
            <div className="flex flex-col gap-2">
              {FAQS.map(({ n, q, a }, i) => (
                <div
                  key={n}
                  className="rounded-xl overflow-hidden"
                  style={{
                    border: open === i ? "0.5px solid rgba(7,17,32,0.2)" : "0.5px solid rgba(7,17,32,0.09)",
                  }}
                >
                  <button
                    className="w-full flex items-center gap-4 px-5 py-4 text-left"
                    style={{ background: open === i ? "#071120" : "transparent" }}
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span
                      className="font-black text-2xl flex-shrink-0"
                      style={{ color: open === i ? "rgba(245,197,24,0.4)" : "rgba(7,17,32,0.18)", fontVariantNumeric: "tabular-nums" }}
                    >
                      {n}
                    </span>
                    <span
                      className="font-bold flex-1 text-sm"
                      style={{ color: open === i ? "#fff" : "#071120" }}
                    >
                      {q}
                    </span>
                    <svg
                      width="16" height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={open === i ? "#f5c518" : "rgba(7,17,32,0.35)"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ transform: open === i ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}
                    >
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </button>
                  {open === i && (
                    <div className="px-5 pb-5 pt-2" style={{ background: "#071120" }}>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)", paddingLeft: "calc(2rem + 16px)" }}>
                        {a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Card lateral CTA */}
          <div className="lg:sticky lg:top-24">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "0.5px solid rgba(7,17,32,0.1)", boxShadow: "0 16px 48px rgba(7,17,32,0.08)" }}
            >
              {/* Topo escuro */}
              <div
                className="px-6 py-8"
                style={{ background: "#071120" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/dr-erico-holep.webp"
                  alt="Dr. Érico Diógenes"
                  style={{ width: "100%", height: 200, objectFit: "cover", borderRadius: 12, marginBottom: 20 }}
                />
                <p className="text-[0.6rem] font-bold tracking-[0.15em] uppercase mb-2" style={{ color: "rgba(245,197,24,0.6)" }}>
                  Sua dúvida não está aqui?
                </p>
                <p className="font-black text-white text-lg leading-snug">
                  Fale diretamente com a equipe do Dr. Érico
                </p>
              </div>
              {/* Rodapé claro */}
              <div className="px-6 py-6" style={{ background: "#fff" }}>
                <p className="text-xs leading-relaxed mb-5" style={{ color: "rgba(7,17,32,0.5)" }}>
                  Atendimento rápido e discreto via WhatsApp. Nossa equipe responde em minutos.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 font-bold text-[.7rem] tracking-[.1em] uppercase px-6 py-4 rounded-full transition-all duration-200 hover:opacity-90"
                  style={{ background: "#071120", color: "#fff" }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Tirar dúvidas via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
