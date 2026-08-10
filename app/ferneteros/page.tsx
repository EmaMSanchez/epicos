import type { Metadata } from "next";
import CollectionPage from "../components/collection/CollectionPage";
import type { CollectionConfig } from "../components/collection/types";
import { fernetProducts } from "../data";

export const metadata: Metadata = {
  title: "Vasos ferneteros de 700 ml | Épicos Mar del Plata",
  description: "Descubrí los vasos ferneteros de Épicos Mar del Plata, recorré sus diseños y consultá por WhatsApp.",
  keywords: ["vasos ferneteros", "vasos de 700 ml", "ferneteros personalizados", "Épicos Mar del Plata"],
};

const config: CollectionConfig = {
  heroTitle: ["Vasos", "ferneteros"],
  heroTagline: "La mezcla arranca por el vaso.",
  heroAlt: "Vaso fernetero Sangre de campeones con Messi al frente",
  introTitle: "Dos campeones. Una misma pieza.",
  introDescription: "Messi ocupa el frente y Diego aparece al dorso. Desplazate para descubrir las dos caras del mismo fernetero.",
  storyLabel: "El vaso fernetero Sangre de campeones cambia de Messi al frente a Diego al dorso con el desplazamiento",
  storyChapters: [
    { title: ["Messi", "de frente."], description: "El retrato combina negro y celeste sobre la transparencia del vaso." },
    { title: ["Diego", "al dorso."], description: "Al girar aparece la silueta en movimiento sobre la segunda cara de la misma pieza." },
  ],
  collectionTitle: ["Serví la mezcla.", "Elegi la historia."],
  collectionDescription: "Cuatro ferneteros de 700 ml con sus vistas disponibles. Cambiá de cara, elegí el tuyo y consultanos.",
  closingTitle: "¿Cuál va a tu mesa?",
  closingDescription: "Decinos el nombre del fernetero y te contamos disponibilidad, cantidades y opciones de entrega.",
  products: fernetProducts,
};

export default function FerneterosPage() {
  return (
    <CollectionPage
      config={config}
      schemaName="Vasos ferneteros Épicos Mar del Plata"
      schemaDescription="Colección de vasos ferneteros de 700 ml con diseños impresos y consulta directa por WhatsApp."
    />
  );
}
