import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchComics,
  fetchCharacters,
} from "./features/comics/comicsSlice";

import "./App.css";
import Header from "./components/header/header.component";
import Navigation from "./components/nav/nav.component";
import CharactersPage from "./routes/Characters/characters-page.component";
import ComicsPage from "./routes/Comics/comics-page.component";
import GamesPage from "./routes/Games/games-page.component";
import HomePage from "./routes/Home/home-page.component";
import MoviesPage from "./routes/Movies/movies-page.component";

function App() {
  // Initial call to retrieve comics from the Marvel website
  const dispatch = useDispatch();
  const comics = useSelector((state) => state.comics.comicsData);
  const characters = useSelector((state) => state.comics.charactersData);
  console.log(
    "COMICS FROM LOCAL STORAGE: ",
    JSON.parse(localStorage.getItem("comics"))
  );

  console.log(
    "CHARACTERS FROM LOCAL STORAGE: ",
    JSON.parse(localStorage.getItem("characters"))
  );

  console.log('COMICS FROM APP: ', comics)
  console.log('CHARACTERS FROM APP: ', characters)

  // useEffect(() => {
   
  //     dispatch(fetchComics("comics"));
  //     dispatch(fetchCharacters("characters"));
   
  // }, [dispatch]);

  return (
    <div className='App'>
      <span className='headerSection'>
        <Header />
      </span>
      <div className='appContainer'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/comics' element={<ComicsPage />} />
          <Route path='/characters' element={<CharactersPage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/games' element={<GamesPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
