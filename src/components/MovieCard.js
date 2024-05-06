import React from 'react';
import { Link } from 'react-router-dom';

import { IMG_CDN_URL } from '../utils';

export const MovieCard = ({ posterPath, movieId }) => {
  return (
    <Link key={movieId} to={'/movieDetail/' + movieId} className="w-28 md:w-40 m-1.5 hover:scale-105">
      <img alt="movieposter" src={IMG_CDN_URL + posterPath}></img>
    </Link>
  );
};
