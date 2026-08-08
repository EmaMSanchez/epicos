import type { Metadata } from "next";
import Image from "next/image";
import { ArrowIcon, WhatsAppIcon } from "../components/icons";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { tubeProducts, whatsappUrl } from "../data";
import VasosTuboExperience from "./VasosTuboExperience";
import styles from "./vasos-tubo.module.css";

export const metadata: Metadata = {
  title: "Vasos tubo de 1 litro | Épicos Tandil",
  description: "Descubrí los vasos tubo de 1 litro de Épicos Tandil, mirá cada diseño de ambos lados y consultá por WhatsApp.",
  keywords: ["vasos tubo", "vasos de 1 litro", "vasos personalizados Tandil", "Épicos Tandil"],
};

export default function VasosTuboPage() {
  const featuredProduct = tubeProducts[0];
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Vasos tubo Épicos Tandil",
    description: "Colección de vasos tubo de 1 litro con diseños impresos y consulta directa por WhatsApp.",
    numberOfItems: tubeProducts.length,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteHeader />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <h1>Vasos<br />tubo</h1>
            <p>Diseños que no terminan en el frente.</p>
            <div className={styles.heroActions}>
              <a href="#pieza">Ver la pieza <ArrowIcon /></a>
              <a href={whatsappUrl()} target="_blank" rel="noreferrer"><WhatsAppIcon /> Consultar</a>
            </div>
          </div>
          <div className={styles.heroObject}>
            <span aria-hidden="true">ÉPICOS</span>
            <Image src={featuredProduct.image} alt={`${featuredProduct.name}, vaso tubo de 1 litro`} fill priority sizes="(max-width: 760px) 90vw, 47vw" />
          </div>
        </section>

        <section className={styles.storyIntro}>
          <h2>El diseño sigue cuando el vaso gira.</h2>
          <p>Las gráficas recorren cada pieza y, en varios diseños, continúan de frente a dorso. Desplazate para descubrirlas.</p>
        </section>

        <VasosTuboExperience />

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
