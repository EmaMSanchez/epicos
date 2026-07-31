"use client";

import Image from "next/image";
import { startTransition, useState } from "react";
import packaging from "../WhatsApp Unknown 2026-07-31 at 17.16.39/ejemplo packaging.jpeg";
import { products, type ProductFamily, whatsappUrl } from "./data";

const filters: Array<"Todos" | ProductFamily> = ["Todos", "Fútbol", "Clásicos"];

function MountainMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 92 38" className="brand-mark">
      <path d="M2 34 25 9l11 10L51 2l39 32H2Z" fill="currentColor" />
      <path d="m17 34 8-13 7 6-5 7Zm20 0L52 9l25 25Z" fill="var(--ink)" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="icon">
      <path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">
      <path
        d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3 20.4l1.3-4.7a8.5 8.5 0 1 1 16.2-4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8.3 7.8c.2-.4.4-.4.7-.4h.5l.7 1.8c.1.3 0 .5-.2.7l-.6.7c.7 1.5 1.8 2.5 3.3 3.2l.7-.9c.2-.2.5-.3.7-.2l1.8.8c.3.1.4.3.4.6 0 .7-.4 1.5-1 1.9-.6.4-1.4.6-2.2.4-1.3-.3-2.9-1.1-4.4-2.5C7.8 12.5 7 11 6.8 9.8c-.1-.8.2-1.5.7-1.9.3-.2.6-.2.8-.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("Todos");
  const visibleProducts =
    activeFilter === "Todos" ? products : products.filter((product) => product.family === activeFilter);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Épicos Tandil",
    sameAs: ["https://www.instagram.com/epicos.tandil"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+54-9-223-519-5739",
      contactType: "sales",
      availableLanguage: "Spanish",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Épicos Tandil, inicio">
          <MountainMark />
          <span className="brand-type">
            <strong>ÉPICOS</strong>
            <small>TANDIL</small>
          </span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#catalogo">Catálogo</a>
          <a href="#mayoristas">Mayoristas</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="header-action" href={whatsappUrl()} target="_blank" rel="noreferrer">
          Consultar
          <ArrowIcon />
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <h1>Tu ritual.<br />Tu diseño.</h1>
            <p>
              Vasos y mates serigrafiados para quienes no eligen lo de siempre. Encontrá el tuyo o
              armá un pedido para tu gente.
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href="#catalogo">
                Explorar diseños
                <ArrowIcon />
              </a>
              <a className="text-link" href={whatsappUrl()} target="_blank" rel="noreferrer">
                <WhatsAppIcon />
                Hablar por WhatsApp
              </a>
            </div>
          </div>

          <div className="record-bin" aria-label="Selección destacada de productos">
            <div className="bin-backdrop" aria-hidden="true">ÉPICOS</div>
            {products.slice(0, 3).map((product, index) => (
              <a
                className={`record-cover record-cover-${index + 1}`}
                href={whatsappUrl(product)}
                target="_blank"
                rel="noreferrer"
                key={product.slug}
                aria-label={`Consultar por ${product.name}`}
              >
                <Image
                  src={product.image}
                  alt={`${product.name}, ${product.format} de Épicos Tandil`}
                  fill
                  priority
                  sizes="(max-width: 760px) 62vw, 29vw"
                  style={{ objectPosition: product.imagePosition ?? "center" }}
                />
                <span>{product.name}</span>
              </a>
            ))}
            <div className="bin-rail" aria-hidden="true">
              <span>Ediciones para usar</span>
              <span>Tandil · Argentina</span>
            </div>
          </div>

          <div className="hero-proof">
            <span>Minorista</span>
            <span>Mayorista</span>
            <span>Diseños propios</span>
          </div>
        </section>

        <section className="catalog" id="catalogo">
          <div className="section-heading">
            <h2>Elegí el que habla por vos.</h2>
            <p>
              Selección disponible para consulta. Los precios son de referencia y podés confirmar
              modelos, cantidades y entrega directamente por WhatsApp.
            </p>
          </div>

          <div className="catalog-tools">
            <div className="filters" aria-label="Filtrar catálogo">
              {filters.map((filter) => (
                <button
                  type="button"
                  className={filter === activeFilter ? "active" : ""}
                  aria-pressed={filter === activeFilter}
                  onClick={() => startTransition(() => setActiveFilter(filter))}
                  key={filter}
                >
                  {filter}
                </button>
              ))}
            </div>
            <span className="result-count" aria-live="polite">
              {visibleProducts.length} diseños
            </span>
          </div>

          <div className="product-grid">
            {visibleProducts.map((product, index) => (
              <article className={`product product-${(index % 4) + 1}`} key={product.slug}>
                <div className="product-image">
                  <Image
                    src={product.image}
                    alt={`${product.name}, ${product.format} con diseño impreso`}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 42vw"
                    style={{ objectPosition: product.imagePosition ?? "center" }}
                  />
                  <span className="product-family">{product.family}</span>
                </div>
                <div className="product-info">
                  <div>
                    <span className="product-format">{product.format}</span>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                  </div>
                  <div className="product-buy">
                    <span>
                      <small>Precio de referencia</small>
                      {product.price}
                    </span>
                    <a href={whatsappUrl(product)} target="_blank" rel="noreferrer">
                      Consultar
                      <ArrowIcon />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="custom-band" aria-label="Más productos y diseños">
          <div className="custom-word" aria-hidden="true">NUEVOS</div>
          <div className="custom-copy">
            <h2>La batea sigue sumando diseños.</h2>
            <p>
              Si buscás vasos ferneteros, térmicos o mates y no lo viste acá, escribinos. Te contamos
              qué modelos forman parte del catálogo actual.
            </p>
            <a className="button button-dark" href={whatsappUrl()} target="_blank" rel="noreferrer">
              Consultar catálogo completo
              <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="wholesale" id="mayoristas">
          <div className="wholesale-copy">
            <h2>Cuando son muchos, la consulta sigue siendo simple.</h2>
            <p>
              Para grupos, comercios, eventos o reventa, escribinos con el modelo y la cantidad.
              Respondemos por WhatsApp con las opciones aplicables a tu pedido.
            </p>
            <ul>
              <li>Pedidos minoristas y mayoristas</li>
              <li>Consulta por cantidades y diseños</li>
              <li>Coordinación directa de entrega</li>
            </ul>
          </div>
          <figure className="packaging">
            <div className="packaging-image">
              <Image
                src={packaging}
                alt="Bolsa de entrega negra y dorada de Épicos Tandil"
                fill
                sizes="(max-width: 800px) 100vw, 38vw"
              />
            </div>
            <figcaption>
              <span>La entrega también lleva la marca.</span>
              Packaging de referencia
            </figcaption>
          </figure>
        </section>

        <section className="contact" id="contacto">
          <div className="contact-mountain" aria-hidden="true">
            <MountainMark />
          </div>
          <h2>Encontrá tu próximo favorito.</h2>
          <p>Decinos cuál viste y te contamos disponibilidad, opciones y entrega.</p>
          <a className="button button-gold" href={whatsappUrl()} target="_blank" rel="noreferrer">
            <WhatsAppIcon />
            Escribir al 223 519-5739
          </a>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#inicio" aria-label="Volver al inicio">
          <MountainMark />
          <span className="brand-type">
            <strong>ÉPICOS</strong>
            <small>TANDIL</small>
          </span>
        </a>
        <div className="footer-links">
          <a href="https://www.instagram.com/epicos.tandil" target="_blank" rel="noreferrer">
            Instagram · @epicos.tandil
          </a>
          <a href={whatsappUrl()} target="_blank" rel="noreferrer">
            WhatsApp · 223 519-5739
          </a>
        </div>
        <p>
          Las referencias culturales visibles pertenecen a sus respectivos titulares. Épicos Tandil
          no declara afiliaciones oficiales.
        </p>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Consultar por WhatsApp">
        <WhatsAppIcon />
      </a>
    </>
  );
}
