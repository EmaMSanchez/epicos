"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowIcon } from "../components/icons";
import { products, type Product, whatsappUrl } from "../data";
import styles from "./ferneteros.module.css";

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [activeView, setActiveView] = useState(0);
  const views = [
    { src: "/products/branca-archivo.webp", label: "Frente", alt: "Vista de demostración Coronados del vaso Branca dorado" },
    { src: "/products/branca-aguila.webp", label: "Dorso", alt: "Vista de demostración Águila del vaso Branca dorado" },
  ];
  const image = views[activeView];

  return (
    <article className={`${styles.productCard} ${styles[`productCard${index + 1}`] ?? ""}`}>
      <div className={styles.productPhoto}>
        <Image
          key={image.label}
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 760px) 100vw, 50vw"
          style={{ objectPosition: "center" }}
        />
        <span>{product.theme}</span>
      </div>
      <div className={styles.productBody}>
        <div>
          <p className={styles.format}>{product.format}</p>
          <h3>{product.name}</h3>
          <p className={styles.description}>{product.description}</p>
        </div>
        <p className={styles.demoLabel}>Vistas de demostración · Branca Dorado</p>
        <div className={styles.viewPicker} aria-label={`Vistas de demostración en ${product.name}`}>
          {views.map((view, viewIndex) => (
            <button
              type="button"
              className={viewIndex === activeView ? styles.activeView : ""}
              aria-pressed={viewIndex === activeView}
              onClick={() => setActiveView(viewIndex)}
              key={view.label}
            >
              {view.label}
            </button>
          ))}
        </div>
        <div className={styles.productBuy}>
          <span><small>Precio de referencia</small>{product.price}</span>
          <a href={whatsappUrl(product)} target="_blank" rel="noreferrer">
            Consultar <ArrowIcon />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function FerneterosExperience() {
  const storyRef = useRef<HTMLElement>(null);
  const [chapter, setChapter] = useState(0);

  useEffect(() => {
    const story = storyRef.current;
    if (!story) return;

    let frame = 0;
    let currentChapter = 0;
    let start = 0;
    let distance = 1;

    const update = () => {
      frame = 0;
      const rawProgress = Math.min(1, Math.max(0, (window.scrollY - start) / distance));
      const transitionProgress = Math.min(1, Math.max(0, (rawProgress - 0.08) / 0.74));
      const progress = transitionProgress * transitionProgress * (3 - 2 * transitionProgress);
      story.style.setProperty("--story-progress", progress.toFixed(4));
      const nextChapter = progress >= 0.58 ? 1 : 0;
      if (nextChapter !== currentChapter) {
        currentChapter = nextChapter;
        setChapter(nextChapter);
      }
    };

    const measure = () => {
      start = story.getBoundingClientRect().top + window.scrollY;
      distance = Math.max(1, story.offsetHeight - window.innerHeight);
      update();
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(story);
    measure();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", measure);
      resizeObserver.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <section
        className={styles.story}
        id="pieza"
        ref={storyRef}
      >
        <div className={styles.stickyScene}>
          <div className={styles.storyCopy} aria-live="polite">
            <div className={chapter === 0 ? styles.activeChapter : ""}>
              <h2>Una pieza.<br />Dos relatos.</h2>
              <p>El frente presenta Coronados en tinta oscura. El vaso no se mueve: la gráfica es la que toma el escenario.</p>
            </div>
            <div className={chapter === 1 ? styles.activeChapter : ""}>
              <h2>El emblema<br />da la vuelta.</h2>
              <p>Al avanzar, aparece la segunda cara. Águila, globo y tipografía conviven sobre el mismo dorado.</p>
            </div>
          </div>

          <div className={styles.storyVisual} role="img" aria-label="Las dos caras del vaso Branca Dorado cambian con el desplazamiento">
            <div className={`${styles.storyImage} ${styles.storyFront}`}>
              <Image src="/products/branca-archivo.webp" alt="" fill priority sizes="(max-width: 760px) 86vw, 42vw" />
            </div>
            <div className={`${styles.storyImage} ${styles.storyBack}`}>
              <Image src="/products/branca-aguila.webp" alt="" fill sizes="(max-width: 760px) 86vw, 42vw" />
            </div>
            <span className={styles.sideLabel}>{chapter === 0 ? "Coronados" : "Águila"}</span>
          </div>

          <div className={styles.progressTrack} aria-hidden="true"><span /></div>
        </div>
      </section>

      <section className={styles.collection} id="disenos">
        <div className={styles.collectionHeading}>
          <h2>Elegí la pieza.<br />Después mirá el otro lado.</h2>
          <p>Cuatro ferneteros, cada uno con sus vistas reunidas. Cambiá de cara y consultá el diseño que te representa.</p>
        </div>
        <div className={styles.productGrid}>
          {products.filter((product) => product.kind === "Fernetero").map((product, index) => (
            <ProductCard product={product} index={index} key={product.slug} />
          ))}
        </div>
      </section>
    </>
  );
}
