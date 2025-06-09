import React from "react";

import useMoviesData from "../hooks/useMoviesData";
import { Header, MainContainer, SecondaryContainer } from ".";

export const Browse = () => {
  useMoviesData();

  return (
    <div>
      <Header />
      <>
        <MainContainer />
        <SecondaryContainer />
      </>
    </div>
  );
};
