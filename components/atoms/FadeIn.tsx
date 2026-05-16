"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "none";
}

const directionMap = {
  up: { y: 14 },
  left: { x: -14 },
  none: {},
};

const FadeIn = ({
  children,
  delay = 0,
  className,
  direction = "up",
}: FadeInProps) => {
  const fromProps = directionMap[direction];

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, ...fromProps }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
