"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/Container";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [open, setOpen] = useState(false);

  // hide on scroll down / show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current < 80) {
        setVisible(true);
        setLastScrollY(current);
        return;
      }

      if (current < lastScrollY) setVisible(true);
      if (current > lastScrollY) {
        setVisible(false);
        setOpen(false); // zamknij menu jak user scrolluje
      }

      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="h-14" />

      <header
        className={`fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Container>
          <div className="relative flex h-14 items-center justify-between">
            <a href="#home" className="group flex items-baseline gap-2">
              <span className="text-sm tracking-[0.28em] text-white/70">
                MW
              </span>
              <span className="text-sm font-medium text-white/90 group-hover:text-white">
                Marcel Woźniak
              </span>
            </a>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-xs tracking-[0.22em] uppercase text-white/60 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* RIGHT SIDE (desktop button + mobile burger) */}
            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="hidden md:inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs tracking-[0.18em] uppercase text-white/80 hover:bg-white/10"
              >
                Contact
              </a>

              {/* MOBILE HAMBURGER */}
              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 hover:bg-white/10"
              >
                {/* icon */}
                <span className="sr-only">Menu</span>
                <div className="flex flex-col gap-1">
                  <span
                    className={`h-[2px] w-4 bg-white/80 transition ${
                      open ? "translate-y-[6px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`h-[2px] w-4 bg-white/80 transition ${
                      open ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`h-[2px] w-4 bg-white/80 transition ${
                      open ? "-translate-y-[6px] -rotate-45" : ""
                    }`}
                  />
                </div>
              </button>
            </div>

            {/* MOBILE MENU PANEL (slide from top) */}
            <div
              className={`md:hidden fixed left-0 top-14 z-40 w-full border-b border-white/10 bg-black/80 backdrop-blur transition-all duration-300 ${
                open
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-4 opacity-0 pointer-events-none"
              }`}
            >
              <Container>
                <div className="py-4">
                  <nav className="grid gap-2">
                    {links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs uppercase tracking-[0.22em] text-white/75 hover:bg-white/[0.08] hover:text-white"
                      >
                        {l.label}
                      </a>
                    ))}
                  </nav>

                  <div className="mt-4 flex justify-end">
                    <a
                      href="#contact"
                      onClick={() => setOpen(false)}
                      className="rounded-full border border-white/15 bg-white px-5 py-2 text-xs uppercase tracking-[0.18em] text-black hover:bg-white/90"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
