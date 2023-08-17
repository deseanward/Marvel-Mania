import comicsReducer from '../../features/comics/comicsSlice';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
	reducer: {
		comics: comicsReducer,
	},
});
