"use client";
import { Project as ProjectProps } from "../lib/definitions";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  links,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="flex place-items-center group max-w-[450px] lg:max-w-fit bg-light-primary-onBase border hover:bg-light-primary-container border-black/5 rounded-lg p-4 lg:p-8"
    >
      <section className="flex flex-col lg:flex-row place-items-center gap-4 lg:gap-8">
        <div className="lg:basis-5/12">
          <Image
            className="w-full max-w-[400px] shadow-xl m-auto aspect-[16/9] object-cover rounded-t-md lg: rounded-b-md transition-all  opacity-70 group-hover:opacity-100 group-hover:scale-x-110 group-hover:scale-y-105 group-hover:shadow-2xl lg:group-hover:scale-x-[1.2] lg:group-hover:scale-y-[1.4]"
            src={imageUrl}
            alt="Project I worked on"
            quality={90}
          />
        </div>

        <div className="px-4 py-0 flex flex-col gap-4 lg:basis-7/12">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-xl lg:text-2xl font-semibold text-light-primary-base">
              {title}
            </h3>
            <div className="flex gap-1">
              <Tooltip id="warning" />
              {links.gh && (
                <a
                  href={links.gh}
                  aria-label="link to project's github repo"
                  target="_blank"
                  className="p-3 text-lg transition bg-light-primary-onContainer text-light-primary-onBase hover:bg-light-primary-onBase hover:text-light-primary-onContainer rounded-full shadow-light-primary-onContainer  shadow-md"
                >
                  <FaGithub />
                </a>
              )}

              <a
                // data-tooltip-id="warning"
                // data-tooltip-content="View it"
                href={links.live}
                aria-label="link to project's webpage"
                target="_blank"
                className="p-3 text-lg transition bg-light-primary-onContainer text-light-primary-onBase hover:bg-light-primary-onBase hover:text-light-primary-onContainer rounded-full shadow-light-primary-onContainer  shadow-md"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
          <p className="text-light-primary-onContainer text-justify">
            {description}
          </p>
          <ul className="flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full "
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </motion.div>
  );
}
