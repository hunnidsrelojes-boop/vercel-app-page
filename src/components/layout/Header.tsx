"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { generalInquiryUrl } from "@/lib/whatsapp";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-line bg-black/90 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <a href="#inicio" aria-label={SITE.name}>
          <Image
            src="/logo.png"
            alt={SITE.name}
            width={133}
            height={40}
            priority
            className="h-9 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray transition-colors hover:text-silver"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={generalInquiryUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-sm border border-silver-dim px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-off-white transition-colors hover:border-silver hover:text-silver lg:inline-block"
        >
          WhatsApp
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-off-white lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open ? (
        <nav
          className="border-t border-line bg-black px-6 py-8 lg:hidden"
          aria-label="Navegación móvil"
        >
          <ul className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-serif text-2xl font-light text-off-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={generalInquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-sm border border-silver-dim px-5 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-off-white"
          >
            Consultar por WhatsApp
          </a>
        </nav>
      ) : null}
    </header>
  );
}
