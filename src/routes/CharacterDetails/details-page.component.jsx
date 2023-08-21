import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import AnimatedPage from "../../AnimatedPage";

import {
  DetailsPageContainer,
  DetailsPageWrapper,
} from "./details-page.styles";
import CharacterDetails from "../../components/details/details.component";

const CharactersDetailsPage = () => {
  const allCharacters = JSON.parse(localStorage.getItem("characters"));

  const param = useParams();

  const characters = allCharacters.data.results;
  let selected;

  for (let name in characters) {
    if (param.name === characters[name].name) selected = characters[name];
  }
  console.log(selected.name);

  return (
    <AnimatedPage>
      <DetailsPageWrapper className='page'>
        <DetailsPageContainer>
          <CharacterDetails selected={selected} />
        </DetailsPageContainer>
      </DetailsPageWrapper>
    </AnimatedPage>
  );
};

export default CharactersDetailsPage;
