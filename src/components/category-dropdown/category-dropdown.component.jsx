import React from "react";
import { CategoryDropdownContainer } from "./category-dropdown.styles";

import { AnimatePresence } from "framer-motion";
const CategoryDropdown = ({ children, expand, hovered }) => {
  const show = expand;
  const category = hovered;

  return (
    <AnimatePresence mode='wait'>
      <CategoryDropdownContainer show={show} hovered={category}>
        <div className='border-6 border-gray-400'>
          <h2 className='text-2xl pl-2 mb-4 shadow-md shadow-gray-700'>Featured Characters</h2>
          {children}
        </div>
      </CategoryDropdownContainer>
    </AnimatePresence>
  );
};

export default CategoryDropdown;
