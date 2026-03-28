import { useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import Sparkle from '../animaton/Sparkle';

const ITEMS = ["FrontEnd Mastery", "Learning From Scratch", "Filling The Gap", "Smart Learning"];

function wrap(min, max, v) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

export default function InfiniteScroll() {
  const x = useMotionValue(0);
  const [paused, setPaused] = useState(false);
  const ITEM_W = 350;
  const TOTAL = ITEMS.length * ITEM_W;

  useAnimationFrame((_, delta) => {
    if (paused) return;
    x.set(wrap(-TOTAL, 0, x.get() - (delta / 1000) * 90));
  });

  const all = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="flex items-center justify-center h-20 cursor-pointer bg-[#0A0A0A]  mb-20">
      <div
        className="w-full overflow-hidden relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div style={{ x }} className="flex py-2">
          {all.map((item, i) => (
            <div
              key={i}
              className="shrink-0 flex items-center gap-6 text-white text-lg font-semibold tracking-widest"
              style={{ width: ITEM_W }}
            >
              <p>{item}</p>
              <span className="text-yellow"><Sparkle/></span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}