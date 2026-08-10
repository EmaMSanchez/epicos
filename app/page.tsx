"use client";

import Image from "next/image";
import { startTransition, useState, type CSSProperties } from "react";
import { ArrowIcon, ComparisonArrowsIcon, MountainMark, WhatsAppIcon } from "./components/icons";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import { featuredProducts, products, type Product, type ProductTheme, whatsappUrl } from "./data";

const filters: Array<"Todos" | ProductTheme> = ["Todos", "Fútbol", "Clásicos"];
const heroSelection = [
  { slug: "messi-argentina-fernetero", label: "Mesías", href: "/ferneteros", collection: "ferneteros" },
  { slug: "inmortal-10-tubo", label: "Inmortal 10", href: "/vasos-tubo", collection: "vasos tubo" },
  { slug: "argentina-termico", label: "Argentina", href: "/vasos-termicos", collection: "vasos térmicos" },
].map(({ slug, label, href, collection }) => ({
  product: products.find((product) => product.slug === slug)!,
  label,
  href,
  collection,
}));

function ThermalComparison({ product }: { product: Product }) {
  const [split, setSplit] = useState(52);
  const [boca, river] = product.images;

  return (
    <div
      className="product-comparison"
      style={{ "--comparison-position": `${split}%` } as CSSProperties}
    >
      <div className="product-comparison-layer product-comparison-river">
        <Image src={river.src} alt={river.alt} fill sizes="(max-width: 700px) 100vw, 48vw" />
      </div>
      <div className="product-comparison-layer product-comparison-boca">
        <Image src={boca.src} alt={boca.alt} fill sizes="(max-width: 700px) 100vw, 48vw" />
      </div>
      <div className="product-comparison-seam" aria-hidden="true">
        <span><ComparisonArrowsIcon /></span>
      </div>
      <input
        className="product-comparison-range"
        type="range"
        min="12"
        max="88"
        value={split}
        aria-label="Comparar vasos térmicos Boca y River"
        aria-valuetext={`Boca ${split}%, River ${100 - split}%`}
        onChange={(event) => setSplit(Number(event.target.value))}
      />
    </div>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("Todos");
  const visibleProducts =
    activeFilter === "Todos" ? featuredProducts : featuredProducts.filter((product) => product.theme === activeFilter);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Épicos Mar del Plata",
    sameAs: ["https://www.instagram.com/epicos.tandil"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+54 9 223 520-9499",
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
              <a className="button button-gold" href="#destacados">
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
            {heroSelection.map(({ product, label, href, collection }, index) => (
              <a
                className={`record-cover record-cover-${index + 1}`}
                href={href}
                key={product.slug}
                aria-label={`Ver colección de ${collection}`}
              >
                <Image
                  src={product.image}
                  alt={`${label}, ${product.format} de Épicos Mar del Plata`}
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
              <span>Mar del Plata · Argentina</span>
            </div>
          </div>

          <div className="hero-proof">
            <span>Minorista</span>
            <span>Mayorista</span>
            <span>Diseños propios</span>
          </div>
        </section>

        <section className="catalog" id="destacados">
          <div className="section-heading">
            <h2>Elegí el que habla por vos.</h2>
            <p>
              Selección de destacados disponibles para consulta. Podés confirmar precios,
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
            {visibleProducts.map((product, index) => {
              const isComparison = product.slug === "boca-river-termicos";

              return (
                <article className={`product product-${(index % 4) + 1}`} key={product.slug}>
                  <div className="product-image">
                    {isComparison ? (
                      <ThermalComparison product={product} />
                    ) : (
                      <Image
                        src={product.image}
                        alt={`${product.name}, ${product.format} con diseño impreso`}
                        fill
                        sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 42vw"
                        style={{ objectPosition: product.imagePosition ?? "center" }}
                      />
                    )}
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
              );
            })}
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
            <a className="family-card family-secondary family-termicos" href="/vasos-termicos">
              <Image src="/products/catalog/termicos/argentina-frente.webp" alt="Vaso térmico Argentina" fill sizes="(max-width: 520px) 100vw, 34vw" />
              <span className="family-index">380 ml · $ 5.000</span>
              <span className="family-name">Térmicos</span>
              <span className="family-action">Ver colección <ArrowIcon /></span>
            </a>
            <a className="family-card family-secondary family-ferneteros" href="/ferneteros">
              <Image src="/products/catalog/ferneteros/sangre-campeones-frente.webp" alt="Vaso fernetero Sangre de campeones" fill sizes="(max-width: 520px) 100vw, 34vw" />
              <span className="family-index">700 ml · $ 8.500</span>
              <span className="family-name">Ferneteros</span>
              <span className="family-action">Ver colección <ArrowIcon /></span>
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
                alt="Bolsa de entrega negra y dorada de Épicos Mar del Plata"
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
            Escribir al +54 9 223 520-9499
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
