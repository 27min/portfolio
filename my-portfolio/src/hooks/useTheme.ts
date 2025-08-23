import { useEffect, useState } from "react";

export function useTheme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("__theme_dark");
    if (stored) setDark(stored === "1");
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("__theme_dark", dark ? "1" : "0");
  }, [dark]);

  return { dark, setDark } as const;
}
