export type ProductTheme = "Fútbol" | "Clásicos";
export type ProductKind = "Vaso tubo" | "Térmico" | "Fernetero";

export type ProductImage = {
  src: string;
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
  image: string;
  imagePosition?: string;
  images: ProductImage[];
};

export const products: Product[] = [
  {
    slug: "branca-dorado-tubo",
    name: "Branca Dorado",
    description: "Gráfica clásica en negro sobre una superficie dorada de alto impacto.",
    kind: "Vaso tubo",
    theme: "Clásicos",
    format: "Vaso tubo 1 L",
    price: "$ 7.500",
    image: "/products/catalog/vasos-tubo/branca-frente.webp",
    images: [
      { src: "/products/catalog/vasos-tubo/branca-frente.webp", label: "Frente", alt: "Frente del vaso tubo Branca Dorado con águila y emblema" },
      { src: "/products/catalog/vasos-tubo/branca-dorso.webp", label: "Dorso", alt: "Dorso del vaso tubo Branca Dorado con etiqueta ilustrada" },
    ],
  },
  {
    slug: "inmortal-10-tubo",
    name: "Inmortal 10",
    description: "Retrato en alto contraste sobre dorado, con el número diez como pieza central.",
    kind: "Vaso tubo",
    theme: "Fútbol",
    format: "Vaso tubo 1 L",
    price: "$ 7.500",
    image: "/products/catalog/vasos-tubo/inmortal-frente.webp",
    images: [
      { src: "/products/catalog/vasos-tubo/inmortal-frente.webp", label: "Frente", alt: "Frente dorado del vaso tubo Inmortal 10" },
      { src: "/products/catalog/vasos-tubo/inmortal-dorso.webp", label: "Dorso", alt: "Dorso dorado del vaso tubo Inmortal 10" },
    ],
  },
  {
    slug: "argentina-termico",
    name: "Argentina",
    description: "Celeste, blanco y dorado en un térmico compacto con tapa.",
    kind: "Térmico",
    theme: "Fútbol",
    format: "Térmico 380 ml",
    price: "$ 5.000",
    image: "/products/catalog/termicos/argentina-frente.webp",
    images: [
      { src: "/products/catalog/termicos/argentina-frente.webp", label: "Frente", alt: "Frente del vaso térmico Argentina celeste y blanco" },
    ],
  },
  {
    slug: "boca-river-termicos",
    name: "Boca + River",
    description: "Pasión por duplicado. Compará nuestros dos diseños de cancha, elegí el tuyo o llevate la dupla",
    kind: "Térmico",
    theme: "Fútbol",
    format: "Térmicos 380 ml",
    price: "$ 5.000 c/u",
    image: "/products/catalog/termicos/boca-frente.webp",
    images: [
      { src: "/products/catalog/termicos/boca-frente.webp", label: "Boca", alt: "Vaso térmico Boca azul y oro" },
      { src: "/products/catalog/termicos/river-frente.webp", label: "River", alt: "Vaso térmico River blanco con banda roja" },
    ],
  },
  {
    slug: "messi-argentina-fernetero",
    name: "Mesías 10",
    description: "Silueta, bastones celestes y el diez reunidos en un vaso translúcido.",
    kind: "Fernetero",
    theme: "Fútbol",
    format: "Vaso fernetero 700 ml",
    price: "$ 8.500",
    image: "/products/catalog/ferneteros/messi-argentina-frente.webp",
    images: [
      { src: "/products/catalog/ferneteros/messi-argentina-frente.webp", label: "Frente", alt: "Frente del vaso fernetero Mesías 10" },
      { src: "/products/catalog/ferneteros/messi-argentina-dorso.webp", label: "Dorso", alt: "Dorso del vaso fernetero Mesías 10" },
      { src: "/products/catalog/ferneteros/messi-argentina-detalle.webp", label: "Detalle", alt: "Vista adicional del vaso fernetero Mesías 10" },
    ],
  },
  {
    slug: "scudetto-1988-tubo",
    name: "Scudetto 1988",
    description: "Celeste pleno con dos gráficas históricas que continúan alrededor del vaso.",
    kind: "Vaso tubo",
    theme: "Fútbol",
    format: "Vaso tubo 1 L",
    price: "$ 7.500",
    image: "/products/catalog/vasos-tubo/scudetto-frente.webp",
    images: [
      { src: "/products/catalog/vasos-tubo/scudetto-frente.webp", label: "Frente", alt: "Frente celeste del vaso tubo Scudetto 1988" },
      { src: "/products/catalog/vasos-tubo/scudetto-dorso.webp", label: "Dorso", alt: "Dorso celeste del vaso tubo Scudetto 1988" },
    ],
  },
  {
    slug: "river-10-tubo",
    name: "River 10",
    description: "Banda roja, blanco y negro en una composición vertical de cancha.",
    kind: "Vaso tubo",
    theme: "Fútbol",
    format: "Vaso tubo 1 L",
    price: "$ 7.500",
    image: "/products/catalog/vasos-tubo/river-10.webp",
    images: [
      { src: "/products/catalog/vasos-tubo/river-10.webp", label: "Diseño", alt: "Vaso tubo River 10 blanco con banda roja" },
    ],
  },
  {
    slug: "boca-10-tubo",
    name: "Boca 10",
    description: "Azul y oro con el número diez ocupando el centro de la pieza.",
    kind: "Vaso tubo",
    theme: "Fútbol",
    format: "Vaso tubo 1 L",
    price: "$ 7.500",
    image: "/products/catalog/vasos-tubo/boca-10.webp",
    images: [
      { src: "/products/catalog/vasos-tubo/boca-10.webp", label: "Diseño", alt: "Vaso tubo Boca 10 azul y oro" },
    ],
  },
  {
    slug: "boca-termico",
    name: "Boca",
    description: "Azul y oro en un térmico con dos caras y tapa a tono.",
    kind: "Térmico",
    theme: "Fútbol",
    format: "Térmico 380 ml",
    price: "$ 5.000",
    image: "/products/catalog/termicos/boca-frente.webp",
    images: [
      { src: "/products/catalog/termicos/boca-frente.webp", label: "Frente", alt: "Frente del vaso térmico Boca azul y oro" },
      { src: "/products/catalog/termicos/boca-dorso.webp", label: "Dorso", alt: "Dorso del vaso térmico Boca con el número 10" },
    ],
  },
  {
    slug: "river-termico",
    name: "River",
    description: "Blanco y rojo en un térmico con frente y dorso complementarios.",
    kind: "Térmico",
    theme: "Fútbol",
    format: "Térmico 380 ml",
    price: "$ 5.000",
    image: "/products/catalog/termicos/river-frente.webp",
    images: [
      { src: "/products/catalog/termicos/river-frente.webp", label: "Frente", alt: "Frente del vaso térmico River blanco con banda roja" },
      { src: "/products/catalog/termicos/river-dorso.webp", label: "Dorso", alt: "Dorso del vaso térmico River con el número 10" },
    ],
  },
  {
    slug: "messi-azul-fernetero",
    name: "Messi Azul",
    description: "Azul intenso y retrato tipográfico en una pieza de gran presencia.",
    kind: "Fernetero",
    theme: "Fútbol",
    format: "Vaso fernetero 700 ml",
    price: "$ 8.500",
    image: "/products/catalog/ferneteros/messi-azul.webp",
    images: [
      { src: "/products/catalog/ferneteros/messi-azul.webp", label: "Diseño", alt: "Vaso fernetero Messi Azul" },
    ],
  },
  {
    slug: "diego-fernetero",
    name: "Diego 10",
    description: "Silueta en movimiento y firma sobre una base translúcida.",
    kind: "Fernetero",
    theme: "Fútbol",
    format: "Vaso fernetero 700 ml",
    price: "$ 8.500",
    image: "/products/catalog/ferneteros/diego.webp",
    images: [
      { src: "/products/catalog/ferneteros/diego.webp", label: "Diseño", alt: "Vaso fernetero Diego 10 translúcido" },
    ],
  },
  {
    slug: "xeneize-10-fernetero",
    name: "Xeneize 10",
    description: "Azul y oro en dos caras inspiradas en la gráfica de camiseta.",
    kind: "Fernetero",
    theme: "Fútbol",
    format: "Vaso fernetero 700 ml",
    price: "$ 8.500",
    image: "/products/catalog/ferneteros/xeneize-frente.webp",
    images: [
      { src: "/products/catalog/ferneteros/xeneize-frente.webp", label: "Frente", alt: "Frente del vaso fernetero Xeneize 10" },
      { src: "/products/catalog/ferneteros/xeneize-dorso.webp", label: "Dorso", alt: "Dorso del vaso fernetero Xeneize 10" },
    ],
  },
];

const featuredSlugs = [
  "branca-dorado-tubo",
  "inmortal-10-tubo",
  "messi-argentina-fernetero",
  "boca-river-termicos",
];

export const featuredProducts = featuredSlugs
  .map((slug) => products.find((product) => product.slug === slug))
  .filter((product): product is Product => product !== undefined);
export const tubeProducts = products.filter((product) => product.kind === "Vaso tubo");

export const whatsappNumber = "5492235195739";

export function whatsappUrl(product?: Product) {
  const message = product
    ? `Hola Épicos Tandil, quiero consultar por el diseño ${product.name} (${product.format}).`
    : "Hola Épicos Tandil, quiero conocer el catálogo y consultar por un pedido.";

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function whatsappCategoryUrl(kind: ProductKind) {
  const message = `Hola Épicos Tandil, quiero consultar por la colección de ${kind.toLocaleLowerCase("es-AR")}.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
