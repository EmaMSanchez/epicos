import Link from "next/link";
import { whatsappUrl } from "../data";
import { ArrowIcon, MountainMark } from "./icons";

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link className={`brand${footer ? " footer-brand" : ""}`} href="/#inicio" aria-label="Épicos Tandil, inicio">
      <MountainMark />
      <span className="brand-type"><strong>ÉPICOS</strong><small>TANDIL</small></span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <Brand />
      <nav aria-label="Navegación principal">
        <Link href="/#familias">Productos</Link>
        <Link href="/#catalogo">Destacados</Link>
        <Link href="/#mayoristas">Mayoristas</Link>
      </nav>
      <a className="header-action" href={whatsappUrl()} target="_blank" rel="noreferrer">Consultar<ArrowIcon /></a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <Brand footer />
      <div className="footer-links">
        <a href="https://www.instagram.com/epicos.tandil" target="_blank" rel="noreferrer">Instagram · @epicos.tandil</a>
        <a href={whatsappUrl()} target="_blank" rel="noreferrer">WhatsApp · 223 519-5739</a>
      </div>
      <p>Las referencias culturales visibles pertenecen a sus respectivos titulares. Épicos Tandil no declara afiliaciones oficiales.</p>
    </footer>
  );
}
