import CountUp from "react-countup";
import { FaCode, FaLaptopCode } from "react-icons/fa6";
import { FiCoffee } from "react-icons/fi";
import { GrTechnology } from "react-icons/gr";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Counter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 }); // Triggers only when 50% visible

  const metrics = [
    {
      icon: <GrTechnology />,
      milestone: "Technologies Learned",
      count: 10,
      showPlus: false,
    },
    {
      icon: <FaLaptopCode />,
      milestone: "Complete Projects",
      count: 15,
      showPlus: true,
    },
    {
      icon: <FaCode />,
      milestone: "Lines of Code",
      count: 8000,
      showPlus: false,
    },
    {
      icon: <FiCoffee />,
      milestone: "Coffee Cups",
      count: 20,
      showPlus: false,
    },
  ];

  return (
    <section ref={ref} className="pb-[60px] md:pb-[75px] lg:pb-[100px]">
      <div className="px-6">
        <div className="max-w-6xl mx-auto openSans">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-items-center  space-y-4 md:space-y-0 gap-4 md:gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                initial={{ y: 25, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}} // Animates only when in view
                transition={{ duration: 1, ease: "easeInOut" }}
                key={index}
                className="shadow-2xl py-10 rounded-3xl w-full flex flex-col items-center"
              >
                <div className="relative flex items-center justify-center bg-[#071e1f] rounded-full w-14 h-14 text-[#11f7d5]">
                  <span className="text-3xl">{metric.icon}</span>
                </div>
                <p className="capitalize text-lg md:text-xl md:mt-2">
                  {metric.milestone}
                </p>
                <div className="flex items-center text-3xl md:text-4xl font-medium">
                  <CountUp
                    start={isInView ? 0 : null}
                    end={metric.count}
                    delay={0.5}
                  />
                  {metric.showPlus && <span className="ml-1">+</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
