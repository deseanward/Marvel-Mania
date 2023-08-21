import React, { useState, useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

import { fetchPreview } from "../../features/comics/comicsSlice";

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
  // Redux calls for selected category
  const dispatch = useDispatch();
  const previews = useSelector((state) => state.comics.previewItems);
  console.log(previews);

  // Pull items from Redux/API call
  const items = useSelector((state) => state.comics.charactersData);

  // Pull items from local storage
  // const items = JSON.parse(localStorage.getItem("characters"));

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
    dispatch(fetchPreview(items));
  };

  const handleClick = (e) => {
    e.target.classList.toggle("inactive");
    handleHidePreview();
    e.target.classList.toggle("inactive");
  };

  useEffect(
    (category) => {
      const getPreview = () => {
        dispatch(fetchPreview(items));

        //For testing with local storage
        // dispatch(fetchPreview(items, category));
      };

      getPreview();
    },
    [dispatch, hoveredCategory]
  );

  return (
    <NavContainer onMouseLeave={() => handleHidePreview()}>
      <NavContent>
        {categories.map((category) => {
          console.log("CATEGORY FROM NAV: ", category);
          return (
            <>
              <NavItem
                value={category}
                to={`/${category}`}
                onMouseEnter={() => handleShowPreview(category)}
                onClick={handleClick}
              >
                <span
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

      <ArrowContainer className='arrow' show={expand}>
        <VscTriangleUp />
      </ArrowContainer>
      <CategoryDropdown expand={expand} hovered={hoveredCategory}>
        <PreviewContainer>
          {categories.map((category) => {
            const idx = categories.indexOf(category);
            return (
              <PreviewCard
                key={nanoid()}
                idx={idx}
                text={hoveredCategory}
                category={hoveredCategory}
                show={expand}
                close={handleClick}
              />
            );
          })}
        </PreviewContainer>
      </CategoryDropdown>
    </NavContainer>
  );
};

export default Navigation;
