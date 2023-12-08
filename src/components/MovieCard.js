import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-44 m-1.5">
      <img alt="movieposter" src={IMG_CDN_URL + posterPath}></img>
    </div>
  );
};

export default MovieCard;
