import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import {
  DetailsPageContainer,
  DetailsPageWrapper,
} from "./details-page.styles";
import Card from "../../components/card/card.component";
import Details from "../../components/details/details.component";

const DetailsPage = () => {
  const allCharacters = JSON.parse(localStorage.getItem("characters"));

  const param = useParams();

  const characters = allCharacters.data.results;
  let selected;

  for (let name in characters) {
    if (param.name === characters[name].name) selected = characters[name];
  }
  console.log(selected.name);

  
  return (
    <DetailsPageWrapper className='page'>
      <DetailsPageContainer>
        <Details selected={selected} />
      </DetailsPageContainer>
    </DetailsPageWrapper>
  );
};

export default DetailsPage;
