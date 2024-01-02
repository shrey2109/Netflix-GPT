import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="md:pt-32 absolute text-white w-full aspect-video bg-gradient-to-r from-black">
      <div className="m-12">
        <h1 className="text-md md:text-5xl font-bold w-1/2">{title}</h1>
        <p className="hidden md:inline-block py-6 text-lg w-1/4 ">{overview}</p>
        <div>
          <button className="m-2 p-1.5 px-3 md:p-3 md:w-32 bg-white text-black rounded-sm font-bold hover:text-red-500">
            ▷ Play
          </button>
          <button className="hidden md:inline-block m-2 p-1 px-2 md:p-3 bg-gray-500 bg-opacity-60 md:w-44 rounded-sm text-white font-medium hover:bg-black">
            ① More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
