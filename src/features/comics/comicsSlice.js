import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../api/fetch";
export const comicsSlice = createSlice({
  name: "comics",
  initialState: {
    comicsData: [],
    charactersData: [],
    selectedItem: {},
    previewItems: [],
  },

  reducers: {
    fetchItem: {
      reducer(state, action) {
        const { payload } = action;
        state.selectedItem = payload;
        console.log("FETCHED COMICS STATE: ", state.selectedItem);
        console.log(state.charactersData.data);
        // return state;
      },
    },

    fetchPreview: {
      reducer(state, action) {
        const { payload } = action;
        console.log("PAYLOAD: ", payload);
        let items = [];

        for (let idx = 0; idx < 4; idx++) {
          items.push(payload[idx]);
        }

        console.log((state.previewItems = items));
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
export const fetchComics = createAsyncThunk(
  "comics/fetchComics",
  async (term) => {
    try {
      // Call to the site for info
      const response = await fetchData(term);

      // Returns the data to the 'extraReducers' for processing
      return response;
    } catch (error) {
      console.log("Error fetching comics: ", error);
    }
  }
);

// Initial call for fetching character information from the Marvel website.
export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async (term) => {
    try {
      // Call to the site for info
      const response = await fetchData(term);

      // Returns the data to the 'extraReducers' for processing
      return response;
    } catch (error) {
      console.log("Error fetching characters: ", error);
    }
  }
);

export const { fetchItem, fetchPreview } = comicsSlice.actions;
export default comicsSlice.reducer;
