"use client";

import {
  ArrowRight,
  Briefcase,
  Lightbulb,
  MapPin,
  TrendingUp,
} from "lucide-react";
import { useTranslations } from "next-intl";
import TechTag from "../ui/tech-tag";

export function ExperienceSection() {
  const t = useTranslations("experience");
  return (
    <section
      id="experience"
      className="py-3.5 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="flex flex-col gap-8 lg:gap-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-[#162456] dark:text-white">
            {t("title")}
          </h2>
          <p className="text-[#162456]/70 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="relative flex">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2E4A8A] via-[#2E4A8A]/50 to-transparent dark:from-blue-400 dark:via-blue-400/50" />

          <div className="relative flex gap-6 pl-2 w-full">
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#2E4A8A] dark:border-blue-400 bg-white dark:bg-gray-900">
              <Briefcase
                size={18}
                className="text-[#2E4A8A] dark:text-blue-400"
              />
            </div>

            <div className="flex-1 flex flex-col gap-4">
              <div className="rounded-2xl border border-border/80 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/30">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-bold sm:text-xl dark:text-white">
                      {t("role")}
                    </h3>
                    <p className="text-base font-semibold text-[#2E4A8A] dark:text-blue-400">
                      {t("company")}
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-1 sm:items-end">
                    <span className="inline-flex rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-xs font-semibold text-[#2E4A8A] dark:text-blue-400">
                      {t("date")}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                      <MapPin size={12} />
                      {t("location")}
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
                  {t("description")}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <TechTag>React</TechTag>
                  <TechTag>Next.js</TechTag>
                  <TechTag>TypeScript</TechTag>
                  <TechTag>Java</TechTag>
                  <TechTag>SpringBoot</TechTag>
                  <TechTag>PosgtreSQL</TechTag>
                  <TechTag>AWS</TechTag>
                  <TechTag>Git</TechTag>
                  <TechTag>Scrum</TechTag>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute -top-2 left-8 flex items-center text-[#2E4A8A]/50 dark:text-blue-400/50">
                    <ArrowRight size={16} className="rotate-90" />
                  </div>
                  <div className="rounded-xl border border-border/60 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-5 transition-all duration-300 hover:shadow-md hover:shadow-blue-400/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Lightbulb
                        size={18}
                        className="text-[#2E4A8A] dark:text-blue-400"
                      />
                      <h4 className="font-semibold text-sm text-[#162456] dark:text-white">
                        {t("challengesTitle")}
                      </h4>
                    </div>
                    <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-[#2E4A8A] dark:text-blue-400 mt-0.5">
                          •
                        </span>
                        <span>
                          <strong className="text-gray-800 dark:text-white">
                            {t("challenge1Title")}
                          </strong>{" "}
                          {t("challenge1Desc")}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#2E4A8A] dark:text-blue-400 mt-0.5">
                          •
                        </span>
                        <span>
                          <strong className="text-gray-800 dark:text-white">
                            {t("challenge2Title")}
                          </strong>{" "}
                          {t("challenge2Desc")}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#2E4A8A] dark:text-blue-400 mt-0.5">
                          •
                        </span>
                        <span>
                          <strong className="text-gray-800 dark:text-white">
                            {t("challenge3Title")}
                          </strong>{" "}
                          {t("challenge3Desc")}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#2E4A8A] dark:text-blue-400 mt-0.5">
                          •
                        </span>
                        <span>
                          <strong className="text-gray-800 dark:text-white">
                            {t("challenge4Title")}
                          </strong>{" "}
                          {t("challenge4Desc")}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -top-2 left-8 flex items-center text-[#2E4A8A]/50 dark:text-blue-400/50">
                    <ArrowRight size={16} className="rotate-90" />
                  </div>
                  <div className="rounded-xl border border-border/60 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-5 transition-all duration-300 hover:shadow-md hover:shadow-blue-400/20">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp
                        size={18}
                        className="text-[#2E4A8A] dark:text-blue-400"
                      />
                      <h4 className="font-semibold text-sm text-[#162456] dark:text-white">
                        {t("resultsTitle")}
                      </h4>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-3 p-2 rounded-lg bg-blue-100/50 dark:bg-blue-900/20">
                        <span className="text-lg font-bold text-[#2E4A8A] dark:text-blue-400">
                          {t("result1Value")}
                        </span>
                        <span className="text-xs text-gray-600 dark:text-gray-300">
                          {t("result1Desc")}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg bg-blue-100/50 dark:bg-blue-900/20">
                        <span className="text-lg font-bold text-[#2E4A8A] dark:text-blue-400">
                          {t("result2Value")}
                        </span>
                        <span className="text-xs text-gray-600 dark:text-gray-300">
                          {t("result2Desc")}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg bg-blue-100/50 dark:bg-blue-900/20">
                        <span className="text-lg font-bold text-[#2E4A8A] dark:text-blue-400">
                          {t("result3Value")}
                        </span>
                        <span className="text-xs text-gray-600 dark:text-gray-300">
                          {t("result3Desc")}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg bg-blue-100/50 dark:bg-blue-900/20">
                        <span className="text-lg font-bold text-[#2E4A8A] dark:text-blue-400">
                          {t("result4Value")}
                        </span>
                        <span className="text-xs text-gray-600 dark:text-gray-300">
                          {t("result4Desc")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-[#2E4A8A]/30 dark:via-blue-500/30 to-transparent" />
    </section>
  );
}
