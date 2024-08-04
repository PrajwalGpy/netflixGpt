import React from "react";
import { VideoBackground } from "./VideoBackground";
import { VideoTitle } from "./VideoTitle ";
import { useSelector } from "react-redux";
import SkelitonVedio from "./SkelitonVedio";

export const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const trailer = useSelector((state) => state.movies?.trailer);

  if (!movies || movies.length === 0) {
    return <div>No movies available</div>;
  }

  const mainMovie = movies[10];
  const { original_title, overview, id } = mainMovie;

  if (!movies) return <SkelitonVedio />;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground videoId={id} />
    </div>
  );
};
