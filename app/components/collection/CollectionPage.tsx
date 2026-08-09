import Image from "next/image";
import { ArrowIcon, WhatsAppIcon } from "../icons";
import { SiteFooter, SiteHeader } from "../SiteChrome";
import { whatsappUrl } from "../../data";
import CollectionExperience from "./CollectionExperience";
import type { CollectionConfig } from "./types";
import styles from "./collection.module.css";

type CollectionPageProps = {
  config: CollectionConfig;
  schemaName: string;
  schemaDescription: string;
};

export default function CollectionPage({ config, schemaName, schemaDescription }: CollectionPageProps) {
  const featuredProduct = config.products[0];
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: schemaName,
    description: schemaDescription,
    numberOfItems: config.products.length,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteHeader />

      <main className={`${styles.page} ${config.relaxedTitles ? styles.relaxedTitles : ""}`}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <h1>{config.heroTitle.map((line) => <span key={line}>{line}</span>)}</h1>
            <p>{config.heroTagline}</p>
            <div className={styles.heroActions}>
              <a href="#pieza">Ver la pieza <ArrowIcon /></a>
              <a href={whatsappUrl()} target="_blank" rel="noreferrer"><WhatsAppIcon /> Consultar</a>
            </div>
          </div>
          <div className={styles.heroObject}>
            <span aria-hidden="true">ÉPICOS</span>
            <Image src={featuredProduct.image} alt={config.heroAlt} fill priority sizes="(max-width: 760px) 90vw, 47vw" />
          </div>
        </section>

        <section className={styles.storyIntro}>
          <h2>{config.introTitle}</h2>
          <p>{config.introDescription}</p>
        </section>

        <CollectionExperience config={config} />

        <section className={styles.closing} id="consultar">
          <h2>{config.closingTitle}</h2>
          <p>{config.closingDescription}</p>
          <a href={whatsappUrl()} target="_blank" rel="noreferrer"><WhatsAppIcon /> Escribir por WhatsApp</a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
