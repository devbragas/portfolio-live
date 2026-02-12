"use client";

import Image from "next/image";
import { useThemeStore } from "../../app/store/use-theme-store";

export function DevLogo() {
  const { theme } = useThemeStore();

  return (
    <>
      <div className="flex items-center">
        <Image
          src={theme === "dark" ? "/secondary_logo.png" : "/logo.png"}
          width={70}
          height={70}
          alt="Enzo Braga Dev Logo"
        />
        <p>
          <span className="text-(--tertiary-text)">dev</span>
          <span className="font-bold text-(--secondary-text)">bragas</span>
        </p>
      </div>
    </>
  );
}
