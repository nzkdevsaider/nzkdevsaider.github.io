import { motion } from "framer-motion";

const SebastianMorales = () => {
  return (
    <motion.div
      className="font-bold text-6xl md:text-9xl text-center dark:text-swhite"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      Sebastián Morales
    </motion.div>
  );
};

export default SebastianMorales;
