import type { StaticImageData } from "next/image";
import immortal from "../WhatsApp Unknown 2026-07-31 at 17.16.39/WhatsApp Image 2026-07-27 at 12.59.55.jpeg";
import majestad from "../WhatsApp Unknown 2026-07-31 at 17.16.39/WhatsApp Image 2026-07-27 at 12.59.55 (1).jpeg";
import brancaLabel from "../WhatsApp Unknown 2026-07-31 at 17.16.39/WhatsApp Image 2026-07-27 at 11.59.31.jpeg";
import brancaEagle from "../WhatsApp Unknown 2026-07-31 at 17.16.39/WhatsApp Image 2026-07-27 at 11.59.30.jpeg";
import xeneizePair from "../WhatsApp Unknown 2026-07-31 at 17.16.39/WhatsApp Image 2026-07-23 at 15.44.24.jpeg";
import argentinaFront from "../WhatsApp Unknown 2026-07-31 at 17.16.39/WhatsApp Image 2026-07-23 at 15.31.49.jpeg";

export type ProductFamily = "Fútbol" | "Clásicos";

export type Product = {
  slug: string;
  name: string;
  description: string;
  family: ProductFamily;
  format: string;
  price: string;
  image: StaticImageData;
  imagePosition?: string;
};

// Precios de muestra: reemplazar estos valores antes de publicar.
export const products: Product[] = [
  {
    slug: "inmortal-10",
    name: "Inmortal 10",
    description: "Retrato en alto contraste y firma dorada sobre negro mate.",
    family: "Fútbol",
    format: "Vaso fernetero",
    price: "$ 14.900",
    image: immortal,
  },
  {
    slug: "majestad-del-norte",
    name: "Majestad del Norte",
    description: "Composición tipográfica envolvente con espíritu de tribuna.",
    family: "Fútbol",
    format: "Vaso fernetero",
    price: "$ 14.900",
    image: majestad,
  },
  {
    slug: "branca-archivo",
    name: "Branca Archivo",
    description: "Etiqueta histórica reinterpretada sobre una base dorada.",
    family: "Clásicos",
    format: "Vaso fernetero",
    price: "$ 13.500",
    image: brancaLabel,
  },
  {
    slug: "branca-aguila",
    name: "Branca Águila",
    description: "El emblema clásico en una pieza sobria de acabado metalizado.",
    family: "Clásicos",
    format: "Vaso fernetero",
    price: "$ 13.500",
    image: brancaEagle,
  },
  {
    slug: "xeneize-10",
    name: "Xeneize 10",
    description: "Frente y dorso inspirados en la camiseta azul y oro.",
    family: "Fútbol",
    format: "Fernetero 700 ml",
    price: "$ 12.900",
    image: xeneizePair,
    imagePosition: "center 42%",
  },
  {
    slug: "argentina-10",
    name: "Argentina 10",
    description: "Celeste y blanco translúcido con gráfica de selección.",
    family: "Fútbol",
    format: "Vaso fernetero",
    price: "$ 12.900",
    image: argentinaFront,
  },
];

export const whatsappNumber = "5492235195739";

export function whatsappUrl(product?: Product) {
  const message = product
    ? `Hola Épicos Tandil, quiero consultar por el diseño ${product.name} (${product.format}).`
    : "Hola Épicos Tandil, quiero conocer el catálogo y consultar por un pedido.";

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
