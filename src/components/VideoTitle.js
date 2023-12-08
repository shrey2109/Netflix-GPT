import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-32 absolute text-white w-full aspect-video bg-gradient-to-r from-black">
      <div className="m-12">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4 ">{overview}</p>
        <div>
          <button className="m-2 p-3 w-32 bg-white text-black rounded-sm font-bold">
            ▷ Play
          </button>
          <button className="m-2 p-3 bg-gray-500 bg-opacity-60 w-44 rounded-sm text-white font-semibold">
            ① More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
