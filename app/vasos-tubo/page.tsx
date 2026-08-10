import type { Metadata } from "next";
import CollectionPage from "../components/collection/CollectionPage";
import type { CollectionConfig } from "../components/collection/types";
import { tubeProducts } from "../data";

export const metadata: Metadata = {
  title: "Vasos tubo de 1 litro | Épicos Mar del Plata",
  description: "Descubrí los vasos tubo de 1 litro de Épicos Mar del Plata, mirá cada diseño de ambos lados y consultá por WhatsApp.",
  keywords: ["vasos tubo", "vasos de 1 litro", "vasos personalizados Mar del Plata", "Épicos Mar del Plata"],
};

const config: CollectionConfig = {
  heroTitle: ["Vasos", "tubo"],
  heroTagline: "Diseños que no terminan en el frente.",
  heroAlt: "Vaso tubo Branca Dorado de 1 litro",
  introTitle: "El diseño sigue cuando el vaso gira.",
  introDescription: "Las gráficas recorren cada pieza y, en varios diseños, continúan de frente a dorso. Desplazate para descubrirlas.",
  storyLabel: "Las dos caras del vaso tubo Branca Dorado cambian con el desplazamiento",
  storyChapters: [
    { title: ["Una pieza.", "Dos relatos."], description: "El frente presenta el emblema sobre una superficie dorada." },
    { title: ["La gráfica", "da la vuelta."], description: "Al avanzar aparece la segunda cara, con la etiqueta ilustrada recorriendo el mismo dorado." },
  ],
  collectionTitle: ["Elegí la pieza.", "Después mirá el otro lado."],
  collectionDescription: "Cinco vasos tubo de 1 litro, cada uno con sus vistas disponibles. Cambiá de cara y consultá el diseño que te representa.",
  closingTitle: "¿Cuál habla por vos?",
  closingDescription: "Decinos el nombre del diseño y te contamos disponibilidad, cantidades y opciones de entrega.",
  products: tubeProducts,
};

export default function VasosTuboPage() {
  return (
    <CollectionPage
      config={config}
      schemaName="Vasos tubo Épicos Mar del Plata"
      schemaDescription="Colección de vasos tubo de 1 litro con diseños impresos y consulta directa por WhatsApp."
    />
  );
}
