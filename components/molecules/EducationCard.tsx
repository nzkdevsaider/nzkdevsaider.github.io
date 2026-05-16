"use client";

import { motion } from "framer-motion";
import CompanyLogo from "@/components/atoms/CompanyLogo";
import Badge from "@/components/atoms/Badge";

interface EducationCardProps {
  institution: string;
  logo: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  courses?: string[];
  url?: string;
  index?: number;
}

const EducationCard = ({
  institution,
  logo,
  area,
  studyType,
  startDate,
  endDate,
  courses = [],
  index = 0,
}: EducationCardProps) => {
  return (
    <motion.div
      className="grid grid-cols-[45%_1fr] gap-4 p-4 bg-base-200/40 rounded-xl border border-base-300/30"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.1,
      }}
    >
      {/* Left: Institution info */}
      <div className="flex flex-col gap-1 min-w-0">
        <div className="flex items-start gap-2">
          <CompanyLogo name={institution} src={logo} className="mt-0.5 shrink-0" />
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-xs font-semibold text-base-content leading-tight line-clamp-2">
              {institution}
            </span>
            <Badge variant="date" className="self-start">
              {startDate} - {endDate}
            </Badge>
          </div>
        </div>
        <span className="text-xs text-base-content/75 mt-0.5">{studyType}</span>
        <span className="text-xs text-base-content/45 leading-snug">{area}</span>
      </div>

      {/* Right: Courses */}
      <div className="flex flex-col gap-2 justify-center">
        {courses.slice(0, 3).map((course, i) => (
          <div key={i} className="flex items-start gap-1.5">
            <span className="text-base-content/35 text-xs mt-0.5 shrink-0">
              &bull;
            </span>
            <span className="text-xs text-base-content/65 leading-snug">
              {course}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default EducationCard;
