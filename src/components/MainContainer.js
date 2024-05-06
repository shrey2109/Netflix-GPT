import React from 'react';
import { useSelector } from 'react-redux';

import { VideoTitle, VideoBackground, Shimmer } from '.';

export const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return <Shimmer />;

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <>
      {!movies ? (
        <Shimmer />
      ) : (
        <div className="pt-24 bg-black md:pt-0">
          <VideoTitle title={original_title} overview={overview} />
          <VideoBackground movie_id={id} />
        </div>
      )}
    </>
  );
};
