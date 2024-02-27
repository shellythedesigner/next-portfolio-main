import type { Theme } from "../lib/definitions";

export const mediaQuery = "(prefers-color-scheme: dark)";

export const setDocumentClass = (preference: Theme) => {
  document.documentElement.classList.remove("dark", "light");
  document.documentElement.classList.add(preference);
};

export const setCookie = async (theme: Theme) => {
  await fetch("/api/theme", {
    method: "POST",
    body: JSON.stringify({ theme }),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  });
};
