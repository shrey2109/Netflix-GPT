import React from 'react';

export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="md:pt-32 absolute text-white w-full aspect-video bg-gradient-to-r from-black">
      <div className="m-12">
        <h1 className="text-xl sm:text-4xl md:text-5xl font-bold md:w-1/2">
          {title}
        </h1>
        <p className="hidden lg:inline-block py-6 text-lg w-1/2">{overview}</p>
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
