import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    // <div className="h-screen bg-gradient-to-b from-purple-300">
    <div className="">
      <div className="absolute -z-10 ">
        <img src={BG_URL} alt="background" className="brightness-50 fixed"></img>
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
