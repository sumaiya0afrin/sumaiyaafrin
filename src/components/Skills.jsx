import "react-circular-progressbar/dist/styles.css";
import dot from "../assets/dot.gif";

import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import javascript from "../assets/skills/js.png";
import tailwind from "../assets/skills/tailwind.png";
import bootstrap from "../assets/skills/bootstrap.png";
import react from "../assets/skills/react.png";
import node from "../assets/skills/node.png";
import mongodb from "../assets/skills/MongoDB.png";
import firebase from "../assets/skills/firebase.png";
import SectionTitle from "./SectionTitle";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 }); // Triggers only when 50% visible
  const techStack = [
    { icon: html, label: "html" },
    { icon: css, label: "css" },
    { icon: javascript, label: "javascript" },
    { icon: bootstrap, label: "bootstrap" },
    { icon: tailwind, label: "tailwind" },
    { icon: react, label: "react" },
    { icon: node, label: "nodejs" },
    { icon: mongodb, label: "mongodb" },
    { icon: firebase, label: "firebase" },
  ];
  return (
    <section>
      <div className="px-6">
        <SectionTitle title="my skills" image={dot} />

        <motion.div
          ref={ref}
          initial={{ y: 25, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}} // Animates only when in view
          transition={{ duration: 1, ease: "easeInOut" }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {techStack.map((tech, idx) => (
              <div key={idx} className="group">
                <div className="text-center justify-items-center w-full p-8 rounded-3xl space-y-3 md:space-y-8  uppercase group-hover:opacity-100 transition-all duration-500 shadow-xl">
                  <img
                    src={tech.icon}
                    alt=""
                    className="w-10 md:w-16 grayscale-75 group-hover:grayscale-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"
                  />
                  <h4 className="md:text-xl">{tech.label}</h4>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
