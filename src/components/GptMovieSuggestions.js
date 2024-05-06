import React from 'react';
import { useDispatch } from 'react-redux';

import { MOVIE_GENRE_LIST, addGenre } from '../utils';
import { SuggestedMovie } from '.';

export const GptMovieSuggestions = () => {
  const dispatch = useDispatch();

  const handleMovieGenre = (id) => {
    dispatch(addGenre(id));
  };

  return (
    <div className="mx-3 md:mx-10 my-1 md:px-12 bg-black rounded-3xl bg-opacity-50">
      <SuggestedMovie />
      {MOVIE_GENRE_LIST.genres.map((genre) => (
        <button
          key={genre.id}
          className="m-2 md:m-5 w-28 md:w-56 h-16 rounded-lg border-[2.5px] border-purple-300 text-purple-500 font-semibold text-md md:text-lg bg-opacity-30 hover:text-white hover:border-red-500"
          onClick={() => handleMovieGenre(genre.id)}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
};
