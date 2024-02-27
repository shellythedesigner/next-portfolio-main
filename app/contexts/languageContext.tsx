"use client";
import { createContext, useContext } from "react";
import { LanguageContextProviderProps, LanguageContextType } from "../lib/definitions";

const LanguageContext = createContext<LanguageContextType | null>(null);

const LanguageContextProvider = ({
  children,
  dict,
}: LanguageContextProviderProps) => {
  return (
    <LanguageContext.Provider value={{ dict }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);

  if (context === null)
    throw new Error(
      "useLanguageContext must be used within the LanguageContextProvider."
    );

  return context;
};

export { LanguageContextProvider };
