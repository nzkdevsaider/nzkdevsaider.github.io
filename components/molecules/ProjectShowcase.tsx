"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const projects = [
  {
    title: "Mi tema de VSCode - Ukiyo",
    content: "Descarga mi tema de VSCode!",
    image:
      "https://raw.githubusercontent.com/nzkdevsaider/vscode-ukiyo-themes/main/assets/banner.jpg",
    href: "https://github.com/nzkdevsaider/vscode-ukiyo-themes",
  },
  {
    title: "Organiza y crea CV's",
    content: "Beta ya disponible!",
    image:
      "https://github.com/nzkdevsaider/cvex/raw/development/public/logo.png",
    href: "https://cvex.saider.dev/",
  },
];

const SLIDE_DURATION = 5000;

const slideVariants = {
  enter: {
    opacity: 0,
    scale: 1.04,
    filter: "blur(4px)",
  },
  center: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    filter: "blur(4px)",
  },
};

const ProjectShowcase = () => {
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) => {
    if (index === current) return;
    setCurrent(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  const project = projects[current];

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative h-36 rounded-xl overflow-hidden select-none cursor-pointer"
    >
      {/* Slides */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={current}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          {/* Dark overlays */}
          <div className="absolute inset-0 bg-base-content/60" />
          <div className="absolute inset-0 bg-linear-to-br from-base-content/70 via-base-content/50 to-primary/60" />

          {/* Content */}
          <div className="relative z-10 flex flex-col gap-1 p-4">
            <h3 className="text-white/90 font-semibold text-sm leading-tight">
              {project.title}
            </h3>
            <p className="text-white/60 text-xs leading-snug">
              {project.content}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Pagination dots */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex gap-1.5 justify-center">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.preventDefault();
              goTo(i);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              i === current ? "bg-white/90 w-3" : "bg-white/35 w-1.5"
            }`}
          />
        ))}
      </div>
    </a>
  );
};

export default ProjectShowcase;
