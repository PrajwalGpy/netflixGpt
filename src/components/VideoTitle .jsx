import React from "react";
import { FaPlay } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";

export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-20 pl-10 absolute w-screen aspect-video text-white bg-gradient-to-r from-black  flex flex-col items-start justify-center gap-2">
      <div>
        <h1 className=" md:pl-10 md:py-6 font-bold md:text-4xl">{title}</h1>
        <p className="hidden md:flex pl-10 w-2/5 text-sm font-light ">
          {overview}
        </p>
      </div>

      <div className="flex gap-2  md:pl-10 md:py-6">
        <div className="flex px-1 md:py-2 md:px-4 bg-white text-black items-center  rounded-md gap-1 hover:bg-opacity-70">
          <FaPlay className="text-xs md:text-xl " />
          <button className="text-xs font-medium md:text-lg">Play</button>
        </div>
        <div className="flex  md:py-2 md:px-4 bg-gray-500 text-black bg-opacity-30 items-center justify-center rounded-md gap-1">
          <IoInformationCircleOutline className="text-xl md:text-3xl text-white" />
          <button className="text-xs md:font-medium text-white md:text-lg">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};
