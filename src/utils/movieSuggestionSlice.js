import { createSlice } from "@reduxjs/toolkit";

const movieSuggestionSlice = createSlice({
  // name: "movieSuggestion",
  name: "genreList",
  initialState: {
    genreList: null,
    movieList: null,
  },
  reducers: {
    addGenre: (state, action) => {
      state.genreList = action.payload;
    },
    addSuggestedMovies: (state, action) => {
      state.movieList = action.payload;
    },
  },
});

export const { addGenre, addSuggestedMovies } = movieSuggestionSlice.actions;

export default movieSuggestionSlice.reducer;
