import { useDispatch } from "react-redux";
import { API__OPTION } from "../utils/constencs";
import { addTrailer } from "../utils/MovieSlice";
import { useEffect } from "react";

const useMovieTrailer = (videoId) => {
  const dispatch = useDispatch();
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
};
export default useMovieTrailer;
