import { Dispatch, ReactNode, SetStateAction } from "react";
import { i18n } from "@/i18.config";
import { StaticImageData } from "next/image";

export type SectionNameType =
  | "Home"
  | "About"
  | "Projects"
  | "Skills"
  | "Contact";

export type Locale = (typeof i18n.locales)[number];

type Link = {
  name: string;
  section: SectionNameType;
  hash: string;
};

type Intro = {
  text: string;
  btn1: string;
  btn2: string;
  heading: string;
};

type Skills = string[];

type About = {
  heading: string;
  p1: string;
  p2: string;
  p3: string;
};

type Contact = {
  heading: string;
  text1: string;
  text2: string;
  email: string;
  emailPlaceholder: string;
  textareaPlaceholder: string;
};

type Footer = {
  text: string;
};

type MetaData = {
  title: string;
  description: string;
  keywords: string[];
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
  links: {
    gh: string;
    live: string;
  };
};

export type Dictionary = {
  links: Link[];
  intro: Intro;
  about: About;
  skills: Skills;
  projects: Project[];
  contact: Contact;
  footer: Footer;
  metadata: MetaData;
};

export type ParamsType = {
  params: {
    lang: Locale;
  };
};

export type LayoutProps = {
  children: ReactNode;
  params: {
    lang: Locale;
  };
};

export type NavigationProps = {
  isNavOpen: boolean;
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
};

export type ActiveSectionContextProviderProps = {
  children: ReactNode | ReactNode[];
};

export type ActiveSectionContextType = {
  activeSection: SectionNameType;
  setActiveSection: Dispatch<SetStateAction<SectionNameType>>;
  timeOfLastClick: number;
  setTimeOfLastClick: Dispatch<SetStateAction<number>>;
};

export type LanguageContextProviderProps = {
  children: ReactNode | ReactNode[];
  dict: Dictionary;
};

export type LanguageContextType = {
  dict: Dictionary;
};

export type Theme = "light" | "dark";

export type ThemeContextProviderProps = {
  children: ReactNode | ReactNode[];
  mode: Theme;
};

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};
