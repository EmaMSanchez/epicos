/* eslint-disable @next/next/no-html-link-for-pages -- Native links re-scroll unchanged URL fragments and avoid static-export RSC prefetches. */
import { whatsappUrl } from "../data";
import { ArrowIcon, ChevronDownIcon, InstagramIcon, MountainMark, WhatsAppIcon } from "./icons";
import MobileMenu from "./MobileMenu";

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`brand${footer ? " footer-brand" : ""}`} href="/#inicio" aria-label="Épicos Mar del Plata, inicio">
      <MountainMark />
      <span className="brand-type"><strong>ÉPICOS</strong><small>MAR DEL PLATA</small></span>
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <Brand />
      <nav aria-label="Navegación principal">
        <div className="nav-products">
          <a href="/#familias">Productos<ChevronDownIcon /></a>
          <div className="product-menu" aria-label="Categorías de productos">
            <a href="/vasos-tubo"><span>Vasos tubo</span><ArrowIcon /></a>
            <a href="/vasos-termicos"><span>Térmicos</span><ArrowIcon /></a>
            <a href="/ferneteros"><span>Ferneteros</span><ArrowIcon /></a>
          </div>
        </div>
        <a href="/#destacados">Destacados</a>
        <a href="/#mayoristas">Mayoristas</a>
      </nav>
      <a className="header-action" href={whatsappUrl()} target="_blank" rel="noreferrer">Consultar<ArrowIcon /></a>
      <MobileMenu />
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <Brand footer />
      <div className="footer-links">
        <a href="https://www.instagram.com/epicos.tandil" target="_blank" rel="noreferrer"><InstagramIcon /> Instagram · @epicos.tandil</a>
        <a href={whatsappUrl()} target="_blank" rel="noreferrer"><WhatsAppIcon /> WhatsApp · +54 9 223 520-9499</a>
      </div>
      <p>Las referencias culturales visibles pertenecen a sus respectivos titulares. Épicos Mar del Plata no declara afiliaciones oficiales.</p>
    </footer>
  );
}
