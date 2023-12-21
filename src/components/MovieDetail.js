import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_OPTIONS } from "../utils/constants";
import MovieList from "./MovieList";

const MovieDetail = () => {
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
    console.log(json);
    setMovieDetails(json);

    const similardata = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/similar?page=1",
      API_OPTIONS
    );
    const similarjson = await similardata.json();
    console.log(similarjson);
    setSimilarMovieDetails(similarjson?.results);
  };

  return (
    <div className="">
      <div className="">
        {movieDetails && (
          <img
            alt="movieBg"
            src={
              "https://image.tmdb.org/t/p/original/" +
              movieDetails.backdrop_path
            }
            className="absolute -z-10 w-full"
          ></img>
        )}
      </div>
      <div className="pt-20 text-white w-full aspect-video bg-gradient-to-r from-black to-70% ">
        <div className="m-12">
          <h1 className="text-5xl font-bold w-5/12">{movieDetails.title}</h1>
          <div className="pt-6 text-lg">
            {movieDetails?.release_date?.slice(0, 4) + " • "}
            {Math.floor(movieDetails?.runtime / 60)}h{" "}
            {movieDetails?.runtime -
              Math.floor(movieDetails?.runtime / 60) * 60 +
              "m • "}
            {movieDetails?.spoken_languages
              ?.map((lang) => lang.english_name)
              .join(" | ")}
          </div>
          <p className="pt-3 text-[16px] w-[30%] text-zinc-400">
            {movieDetails.overview}
          </p>

          <div className="py-2 text-lg">
            {movieDetails?.genres?.map((genre) => genre.name).join(" | ")}
          </div>
          <div>
            <button className="m-2 p-3 w-72 bg-white text-black rounded-sm font-bold text-lg">
              ▷ Play
            </button>
            <button className="m-2 pt-1 pb-3.5 bg-gray-500 bg-opacity-60 w-14 rounded-md text-white font-semibold text-3xl">
              +
            </button>
          </div>
        </div>
      </div>
      {/* <div className="bg-black text-white pr-6">
        <h1 className="text-3xl p-6">More Like This</h1>
      </div> */}
      <div className="bg-black p-7">
        {similarMovieDetails.length > 0 && (
          <MovieList title={"More Like This"} movies={similarMovieDetails} />
        )}
      </div>
    </div>
  );
};

export default MovieDetail;

//* poster, genres, original lang, overview, release date, title, vote average
//? popularity
