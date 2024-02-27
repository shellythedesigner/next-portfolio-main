"use client";
import { useThemeContext } from "@/app/contexts/themeContext";
import { motion } from "framer-motion";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <motion.button
      onClick={toggleTheme}
      className="btn-theme group"
      initial={{ opacity: 0, right: "-1rem" }}
      animate={{ opacity: 1, right: "1rem" }}
      transition={{ duration: 0.3 }}
      aria-label="theme switch"
    >
      <div className="group-hover:scale-125 group-active:scale-105 transition-all">
        {theme === "light" ? <BsSun /> : <BsMoon />}
      </div>
    </motion.button>
  );
}
