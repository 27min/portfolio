import { useEffect, useState } from "react";

export function useTheme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("__theme_dark");
    if (stored) setDark(stored === "1");
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const light = {
      "--background": "#ffffff",
      "--foreground": "#171717",
      "--color-primary": "#3b82f6",
      "--color-secondary": "#9333ea",
    } as const;
    const darkVars = {
      "--background": "#0a0a0a",
      "--foreground": "#ededed",
      "--color-primary": "#60a5fa",
      "--color-secondary": "#c084fc",
    } as const;
    const vars = dark ? darkVars : light;
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("__theme_dark", dark ? "1" : "0");
  }, [dark]);

  return { dark, setDark } as const;
}
