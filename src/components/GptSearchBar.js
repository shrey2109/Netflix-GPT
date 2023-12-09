import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang)
  return (
    <div className="pt-20 flex justify-center">
      <form className="w-1/2 m-6 bg-black grid grid-cols-12">
        <input
          type="text"
          placeholder = {lang[langKey].gptSearchPlaceholder}
          className="p-2 m-3 rounded-sm col-span-9"
        ></input>
        <button className="p-2 m-3 text-white bg-purple-600 rounded-sm col-span-3 font-medium"> {lang[langKey].search} </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
