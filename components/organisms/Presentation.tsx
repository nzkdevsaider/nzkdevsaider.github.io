"use client";

import { motion } from "framer-motion";
import { ArrowSquareOutIcon } from "@phosphor-icons/react";
import { basics, work } from "@/lib/cv.json";
import FreelanceBadge from "@/components/molecules/FreelanceBadge";
import SocialLinks from "@/components/molecules/SocialLinks";
import CompanyLogo from "@/components/atoms/CompanyLogo";

const Presentation = () => {
  const currentJob = work[0];

  return (
    <div className="relative z-10 -mt-20 flex flex-col items-start gap-2 pb-4">
      {/* Row 1: Freelance badge + Socials (mobile only) */}
      <div className="flex flex-row items-center justify-between w-full">
        <FreelanceBadge />
        <div className="flex md:hidden">
          <SocialLinks />
        </div>
      </div>

      {/* Row 2: Name + Socials (desktop) */}
      <div className="flex flex-row items-end justify-between w-full gap-4">
        <motion.h1
          className="font-medium text-4xl md:text-5xl text-base-content leading-none tracking-tight"
          initial={{ opacity: 0, filter: "blur(8px)", y: 12 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.75,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2,
          }}
        >
          {basics.name}
        </motion.h1>
        <div className="hidden md:flex mb-0.5">
          <SocialLinks />
        </div>
      </div>

      {/* Row 3: Current position + company badge */}
      <motion.div
        className="flex flex-wrap items-center gap-1.5 text-xl text-base-content/65"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.55,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.38,
        }}
      >
        <span>{basics.label} en</span>
        <a
          href={currentJob?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent border rounded-full px-2.5 py-1 text-xs font-semibold text-accent-content hover:bg-accent/90 transition-colors"
        >
          <CompanyLogo src={currentJob?.logo} name={currentJob?.name ?? "Empresa"} size="sm" />
          {currentJob?.name ?? "Empresa"}
          <ArrowSquareOutIcon className="w-3 h-3 opacity-90" />
        </a>
      </motion.div>

      {/* Row 4: Tagline */}
      <motion.p
        className="text-xl text-base-content/65 mt-0.5"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.55,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.5,
        }}
      >
        Diseñando interfaces agradables.
      </motion.p>
    </div>
  );
};

export default Presentation;
