import React, { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import {
  PreviewCardContainer,
  PreviewCardWrapper,
  // PreviewTitleName,
} from "./preview-card.styles";

const PreviewCard = ({ category, show, idx, close }) => {
  if (category) category = category.toLowerCase();

  const variants = {
    hidden: {
      visibility: "hidden",
      opacity: 0,
      scale: 0,
      transition: { duration: 0.3, delay: 0.2 },
    },
    visible: {
      visibility: "visible",
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, delay: 0.2 },
    },
    exit: {
      visibility: "hidden",
      opacity: 0,
      scale: 0,
      transition: { duration: 0.2 },
    },
  };

  // const previews = useSelector((state) => state.comics.previewItems);
  const preParse = JSON.parse(localStorage.getItem("characters"));
  const previews = preParse.data.results;
  

  const { name } = previews[idx];

  return (
    <PreviewCardWrapper>
      <PreviewCardContainer
        key={nanoid()}
        variants={variants}
        initial='hidden'
        animate='visible'
        exit='exit'
        show={show}
      >
        {previews ? (
          <div id='button-pic' className='h-[180px] flex flex-col items-center hover:mt-[-1em]'>
            <div>
              <span id='name'>{name}</span>
            </div>
            <img
              className='rounded-lg object-cover border-2 border-black shadow-lg shadow-black'
              style={{ height: 200, width: 200 }}
              src={`${previews[idx].thumbnail.path}.${previews[idx].thumbnail.extension}`}
              alt='thumbnail'
            />
            <div
              id='button-container'
              className='relative top-[-3em] text-white'
            >
              <Link
                id='btn-link'
                className='p-2 rounded my-4 bg-[#AC3129] hover:bg-[#A5A4A4] hover:text-[#AC3129] shadow shadow-[gray]'
                to={`/${category}/${previews[idx].name}`}
                onClick={close}
              >
                View Character
              </Link>
            </div>
          </div>
        ) : (
          <h2>Loading</h2>
        )}
      </PreviewCardContainer>
    </PreviewCardWrapper>
  );
};

export default PreviewCard;
