import React from "react";
import Container from "../components/Container";
import star from "../assets/star.webp";
import { motion } from "motion/react";
import Sparkle from "../animaton/Sparkle.jsx";
import smily from "../assets/smily.webp";
import js from "../assets/js.png";
import RotatingDialText from "../animaton/RotatingDialText";

const Hero = () => {
  return (
    <div className="w-full" >
      <Container>
        <div className="flex flex-col items-center">
          <div className="relative flex items-center justify-center w-full ">
            {/* sparkle svg */}
            <Sparkle className="absolute text-yellow-400 left-0 bottom-0 w-14 h-14 sm:w-18 sm:h-18 md:w-24 md:h-24 md:-top-10 md:left-8 lg:left-30" />

            <h1 className="relative text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight sm:leading-snug md:leading-tight lg:leading-[1.2] text-center font-bold tracking-widest w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl px-8 sm:px-4">
              Master FrontEnd From Scratch to Expert
            </h1>

            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              className="hidden md:block absolute right-8 lg:right-50 bottom-2 scale-x-[-1] w-12 h-12 lg:w-auto lg:h-auto"
              src={star}
              alt="star"
            />

            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              className="absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 -top-8 sm:-top-12 md:-top-16 right-0 sm:right-2 md:right-16 lg:right-32 scale-x-[-1]"
              src={smily}
              alt="smily"
            />
          </div>
         
         {/* roate animation used */}
          <div className="mt-4 md:mt-6 relative w-fit">
            <img className=" md:w-full" src={js} alt="jslogo" />

            <RotatingDialText className="absolute -top-60">
              HTML • CSS • TAILWIND • REACT • 
            </RotatingDialText>
        
          </div>

        
        
        </div>
      </Container>
    </div>
  );
};

export default Hero;
