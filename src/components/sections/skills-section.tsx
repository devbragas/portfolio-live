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
import { useTranslations } from "next-intl";

const technicalSkillsData = [
  {
    categoryKey: "languages",
    icon: Code2,
    items: ["JavaScript", "TypeScript"],
    levelKey: "advanced",
  },
  {
    categoryKey: "frameworks",
    icon: Layers,
    items: ["React.js", "Next.js", "Nest.js", "React Native"],
  },
  {
    categoryKey: "styling",
    icon: Palette,
    items: ["Tailwind CSS", "Styled Components", "Shadcn/UI"],
  },
  {
    categoryKey: "infrastructure",
    icon: Server,
    items: ["Docker", "Git", "CI/CD", "TDD", "SOLID"],
  },
  {
    categoryKey: "database",
    icon: Database,
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    categoryKey: "others",
    icon: Globe,
    items: ["REST API", "JWT Auth", "Vercel"],
  },
];

export default function SkillsSection() {
  const t = useTranslations("skills");

  const softSkills = [
    {
      icon: MessageSquare,
      title: t("communication"),
      description: t("communicationDesc"),
    },
    {
      icon: Users,
      title: t("collaboration"),
      description: t("collaborationDesc"),
    },
  ];

  const languages = [
    { language: t("portuguese"), level: t("native"), percentage: 100 },
    { language: t("english"), level: t("advanced"), percentage: 85 },
  ];

  return (
    <section
      id="skills"
      className="py-16 lg:py-20 px-4 lg:px-0 bg-background dark:bg-gray-900 transition-colors duration-300"
    >
      <Container>
        <div className="flex flex-col gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-[#162456] dark:text-white">
              {t("title")}
            </h2>
            <p className="text-[#162456]/70 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {technicalSkillsData.map((skill, index) => (
              <motion.div
                key={skill.categoryKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 border border-[#2E4A8A]/10 dark:border-gray-700 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#2E4A8A]/10 dark:hover:shadow-blue-500/10 hover:border-[#2E4A8A]/30 dark:hover:border-gray-600"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2E4A8A]/10 dark:bg-blue-500/20 flex items-center justify-center">
                    <skill.icon className="w-5 h-5 text-[#2E4A8A] dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0b1215] dark:text-white">
                      {t(skill.categoryKey)}
                    </h3>
                    {skill.levelKey && (
                      <span className="text-xs text-[#2E4A8A] dark:text-blue-400 font-medium">
                        {t(skill.levelKey)}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm bg-[#f8fbf8] dark:bg-gray-700 border border-[#2E4A8A]/10 dark:border-gray-600 rounded-full text-[#162456] dark:text-gray-200 hover:border-[#2E4A8A]/30 dark:hover:border-gray-500 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 border border-[#2E4A8A]/10 dark:border-gray-700 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-[#0b1215] dark:text-white mb-6">
                {t("softSkills")}
              </h3>
              <div className="flex flex-col gap-4">
                {softSkills.map((skill) => (
                  <div key={skill.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#2E4A8A]/10 dark:bg-blue-500/20 flex items-center justify-center shrink-0">
                      <skill.icon className="w-5 h-5 text-[#2E4A8A] dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#0b1215] dark:text-white">
                        {skill.title}
                      </h4>
                      <p className="text-sm text-[#162456]/60 dark:text-gray-400">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2E4A8A]/10 dark:bg-blue-500/20 flex items-center justify-center shrink-0">
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
                      className="text-[#2E4A8A] dark:text-blue-400"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#0b1215] dark:text-white">
                      {t("continuousLearning")}
                    </h4>
                    <p className="text-sm text-[#162456]/60 dark:text-gray-400">
                      {t("continuousLearningDesc")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 border border-[#2E4A8A]/10 dark:border-gray-700 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-[#0b1215] dark:text-white mb-6">
                {t("languagesSection")}
              </h3>
              <div className="flex flex-col gap-6">
                {languages.map((lang) => (
                  <div key={lang.language}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-[#0b1215] dark:text-white">
                        {lang.language}
                      </span>
                      <span className="text-sm text-[#162456]/60 dark:text-gray-400">
                        {lang.level}
                      </span>
                    </div>
                    <div className="h-2 bg-[#f8fbf8] dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#2E4A8A] dark:bg-blue-500 rounded-full transition-all duration-500"
                        style={{ width: `${lang.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#2E4A8A]/10 dark:border-gray-700">
                <h4 className="font-medium text-[#0b1215] dark:text-white mb-3">
                  {t("highlights")}
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 text-sm bg-[#2E4A8A]/10 dark:bg-blue-500/20 text-[#2E4A8A] dark:text-blue-400 rounded-full font-medium">
                    {t("autonomy")}
                  </span>
                  <span className="px-3 py-1.5 text-sm bg-[#162456]/10 dark:bg-gray-700 text-[#162456] dark:text-gray-300 rounded-full font-medium">
                    {t("resultsFocus")}
                  </span>
                  <span className="px-3 py-1.5 text-sm bg-[#2E4A8A]/10 dark:bg-blue-500/20 text-[#2E4A8A] dark:text-blue-400 rounded-full font-medium">
                    {t("problemSolving")}
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
