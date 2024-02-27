import { i18n } from "@/i18.config";
import type { Metadata } from "next";
import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import Header from "@/app/ui/Header";
import ActiveSessionContextProvider from "@/app/contexts/activeSectionContext";
import { Toaster } from "react-hot-toast";
import Footer from "@/app/ui/Footer";
import ThemeSwitch from "@/app/ui/ThemeSwitch";
import ThemeContextProvider from "@/app/contexts/themeContext";
import { ParamsType, LayoutProps, Theme } from "../lib/definitions";
import { getDictionary } from "./dictionaries";
import { LanguageContextProvider } from "../contexts/languageContext";
import { cookies } from "next/headers";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params: { lang },
}: ParamsType): Promise<Metadata> {
  const dict = await getDictionary(lang);

  return {
    ...dict.metadata,
    generator: "Next.js",
    authors: [
      { name: "Rafet Basturk", url: "https://github.com/rafetbasturk" },
    ],
    creator: "Rafet Basturk",
    publisher: "Rafet Basturk",
  };
}

export default async function RootLayout({
  children,
  params: { lang },
}: LayoutProps) {
  const cookieStore = cookies();
  const mode = cookieStore.get("theme")?.value as Theme;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} className={mode ?? ""}>
      <body
        className={`${inter.className} antialiased max-w-screen-xl m-auto bg-light-bg-base text-light-primary-base dark:bg-dark-bg-base dark:text-dark-primary-base`}
      >
        <ThemeContextProvider mode={mode}>
          <LanguageContextProvider dict={dict}>
            <ActiveSessionContextProvider>
              <Header />
              {children}
              <Footer />
              <Toaster position="top-right" />
              <ThemeSwitch />
            </ActiveSessionContextProvider>
          </LanguageContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
