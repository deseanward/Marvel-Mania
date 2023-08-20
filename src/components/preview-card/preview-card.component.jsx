import React, { useEffect } from "react";


import { PreviewCardContainer } from "./preview-card.styles";
import { AnimatePresence } from "framer-motion";

const PreviewCard = ({ text, show, preview }) => {

  const variants = {
    hidden: { opacity: 0, scale: 0, transition: { duration: 0.3, delay: 0.3 } },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, delay: 0.3 },
    },
    exit: { opacity: 0, scale: 0, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      <PreviewCardContainer
        key={text}
        variants={variants}
        initial='hidden'
        animate='visible'
        exit='exit'
        show={show}
      >
        <h3>Image</h3>
        {text}
      </PreviewCardContainer>
    </AnimatePresence>
  );
};

export default PreviewCard;
