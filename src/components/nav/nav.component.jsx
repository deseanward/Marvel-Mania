import React, { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

import CategoryDropdown from "../category-dropdown/category-dropdown.component";

import { VscTriangleUp } from "react-icons/vsc";

import {
  ArrowContainer,
  NavContainer,
  NavContent,
  NavItem,
  PreviewContainer,
} from "./nav.styles";

import PreviewCard from "../preview-card/preview-card.component";

const Navigation = () => {
  // Navigation Categories
  const categories = ["comics", "characters", "movies", "games"];

  // Cache of the hovered navigation category
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const [expand, setExpand] = useState("false");

  // Display the navigation dropdown
  const handleShowPreview = (category) => {
    setHoveredCategory(category.toUpperCase());
    setExpand("true");
  };

  // Hide the navigation dropdown
  const handleHidePreview = () => {
    setHoveredCategory(null);
    setExpand("false");
  };

  const updateCategory = (category) => {
    console.log("PREVIEWING: ", category);
  };

  return (
    <NavContainer onMouseLeave={() => handleHidePreview()}>
      <NavContent>
        {categories.map((category) => {
          return (
            <>
              <NavItem
                key={nanoid()}
                value={category}
                to={`/${category}`}
                onMouseEnter={() => handleShowPreview(category)}
              >
                <span
                  key={nanoid()}
                  className='hover:shadow-xl shadow-red-900'
                  onMouseEnter={() => updateCategory(category)}
                >
                  {category.toUpperCase()}
                </span>
              </NavItem>
            </>
          );
        })}
      </NavContent>
      <ArrowContainer key={nanoid()} className='arrow' show={expand}>
        <VscTriangleUp />
      </ArrowContainer>
      <CategoryDropdown expand={expand} hovered={hoveredCategory}>
        {hoveredCategory}
        <PreviewContainer>
          {categories.map((category) => {
            return (
              <PreviewCard
                key={nanoid()}
                preview={category}
                text={hoveredCategory}
                show={expand}
              />
            );
          })}
        </PreviewContainer>
      </CategoryDropdown>
    </NavContainer>
  );
};

export default Navigation;
