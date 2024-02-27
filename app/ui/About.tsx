"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import useSectionInView from "@/app/hooks/useSectionInView";
import { useLanguageContext } from "../contexts/languageContext";

export default function About() {
  const { ref } = useSectionInView("About", 0.6);
  const {
    dict: { about },
  } = useLanguageContext();
  const variants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
  };

  return (
    <div
      className="h-[100vh] flex items-center justify-center text-justify"
      id="about"
    >
      <motion.section
        className="max-w-[45rem] leading-8 text-[0.9rem] sm:text-lg"
        variants={variants}
        initial="initial"
        whileInView="animate"
        transition={{ delay: 0.1, duration: 0.4 }}
        ref={ref}
      >
        <SectionHeading>{about.heading}</SectionHeading>
        <p className="mb-3 indent-6">{about.p1}</p>
        <p className="mb-3 indent-6">{about.p2}</p>
        <p className="mb-3 indent-6">{about.p3}</p>
      </motion.section>
    </div>
  );
}
