import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addSuggestedMovies } from "../utils/movieSuggestionSlice";

const useMovieByGenre = () => {
  const movieGenres = useSelector((store) => store.genreList.genreList);
  const dispatch = useDispatch();

  const getMoviesByGenre = async () => {
    if (!movieGenres) return;
    // console.log("abc"+process.env.REACT_APP_MOVIE_BY_GENRE);
    const data = await fetch(
      process.env.REACT_APP_MOVIE_BY_GENRE + movieGenres
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addSuggestedMovies(json.results));
  };

  useEffect(() => {
    getMoviesByGenre();
  }, [movieGenres]);
};

export default useMovieByGenre;
