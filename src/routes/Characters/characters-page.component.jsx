import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import {
  CharactersPageContainer,
  CharactersPageWrapper,
} from "./characters-page.styles";
import Card from "../../components/card/card.component";

const CharactersPage = () => {
  // const characters = useSelector((state) => state.comics.charactersData);
  const allCharacters = JSON.parse(localStorage.getItem("characters"));
  // console.log("FROM CHARACTERS PAGE: ", allCharacters.data.results[9].name);

  const characters = allCharacters.data.results;
  for (let name in characters) {
    console.log("Name: ", characters[name].name);
  }

  return (
    <CharactersPageWrapper className='page'>
      <CharactersPageContainer>
        {characters ? (
          characters.map((character) => {
            return <Card key={nanoid()} item={character} />;
          })
        ) : (
          <h2>Loading Characters</h2>
        )}
      </CharactersPageContainer>
    </CharactersPageWrapper>
  );
};

export default CharactersPage;
