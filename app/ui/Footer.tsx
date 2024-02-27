"use client";
import { useLanguageContext } from "../contexts/languageContext";

export default function Footer() {
  const {
    dict: { footer },
  } = useLanguageContext();
  const year = new Date().getFullYear();
  return (
    <footer className="text-center p-4 text-light-secondary-onContainer dark:text-dark-secondary-onContainer">
      <small className="text-xs font-light opacity-70 block mb-2">
        &copy; {year} Shelly Wu.
      </small>
      <p className="font-light ">{footer.text}</p>
    </footer>
  );
}
