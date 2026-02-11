"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "./container";
import { DevLogo } from "./dev-logo";
import { Globe, Menu, X } from "lucide-react";

const navLink = `
  relative text-sm font-semibold 
 text-[var(--color-foreground)]
  hover:text-black
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-0
  after:bg-black after:transition-all after:duration-300
  hover:after:w-full
   transition-all duration-300 hover:scale-105 group 
`;

const mobileNavLink = `
  text-lg font-semibold text-[#0b1215] hover:text-[#2E4A8A] transition-colors
`;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="
      fixed top-0 left-0 right-0 z-50
      h-16
      flex items-center
      bg-transparent backdrop-blur-sm
      px-4 lg:px-0
      "
    >
      <Container className="relative flex items-center">
        <DevLogo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6">
          <Link className={navLink} href="#about">
            Sobre
          </Link>
          <Link className={navLink} href="#skills">
            Habilidades
          </Link>
          <Link className={navLink} href="#experience">
            Experiência
          </Link>
          <Link className={navLink} href="#contact">
            Contato
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          {/* Desktop buttons */}
          <button
            className="
    hidden sm:flex items-center justify-center
    px-3 py-1.5 gap-1
    rounded-full
    bg-gray-100/40 border border-gray-100/40
    text-gray-800
    transition-all duration-200 ease-out
    hover:scale-105
    text-sm font-medium
    hover:bg-gray-100/50
  "
            type="button"
          >
            <Globe size={12} />
            PT
          </button>
          <button
            className="
    hidden sm:flex items-center justify-center
    px-3 py-1.5 gap-1
    rounded-full
    bg-gray-100/50 border border-gray-100/50
    text-gray-800
    transition-all duration-200 ease-out
    hover:scale-105
    text-sm font-medium
    hover:bg-gray-100/60
  "
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-lg hover:bg-gray-100/50 transition-colors"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white/95 backdrop-blur-md z-40">
          <nav className="flex flex-col items-center justify-center gap-8 pt-12">
            <Link
              className={mobileNavLink}
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link
              className={mobileNavLink}
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
            >
              Habilidades
            </Link>
            <Link
              className={mobileNavLink}
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
            >
              Experiência
            </Link>
            <Link
              className={mobileNavLink}
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </Link>

            <div className="flex items-center gap-3 mt-4">
              <button
                className="flex items-center justify-center px-4 py-2 gap-1 rounded-full bg-gray-100/60 border border-gray-200 text-gray-800 text-sm font-medium"
                type="button"
              >
                <Globe size={14} />
                PT
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
