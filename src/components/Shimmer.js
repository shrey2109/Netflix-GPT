import React from "react";

const Shimmer = () => {
  const shimmerCards = [];
  for (let i = 0; i < 42; i++) {
    shimmerCards.push(
      <div key={i} className="h-96 w-72 md:h-64 md:w-44 bg-gray-600 m-7"></div>
    );
  }

  return (
    <div className="bg-black h-full p-7 box-border">
      <div className="h-64 md:h-96 w-full bg-gray-600"></div>
      <div className="flex flex-wrap">{shimmerCards}</div>;
    </div>
  );
};

export default Shimmer;
