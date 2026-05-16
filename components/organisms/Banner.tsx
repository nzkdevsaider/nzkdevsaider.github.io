"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="relative w-full h-64 shrink-0 z-0 overflow-hidden mb-[-1px]">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Image
          src="/assets/itsme.png"
          alt="Sebastián Morales"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
      {/* Gradient: fades the bottom of the image into the card background */}
      <div className="absolute bottom-0 left-0 w-full h-full bg-linear-to-t from-base-100 from-40% via-base-100/60 via-70% to-transparent pointer-events-none" />
    </div>
  );
};

export default Banner;
