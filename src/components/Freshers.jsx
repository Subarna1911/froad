import React, { useState } from "react";
import Container from "../components/Container";
import graybg from "../assets/graybg.webp";
import note from "../assets/notepad.png";
import { motion, AnimatePresence } from "framer-motion";
import { accordionData } from "../utils/constant.js";
import cake from "../assets/cake.webp";

const Freshers = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
       <div
      className="relative w-full  flex justify-center bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${graybg})` }}
    >
      <Container>
        <div className="w-full py-10 md:py-24">
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-2xl md:text-4xl font-bold text-center">
              Tips for Freshers
            </h1>
            <img
              src={cake}
              alt="cake"
              className="w-16 h-16 md:w-30 md:h-30"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left — Accordion */}
            <div className="col-span-1 space-y-3">
              {accordionData.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-lg overflow-hidden shadow-xl"
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex justify-between items-center cursor-pointer px-8 py-5 text-left font-semibold text-dark-bg bg-white/70 hover:bg-white/90 transition-colors"
                  >
                    <span>{item.title}</span>

                    {/* Animated rotate icon */}
                    <motion.span
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-xl"
                    >
                      +
                    </motion.span>
                  </button>

                  {/* Animated accordion content */}
                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 py-3 text-sm text-gray-600 bg-white/50">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right — Image */}
            <div className="col-span-1 flex items-center justify-center">
              <motion.img
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                src={note}
                alt="notepad"
                className="w-72 md:w-96 object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
    </>
 
  );
};

export default Freshers;
