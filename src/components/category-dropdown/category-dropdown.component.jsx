import React from "react";
import { CategoryDropdownContainer } from "./category-dropdown.styles";

const CategoryDropdown = ({ children, expand, hovered }) => {
  const show = expand;
  const category = hovered;

  return (
    <CategoryDropdownContainer show={show} hovered={category}>
      <div className='border-6 border-orange-400'>{children}</div>
    </CategoryDropdownContainer>
  );
};

export default CategoryDropdown;
