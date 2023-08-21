import React from "react";
import { nanoid } from "@reduxjs/toolkit";

import AnimatedPage from "../../AnimatedPage";

import {
  CharactersPageContainer,
  CharactersPageWrapper,
} from "./characters-page.styles";
import Card from "../../components/card/card.component";

const CharactersPage = () => {
  // Fetch characters from API call
  // const allCharacters = useSelector((state) => state.comics.charactersData);

  // Parse the characters from the fetched results (API)
  // const characters = allCharacters;

  // Fetch characters from local storage (while testing)
  const allCharacters = JSON.parse(localStorage.getItem("characters"));

  // Parse the characters from the fetched results (local storage testing)
  const characters = allCharacters.data.results;

  for (let name in characters) {
    console.log("Name: ", characters[name].name);
  }

  return (
    <AnimatedPage>
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
    </AnimatedPage>
  );
};

export default CharactersPage;
