import React from "react";
import { FaPlay } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";

export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-20 pl-10">
      <h1 className=" pl-10 font-bold text-6xl">{title}</h1>
      <p className=" pl-10 w-1/5  ">{overview}</p>
      <div className="flex">
        <div className="flex py-2 px-4 bg-white text-black items-center border border-blac rounded-md gap-1">
          <FaPlay />
          <button className="font-medium">Play</button>
        </div>
        <div className="flex  py-2 px-4 bg-white text-black bg-opacity-70 items-center border  border-black rounded-md gap-1">
          <IoInformationCircleOutline className="text-2xl text-slate-600" />
          <button className="font-medium">More Info</button>
        </div>
      </div>
    </div>
  );
};
