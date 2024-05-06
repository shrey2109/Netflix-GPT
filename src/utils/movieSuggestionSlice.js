import { createSlice } from '@reduxjs/toolkit';

const movieSuggestionSlice = createSlice({
  // name: "movieSuggestion",
  name: 'genreList',
  initialState: {
    genreList: null,
    movieList: null,
    movieName: '',
    movieListByName: null,
  },
  reducers: {
    addGenre: (state, action) => {
      state.genreList = action.payload;
    },
    addSuggestedMovies: (state, action) => {
      state.movieList = action.payload;
    },
    addMovieName: (state, action) => {
      state.movieName = action.payload;
    },
    addMovieListByName: (state, action) => {
      state.movieListByName = action.payload;
    },
  },
});

export const {
  addGenre,
  addSuggestedMovies,
  addMovieName,
  addMovieListByName,
} = movieSuggestionSlice.actions;

export default movieSuggestionSlice.reducer;
