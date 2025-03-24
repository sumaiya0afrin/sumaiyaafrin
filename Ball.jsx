import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Ball = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("pointermove", handlePointerMove);
    return () => document.removeEventListener("pointermove", handlePointerMove);
  }, []);
  return (
    <motion.div
      className="ball"
      animate={{
        x: position.x - 0, // Offset to center the ball
        y: position.y - 0,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
      style={{
        position: "fixed", // Ensures it doesn't affect layout
        top: 0,
        left: 0,
        width: "100px",
        height: "100px",
        backgroundColor: "#11f7d5",
        borderRadius: "50%",
        pointerEvents: "none", // Ensures it doesn't interfere with other elements
      }}
    />
  );
};

export default Ball;
