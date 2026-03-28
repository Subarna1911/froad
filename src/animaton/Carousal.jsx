"use client";

import { motion } from "motion/react";
import amazon from "../assets/micbg.png"
import netflix from "../assets/micbg.png"
import brave from "../assets/micbg.png"
import nvidia from "../assets/micbg.png"
import meta from "../assets/micbg.png"
import google from "../assets/micbg.png"
import discord from "../assets/micbg.png"
import twitch from "../assets/micbg.png"
import x from "../assets/micbg.png"
import Image from "../assets/micbg.png"


export default function Carousel() {
  const logoImages = [
    {
      id: "1",
      src: netflix,
      alt: "Netflix logo",
      title: "Netflix",
    },
    {
      id: "2",
      src: amazon,
      alt: "Amazon logo",
      title: "Amazon",
    },
    {
      id: "3",
      src: brave,
      alt: "Brave Logo",
      title: "Brave",
    },
    {
      id: "4",
      src: nvidia,
      alt: "Nvidia logo",
      title: "Nvidia",
    },
    {
      id: "5",
      src: meta,
      alt: "Meta logo",
      title: "Meta",
    },
    {
      id: "6",
      src: google,
      alt: "Google",
      title: "Google",
    },
    {
      id: "7",
      src: discord,
      alt: "Discord Logo",
      title: "Discord",
    },
    {
      id: "8",
      src: twitch,
      alt: "Twitch Logo",
      title: "Twitch",
    },
    {
      id: "9",
      src: x,
      alt: "X logo",
      title: "X",
    },
  ];

  const duplicatedLogos = [...logoImages, ...logoImages];

  return (
    <div className=" w-full overflow-hidden">
      <motion.div className="relative w-full h-auto bg-neutral-900">
        <span className="absolute left-0 top-0 h-full w-30 bg-linear-to-r from-neutral-900 to-transparent z-20 pointer-events-none" />
        <span className="absolute right-0 top-0 h-full w-30 bg-linear-to-l from-neutral-900 to-transparent z-20 pointer-events-none" />
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
        >
          {duplicatedLogos.map((logo, i) => (
            <motion.div
              key={`${logo.id}-${i}`}
              className="p-12 overflow-hidden w-40 h-35 flex justify-center items-center bg-transparent"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                className="object-contain filter invert brightness-75 grayscale opacity-50"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
