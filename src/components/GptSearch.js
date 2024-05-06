import React from 'react';

import { BG_URL } from '../utils';
import { Header, GptMovieSuggestions, GptSearchBar } from '.';

const GptSearch = () => {
  return (
    <div>
      <Header />
      <div className="absolute -z-10 ">
        <img
          src={BG_URL}
          alt="background"
          className="brightness-50 fixed h-screen w-screen object-cover"
        ></img>
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
