import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";


import {
  CharactersPageContainer,
  CharactersPageWrapper,
} from "./characters-page.styles";
import Card from "../../components/card/card.component";

const CharactersPage = () => {
  // Fetch characters from API call
  const allCharacters = useSelector((state) => state.comics.charactersData);

  // Fetch characters from local storage (while testing)
  // const allCharacters = JSON.parse(localStorage.getItem("characters"));

  // Parse the characters from the fetched results
  const characters = allCharacters;

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
