import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchComics } from "../../features/comics/comicsSlice";

import { HomePageContainer } from "./home-page.styles";

const HomePage = () => {

  return (
    <HomePageContainer>
      <h1>Home</h1>
    </HomePageContainer>
  );
};

export default HomePage;
