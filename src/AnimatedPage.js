import React from "react";
import { motion } from "framer-motion";

const AnimatedPage = ({ children }) => {
  const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <motion.div
      variants={animations}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ duration: 0.3, delay: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
