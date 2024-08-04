import React from "react";
import { MovieCards } from "./MovieCards";

export const MovieList = ({ title, movies }) => {
  return (
    <div className=" text-white flex flex-col  ">
      <div className="flex flex-col px-5 py-5 md:px-10 md:py-3">
        <h1 className="font-semibold text-lg px-1 md:text-2xl md:px-2 md:pb-2">
          {title}
        </h1>
        <div className="scrollable-container flex flex-row overflow-x-scroll">
          {movies.map((movie, index) => {
            return <MovieCards key={index} phosterPath={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};
