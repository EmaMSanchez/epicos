import type { StaticImageData } from "next/image";
import immortal from "../WhatsApp Unknown 2026-07-31 at 17.16.39/WhatsApp Image 2026-07-27 at 12.59.55.jpeg";
import majestad from "../WhatsApp Unknown 2026-07-31 at 17.16.39/WhatsApp Image 2026-07-27 at 12.59.55 (1).jpeg";
import brancaLabel from "../WhatsApp Unknown 2026-07-31 at 17.16.39/WhatsApp Image 2026-07-27 at 11.59.31.jpeg";
import brancaEagle from "../WhatsApp Unknown 2026-07-31 at 17.16.39/WhatsApp Image 2026-07-27 at 11.59.30.jpeg";
import xeneizePair from "../WhatsApp Unknown 2026-07-31 at 17.16.39/WhatsApp Image 2026-07-23 at 15.44.24.jpeg";
import xeneizeBack from "../WhatsApp Unknown 2026-07-31 at 17.16.39/WhatsApp Image 2026-07-23 at 15.31.50.jpeg";
import xeneizeFront from "../WhatsApp Unknown 2026-07-31 at 17.16.39/WhatsApp Image 2026-07-23 at 15.31.50 (1).jpeg";
import argentinaBack from "../WhatsApp Unknown 2026-07-31 at 17.16.39/WhatsApp Image 2026-07-23 at 15.31.49.jpeg";
import argentinaFront from "../WhatsApp Unknown 2026-07-31 at 17.16.39/WhatsApp Image 2026-07-23 at 15.31.49 (1).jpeg";

export type ProductTheme = "Fútbol" | "Clásicos";
export type ProductKind = "Fernetero" | "Térmico" | "Mate";

export type ProductImage = {
  src: StaticImageData;
  label: string;
  alt: string;
  position?: string;
};

export type Product = {
  slug: string;
  name: string;
  description: string;
  kind: ProductKind;
  theme: ProductTheme;
  format: string;
  price: string;
  image: StaticImageData;
  imagePosition?: string;
  images: ProductImage[];
};

// Precios de muestra: reemplazar estos valores antes de publicar.
export const products: Product[] = [
  {
    slug: "inmortal-10",
    name: "Inmortal 10",
    description: "Retrato en alto contraste y tipografía envolvente sobre negro mate.",
    kind: "Fernetero",
    theme: "Fútbol",
    format: "Vaso fernetero",
    price: "$ 14.900",
    image: immortal,
    images: [
      { src: immortal, label: "Frente", alt: "Vaso negro Inmortal 10, cara con retrato" },
      { src: majestad, label: "Dorso", alt: "Vaso negro Inmortal 10, cara con frase tipográfica" },
    ],
  },
  {
    slug: "branca-dorado",
    name: "Branca Dorado",
    description: "Coronados y emblema clásico, dos caras sobre una base dorada.",
    kind: "Fernetero",
    theme: "Clásicos",
    format: "Vaso fernetero",
    price: "$ 13.500",
    image: brancaLabel,
    images: [
      { src: brancaLabel, label: "Coronados", alt: "Vaso Branca dorado, cara Coronados" },
      { src: brancaEagle, label: "Águila", alt: "Vaso Branca dorado, cara con águila y emblema" },
    ],
  },
  {
    slug: "xeneize-10",
    name: "Xeneize 10",
    description: "Azul y oro en dos vistas inspiradas en la camiseta de cancha.",
    kind: "Fernetero",
    theme: "Fútbol",
    format: "Fernetero 700 ml",
    price: "$ 12.900",
    image: xeneizeFront,
    images: [
      { src: xeneizeFront, label: "Frente", alt: "Fernetero azul Xeneize, cara con franja amarilla" },
      { src: xeneizeBack, label: "Dorso", alt: "Fernetero azul Xeneize, cara con número 10" },
      { src: xeneizePair, label: "Ambas caras", alt: "Las dos caras del fernetero Xeneize" },
    ],
  },
  {
    slug: "argentina-10",
    name: "Argentina 10",
    description: "Celeste y blanco translúcido con dos caras de gráfica de selección.",
    kind: "Fernetero",
    theme: "Fútbol",
    format: "Vaso fernetero",
    price: "$ 12.900",
    image: argentinaFront,
    images: [
      { src: argentinaFront, label: "Frente", alt: "Fernetero Argentina, cara con gráfica vertical" },
      { src: argentinaBack, label: "Dorso", alt: "Fernetero Argentina, cara con nombre y número 10" },
    ],
  },
];

export const whatsappNumber = "5492235195739";

export function whatsappUrl(product?: Product) {
  const message = product
    ? `Hola Épicos Tandil, quiero consultar por el diseño ${product.name} (${product.format}).`
    : "Hola Épicos Tandil, quiero conocer el catálogo y consultar por un pedido.";

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
