"use client";

import { motion } from "framer-motion";
import Section from "@/components/molecules/Section";
import Badge from "@/components/atoms/Badge";
import ProjectShowcase from "@/components/molecules/ProjectShowcase";
import FadeIn from "@/components/atoms/FadeIn";
import RESUME_DATA from "@/lib/cv.json";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.82 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.32,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

const Habilidades = () => {
  const { skills } = RESUME_DATA;

  return (
    <Section title="Habilidades">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
        {/* Skills grid */}
        <motion.div
          className="flex flex-wrap gap-2 flex-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {skills.map((skill) => (
            <motion.div key={skill.name} variants={itemVariants}>
              <Badge variant="skill">{skill.name}</Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Showcase card */}
        <FadeIn direction="left" delay={0.15} className="w-full md:w-52 shrink-0">
          <ProjectShowcase />
        </FadeIn>
      </div>
    </Section>
  );
};

export default Habilidades;
