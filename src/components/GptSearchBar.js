import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { MOVIE_GENRE_LIST } from "../utils/constants";
import { addGenre } from "../utils/movieSuggestionSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  //! CODE FOR GPT SEARCH.
  // const handleGptSearchClick = async () => {
  //   console.log(searchText.current.value);
  //   // Make an API Call to gpt and GPT movie result

  //   const gptQuery =
  //     "Act as a Movie recommendation system and suggest some movies for the query" +
  //     searchText.current.value +
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
    console.log(searchText.current.value.split(","));
    const genreNameList = searchText.current.value.split(",");
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
    console.log(newArray.join(","));

    const data = await fetch(
      process.env.REACT_APP_MOVIE_BY_GENRE + newArray.join(",")
    );
    const json = await data.json();

    console.log(json);
    dispatch(addGenre(newArray));
  };

  return (
    <div className="pt-32 flex justify-center">
      <form
        className="w-1/2 m-6 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-2 m-3 rounded-sm col-span-9 h-12 text-xl"
        ></input>
        <button
          className="p-2 m-3 text-white bg-purple-600 rounded-sm col-span-3 font-medium text-xl"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
