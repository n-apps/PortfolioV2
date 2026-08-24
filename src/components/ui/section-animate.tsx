import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface SectionAnimateProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function SectionAnimate({
  children,
  delay = 0,
  className = "",
}: SectionAnimateProps) {
  const reduceMotion = useReducedMotion() === true;

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              duration: 0.5,
              delay,
              ease: [0.4, 0, 0.2, 1],
            }
      }
    >
      {children}
    </motion.div>
  );
}
