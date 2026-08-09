"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowIcon } from "../icons";
import { type Product, whatsappUrl } from "../../data";
import type { CollectionConfig } from "./types";
import styles from "./collection.module.css";

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [activeView, setActiveView] = useState(0);
  const views = product.images;
  const image = views[activeView];

  return (
    <article className={`${styles.productCard} ${styles[`productCard${(index % 4) + 1}`] ?? ""}`}>
      <div className={styles.productPhoto}>
        <Image
          key={image.label}
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 760px) 100vw, 50vw"
          style={{ objectPosition: product.imagePosition ?? "center" }}
        />
        <span>{product.theme}</span>
      </div>
      <div className={styles.productBody}>
        <div>
          <p className={styles.format}>{product.format}</p>
          <h3>{product.name}</h3>
          <p className={styles.description}>{product.description}</p>
        </div>
        <p className={styles.demoLabel}>{views.length > 1 ? `${views.length} vistas del diseño` : "Vista disponible"}</p>
        {views.length > 1 && (
          <div className={styles.viewPicker} aria-label={`Vistas de ${product.name}`}>
            {views.map((view, viewIndex) => (
              <button
                type="button"
                className={viewIndex === activeView ? styles.activeView : ""}
                aria-pressed={viewIndex === activeView}
                onClick={() => setActiveView(viewIndex)}
                key={view.src}
              >
                {view.label}
              </button>
            ))}
          </div>
        )}
        <div className={styles.productBuy}>
          <span><small>Precio</small>{product.price}</span>
          <a href={whatsappUrl(product)} target="_blank" rel="noreferrer">
            Consultar <ArrowIcon />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function CollectionExperience({ config }: { config: CollectionConfig }) {
  const storyRef = useRef<HTMLElement>(null);
  const [chapter, setChapter] = useState(0);
  const featuredProduct = config.products[0];
  const [front, back] = featuredProduct.images;

  useEffect(() => {
    const story = storyRef.current;
    if (!story) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

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
      <section className={styles.story} id="pieza" ref={storyRef}>
        <div className={styles.stickyScene}>
          <div className={styles.storyCopy} aria-live="polite">
            {config.storyChapters.map((item, index) => (
              <div className={chapter === index ? styles.activeChapter : ""} key={item.title.join("-")}>
                <h2>{item.title.map((line) => <span key={line}>{line}</span>)}</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.storyVisual} role="img" aria-label={config.storyLabel}>
            <div className={`${styles.storyImage} ${styles.storyFront}`}>
              <Image src={front.src} alt="" fill priority sizes="(max-width: 760px) 86vw, 42vw" />
            </div>
            <div className={`${styles.storyImage} ${styles.storyBack}`}>
              <Image src={back.src} alt="" fill sizes="(max-width: 760px) 86vw, 42vw" />
            </div>
            <span className={styles.sideLabel}>{chapter === 0 ? front.label : back.label}</span>
          </div>

          <div className={styles.progressTrack} aria-hidden="true"><span /></div>
        </div>
      </section>

      <section className={styles.collection} id="disenos">
        <div className={styles.collectionHeading}>
          <h2>{config.collectionTitle.map((line) => <span key={line}>{line}</span>)}</h2>
          <p>{config.collectionDescription}</p>
        </div>
        <div className={styles.productGrid}>
          {config.products.map((product, index) => (
            <ProductCard product={product} index={index} key={product.slug} />
          ))}
        </div>
      </section>
    </>
  );
}
