import React from "react";
import { FaPlay } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";

export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-20 pl-10 absolute w-screen aspect-video text-white bg-gradient-to-r from-black  flex flex-col items-start justify-center gap-2">
      <div>
        <h1 className=" pl-10 py-6 font-bold text-4xl">{title}</h1>
        <p className=" pl-10 w-2/5 text-sm font-light ">{overview}</p>
      </div>

      <div className="flex gap-2  pl-10 py-6">
        <div className="flex py-2 px-4 bg-white text-black items-center  rounded-md gap-1 hover:bg-opacity-70">
          <FaPlay />
          <button className="font-medium">Play</button>
        </div>
        <div className="flex  py-2 px-4 bg-gray-500 text-black bg-opacity-30 items-center justify-center rounded-md gap-1">
          <IoInformationCircleOutline className="text-2xl text-white" />
          <button className="font-medium text-white">More Info</button>
        </div>
      </div>
    </div>
  );
};
