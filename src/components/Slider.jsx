import { useRef, useState } from "react";
import { motion } from "motion/react";
import Card from "../components/Card";
import graybg from "../assets/graybg.webp";
import smileybg from "../assets/smileybg.png";
import { cardsData } from "../utils/constant.js";

const DRAG_THRESHOLD = 60;

const Slider = () => {
  const [index, setIndex] = useState(0);
  const dragStartX = useRef(0);
  const total = cardsData.length;

  // Infinite: wrap around both ends
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  // Duplicate cards: [...original, ...original] 
  const looped = [...cardsData, ...cardsData];

  return (
    <div
      className="w-full bg-center bg-no-repeat bg-cover py-12 px-6"
      style={{ backgroundImage: `url(${graybg})` }}
    >
      {/* Header — full width */}
      <div className="w-full mb-8 flex flex-col justify-center items-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            The Roadmap
          </h1>
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            className="scale-x-[-1] w-10 h-10 cursor-pointer"
            src={smileybg}
            alt="smiley"
          />

          
        </div>
         <p className="leading-6 max-w-xl text-center">
          Follow these steps in order. Each builds on the previous one.
          Don't rush — consistency beats speed.
        </p>
       
      </div>

      {/* Cards track */}
      <div className="overflow-hidden mb-5 py-10">
        <motion.div
          className="flex gap-6"
          animate={{ x: `calc(-${index * 100}% / 2.2)` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragStart={(_, info) => { dragStartX.current = info.point.x; }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -DRAG_THRESHOLD) next();
            else if (info.offset.x > DRAG_THRESHOLD) prev();
          }}
        >
          {looped.map((card, i) => (
            <div key={`${card.id}-${i}`} className="shrink-0">
              <Card card={card} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation row — arrows + dots */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="w-9 h-9 rounded-full border border-black/20 flex items-center justify-center text-sm hover:bg-black/5 transition-colors"
        >
          ←
        </button>
        
         <div className="flex gap-2">
          {cardsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-black" : "w-1.5 bg-black/25"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-9 h-9 rounded-full border border-black/20 flex items-center justify-center text-sm hover:bg-black/5 transition-colors"
        >
          →
        </button>

       
      </div>
    </div>
  );
};

export default Slider;