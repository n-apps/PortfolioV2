import { Link, useLocation } from "react-router";
import { ThemeToggle } from "./theme-toggle";
import { motion } from "motion/react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/now", label: "Now" },
];

export function Navigation() {
  const location = useLocation();

  return (
    <motion.nav
      className="pt-6 pb-12 sm:pt-10 sm:pb-16 flex items-center justify-between w-full"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      <Link
        to="/"
        className="inline-block select-none text-foreground hover:opacity-70 transition-opacity"
        aria-label="Home"
      >
        <span className="tracking-wide" style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(0.8125rem, 0.78rem + 0.15vw, 1rem)", lineHeight: 1 }}>
          R&mdash;S
        </span>
      </Link>
      <div className="flex items-center gap-4">
        {navLinks.map(({ href, label }) => {
          if (label === "Home") return null;
          const isActive = location.pathname === href;
          return (
            <Link
              key={href}
              to={href}
              className={`inline-block transition-colors ${
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              style={{ fontSize: "clamp(0.8125rem, 0.78rem + 0.15vw, 1rem)", lineHeight: 1 }}
            >
              {label}
            </Link>
          );
        })}
        <ThemeToggle />
      </div>
    </motion.nav>
  );
}
