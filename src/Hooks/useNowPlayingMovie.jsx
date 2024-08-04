import { useDispatch } from "react-redux";
import { API__OPTION } from "../utils/constencs";
import { addNowPlayingMovie } from "../utils/MovieSlice";
import { useEffect } from "react";
import nowPlayingMovies from "../json/nowPlayingmovies"; // Adjust the path as necessary

const useNowPlayingMovie = () => {
  const dispatch = useDispatch();

  const loadNewMovies = async () => {
    try {
      let response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API__OPTION
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let data = await response.json();

      dispatch(addNowPlayingMovie(data.results));
    } catch (error) {
      console.error(
        "Failed to fetch data from API, using fallback data:",
        error
      );

      dispatch(addNowPlayingMovie(nowPlayingMovies[0].results));
    }
  };

  useEffect(() => {
    loadNewMovies();
  }, []);
};

export default useNowPlayingMovie;
