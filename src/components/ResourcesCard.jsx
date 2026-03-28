import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";

const ResourcesCard = ({ className, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.03, y: -4, boxShadow: "0px 12px 24px rgba(0,0,0,0.12)" }}
      className={`h-full px-3 py-2 text-start rounded-lg shadow-lg flex items-start gap-4 cursor-pointer justify-between ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default ResourcesCard;