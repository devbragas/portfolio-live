import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";
import { DevLogo } from "./dev-logo";

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

export function Header() {
  return (
    <header
      className="
      fixed top-0 left-0 right-0 z-50
      h-16
      flex items-center
      bg-transparent backdrop-blur-sm
      "
    >
      <Container className="relative flex items-center">
        <DevLogo />
        <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6">
          <Link className={navLink} href="#skills">
            Habilidades
          </Link>
          <Link className={navLink} href="#aboutme">
            Sobre mim
          </Link>
          <Link className={navLink} href="#experience">
            Experiência
          </Link>

          <Link className={navLink} href="#contact">
            Contato
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <button
            className="flex items-center justify-center w-9 h-9 rounded-lg cursor-pointer border border-gray-300 bg-white/80 hover:bg-gray-100 transition-all duration-200 text-sm font-medium"
            type="button"
          >
            PT
          </button>
          <button
            className="flex items-center justify-center w-9 h-9 rounded-lg cursor-pointer border border-gray-300 bg-white/80 hover:bg-gray-100 transition-all duration-200"
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
        </div>
      </Container>
    </header>
  );
}
