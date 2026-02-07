import Link from "next/link";

const navLink = `
  relative text-sm font-bold text-white/70
  hover:text-white
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-0
  after:bg-white after:transition-all after:duration-300
  hover:after:w-full
   transition-all duration-300 hover:scale-105 group 
`;

export function Header() {
  return (
    <header
      className="
  fixed top-0 left-0 right-0 z-50
  h-16
  flex justify-center items-center gap-6
  bg-transparent backdrop-blur-sm
"
    >
      <Link className={navLink} href="#skills">
        Habilidades
      </Link>
      <Link className={navLink} href="#aboutme">
        Sobre mim
      </Link>
      <Link className={navLink} href="#experience">
        Experiência
      </Link>
      <Link className={navLink} href="#academical">
        Acadêmico
      </Link>
      <Link className={navLink} href="#contact">
        Contato
      </Link>
    </header>
  );
}
