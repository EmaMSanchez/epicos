import type { Metadata } from "next";
import CollectionPage from "../components/collection/CollectionPage";
import type { CollectionConfig } from "../components/collection/types";
import { thermalProducts } from "../data";

export const metadata: Metadata = {
  title: "Vasos térmicos para café | Épicos Mar del Plata",
  description: "Descubrí los vasos térmicos de Épicos Mar del Plata, mirá cada diseño de frente y dorso y consultá por WhatsApp.",
  keywords: ["vasos térmicos", "vasos para café", "térmicos Starbucks", "Épicos Mar del Plata"],
};

const config: CollectionConfig = {
  relaxedTitles: true,
  heroTitle: ["Térmicos", "Starbucks"],
  heroTagline: "El café también se toma con identidad.",
  heroAlt: "Vaso térmico Argentina celeste y blanco con tapa",
  introTitle: "El diseño acompaña cada pausa.",
  introDescription: "Piezas compactas para el ritual del café y otras bebidas calientes. Desplazate para ver cómo continúa el diseño.",
  storyLabel: "El frente y el dorso del vaso térmico Argentina cambian con el desplazamiento",
  storyChapters: [
    { title: ["Argentina", "al frente."], description: "Los bastones celestes y blancos reúnen los emblemas en la cara principal." },
    { title: ["La camiseta", "continua."], description: "Al girar, las franjas siguen limpias alrededor del cuerpo del vaso." },
  ],
  collectionTitle: ["Elegí tu térmico.", "Miralo completo."],
  collectionDescription: "Tres diseños de 380 ml con sus vistas disponibles. Recorré cada pieza y consultá la que querés sumar a tu pausa.",
  closingTitle: "Tu café. Tu diseño.",
  closingDescription: "Decinos qué térmico elegiste y te contamos disponibilidad, cantidades y opciones de entrega.",
  products: thermalProducts,
};

export default function VasosTermicosPage() {
  return (
    <CollectionPage
      config={config}
      schemaName="Vasos térmicos Épicos Mar del Plata"
      schemaDescription="Colección de vasos térmicos de 380 ml con diseños impresos y consulta directa por WhatsApp."
    />
  );
}
