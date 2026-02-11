"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useLocaleStore } from "../app/store/use-locale-store";
import { useEffect, useState } from "react";
import { NextIntlClientProvider } from "next-intl";

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  const { locale } = useLocaleStore();
  const [messages, setMessages] = useState<Record<string, unknown> | null>(
    null,
  );

  useEffect(() => {
    import(`../app/locales/${locale}.json`)
      .then((mod) => setMessages(mod.default))
      .catch((err) => console.error("Failed to load messages:", err));
  }, [locale]);

  if (!messages) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NextIntlClientProvider messages={messages} locale={locale}>
        {children}
      </NextIntlClientProvider>
    </QueryClientProvider>
  );
}
