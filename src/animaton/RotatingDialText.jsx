import React from "react";
import { motion } from "motion/react";

export default function RotatingDialText({ children, className = "" }) {
  const text       = React.Children.toArray(children).join("");
  const characters = text.split("");
  const radius     = 40;

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      className={`relative flex items-center justify-center z-10 ${className}`}
      style={{ width: radius * 2, height: radius * 2 }}
    >
      {characters.map((char, i) => {
        const rotation = (360 / characters.length) * i;
        return (
          <span
            key={i}
            className="absolute text-xl font-mono font-bold"
            style={{
              transform: `rotate(${rotation}deg) translateY(-${radius}px)`,
              transformOrigin: `0 ${radius}px`,
              left: "50%",
              top: "0",
              marginLeft: "-0.5ch",
            }}
          >
            {char}
          </span>
        );
      })}
    </motion.div>
  );
}