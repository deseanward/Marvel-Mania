import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../api/fetch";
export const comicsSlice = createSlice({
  name: "comics",
  initialState: {
    comicsData: [],
    charactersData: []
  },

  reducers: {
    getComics: {
      reducer(state, action) {
        return state;
      },
    },
  },

  // Processing of data returned from the Marvel website
  extraReducers: (builder) => {
    // Returned comics data
    builder
    .addCase(fetchComics.fulfilled, (state, action) => {
      // Merge the formatted posts into the state
      state.comicsData = action.payload;
    })

    // Returned characters data
    .addCase(fetchCharacters.fulfilled, (state, action) => {
      // Merge the formatted posts into the state
      state.charactersData = action.payload;
    });
  },
});

// Initial call for fetching comics information from the Marvel website.
export const fetchComics = createAsyncThunk("comics/fetchComics", async (term) => {
  try {
    // Call to the site for info
    const response = await fetchData(term);
    
    // Returns the data to the 'extraReducers' for processing
    return response;
  } catch (error) {
    console.log("Error fetching comics: ", error);
  }
});


// Initial call for fetching character information from the Marvel website.
export const fetchCharacters = createAsyncThunk("characters/fetchCharacters", async (term) => {
  try {
    // Call to the site for info
    const response = await fetchData(term);

    // Returns the data to the 'extraReducers' for processing
    return response;
  } catch (error) {
    console.log("Error fetching characters: ", error);
  }
});

export const { getComics } = comicsSlice.actions;
export default comicsSlice.reducer;
