import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";
import SkelitonVedio from "./SkelitonVedio";

export const VideoBackground = ({ videoId }) => {
  useMovieTrailer(videoId);
  const trailer = useSelector((state) => state.movies.trailer);

  if (!trailer || !trailer.key) {
    return <SkelitonVedio />;
  }

  return (
    <div className="w-full h-full">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&loop=1`}
        title="YouTube video player"
        allow="fullscreen; autoplay;"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};
