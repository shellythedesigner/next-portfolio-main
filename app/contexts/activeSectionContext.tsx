"use client";

import { createContext, useContext, useState } from "react";
import {
  ActiveSectionContextType,
  ActiveSectionContextProviderProps,
  SectionNameType,
} from "../lib/definitions";

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionNameType>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null)
    throw new Error(
      "useActiveSectionContext must be used within the ActiveSectionContextProvider."
    );

  return context;
};
