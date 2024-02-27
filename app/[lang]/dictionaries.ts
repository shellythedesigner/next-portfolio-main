import "server-only";
import { default as en } from "@/dictionaries/en.json";
import { default as tr } from "@/dictionaries/tr.json";
import { Dictionary, Locale } from "../lib/definitions";
import Building_Blocks from "@/public/images/Building_Blocks.jpg";
import Gear from "@/public/images/Gear.jpg";
import Forward_Motion_Yoga from "@/public/images/Forward_Motion_Yoga.jpg";
import Wild_House from "@/public/images/Wild_House.jpg";


const images = [
  Building_Blocks,
  Gear,
  Forward_Motion_Yoga,
  Wild_House,
];

type EntryProjects = Omit<Dictionary["projects"][number], "imageUrl">;

const setStaticImages = (projects: EntryProjects[]) => {
  return projects.map((project, i) => ({
    ...project,
    imageUrl: images[i],
  }));
};

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: async () => {
    //@ts-ignore
    const projects = setStaticImages(en.projects);

    return { ...en, projects } as Dictionary;
  },
  tr: async () => {
    const projects = setStaticImages(tr.projects);

    return { ...tr, projects } as unknown as Dictionary;
  },
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
