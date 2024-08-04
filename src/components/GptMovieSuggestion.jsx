import React from "react";
import { useSelector } from "react-redux";
import { MovieList } from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames || !movieResults) return null;

  return (
    <div className="p-4 m-4 text-white bg-opacity-75">
      <div>
        {movieNames.map((name, index) => {
          const movies = movieResults[index];
          if (!movies) return null;
          return <MovieList key={name} title={name} movies={movies} />;
        })}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
