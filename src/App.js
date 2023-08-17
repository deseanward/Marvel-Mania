import { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import Header from './components/header/header.component';
import Navigation from './components/nav/nav.component';
import CharactersPage from './routes/Characters/characters-page.component';
import ComicsPage from './routes/Comics/comics-page.component';
import GamesPage from './routes/Games/games-page.component';
import HomePage from './routes/Home/home-page.component';
import MoviesPage from './routes/Movies/movies-page.component';

import { fetchData } from './api/fetch';
import { getComics, fetchComics } from './features/comics/comicsSlice';

function App() {
	const dispatch = useDispatch();

	// Initial call to retrieve comics from the Marvel website
	useEffect(() => {
		try {
			dispatch(fetchComics());
		} catch (error) {
			console.log('Error fetching comics.', error);
		}
	}, []);

	const comics = useSelector(state => state.comics);
	console.log('STATE: ', comics);


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
