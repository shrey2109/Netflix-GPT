import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import MovieList from "./MovieList";
import { cacheResults } from "../utils/simpleSearchSlice";

const SimpleMovieSuggestions = () => {
  const movieName = useSelector((store) => store.genreList.movieName);
  // const [searchMovie, setSearchMovie] = useState([]);
  const [simpleMovieSuggestion, setSimpleMovieSuggestion] = useState([]);

  const simpleSearchCache = useSelector((store) => store.simpleSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    //! DEBOUNCING
    const timer = setTimeout(() => {
      // fetchMovieByName();

      if (simpleSearchCache[movieName]) {
        setSimpleMovieSuggestion(simpleSearchCache[movieName]);
      } else {
        fetchMovieByName();
      }
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [movieName]);

  const fetchMovieByName = async () => {
    // console.log("MOVIE NAME : " + movieName);
    const data = await fetch(
      //   "https://api.themoviedb.org/3/search/movie?query=munna%20bhai&include_adult=false&language=en-US&page=1",
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    setSimpleMovieSuggestion(json.results);

    //update cache
    dispatch(
      //! *See how we are storing this in out slice.
      cacheResults({
        [simpleMovieSuggestion]: json[1],
      })
    );
  };

  return (
    <div className="bg-black rounded-3xl bg-opacity-50 w-[95%]">
      {simpleMovieSuggestion.length > 1 && movieName.length > 0 && (
        <div className="relative z-20 p-5">
          <MovieList
            title={"Searching Suggestions"}
            movies={simpleMovieSuggestion}
          />
        </div>
      )}
    </div>
  );
};

export default SimpleMovieSuggestions;
