import React, { useEffect } from "react";
import { API__OPTION } from "../utils/constencs";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/MovieSlice";

export const VideoBackground = ({ videoId }) => {
  // Corrected typo
  const dispatch = useDispatch();
  const trailer = useSelector((state) => state.movies.trailer);
  console.log(trailer);

  const getMovieVideo = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${videoId}/videos?language=en-US`,
        API__OPTION
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      const fetchedData = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const Trailer = fetchedData.length ? fetchedData[0] : json.results[0];
      dispatch(addTrailer(Trailer));
    } catch (error) {
      console.error("Failed to fetch movie video:", error);
    }
  };

  useEffect(() => {
    if (videoId) {
      getMovieVideo();
    }
  }, [videoId]);

  return (
    <div>
      {trailer ? (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${trailer.key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Loading trailer...</p>
      )}
    </div>
  );
};
