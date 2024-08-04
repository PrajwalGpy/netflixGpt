import React from "react";
import { MovieList } from "./MovieList";
import { useSelector } from "react-redux";

export const SeconderyContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black ">
        <div className="-mt-5 md:-mt-64 relative z-10">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.PopularMovie} />
          <MovieList title={"Top Rated"} movies={movies.TopRatedMovie} />
          <MovieList title={"Upcoming Movie"} movies={movies.UpcomingMovie} />
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};
