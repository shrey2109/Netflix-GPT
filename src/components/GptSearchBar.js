import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an API Call to gpt and GPT movie result

    const gptQuery =
      "Act as a Movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      "only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholey, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await setTimeout(() => {
      openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
    }, 3000);

    console.log(gptResults.choices);
  };

  return (
    <div className="pt-20 flex justify-center">
      <form
        className="w-1/2 m-6 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-2 m-3 rounded-sm col-span-9"
        ></input>
        <button
          className="p-2 m-3 text-white bg-purple-600 rounded-sm col-span-3 font-medium"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
