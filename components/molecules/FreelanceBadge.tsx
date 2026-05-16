"use client";

import { motion } from "framer-motion";
import { ButterflyIcon } from "@phosphor-icons/react";
import Badge from "@/components/atoms/Badge";

const FreelanceBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.45,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.1,
      }}
    >
      <Badge variant="availability">
        <span className="relative inline-flex items-center justify-center w-1.5 h-1.5 shrink-0">
          <motion.span
            className="absolute inline-block w-full h-full rounded-full bg-emerald-500"
            initial={{ scale: 1, opacity: 0 }}
            animate={{
              scale: [1, 1, 2.2],
              opacity: [0, 0.55, 0],
            }}
            transition={{
              duration: 1.8,
              times: [0, 0.08, 1],
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
          <span className="relative inline-block w-full h-full rounded-full bg-emerald-500" />
        </span>
        <ButterflyIcon className="w-3.5 h-3.5 shrink-0" />
        Disponible para freelance
      </Badge>
    </motion.div>
  );
};

export default FreelanceBadge;
