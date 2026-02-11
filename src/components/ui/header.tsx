"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "./container";
import { DevLogo } from "./dev-logo";
import { Globe, Menu, Moon, Sun, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useLocaleStore } from "../../app/store/use-locale-store";
import { useThemeStore } from "../../app/store/use-theme-store";

const navLink = `
  relative text-sm font-semibold 
 text-[var(--color-foreground)]
  hover:text-black dark:hover:text-white
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-0
  after:bg-black dark:after:bg-white after:transition-all after:duration-300
  hover:after:w-full
   transition-all duration-300 hover:scale-105 group 
`;

const mobileNavLink = `
  text-lg font-semibold text-[#0b1215] dark:text-white hover:text-[#2E4A8A] dark:hover:text-blue-400 transition-colors
`;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations("header");
  const { locale, setLocale } = useLocaleStore();
  const { theme, toggleTheme } = useThemeStore();

  const toggleLocale = () => {
    setLocale(locale === "pt" ? "en" : "pt");
  };

  return (
    <>
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

          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6">
            <Link className={navLink} href="#about">
              {t("about")}
            </Link>
            <Link className={navLink} href="#skills">
              {t("skills")}
            </Link>
            <Link className={navLink} href="#experience">
              {t("experience")}
            </Link>
            <Link className={navLink} href="#contact">
              {t("contact")}
            </Link>
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <button
              className="
      hidden sm:flex items-center justify-center
      px-3 py-1.5 gap-1
      rounded-full
      bg-gray-100/40 dark:bg-gray-800/60 border border-gray-100/40 dark:border-gray-700
      text-gray-800 dark:text-gray-200
      transition-all duration-200 ease-out
      hover:scale-105
      text-sm font-medium
      hover:bg-gray-100/50 dark:hover:bg-gray-800/80
    "
              type="button"
              onClick={toggleLocale}
            >
              <Globe size={12} />
              {locale.toUpperCase()}
            </button>
            <button
              className="
      hidden sm:flex items-center justify-center
      px-3 py-1.5 gap-1
      rounded-full
      bg-gray-100/50 dark:bg-gray-800/60 border border-gray-100/50 dark:border-gray-700
      text-gray-800 dark:text-gray-200
      transition-all duration-200 ease-out
      hover:scale-105
      text-sm font-medium
      hover:bg-gray-100/60 dark:hover:bg-gray-800/80
    "
              type="button"
              onClick={toggleTheme}
            >
              {theme === "light" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              className="md:hidden flex items-center justify-center p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors dark:text-white"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </Container>
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white dark:bg-gray-900 z-[100]">
          <nav className="flex flex-col items-center gap-6 pt-8">
            <Link
              className={mobileNavLink}
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("about")}
            </Link>
            <Link
              className={mobileNavLink}
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("skills")}
            </Link>
            <Link
              className={mobileNavLink}
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("experience")}
            </Link>
            <Link
              className={mobileNavLink}
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("contact")}
            </Link>

            <div className="flex items-center gap-3 mt-4">
              <button
                className="flex items-center justify-center px-4 py-2 gap-1 rounded-full bg-gray-100/60 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium"
                type="button"
                onClick={toggleLocale}
              >
                <Globe size={14} />
                {locale.toUpperCase()}
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
