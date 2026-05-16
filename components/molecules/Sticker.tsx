"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StickerProps {
  src: string;
  alt?: string;
  rotation?: number;
  size?: number;
  className?: string;
}

const Sticker = ({
  src,
  alt = "Sticker",
  rotation = 0,
  size = 100,
  className,
}: StickerProps) => {
  const [hovered, setHovered] = useState(false);
  const [dragging, setDragging] = useState(false);

  const isIdle = !hovered && !dragging;

  return (
    // Outer: owns drag x/y — no float animation here to avoid y conflicts
    <motion.div
      className={cn("relative touch-none", className)}
      style={{
        width: size,
        height: size,
        cursor: dragging ? "grabbing" : "grab",
        zIndex: dragging ? 9999 : "auto",
      }}
      drag
      dragMomentum={false}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onDragStart={() => setDragging(true)}
      onDragEnd={() => setDragging(false)}
    >
      {/* Inner: float y + rotation only — scale is NOT here to avoid loop conflicts */}
      <motion.div
        style={{ width: "100%", height: "100%", rotate: rotation }}
        animate={isIdle ? { y: [0, -10, 0] } : { y: 0 }}
        transition={
          isIdle
            ? { duration: 3, repeat: Infinity, ease: "easeInOut", repeatType: "loop" }
            : { duration: 0.25, ease: "easeOut" }
        }
      >
        {/* Scale lives here, separate from the loop so it never re-triggers */}
        <motion.div
          style={{ width: "100%", height: "100%" }}
          animate={{ scale: dragging ? 1.18 : hovered ? 1.1 : 1 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <img
            src={src}
            alt={alt}
            draggable={false}
            className="w-full h-full object-contain select-none pointer-events-none"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Sticker;
