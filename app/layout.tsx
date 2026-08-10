import type { Metadata } from "next";
import "@fontsource/antonio/600.css";
import "@fontsource/antonio/700.css";
import "@fontsource-variable/manrope";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: "Épicos Mar del Plata | Vasos con diseños que se hacen notar",
  description:
    "Vasos tubo, térmicos y ferneteros con diseños originales. Catálogo minorista y mayorista de Épicos Mar del Plata. Consultá por WhatsApp.",
  keywords: [
    "vasos personalizados Mar del Plata",
    "vasos tubo 1 litro",
    "vasos ferneteros",
    "vasos térmicos",
    "regalos personalizados Argentina",
  ],
  openGraph: {
    title: "Épicos Mar del Plata",
    description: "Diseños que convierten un vaso en tu vaso.",
    locale: "es_AR",
    type: "website",
    ...(siteUrl
      ? { images: [{ url: "/opengraph-image.svg", width: 1200, height: 630 }] }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Épicos Mar del Plata",
    description: "Vasos con diseños que se hacen notar.",
    ...(siteUrl ? { images: ["/opengraph-image.svg"] } : {}),
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body data-design-seed="f205e5b5">{children}</body>
    </html>
  );
}
