"use client";

/* eslint-disable @next/next/no-html-link-for-pages -- Native links re-scroll unchanged URL fragments and avoid static-export RSC prefetches. */

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { whatsappUrl } from "../data";
import { ArrowIcon, ChevronDownIcon, CloseIcon, MenuIcon, MountainMark, WhatsAppIcon } from "./icons";

export default function MobileMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const navigatingRef = useRef(false);
  const previousOverflow = useRef("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 800px)");
    const handleBreakpoint = (event: MediaQueryListEvent) => {
      if (!event.matches && dialogRef.current?.open) dialogRef.current.close();
    };
    mobileQuery.addEventListener("change", handleBreakpoint);
    return () => {
      mobileQuery.removeEventListener("change", handleBreakpoint);
      document.body.style.overflow = previousOverflow.current;
    };
  }, []);

  const openMenu = () => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (fieldRef.current) fieldRef.current.scrollTop = 0;
    dialog.showModal();
    setOpen(true);
    window.requestAnimationFrame(() => closeRef.current?.focus());
  };

  const closeMenu = () => dialogRef.current?.close();

  const navigateToSection = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (window.location.pathname !== "/" || !target) {
      navigatingRef.current = true;
      closeMenu();
      return;
    }

    event.preventDefault();
    navigatingRef.current = true;
    closeMenu();
    window.setTimeout(() => {
      const hash = `#${sectionId}`;
      if (window.location.hash !== hash) window.history.pushState(null, "", `/${hash}`);
      target.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start",
      });
      navigatingRef.current = false;
    }, 0);
  };

  const handleClose = () => {
    document.body.style.overflow = previousOverflow.current;
    dialogRef.current?.querySelector("details")?.removeAttribute("open");
    if (fieldRef.current) fieldRef.current.scrollTop = 0;
    setOpen(false);
    if (!navigatingRef.current) triggerRef.current?.focus({ preventScroll: true });
  };

  return (
    <div className="mobile-menu-shell">
      <button
        ref={triggerRef}
        className="mobile-menu-trigger"
        type="button"
        aria-label="Abrir menú"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={openMenu}
      >
        <MenuIcon />
      </button>

      <dialog
        ref={dialogRef}
        className="mobile-menu"
        id="mobile-navigation"
        aria-labelledby="mobile-menu-title"
        onClose={handleClose}
      >
        <div className="mobile-menu-topbar">
          <a className="mobile-menu-brand" href="/#inicio" aria-label="Épicos Tandil, inicio" onClick={(event) => navigateToSection(event, "inicio")}>
            <MountainMark />
            <span><strong>ÉPICOS</strong><small>TANDIL</small></span>
          </a>
          <button ref={closeRef} type="button" className="mobile-menu-close" aria-label="Cerrar menú" onClick={closeMenu}>
            <CloseIcon />
          </button>
        </div>

        <div ref={fieldRef} className="mobile-menu-field">
          <span className="mobile-menu-backdrop" aria-hidden="true">MENÚ</span>
          <nav className="mobile-menu-nav" aria-label="Navegación móvil">
            <h2 id="mobile-menu-title">Explorá la batea.</h2>
            <div className="mobile-menu-links">
              <details className="mobile-products">
                <summary>
                  <span>Productos</span>
                  <ChevronDownIcon />
                </summary>
                <div className="mobile-category-links">
                  <a href="/vasos-tubo" onClick={closeMenu}><span>Vasos tubo</span><ArrowIcon /></a>
                  <a href="/vasos-termicos" onClick={closeMenu}><span>Térmicos</span><ArrowIcon /></a>
                  <a href="/ferneteros" onClick={closeMenu}><span>Ferneteros</span><ArrowIcon /></a>
                </div>
              </details>
              <a className="mobile-main-link" href="/#destacados" onClick={(event) => navigateToSection(event, "destacados")}><span>Destacados</span><ArrowIcon /></a>
              <a className="mobile-main-link" href="/#mayoristas" onClick={(event) => navigateToSection(event, "mayoristas")}><span>Mayoristas</span><ArrowIcon /></a>
            </div>
            <a className="mobile-menu-whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer" onClick={closeMenu}>
              <WhatsAppIcon /> Consultar por WhatsApp
            </a>
          </nav>
        </div>
      </dialog>
    </div>
  );
}
