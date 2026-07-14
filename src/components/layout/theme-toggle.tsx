import { useEffect, useState } from "react";
import { RiContrast2Fill } from "@remixicon/react";
import { motion } from "motion/react";
import { playToggleSound } from "@/lib/ui-sounds";

function getInitialTheme() {
  if (typeof window === "undefined") return false;
  const saved = localStorage.getItem("theme");
  if (saved === "dark") return true;
  if (saved === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (localStorage.getItem("theme") === null) {
        setIsDark(event.matches);
      }
    };
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const handleToggle = () => {
    const next = !isDark;
    playToggleSound(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };

  return (
    <motion.button
      onClick={handleToggle}
      className="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full"
      style={{ color: "var(--foreground)" }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      whileTap={{ scale: 0.96 }}
    >
      <RiContrast2Fill size={16} aria-hidden />
    </motion.button>
  );
}
