import React from "react";
import { nanoid } from "@reduxjs/toolkit";

import { ComicsPageContainer, ComicsPageWrapper } from "./comics-page.styles";
import ComicsCard from "../../components/comics-card/comics-card.component";

const ComicsPage = () => {
  // Fetch comics from API call
  // const allComics = useSelector((state) => state.comics.comicsData);

  // Parse the comics from the fetched results (API)
  // const comics = allComics;

  // Fetch characters from local storage (while testing)
  const allComics = JSON.parse(localStorage.getItem("comics"));

  // Parse the characters from the fetched results (local storage testing)
  const comics = allComics.data.results;

  for (let comic in comics) {
    console.log("Title: ", comics[comic].title);
  }

  return (
    <ComicsPageWrapper className='page'>
      <ComicsPageContainer>
        {comics ? (
          comics.map((comic) => {
            return <ComicsCard id={nanoid()} item={comic} />;
          })
        ) : (
          <h2>Loading Comics</h2>
        )}
      </ComicsPageContainer>
    </ComicsPageWrapper>
  );
};

export default ComicsPage;
