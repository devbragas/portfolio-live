"use client";

import { Container } from "../ui/container";
import { motion } from "motion/react";
import {
  Code2,
  Database,
  Globe,
  Layers,
  MessageSquare,
  Palette,
  Server,
  Users,
} from "lucide-react";

const technicalSkills = [
  {
    category: "Linguagens",
    icon: Code2,
    items: ["JavaScript", "TypeScript"],
    level: "Avançado",
  },
  {
    category: "Frameworks",
    icon: Layers,
    items: ["React.js", "Next.js", "Nest.js", "React Native"],
  },
  {
    category: "Estilização",
    icon: Palette,
    items: ["Tailwind CSS", "Styled Components", "Shadcn/UI"],
  },
  {
    category: "Infraestrutura",
    icon: Server,
    items: ["Docker", "Git", "CI/CD", "TDD", "SOLID"],
  },
  {
    category: "Banco de Dados",
    icon: Database,
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Outros",
    icon: Globe,
    items: ["REST API", "JWT Auth", "Vercel"],
  },
];

const softSkills = [
  {
    icon: MessageSquare,
    title: "Comunicação",
    description: "Comunicação efetiva entre áreas técnicas e de produto",
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Experiência com metodologias ágeis (Scrum, Kanban)",
  },
];

const languages = [
  { language: "Português", level: "Nativo", percentage: 100 },
  { language: "Inglês", level: "Avançado (B2)", percentage: 85 },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 lg:py-20 px-4 lg:px-0 bg-background">
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
              Habilidades & Conhecimentos
            </h2>
            <p className="text-[#162456]/70 mt-4 max-w-2xl mx-auto">
              Tecnologias e competências que utilizo para criar soluções de alto
              impacto
            </p>
          </motion.div>

          {/* Technical Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-[#2E4A8A]/10 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#2E4A8A]/10 hover:border-[#2E4A8A]/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2E4A8A]/10 flex items-center justify-center">
                    <skill.icon className="w-5 h-5 text-[#2E4A8A]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0b1215]">
                      {skill.category}
                    </h3>
                    {skill.level && (
                      <span className="text-xs text-[#2E4A8A] font-medium">
                        {skill.level}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm bg-[#f8fbf8] border border-[#2E4A8A]/10 rounded-full text-[#162456] hover:border-[#2E4A8A]/30 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills & Languages */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white border border-[#2E4A8A]/10 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-[#0b1215] mb-6">
                Soft Skills
              </h3>
              <div className="flex flex-col gap-4">
                {softSkills.map((skill) => (
                  <div key={skill.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#2E4A8A]/10 flex items-center justify-center flex-shrink-0">
                      <skill.icon className="w-5 h-5 text-[#2E4A8A]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#0b1215]">
                        {skill.title}
                      </h4>
                      <p className="text-sm text-[#162456]/60">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2E4A8A]/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#2E4A8A]"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#0b1215]">
                      Aprendizado Contínuo
                    </h4>
                    <p className="text-sm text-[#162456]/60">
                      Adaptação constante a novas tecnologias
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white border border-[#2E4A8A]/10 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-[#0b1215] mb-6">
                Idiomas
              </h3>
              <div className="flex flex-col gap-6">
                {languages.map((lang) => (
                  <div key={lang.language}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-[#0b1215]">
                        {lang.language}
                      </span>
                      <span className="text-sm text-[#162456]/60">
                        {lang.level}
                      </span>
                    </div>
                    <div className="h-2 bg-[#f8fbf8] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#2E4A8A] rounded-full transition-all duration-500"
                        style={{ width: `${lang.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#2E4A8A]/10">
                <h4 className="font-medium text-[#0b1215] mb-3">Destaques</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 text-sm bg-[#2E4A8A]/10 text-[#2E4A8A] rounded-full font-medium">
                    Autonomia
                  </span>
                  <span className="px-3 py-1.5 text-sm bg-[#162456]/10 text-[#162456] rounded-full font-medium">
                    Foco em Resultados
                  </span>
                  <span className="px-3 py-1.5 text-sm bg-[#2E4A8A]/10 text-[#2E4A8A] rounded-full font-medium">
                    Problem-Solving
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
