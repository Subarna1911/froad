import React from "react";
import HorizontalScroll from "../animaton/HorizontalScroll";
import Card from "../components/Card";
import graybg from "../assets/graybg.webp";
import smileybg from "../assets/smileybg.png";
import { motion } from "motion/react";
import { cardsData } from '../utils/constant.js';


const Slider = () => {
  const scrollEnd = `-${cardsData.length * 320}px`; // auto calculate based on card count

  return (
    <div
      className="w-full bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${graybg})` }}
    >
      <HorizontalScroll height="200vh" scrollEnd={scrollEnd}>
        <div className="grid grid-cols-12 items-center gap-5">

          {/* Left text */}
          <div className="col-span-4 shrink-0">
            <div className="flex items-center gap-3">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2">
                The Roadmap
              </h1>
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                className="scale-x-[-1] w-10 h-10 cursor-pointer"
                src={smileybg}
                alt="smileybg"
              />
            </div>
            <p className="leading-6">
              Follow these steps in order. Each builds on the previous one.
              Don't rush — consistency beats speed.
            </p>
          </div>

          {/* Cards */}
          <div className="col-span-8 flex md:gap-8 gap-6">
            {cardsData.map((card) => (
              <div key={card.id}>
                <Card card={card} />
              </div>
            ))}
          </div>

        </div>
      </HorizontalScroll>
     
    </div>
   

  );
};
export default Slider;