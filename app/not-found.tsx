import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, MountainMark } from "./components/icons";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Página no encontrada | Épicos Mar del Plata",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <span className={styles.code} aria-hidden="true">404</span>
        <div className={styles.content}>
          <div className={styles.logo} aria-label="Épicos Mar del Plata">
            <MountainMark />
            <span><strong>ÉPICOS</strong><small>MAR DEL PLATA</small></span>
          </div>
          <h1>Página no encontrada.</h1>
          <p>Ese diseño no está en esta batea. Volvé al catálogo y encontrá el próximo.</p>
          <div className={styles.actions}>
            <Link className="button button-gold" href="/">Volver al inicio <ArrowIcon /></Link>
            <Link className={styles.secondaryAction} href="/#familias">Ver productos <ArrowIcon /></Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
