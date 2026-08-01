import type { Metadata } from "next";
import Image from "next/image";
import { ArrowIcon, WhatsAppIcon } from "../components/icons";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { products, whatsappUrl } from "../data";
import FerneterosExperience from "./FerneterosExperience";
import styles from "./ferneteros.module.css";

export const metadata: Metadata = {
  title: "Vasos ferneteros | Épicos Tandil",
  description: "Descubrí los vasos ferneteros de Épicos Tandil, mirá cada diseño de ambos lados y consultá por WhatsApp.",
  keywords: ["vasos ferneteros", "ferneteros Tandil", "vasos con diseños", "Épicos Tandil"],
};

export default function FerneterosPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Vasos ferneteros Épicos Tandil",
    description: "Colección de vasos ferneteros con diseños impresos y consulta directa por WhatsApp.",
    numberOfItems: products.filter((product) => product.kind === "Fernetero").length,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteHeader />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <h1>Ferneteros</h1>
            <p>Diseños que no terminan en el frente.</p>
            <div className={styles.heroActions}>
              <a href="#pieza">Ver la pieza <ArrowIcon /></a>
              <a href={whatsappUrl()} target="_blank" rel="noreferrer"><WhatsAppIcon /> Consultar</a>
            </div>
          </div>
          <div className={styles.heroObject}>
            <span aria-hidden="true">ÉPICOS</span>
            <Image src="/products/branca-archivo.webp" alt="Vaso fernetero Branca Dorado" fill priority sizes="(max-width: 760px) 90vw, 47vw" />
          </div>
        </section>

        <section className={styles.storyIntro}>
          <h2>El diseño sigue cuando el vaso gira.</h2>
          <p>Branca Dorado reúne dos imágenes en una sola pieza. Desplazate para recorrerla de frente a dorso.</p>
        </section>

        <FerneterosExperience />

        <section className={styles.closing} id="consultar">
          <h2>¿Cuál habla por vos?</h2>
          <p>Decinos el nombre del diseño y te contamos disponibilidad, cantidades y opciones de entrega.</p>
          <a href={whatsappUrl()} target="_blank" rel="noreferrer"><WhatsAppIcon /> Escribir por WhatsApp</a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
