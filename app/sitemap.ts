import type { MetadataRoute } from "next";
import { LP_VARIANTS } from "@/lib/lpVariants";

const BASE_URL = "https://drericourologista.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const lpPages = LP_VARIANTS.map((v) => ({
    url: `${BASE_URL}/holep/${v.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...lpPages,
  ];
}
