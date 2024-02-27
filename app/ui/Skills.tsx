"use client";
import useSectionInView from "@/app/hooks/useSectionInView";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useLanguageContext } from "../contexts/languageContext";

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const {
    dict: { skills },
  } = useLanguageContext();

  const variants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + 0.05 * index,
      },
    }),
  };

  return (
    <div id="skills" className="h-[100vh] items-centered" ref={ref}>
      <section className="max-w-[50rem] m-auto">
        <SectionHeading>my skills</SectionHeading>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-light-secondary-onContainer dark:text-dark-tertiary-container">
          {skills.map((skill, index) => {
            return (
              <motion.li
                className="bg-light-secondary-container dark:bg-dark-tertiary-onContainer borderBlack rounded-xl px-5 py-3"
                key={skill}
                variants={variants}
                initial="initial"
                whileInView="animate"
                // viewport={{
                //   once: true,
                // }}
                custom={index}
              >
                {skill}
              </motion.li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
