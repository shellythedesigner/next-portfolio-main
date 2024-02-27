import { useActiveSectionContext } from "@/app/contexts/activeSectionContext";
import type { SectionNameType } from "@/app/lib/definitions";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function useSectionInView(sectionName: SectionNameType, amount = 0.75) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    amount,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref, inView };
}

export default useSectionInView;
