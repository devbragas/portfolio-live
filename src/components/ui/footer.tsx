"use client";

import Link from "next/link";
import { Container } from "./container";
import { DevLogo } from "./dev-logo";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

const handleScroll = (id: string) => {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.pushState(null, "", `#${id}`);
  }
};

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="py-8 lg:py-10 px-4 lg:px-0 bg-[#eef3ee]">
      <Container>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-5 place-content-between pb-8">
          <div className="flex-1 flex flex-col">
            <DevLogo />
            <p className="text-sm mt-2">{t("description")}</p>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <h2 className="font-bold  text-(--secondary-text)">
              {t("navigation")}
            </h2>
            <div className="flex justify-start items-start flex-col gap-1 text-sm">
              <button
                className="nav-btn"
                onClick={() => handleScroll("skills")}
              >
                {t("skills")}
              </button>
              <button
                onClick={() => handleScroll("aboutme")}
                className="nav-btn"
              >
                {t("aboutMe")}
              </button>

              <button
                onClick={() => handleScroll("education")}
                className="nav-btn"
              >
                {t("academic")}
              </button>
              <button
                onClick={() => handleScroll("contact")}
                className="nav-btn"
              >
                {t("contact")}
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <h2 className="font-bold text-(--secondary-text)">
              {t("connect")}
            </h2>
            <ul className="flex flex-col gap-1 text-sm">
              <Link href="https://github.com/devbragas" className="nav-btn">
                <li className="flex items-center gap-2.5">
                  <Github size={14} />
                  GitHub
                </li>
              </Link>
              <Link
                href="https://linkedin.com/in/enzovasconcelos"
                className="nav-btn"
              >
                <li className="flex items-center gap-2.5">
                  <Linkedin size={14} />
                  LinkedIn
                </li>
              </Link>
              <Link
                href="mailto:enzovasoncelosbraga@gmail.com"
                className="nav-btn"
              >
                <li className="flex items-center gap-2.5">
                  <Mail size={14} />
                  Email
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row place-content-between gap-2 text-xs border-t border-white/50 pt-6 text-center sm:text-left">
          <p>{t("copyright")}</p>
          <p>{t("madeWith")}</p>
        </div>
      </Container>
    </footer>
  );
}
