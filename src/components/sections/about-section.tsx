"use client";

import { Container } from "../ui/container";
import { motion } from "motion/react";
import { Code2, GraduationCap } from "lucide-react";
import { useTranslations } from "next-intl";

export function AboutSection() {
  const t = useTranslations("about");

  return (
    <section
      id="about"
      className="pt-32 lg:pt-52 px-4 lg:px-0 bg-background dark:bg-gray-900 transition-colors duration-300"
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
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4 sm:gap-6"
            >
              <p className="text-base sm:text-lg text-[#162456]/80 dark:text-gray-300 leading-relaxed">
                <span className="text-[#0b1215] dark:text-white font-semibold">
                  {t("greeting")}
                </span>{" "}
                {t("intro")}
              </p>

              <p className="text-[#162456]/70 dark:text-gray-400 leading-relaxed">
                {t("paragraph1")}
              </p>

              <p className="text-[#162456]/70 dark:text-gray-400 leading-relaxed">
                {t("paragraph2")}
              </p>

              <p className="text-[#162456]/80 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {t("paragraph3")}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-gray-800/80 border border-[#2E4A8A]/10 dark:border-gray-700 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#2E4A8A]/10 dark:hover:shadow-blue-500/10 hover:scale-105 hover:border-[#2E4A8A]/30 dark:hover:border-gray-600"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2E4A8A]/10 dark:bg-blue-500/20 flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-[#2E4A8A] dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-[#0b1215] dark:text-white">
                  {t("fullstack")}
                </h3>
                <p className="text-sm text-[#162456]/60 dark:text-gray-400 mt-1">
                  {t("fullstackDesc")}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-gray-800/80 border border-[#2E4A8A]/10 dark:border-gray-700 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#2E4A8A]/10 dark:hover:shadow-blue-500/10 hover:scale-105 hover:border-[#2E4A8A]/30 dark:hover:border-gray-600"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2E4A8A]/20 to-[#2E4A8A]/5 dark:from-blue-500/30 dark:to-blue-500/10 flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-[#2E4A8A] dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-[#0b1215] dark:text-white">
                  {t("university")}
                </h3>
                <p className="text-sm text-[#162456]/60 dark:text-gray-400 mt-1">
                  {t("universityDesc")}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
