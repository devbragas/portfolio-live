import type { Metadata } from "next";
import "./globals.css";
import { satoshi } from "./fonts/fonts";
import { Container } from "../components/ui/container";
import { Header } from "../components/ui/header";
import { Footer } from "../components/ui/footer";
import { Providers } from "../components/providers";

export const metadata: Metadata = {
  title: "Enzo Braga | Portfólio",
  description: "Portfólio pessoal Enzo Vasconcelos Braga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${satoshi.variable}  antialiased`}>
        <Providers>
          <Header />
          <main className="pt-16">
            <Container>{children}</Container>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
