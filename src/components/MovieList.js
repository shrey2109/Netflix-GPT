import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="mx-12">
      <h1 className="text-3xl text-white mb-1">{title}</h1>
      <div className="flex overflow-x-auto">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} movieId={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
