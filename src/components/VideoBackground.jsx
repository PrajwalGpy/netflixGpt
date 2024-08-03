import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

export const VideoBackground = ({ videoId }) => {
  // Corrected typo
  useMovieTrailer(videoId);
  const trailer = useSelector((state) => state.movies.trailer);
  console.log(trailer);

  return (
    <div className="w-screen">
      {trailer ? (
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ) : (
        <p>Loading trailer...</p>
      )}
    </div>
  );
};
