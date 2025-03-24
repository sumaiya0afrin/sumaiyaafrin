import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";

// Custom hook for parallax effect
function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

// eslint-disable-next-line react/prop-types
const Project = ({ id, title, desc, techStack, mockup, detailsLink }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });

  const fadeIn = useTransform(scrollYProgress, [0, 1], [0, 1]); // Fade-in effect
  const y = useParallax(scrollYProgress, 30); // Smooth vertical transition

  return (
    <section
      ref={ref}
      className="relative  flex items-center justify-center snap-center"
    >
      {/* Fixed ID in top-left */}
      <motion.h2
        className="text-[#11f7d5] text-4xl md:text-8xl font-bold sticky top-20 lg:top-40 left-10 md:left-20 z-10 hidden md:block"
        style={{ opacity: fadeIn }}
      >{`#0${id}`}</motion.h2>

      {/* Project Card */}
      <motion.div
        style={{ opacity: fadeIn, y }}
        className="relative overflow-hidden p-5 md:p-7 w-full max-w-4xl border-4 border-white rounded-lg  backdrop-blur-lg mb-6"
      >
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={mockup}
            alt={`Project mockup ${id}`}
            className="rounded-lg object-cover w-full max-h-[90vh] md:max-h-[70vh]"
          />
        </div>

        {/* Content */}
        <div className="mt-6">
          <div className="mb-4 space-y-1">
            <h3 className="text-lg md:text-3xl font-semibold">{title}</h3>
            <p className="text-sm md:text-base">{desc}</p>
          </div>

          {/* Tech Stack & Button */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="font-semibold">TechStack:</span>
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="badge bg-[#11f7d5] border-0 px-3 py-1 text-sm"
                >
                  {tech}
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="size-24 md:size-28 rounded-full content-center">
              <a
                href={detailsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center border border-[#11f7d5] 
                         rounded-full size-24 md:size-28 overflow-hidden text-[#11f7d5] 
                         transition-all duration-300 hover:text-[#071e1f]
                         before:absolute before:inset-0 before:bg-[#11f7d5] before:rounded-full
                         before:scale-0 before:opacity-0 before:transition-transform before:duration-300 
                         hover:before:scale-100 hover:before:opacity-100 text-sm md:text-base"
              >
                <span className="relative ">
                  View Details{" "}
                  <GoArrowUpRight className="text-xl md:text-3xl justify-self-center" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Project;
