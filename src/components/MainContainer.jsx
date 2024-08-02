import React from "react";
import { VideoBackground } from "./VideoBackground";
import { VideoTitle } from "./VideoTitle ";
import { useSelector } from "react-redux";

export const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);

  console.log("Movies from Redux store:", movies); // Add a console log to debug

  if (!movies) return;

  const mainMovie = movies[0];
  console.log("Main movie:", mainMovie);
  const { original_title, overview } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground />
    </div>
  );
};
