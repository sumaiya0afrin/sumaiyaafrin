import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SectionTitle = ({ title, image }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 }); // Triggers when 50% visible

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 }, // Fade in from below
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.h1
      ref={ref}
      className="justify-start lg:mb-5 text-2xl md:text-3xl lg:text-5xl font-bold uppercase flex items-center"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Animates only when in view
    >
      {title.split("").map((char, index) => (
        <motion.span key={index} variants={letterVariants}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      <span>
        <img src={image} alt="" className="w-12 md:w-16 lg:w-20" />
      </span>
    </motion.h1>
  );
};

export default SectionTitle;
