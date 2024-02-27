"use client";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import pic from "@/public/Animation.gif";
import useSectionInView from "@/app/hooks/useSectionInView";
import { useActiveSectionContext } from "@/app/contexts/activeSectionContext";
import { useLanguageContext } from "../contexts/languageContext";

export default function Intro() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { ref } = useSectionInView("Home");
  const {
    dict: { intro },
  } = useLanguageContext();

  const variants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
  };

  return (
    <div className="h-[100vh] items-centered" id="home" ref={ref}>
      <motion.section
        className="max-w-[50rem] text-center"
        variants={variants}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 0.5 }}
      >
        <div className="items-centered">
          <div className="relative">
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Image
                src={pic}
                alt="heroimage"
                width={240}
                height={240}
                quality={90}
                priority={true}
                className="rounded-full border-[0.35rem] border-dark-secondary-base shadow-xl object-cover"
              />
            </motion.div>
          </div>
        </div>
        <motion.div
          className="mb-10 mt-4 text-lg font-medium !leading-[1.5] sm:text-3xl"
          variants={variants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.2, delay: 0.6 }}
        >
          <p>{intro.text}</p>
        </motion.div>
        <motion.div
          className="items-centered gap-3 flex-col sm:flex-row px-4 text-lg font-medium"
          variants={variants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.2, delay: 0.6 }}
        >
          <Link
            href="#contact"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
            className="btn-primary group"
          >
            {intro.btn1}
            <BsArrowRight className="text-[1.2rem] opacity-70 group-active:translate-x-1 transition" />
          </Link>
          <Link
            href="/public/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            locale={false}
            aria-label="link to CV"
            // download
            className="btn-secondary borderBlack group"
          >
            {intro.btn2}
            <HiDownload className="text-[1.2rem] opacity-70 group-active:translate-y-1 transition" />
          </Link>
          <a
            href="http://www.linkedin.com/in/shellythedesigner"
            className="btn-icon group borderBlack"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="link to linkedin profile"
          >
            <BsLinkedin className="text-[1.2rem] group-hover:scale-125 transition" />
          </a>
          <a
            href="https://github.com/shellythedesigner"
            className="btn-icon group borderBlack"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="link to github profile"
          >
            <FaGithub className="text-[1.2rem] group-hover:scale-125 transition" />
          </a>
        </motion.div>
      </motion.section>
    </div>
  );
}
