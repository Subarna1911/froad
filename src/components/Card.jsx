import React from "react";
import { motion } from "motion/react";


const Card = ({ card }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      className="bg-dark-bg hover:bg-gray-900 cursor-pointer text-white p-7 w-[320px] md:w-105 shrink-0 h-full shadow-2xl rounded-[18px] flex flex-col gap-6"
    >
      {/* Title + Note */}
      <div className="flex justify-between items-center gap-4">
        <h1 className="text-xl font-bold">{card.title}</h1>
        <span className="text-secondary text-sm shrink-0">{card.note}</span>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>

      {/* Topics */}
      {card.topics?.length > 0 && (
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Topics</p>
          <div className="grid grid-cols-2 gap-2">
            {card.topics.map((item, index) => (
              <p
                key={index}
                className="bg-gray-800 text-sm rounded-lg px-3 py-2 w-full"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      )}

    </motion.div>
  );
};

export default Card;