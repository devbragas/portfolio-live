"use client";

import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import TechTag from "../ui/tech-tag";

export function ExperienceSection() {
  const t = useTranslations("experience");
  return (
    <section
      id="experience"
      className="py-3.5 h-svh dark:bg-gray-900 transition-colors duration-300"
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
        <div className="rounded-2xl border border-border/80 bg-(--card) p-6 sm:p-8 transition-all duration-300">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-lg font-bold sm:text-xl">{t("role")}</h3>
              <p className="text-base font-semibold text-(--tertiary-text)">
                {t("company")}
              </p>
            </div>
            <div className="flex flex-col items-start gap-1 sm:items-end">
              <span className="inline-flex rounded-full bg-(--bg-primary) px-3 py-1 text-xs font-semibold text-(--tertiary-text)">
                {t("date")}
              </span>
              <span className="flex items-center gap-1 text-xs text-(--muted-foreground)">
                <MapPin size={12} />
                {t("location")}
              </span>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-(--muted-foreground) sm:text-base">
            {t("description")}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <TechTag>REceba</TechTag>
          </div>
        </div>
      </div>
    </section>
  );
}
