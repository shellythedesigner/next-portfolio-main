"use client";

import {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import { Theme, ThemeContextProviderProps, ThemeContextType } from "../lib/definitions";
import { mediaQuery, setCookie, setDocumentClass } from "./utils";

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
  mode
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>(mode);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setCookie("dark");
      setDocumentClass("dark");
    } else {
      setTheme("light");
      setCookie("light");
      setDocumentClass("light");
    }
  };

  useLayoutEffect(() => {
    if (mode === undefined) {
      if (matchMedia(mediaQuery).matches) {
        setTheme("dark");
        setCookie("dark");
        setDocumentClass("dark");
      } else {
        setTheme("light");
        setDocumentClass("light");
        setCookie("light");
      }
    }
  }, [mode]);

  useLayoutEffect(() => {
    const media = window.matchMedia(mediaQuery);

    const handleChange = () => {
      if (media.matches) {
        setTheme("dark");
        setCookie("dark");
        setDocumentClass("dark");
      } else {
        setTheme("light");
        setDocumentClass("light");
        setCookie("light");
      }
    };

    // Add event listener for changes in the OS theme
    media.addEventListener("change", handleChange);

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error(
      "useThemeContext must be used within the ThemeContextProvider."
    );
  return context;
};
