import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { API_OPTIONS } from "../utils";
import { Header, MovieList } from ".";

export const MovieDetail = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [similarMovieDetails, setSimilarMovieDetails] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieDetail();
  }, [movieId]);

  const fetchMovieDetail = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId,
      API_OPTIONS
    );
    const json = await data.json();
    setMovieDetails(json);

    const similardata = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/similar?page=1",
      API_OPTIONS
    );
    const similarjson = await similardata.json();
    setSimilarMovieDetails(similarjson?.results);
  };

  return (
    <div className="">
      <Header />
      <div className="">
        {movieDetails && (
          <img
            alt="movieBg"
            src={
              movieDetails.backdrop_path
                ? "https://image.tmdb.org/t/p/original/" +
                  movieDetails.backdrop_path
                : "https://thumbs.dreamstime.com/blog/2018/07/turn-your-favorite-photo-epic-movie-poster-26441-image109473373.jpg"
            }
            className="absolute -z-10 w-full h-screen object-cover"
          ></img>
        )}
      </div>
      <div className="pt-10 md:pt-20 text-white w-full h-screen aspect-video bg-gradient-to-r from-black to-70% ">
        <div className="m-12">
          <h1 className="md:text-5xl text-2xl font-bold w-1/2 md:w-5/12">
            {movieDetails.title}
          </h1>
          <div className="pt-6 md:text-lg">
            {movieDetails?.release_date?.slice(0, 4) + " • "}
            {Math.floor(movieDetails?.runtime / 60)}h{" "}
            {movieDetails?.runtime -
              Math.floor(movieDetails?.runtime / 60) * 60 +
              "m • "}
            {movieDetails?.spoken_languages
              ?.map((lang) => lang.english_name)
              .join(" | ")}
          </div>
          <p className="pt-3 text-[16px] lg:w-[50%] max-h-44 sm:max-h-full sm:overflow-visible overflow-auto text-ellipsis text-zinc-400">
            {movieDetails.overview}
          </p>

          <div className="py-2 md:text-lg">
            {movieDetails?.genres?.map((genre) => genre.name).join(" | ")}
          </div>
          <div>
            <button className="m-2 p-1.5 px-3 md:p-3 md:w-72 bg-white text-black rounded-sm font-bold md:text-lg">
              ▷ Play
            </button>
            <button className="hidden md:inline-block m-2 pt-1 pb-3.5 bg-gray-500 bg-opacity-60 w-14 rounded-md text-white font-semibold text-3xl">
              +
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black p-7">
        {similarMovieDetails.length > 0 && (
          <MovieList title={"More Like This"} movies={similarMovieDetails} />
        )}
      </div>
    </div>
  );
};
