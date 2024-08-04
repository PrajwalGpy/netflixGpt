import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

export const VideoBackground = ({ videoId }) => {
  // Corrected typo
  useMovieTrailer(videoId);
  const trailer = useSelector((state) => state.movies.trailer);

  return (
    <div className="   ">
      {trailer ? (
        <iframe
          className=" w-screen aspect-video "
          src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&loop=1`}
          title="YouTube video player"
          allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          frameBorder="0"
          allowfullscreen
        ></iframe>
      ) : (
        <p>Loading trailer...</p>
      )}
    </div>
  );
};
