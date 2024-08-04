import React from "react";
import { VideoBackground } from "./VideoBackground";
import { VideoTitle } from "./VideoTitle ";
import { useSelector } from "react-redux";

export const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) {
    return <div>No movies available</div>;
  }

  const mainMovie = movies[13];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className=" ">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground videoId={id} />
    </div>
  );
};
