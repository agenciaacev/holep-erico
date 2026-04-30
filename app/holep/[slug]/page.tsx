import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LP_VARIANTS, getVariantBySlug } from "@/lib/lpVariants";

// Components
import TopBar from "../components/TopBar";
import HeroSection from "../components/HeroSection";
import IdentificacaoSection from "../components/IdentificacaoSection";
import SolucaoSection from "../components/SolucaoSection";
import ProvaSocialSection from "../components/ProvaSocialSection";
import AutoridadeSection from "../components/AutoridadeSection";
import FAQSection from "../components/FAQSection";
import { CTAFinalSection, Footer } from "../components/CTAFinalSection";

// ─── Static params — gera as 50 rotas em build time ───────────────────
export async function generateStaticParams() {
  return LP_VARIANTS.map((v) => ({ slug: v.slug }));
}

// ─── Metadata dinâmico por variante ────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const variant = getVariantBySlug(slug);
  if (!variant) return {};

  const baseUrl = "https://holep-erico.vercel.app";
  const canonical = `${baseUrl}/holep/${variant.slug}`;

  return {
    title: variant.metaTitle,
    description: variant.metaDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      title: variant.metaTitle,
      description: variant.metaDescription,
      url: canonical,
      siteName: "Dr. Érico Diógenes — Urologista",
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: variant.metaTitle,
      description: variant.metaDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    other: {
      "geo.region": "BR-CE",
      "geo.placename": "Fortaleza",
    },
  };
}

// ─── Page component ────────────────────────────────────────────────────
export default async function HolepPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const variant = getVariantBySlug(slug);
  if (!variant) notFound();

  // Schema.org LocalBusiness / MedicalBusiness
  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Érico Diógenes",
    description: variant.metaDescription,
    url: `https://holep-erico.vercel.app/holep/${variant.slug}`,
    telephone: "+5585981781020",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fortaleza",
      addressRegion: "CE",
      addressCountry: "BR",
    },
    medicalSpecialty: "Urology",
    availableService: [
      { "@type": "MedicalProcedure", name: "HoLEP", description: "Enucleação prostática com laser de Holmium" },
      { "@type": "MedicalProcedure", name: "ThULEP", description: "Enucleação prostática com laser de Thulium" },
      { "@type": "MedicalProcedure", name: "MiLEP", description: "Enucleação prostática micro-laser" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "150",
    },
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div
        className="font-sans overflow-x-hidden"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        <TopBar />

        {/* Espaçamento para TopBar fixo */}
        <div style={{ paddingTop: 56 }}>
          <HeroSection variant={variant} />
          <IdentificacaoSection />
          <SolucaoSection />
          <ProvaSocialSection variant={variant} />
          <AutoridadeSection />
          <FAQSection variant={variant} />
          <CTAFinalSection variant={variant} />
          <Footer />
        </div>
      </div>
    </>
  );
}
