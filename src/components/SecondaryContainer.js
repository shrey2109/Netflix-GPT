import React from 'react';
import { useSelector } from 'react-redux';

import { MovieList } from '.';

export const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="xl:-mt-[15%] relative z-20">
        {/* <div className="relative z-20"> */}
        <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} />
        <MovieList title={'Popular'} movies={movies.popularMovies} />
        <MovieList title={'Top Rated'} movies={movies.topRatedMovies} />
        <MovieList title={'Upcoming Movies'} movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};
