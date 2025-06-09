import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import openai from "../utils/openai";

import { MOVIE_GENRE_LIST, lang, addGenre, addMovieName } from "../utils";
import { SimpleMovieSuggestions } from ".";

export const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const [searchText, setSearchText] = useState("");
  const gptSearchText = useRef(null);
  const dispatch = useDispatch();

  //! CODE FOR GPT SEARCH
  // const handleGptSearchClick = async () => {
  //   // Make an API Call to gpt and GPT movie result

  //   const gptQuery =
  //     "Act as a Movie recommendation system and suggest some movies for the query" +
  //     gptSearchText.current.value +
  //     "only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholey, Don, Golmaal, Koi Mil Gaya";

  //   const gptResults = await setTimeout(() => {
  //     openai.chat.completions.create({
  //       messages: [{ role: "user", content: gptQuery }],
  //       model: "gpt-3.5-turbo",
  //     });
  //   }, 3000);

  //   console.log(gptResults.choices);
  // };

  const handleGptSearchClick = async () => {
    const genreNameList = gptSearchText.current.value.split("+");
    const genreNumList = genreNameList.map((gn) => {
      const foundGenre = MOVIE_GENRE_LIST.genres.find(
        (genre) => genre.name.toLowerCase() === gn.trim().toLowerCase()
      );
      if (foundGenre) {
        return foundGenre.id;
      } else {
        return -1;
      }
    });

    const newArray = genreNumList.filter((item) => item !== -1);
    dispatch(addGenre(newArray));
  };

  const handleSimpleMovieSuggestion = (e) => {
    setSearchText(e.target.value);
    dispatch(addMovieName(searchText));
  };

  return (
    <div className="">
      <div className="pt-40 md:pt-28 mb-3 flex justify-center">
        <input
          value={searchText}
          onChange={handleSimpleMovieSuggestion}
          type="text"
          placeholder={lang[langKey].simpleSearchPlaceholder}
          className="p-2 m-2 mx-10 rounded-sm h-11 w-full md:w-[55%] text-md md:text-xl border-[3px] border-red-500 text-red-500"
        ></input>
      </div>

      <div className="flex justify-center">
        <SimpleMovieSuggestions />
      </div>

      <div className="pt-0 flex justify-center">
        <form
          className="w-full md:w-1/2 mb-3 bg-black grid grid-cols-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={gptSearchText}
            type="text"
            placeholder={lang[langKey].gptSearchPlaceholder}
            className="p-2 m-3 rounded-sm col-span-9 h-11 text-md md:text-xl"
          ></input>
          <button
            className="m-3 ml-0 text-white bg-purple-600 rounded-sm col-span-3 md:font-medium text-md md:text-xl hover:border-2 hover:bg-opacity-70"
            onClick={handleGptSearchClick}
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};
