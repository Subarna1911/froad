import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const HorizontalScrollCarousel = ({
  children,
  height    = "100vh",
  scrollEnd = "-70%",
  className = "",
}) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", scrollEnd]);

  return (
    <section
      ref={targetRef}
      className={`relative w-full ${className}`}
      style={{ height }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6 px-10 w-max">
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;