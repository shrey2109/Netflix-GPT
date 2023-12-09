import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-20 flex justify-center">
      <form className="w-1/2 m-6 bg-black grid grid-cols-12">
        <input
          type="text"
          placeholder="What would you like to watch today?"
          className="p-2 m-3 rounded-sm col-span-9"
        ></input>
        <button className="p-2 m-3 text-white bg-purple-600 rounded-sm col-span-3">Ask GPT</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
