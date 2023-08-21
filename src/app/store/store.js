import comicsReducer from '../../features/comics/comicsSlice';
import charactersReducer from '../../features/characters/charactersSlice';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
	reducer: {
		comics: comicsReducer,
		characters: charactersReducer,
	},
});
