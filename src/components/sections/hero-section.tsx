"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";
import { HeroButton } from "../ui/hero-button";
import { MapPin } from "lucide-react";
import { HeroBackground } from "../ui/hero-background";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 pt-24 lg:pt-36 px-4 lg:px-0">
      <HeroBackground />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col gap-5 flex-1 text-center lg:text-left"
      >
        <div className="flex flex-wrap justify-center lg:justify-start gap-3">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-linear-to-br from-white/20 via-white/10 to-white/5 dark:from-gray-700/50 dark:via-gray-700/30 dark:to-gray-700/10 backdrop-blur-xl rounded-full text-xs sm:text-sm font-medium text-blue-950/90 dark:text-white border border-white/30 dark:border-gray-600 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.5)] hover:border-white/40 transition-all duration-300 hover:scale-105"
          >
            {t("role")}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-linear-to-br from-white/20 via-white/10 to-white/5 dark:from-gray-700/50 dark:via-gray-700/30 dark:to-gray-700/10 backdrop-blur-xl rounded-full text-xs sm:text-sm font-medium text-blue-950/90 dark:text-white border border-white/30 dark:border-gray-600 shadow-[0_8px_32px_0_#1f26875e] hover:shadow-[0_8px_32px_0_#1f26877f] hover:border-white/40 transition-all duration-300 hover:scale-105"
          >
            {t("architect")}
          </motion.div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-bold text-3xl sm:text-4xl lg:text-5xl dark:text-white"
        >
          {t("name")}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-sm dark:text-gray-200"
        >
          <TypeAnimation
            key={t("typing1")}
            sequence={[
              t("typing1"),
              1000,
              t("typing2"),
              1000,
              t("typing3"),
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base sm:text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 dark:text-gray-300"
        >
          {t("description")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center justify-center lg:justify-start gap-1.5 dark:text-gray-300"
        >
          <MapPin size={16} />
          <p>{t("location")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <HeroButton />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        className="relative flex-shrink-0"
      >
        <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-(--tertiary-text)/30 shadow-xl">
          <Image
            src="/jo.jpg"
            alt="Enzo Vasconcelos"
            width={288}
            height={288}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
