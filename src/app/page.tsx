"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <>
      <section className="flex flex-col gap-3">
        <div className="flex gap-3">
          <div className=" inline-flex items-center px-4 py-2 bg-linear-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl rounded-full text-sm font-medium text-blue-950/90 border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.5)] hover:border-white/40 transition-all duration-300 hover:scale-105">
            Desenvolvedor de Software
          </div>
          <div className="inline-flex items-center px-4 py-2 bg-linear-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl rounded-full text-sm font-medium text-blue-950/90 border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.5)] hover:border-white/40 transition-all duration-300 hover:scale-105">
            Arquiteto de Software
          </div>
        </div>

        <h1 className="font-bold text-4xl">Enzo Vasconcelos</h1>
        <div className="text-sm">
          <TypeAnimation
            sequence={[
              "Desenvolvedor Fullstack Júnior",
              1000,
              "Arquiteto de Software Júnior",
              1000,
              "Engenheiro de Software",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
        <p className="text-xl">
          Desenvolvedor de Software com experiência em desenvolvimento de
          software, design de interfaces e gerenciamento de projetos.
        </p>
      </section>
    </>
  );
}
