"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import Project from "./Project";
import useSectionInView from "@/app/hooks/useSectionInView";
import { useLanguageContext } from "../contexts/languageContext";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.25);
  const {
    dict: { projects },
  } = useLanguageContext();

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-my-28 lg:scroll-m-0 lg:px-16 lg:flex lg:justify-center lg:flex-col lg:h-[100dvh]"
    >
      <SectionHeading>My Projects</SectionHeading>
      <div className="grid justify-center gap-6 lg:justify-start grid-flow-row lg:grid-flow-col lg:overflow-x-auto lg:auto-cols-[80%] lg:gap-10 lg:pb-10">
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
