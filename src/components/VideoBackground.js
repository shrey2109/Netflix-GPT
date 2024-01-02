import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movie_id }) => {
    // fetch trailer video and update the store

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movie_id);

  return (
    <div className="">
      <iframe
      className="w-full aspect-video"
        // src={"https://www.youtube.com/embed/" + trailerVideo?.key+"?&autoplay=1&mute=1&loop=1&controls=0 "}
        src={"https://www.youtube.com/embed/" + trailerVideo?.key+"?playlist="+trailerVideo?.key+"&loop=1&autoplay=1&controls=1&showinfo=0&mute=1"}
        // src={"https://www.youtube.com/embed/IlAfX5X_zkc?playlist=IlAfX5X_zkc&loop=1&autoplay=1&controls=1&showinfo=0&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
