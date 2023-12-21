import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useMovieByGenre from "../hooks/useMoviesByGenre";
import MovieList from "./MovieList";

const SuggestedMovie = () => {
  useMovieByGenre();

  const suggestedMovies = useSelector((store) => store.genreList.movieList);

  return (
    <div>
      {suggestedMovies && (
        <div>
          <div className="">
            <div className="relative z-20 p-5">
              <MovieList title={"Suggested Movies"} movies={suggestedMovies} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuggestedMovie;