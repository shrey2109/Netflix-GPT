import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ posterPath, movieId }) => {
  // console.log(movieDetails);
  return (
    <Link key={movieId} to={"/movieDetail/" + movieId} className="w-44 m-1.5">
      <img alt="movieposter" src={IMG_CDN_URL + posterPath}></img>
    </Link>
  );
};

export default MovieCard;
