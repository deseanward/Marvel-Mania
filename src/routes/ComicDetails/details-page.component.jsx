import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import AnimatedPage from "../../AnimatedPage";

import {
  DetailsPageContainer,
  DetailsPageWrapper,
} from "./details-page.styles";
import Details from "../../components/details/details.component";

const ComicsDetailsPage = () => {
  const allComics = JSON.parse(localStorage.getItem("comics"));
  console.log(allComics);

  const param = useParams();
  console.log(param);

  const comics = allComics.data.results;
  let selected;

  for (let comic in comics) {
    console.log(param.id === comics[comic].id);
    if (param.id === comics[comic].id) selected = comics[comic];
  }
  console.log(selected);

  return (
    <AnimatedPage>
      <DetailsPageWrapper className='page'>
        <DetailsPageContainer>
          <Details selected={selected} />
        </DetailsPageContainer>
      </DetailsPageWrapper>
    </AnimatedPage>
  );
};

export default ComicsDetailsPage;
