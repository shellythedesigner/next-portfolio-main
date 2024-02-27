import { motion } from "framer-motion";
import { useLanguageContext } from "../contexts/languageContext";
import Link from "next/link";
import { useActiveSectionContext } from "../contexts/activeSectionContext";
import { NavigationProps } from "../lib/definitions";

export default function Navigation({
  isNavOpen,
  setIsNavOpen,
}: NavigationProps) {
  const {
    dict: { links },
  } = useLanguageContext();
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const variants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.085 * index,
      },
    }),
  };

  return (
    <nav
      className={`items-centered transition-all lg:h-fit ${
        isNavOpen ? "h-[250px]" : "h-0 delay-500"
      }`}
    >
      <ul
        className={`flex basis-full flex-col gap-4 text-center transition-all lg:flex-row ${
          isNavOpen ? "" : "translate-x-[1000px] duration-1000 lg:translate-x-0"
        }`}
      >
        {links.map((link, i) => (
          <motion.li
            className="relative"
            key={link.hash}
            variants={variants}
            initial="initial"
            whileInView="animate"
            custom={i}
          >
            <Link
              className={`w-full px-3 py-1 transition-all text-light-secondary-onContainer hover:text-light-primary-base dark:text-dark-secondary-onContainer dark:hover:text-dark-primary-onBase ${
                activeSection === link.section
                  ? "text-light-primary-onBase dark:text-dark-primary-onBase"
                  : ""
              }`}
              href={link.hash}
              onClick={() => {
                if (isNavOpen) setIsNavOpen(false);
                setActiveSection(link.section);
                setTimeOfLastClick(Date.now());
              }}
            >
              {link.name}
              {activeSection === link.section && (
                <motion.span
                  className="rounded-full absolute inset-0 -z-10 bg-light-primary-base bg-opacity-30 dark:bg-dark-primary-base dark:bg-opacity-30"
                  layoutId="activeSection"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                ></motion.span>
              )}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
