"use client";

import Link from "next/link";
import { Container } from "./container";
import { DevLogo } from "./dev-logo";
import { Github, Linkedin, Mail } from "lucide-react";

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
  return (
    <footer className="py-8 lg:py-10 px-4 lg:px-0 bg-[#eef3ee]">
      <Container>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-5 place-content-between pb-8">
          <div className="flex-1 flex flex-col">
            <DevLogo />
            <p className="text-sm mt-2">
              Desenvolvedor Full Stack criando experiências digitais com código
              limpo e design moderno.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <h2 className="font-bold  text-(--secondary-text)">Navegação</h2>
            <div className="flex justify-start items-start flex-col gap-1 text-sm">
              <button
                className="nav-btn"
                onClick={() => handleScroll("skills")}
              >
                Habilidades
              </button>
              <button
                onClick={() => handleScroll("aboutme")}
                className="nav-btn"
              >
                Sobre mim
              </button>

              <button
                onClick={() => handleScroll("education")}
                className="nav-btn"
              >
                Acadêmico
              </button>
              <button
                onClick={() => handleScroll("contact")}
                className="nav-btn"
              >
                Contato
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <h2 className="font-bold text-(--secondary-text)">Conecte-se</h2>
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
          <p>© 2026 Enzo Vasconcelos Braga. Todos os direitos reservados.</p>
          <p>Feito com Next.js & Tailwind CSS</p>
        </div>
      </Container>
    </footer>
  );
}
