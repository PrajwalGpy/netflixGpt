import React from "react";
import { MovieCards } from "./MovieCards";
import "./MovieList.css"; // Ensure this is correctly imported

export const MovieList = ({ title, movies }) => {
  return (
    <div className="text-white flex flex-col ">
      <div className="flex flex-col px-10 py-3">
        <h1 className="font-semibold text-2xl px-2 pb-2">{title}</h1>
        <div className="scrollable-container flex flex-row overflow-x-scroll">
          {movies.map((movie, index) => {
            return <MovieCards key={index} phosterPath={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};
