import React from "react";
import { VideoBackground } from "./VideoBackground";
import { VideoTitle } from "./VideoTitle ";
import { useSelector } from "react-redux";

export const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  console.log("Movies from Redux store:", movies);

  if (!movies || movies.length === 0) {
    return <div>No movies available</div>;
  }

  const mainMovie = movies[0];
  console.log("Main movie:", mainMovie);
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground videoId={id} />
    </div>
  );
};
