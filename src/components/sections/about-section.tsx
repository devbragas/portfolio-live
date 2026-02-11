"use client";

import { Container } from "../ui/container";
import { motion } from "motion/react";
import { Code2, GraduationCap } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="pt-32 lg:pt-52 px-4 lg:px-0 bg-background">
      <Container>
        <div className="flex flex-col gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-[#162456]">
              Quem Sou Eu?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4 sm:gap-6"
            >
              <p className="text-base sm:text-lg text-[#162456]/80 leading-relaxed">
                <span className="text-[#0b1215] font-semibold">
                  Hey, eu sou o Enzo.
                </span>{" "}
                Sou Desenvolvedor Full Stack com foco em construir aplicações
                web de alta performance e interfaces escaláveis.
              </p>

              <p className="text-[#162456]/70 leading-relaxed">
                Tenho facilidade em aprender novas tecnologias, trabalhar em
                equipe e encarar desafios técnicos com mentalidade analítica.
                Valorizo comunicação clara, colaboração e melhoria contínua.
                Estou sempre buscando crescer, assumir novos desafios e
                participar de projetos que façam diferença de verdade.
              </p>

              <p className="text-[#162456]/70 leading-relaxed">
                Gosto de construir aplicações que não apenas funcionem, mas que
                sejam bem estruturadas, performáticas e agradáveis de usar. Para
                mim, código não envolve apenas lógica, mas também envolve estar
                intimamente ligado com o negócio e a infraestrutura da
                aplicação.
              </p>

              <p className="text-[#162456]/80 max-w-3xl mx-auto leading-relaxed">
                Após a pandemia, ingressei na faculdade de Engenharia da
                Computação para formalizar meu conhecimento. Desde então, tive a
                oportunidade de trabalhar em projetos de alto impacto, incluindo
                soluções para áreas sindicalistas no Estado de Alagoas e um
                projeto no setor de saúde que auxiliou mais de 1600 médicos no
                Estado.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                viewport={{ once: true }}
                className="bg-white/80 border border-[#2E4A8A]/10 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#2E4A8A]/10 hover:scale-105 hover:border-[#2E4A8A]/30"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2E4A8A]/10 flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-[#2E4A8A]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0b1215]">
                  Full Stack
                </h3>
                <p className="text-sm text-[#162456]/60 mt-1">
                  Desenvolvimento completo
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 border border-[#2E4A8A]/10 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#2E4A8A]/10 hover:scale-105 hover:border-[#2E4A8A]/30"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2E4A8A]/20 to-[#2E4A8A]/5 flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-[#2E4A8A]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0b1215]">UFC</h3>
                <p className="text-sm text-[#162456]/60 mt-1">
                  Engenharia de Computação
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
