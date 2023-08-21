import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchComics, fetchCharacters } from "./features/comics/comicsSlice";

import "./App.css";
import Header from "./components/header/header.component";
import CharactersPage from "./routes/Characters/characters-page.component";
import ComicsPage from "./routes/Comics/comics-page.component";
import GamesPage from "./routes/Games/games-page.component";
import HomePage from "./routes/Home/home-page.component";
import MoviesPage from "./routes/Movies/movies-page.component";
import DetailsPage from "./routes/Character Details/details-page.component";
import ScrollToTop from "./ScrollToTop";

function App() {
  // Initial call to retrieve comics from the Marvel website
  const dispatch = useDispatch();

  /**
   * TESTING FROM REDUX
   */
  // const comics = useSelector((state) => state.comics.comicsData);
  // const characters = useSelector((state) => state.comics.charactersData);
  // console.log("COMICS FROM APP: ", comics);
  // console.log("CHARACTERS FROM APP: ", characters);

  /**
   * TESTING FROM LOCAL STORAGE
   */
  // console.log(
  //   "COMICS FROM LOCAL STORAGE: ",
  //   JSON.parse(localStorage.getItem("comics"))
  // );

  // console.log(
  //   "CHARACTERS FROM LOCAL STORAGE: ",
  //   JSON.parse(localStorage.getItem("characters"))
  // );

  useEffect(() => {
    dispatch(fetchComics("comics"));
    dispatch(fetchCharacters("characters"));
  }, [dispatch]);

  return (
    <div className='App'>
      <span className='headerSection'>
        <Header />
      </span>
      <div className='appContainer'>
        <Routes>
          <Route index path='/' element={<HomePage />} />
          <Route path='/comics' element={<ComicsPage />} />
          <Route path='/characters' element={<CharactersPage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/games' element={<GamesPage />} />
          <Route path='characters/:name' element={<DetailsPage />} />
        </Routes>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default App;
