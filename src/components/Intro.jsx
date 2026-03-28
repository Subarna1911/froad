import React from "react";
import Container from "../components/Container";
import Computer from "../assets/computerbg.png";
import secbg from "../assets/secbg.webp";
import MiniButton from "../components/MiniButton";
import mic from "../assets/micbg.png";
import { ChevronLeft, ChevronRight, Mouse } from "lucide-react";

const Intro = () => {
  return (
    <div className="relative w-full h-screen flex items-center">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-position-[center_top]"
        style={{ backgroundImage: `url(${secbg})` }}
      />

      {/* Content */}
      <div className="relative w-full">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

            {/* Left Image */}
            <div className="md:col-span-4 flex justify-center order-1 md:order-0">
              <img
                className="w-48 sm:w-56 md:w-full"
                src={Computer}
                alt="computerlogo"
              />
            </div>

            {/* Right Content */}
            <div className="md:col-span-8 relative px-4 sm:px-6 md:px-8 py-6 md:py-8 space-y-4 md:space-y-6 text-center md:text-left">

              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
                Become a Frontend Developer
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-gray-700">
                A complete roadmap for freshers and aspiring developers.
                Learn HTML, CSS, JavaScript, React, and modern tools —
                step by step.
              </p>

              <MiniButton className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-sm sm:text-base">
                <ChevronLeft size={20} />
                <span>/</span>
                <ChevronRight size={20} />
                Your Journey Starts Here
                <Mouse className="animate-bounce" size={20} />
              </MiniButton>

              {/* Mic */}
              <img
                className="hidden md:block w-32 lg:w-40 absolute right-0 bottom-0 translate-x-4 translate-y-4 pointer-events-none"
                src={mic}
                alt="mic logo"
              />
            </div>

          </div>
        </Container>
      </div>
    </div>
  );
};

export default Intro;