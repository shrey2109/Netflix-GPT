import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addSuggestedMovies } from '../utils';

const useMovieByGenre = () => {
  const movieGenres = useSelector((store) => store.genreList.genreList);
  const dispatch = useDispatch();

  const getMoviesByGenre = async () => {
    if (!movieGenres) return;
    const data = await fetch(
      process.env.REACT_APP_MOVIE_BY_GENRE + movieGenres
    );
    const json = await data.json();
    dispatch(addSuggestedMovies(json.results));
  };

  useEffect(() => {
    getMoviesByGenre();
  }, [movieGenres]);
};

export default useMovieByGenre;
