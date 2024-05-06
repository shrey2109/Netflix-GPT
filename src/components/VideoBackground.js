import React from 'react';
import { useSelector } from 'react-redux';

import useMovieTrailer from '../hooks/useMovieTrailer';

export const VideoBackground = ({ movie_id }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movie_id);

  return (
    <div>
      <iframe
      className="w-full aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key+"?playlist="+trailerVideo?.key+"&loop=1&autoplay=1&controls=1&showinfo=0&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
