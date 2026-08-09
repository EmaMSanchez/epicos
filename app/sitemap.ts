import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!baseUrl) return [];

  return [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/vasos-tubo`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/vasos-termicos`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/ferneteros`, changeFrequency: "weekly", priority: 0.9 },
  ];
}
