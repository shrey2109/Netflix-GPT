import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ posterPath, movieId }) => {
  // console.log(movieDetails);
  return (
    <Link key={movieId} to={"/movieDetail/" + movieId} className="w-28 md:w-40 m-1.5 hover:scale-105">
      <img alt="movieposter" src={IMG_CDN_URL + posterPath}></img>
    </Link>
  );
};

export default MovieCard;
