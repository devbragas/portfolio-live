import Link from "next/link";
import { Container } from "../ui/container";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#27C39F] to-[#2E4A8A] bg-clip-text text-transparent">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-[#162456]/70 max-w-xl mb-8">
            Estou sempre aberto a novos projetos e oportunidades. Entre em
            contato e vamos transformar sua ideia em realidade.
          </p>

          <div className="flex gap-4 mb-10">
            <Link
              href="https://wa.me/5588981050912"
              className="flex items-center gap-2 bg-[#2E4A8A] hover:bg-[#162456] text-white font-medium px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#2E4A8A]/30 hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
              Chamar no WhatsApp
            </Link>
            <Link
              href="mailto:enzovasoncelosbraga@gmail.com"
              className="flex items-center gap-2 border border-[#2E4A8A] hover:border-[#162456] text-[#0b1215] font-medium px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#2E4A8A]/20 hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Enviar E-mail
            </Link>
          </div>

          <p className="text-[#162456]/60 text-sm mb-6">
            ou me encontre nas redes
          </p>

          <div className="flex gap-4">
            <Link
              href="https://github.com/devbragas"
              className="flex items-center gap-4 bg-white/80 border border-[#2E4A8A]/20 hover:border-[#2E4A8A]/50 rounded-xl px-6 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-[#2E4A8A]/20 hover:scale-105 group"
            >
              <div className="text-[#2E4A8A]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-[#0b1215] font-semibold">GitHub</h3>
                <p className="text-[#162456]/60 text-sm">
                  Meus projetos e código <br />
                  open source
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="text-[#2E4A8A]/50 group-hover:text-[#2E4A8A] transition-colors"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>

            <Link
              href="https://linkedin.com/in/enzovasconcelos"
              className="flex items-center gap-4 bg-white/80 border border-[#2E4A8A]/20 hover:border-[#2E4A8A]/50 rounded-xl px-6 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-[#2E4A8A]/20 hover:scale-105 group"
            >
              <div className="text-[#2E4A8A]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-[#0b1215] font-semibold">LinkedIn</h3>
                <p className="text-[#162456]/60 text-sm">
                  Minha trajetória <br />
                  profissional
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="text-[#2E4A8A]/50 group-hover:text-[#2E4A8A] transition-colors"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>

            <Link
              href="mailto:seu@email.com"
              className="flex items-center gap-4 bg-white/80 border border-[#2E4A8A]/20 hover:border-[#2E4A8A]/50 rounded-xl px-6 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-[#2E4A8A]/20 hover:scale-105 group"
            >
              <div className="text-[#2E4A8A]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-[#0b1215] font-semibold">E-mail</h3>
                <p className="text-[#162456]/60 text-sm">
                  Para propostas e <br />
                  parcerias
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="text-[#2E4A8A]/50 group-hover:text-[#2E4A8A] transition-colors"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
          </div>
        </div>
      </Container>

      <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-[#2E4A8A]/30 to-transparent" />
    </section>
  );
}
