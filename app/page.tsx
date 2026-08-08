"use client";

import Image from "next/image";
import { startTransition, useState } from "react";
import { ArrowIcon, MountainMark, WhatsAppIcon } from "./components/icons";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import { featuredProducts, type ProductTheme, whatsappCategoryUrl, whatsappUrl } from "./data";

const filters: Array<"Todos" | ProductTheme> = ["Todos", "Fútbol", "Clásicos"];
const heroSelection = [
  { slug: "messi-argentina-fernetero", label: "Mesías" },
  { slug: "inmortal-10-tubo", label: "Inmortal 10" },
  { slug: "argentina-termico", label: "Argentina" },
].map(({ slug, label }) => ({
  product: featuredProducts.find((product) => product.slug === slug)!,
  label,
}));

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("Todos");
  const visibleProducts =
    activeFilter === "Todos" ? featuredProducts : featuredProducts.filter((product) => product.theme === activeFilter);

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

      <SiteHeader />

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <h1>Tu ritual.<br />Tu diseño.</h1>
            <p>
              Vasos tubo, ferneteros y térmicos serigrafiados para quienes no eligen lo de siempre. Encontrá el tuyo o
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
            {heroSelection.map(({ product, label }, index) => (
              <a
                className={`record-cover record-cover-${index + 1}`}
                href={whatsappUrl(product)}
                target="_blank"
                rel="noreferrer"
                key={product.slug}
                aria-label={`Consultar por ${label}`}
              >
                <Image
                  src={product.image}
                  alt={`${label}, ${product.format} de Épicos Tandil`}
                  fill
                  priority
                  sizes="(max-width: 760px) 62vw, 29vw"
                  style={{ objectPosition: product.imagePosition ?? "center" }}
                />
                <span>{label}</span>
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
              Selección disponible para consulta. Podés confirmar precios,
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
                  <span className="product-family">{product.theme}</span>
                </div>
                <div className="product-info">
                  <div>
                    <span className="product-format">{product.format}</span>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                  </div>
                  <div className="product-buy">
                    <span>
                      <small>Precio</small>
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

        <section className="families" id="familias">
          <div className="families-heading">
            <h2>Una forma para cada ritual.</h2>
            <p>Entrá por el objeto que buscás. Acá empieza cada colección completa.</p>
          </div>
          <div className="family-grid">
            <a className="family-card family-vasos-tubo" href="/vasos-tubo">
              <Image src="/products/catalog/vasos-tubo/branca-frente.webp" alt="Vaso tubo Branca Dorado" fill sizes="(max-width: 800px) 100vw, 66vw" />
              <span className="family-index">1 L · $ 7.500</span>
              <span className="family-name">Vasos tubo</span>
              <span className="family-action">Ver colección <ArrowIcon /></span>
            </a>
            <a className="family-card family-secondary family-termicos" href={whatsappCategoryUrl("Térmico")} target="_blank" rel="noreferrer">
              <Image src="/products/catalog/termicos/argentina-frente.webp" alt="Vaso térmico Argentina" fill sizes="(max-width: 520px) 100vw, 34vw" />
              <span className="family-index">380 ml · $ 5.000</span>
              <span className="family-name">Térmicos</span>
              <span className="family-action">Consultar <ArrowIcon /></span>
            </a>
            <a className="family-card family-secondary family-ferneteros" href={whatsappCategoryUrl("Fernetero")} target="_blank" rel="noreferrer">
              <Image src="/products/catalog/ferneteros/messi-argentina-detalle.webp" alt="Vaso fernetero Mesías 10" fill sizes="(max-width: 520px) 100vw, 34vw" />
              <span className="family-index">700 ml · $ 8.500</span>
              <span className="family-name">Ferneteros</span>
              <span className="family-action">Consultar <ArrowIcon /></span>
            </a>
          </div>
        </section>

        <section className="custom-band" aria-label="Más productos y diseños">
          <div className="custom-word" aria-hidden="true">NUEVOS</div>
          <div className="custom-copy">
            <h2>La batea sigue sumando diseños.</h2>
            <p>
              Si buscás vasos tubo, térmicos o ferneteros y no lo viste acá, escribinos. Te contamos
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
                src="/products/catalog/packaging.webp"
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
          <h2>Encontrá tu proximo favorito.</h2>
          <p>Decinos cuál viste y te contamos disponibilidad, opciones y entrega.</p>
          <a className="button button-gold" href={whatsappUrl()} target="_blank" rel="noreferrer">
            <WhatsAppIcon />
            Escribir al 223 519-5739
          </a>
        </section>
      </main>

      <SiteFooter />

      <a className="floating-whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Consultar por WhatsApp">
        <WhatsAppIcon />
      </a>
    </>
  );
}
