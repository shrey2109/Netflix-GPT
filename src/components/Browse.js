import React from "react";
import Header from "./Header";
import useMoviesData from "../hooks/useMoviesData";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useMoviesData();

  return (
    <div>
      <Header />
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )
      {/* } */}
    </div>
  );
};

export default Browse;
