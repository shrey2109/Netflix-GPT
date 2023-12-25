import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
import movieListReducer from "./movieSuggestionSlice";
import simpleSearchReducer from "./simpleSearchSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
    genreList: movieListReducer,
    simpleSearch: simpleSearchReducer,
  },
});

export default appStore;
