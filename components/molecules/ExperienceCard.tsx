"use client";

import { motion } from "framer-motion";
import CompanyLogo from "@/components/atoms/CompanyLogo";
import Badge from "@/components/atoms/Badge";

interface ExperienceCardProps {
  name: string;
  logo?: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
  url?: string;
  location?: string;
  index?: number;
}

const ExperienceCard = ({
  name,
  logo,
  position,
  startDate,
  endDate,
  highlights,
  location,
  index = 0,
}: ExperienceCardProps) => {
  return (
    <motion.div
      className="grid grid-cols-[45%_1fr] gap-4 p-4 bg-base-200/40 rounded-xl border border-base-300/30"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.12,
      }}
    >
      {/* Left: Company info */}
      <div className="flex flex-col gap-1 min-w-0">
        <div className="flex items-start gap-2">
          <CompanyLogo name={name} src={logo} className="mt-0.5 shrink-0" />
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-xs font-semibold text-base-content leading-tight truncate">
              {name}
            </span>
            <Badge variant="date" className="self-start">
              {startDate} - {endDate}
            </Badge>
          </div>
        </div>
        <span className="text-xs text-base-content/75 pl-0 mt-0.5">
          {position}
        </span>
        {location && (
          <span className="text-xs text-base-content/45">{location}</span>
        )}
      </div>

      {/* Right: Highlights */}
      <div className="flex flex-col gap-2 justify-center">
        {highlights.slice(0, 3).map((highlight, i) => (
          <div key={i} className="flex items-start gap-1.5">
            <span className="text-base-content/35 text-xs mt-0.5 shrink-0">
              &bull;
            </span>
            <span className="text-xs text-base-content/65 leading-snug">
              {highlight}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
