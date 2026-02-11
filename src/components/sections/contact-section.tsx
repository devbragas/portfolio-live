"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Linkedin, Github } from "lucide-react";
import { Container } from "../ui/container";
import { useTranslations } from "next-intl";

export function ContactSection() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="py-16 lg:py-20 px-4 lg:px-0 bg-background">
      <Container>
        <div className="flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-4 text-[#162456]"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-[#162456]/70 max-w-xl mb-8"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 w-full sm:w-auto"
          >
            <Link
              href="https://wa.me/5588981050912"
              className="flex items-center justify-center gap-2 bg-[#2E4A8A] hover:bg-[#162456] text-white font-medium px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#2E4A8A]/30 hover:scale-105"
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
              {t("whatsapp")}
            </Link>
            <Link
              href="mailto:enzovasoncelosbraga@gmail.com"
              className="flex items-center justify-center gap-2 border border-[#2E4A8A] hover:border-[#162456] text-[#0b1215] font-medium px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#2E4A8A]/20 hover:scale-105"
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
              {t("email")}
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-[#162456]/60 text-sm mb-6"
          >
            {t("findMe")}
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                href="https://github.com/devbragas"
                className="flex items-center gap-4 bg-white/80 border border-[#2E4A8A]/20 hover:border-[#2E4A8A]/50 rounded-xl px-6 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-[#2E4A8A]/20 hover:scale-105 group"
              >
                <div className="text-[#2E4A8A] bg-[#557cd827] rounded-xl flex h-10 w-10 items-center justify-center bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Github size={14} />
                </div>
                <div className="text-left">
                  <h3 className="text-[#0b1215] font-semibold">
                    {t("github")}
                  </h3>
                  <p className="text-[#162456]/60 text-sm">{t("githubDesc")}</p>
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Link
                href="https://linkedin.com/in/enzovasconcelos"
                className="flex items-center gap-4 bg-white/80 border border-[#2E4A8A]/20 hover:border-[#2E4A8A]/50 rounded-xl px-6 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-[#2E4A8A]/20 hover:scale-105 group"
              >
                <div className="text-[#2E4A8A] bg-[#557cd827] rounded-xl flex h-10 w-10 items-center justify-center bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Linkedin size={20} />
                </div>
                <div className="text-left">
                  <h3 className="text-[#0b1215] font-semibold">
                    {t("linkedin")}
                  </h3>
                  <p className="text-[#162456]/60 text-sm">
                    {t("linkedinDesc")}
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link
                href="mailto:enzovasoncelosbraga@gmail.com"
                className="flex items-center gap-4 bg-white/80 border border-[#2E4A8A]/20 hover:border-[#2E4A8A]/50 rounded-xl px-6 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-[#2E4A8A]/20 hover:scale-105 group"
              >
                <div className="text-[#2E4A8A] bg-[#557cd827] rounded-xl flex h-10 w-10 items-center justify-center bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
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
                  <h3 className="text-[#0b1215] font-semibold">
                    {t("emailTitle")}
                  </h3>
                  <p className="text-[#162456]/60 text-sm">{t("emailDesc")}</p>
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
            </motion.div>
          </div>
        </div>
      </Container>

      <div className="mt-20 h-px w-full bg-linear-to-r from-transparent via-[#2E4A8A]/30 to-transparent" />
    </section>
  );
}
