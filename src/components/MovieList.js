import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="md:mx-10">
      <h1 className="text-lg md:text-3xl text-white mb-1">{title}</h1>
      <div className="flex overflow-x-auto">
        <div className="flex">
          {movies?.map((movie) => (
            movie?.poster_path && <MovieCard key={movie.id} posterPath={movie?.poster_path} movieId={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
