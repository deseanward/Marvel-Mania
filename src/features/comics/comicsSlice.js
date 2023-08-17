import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const comicsSlice = createSlice({
	name: 'comics',
	initialState: [],

	reducers: {
		getComics: {
			reducer(state, action) {
				return state;
			},
		},
	},

    // Processing of data returned from the Marvel website
    extraReducers(builder) {
        // Returned comics data
		builder.addCase(fetchComics.fulfilled, (state, action) => {
			// Merge the formatted posts into the state
			return state = action.payload;
		});
	},
});

// Initial call for fetching information from the Marvel website.
export const fetchComics = createAsyncThunk('comics/fetchComics', async () => {
    try {
        
        // Call to the site for info
		const req = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await req.json();
        
        // Returns the data to the 'extraReducers' for processing
		return data;
	} catch (error) {
		console.log('Error fetching comics: ', error);
	}
});

export const { getComics } = comicsSlice.actions;
export default comicsSlice.reducer;
