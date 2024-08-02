import { useDispatch } from "react-redux";
import { API__OPTION } from "../utils/constencs";
import { addNowPlayingMovie } from "../utils/MovieSlice";
import { useEffect } from "react";
import nowPlayingMovies from "../json/nowPlayingmovies"; // Adjust the path as necessary

const useNowPlayingMovie = () => {
  const dispatch = useDispatch();

  const loadNewMovies = async () => {
    try {
      console.log("Fetching data from API...");
      let response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API__OPTION
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let data = await response.json();
      console.log("API data:", data);
      dispatch(addNowPlayingMovie(data.results));
    } catch (error) {
      console.error(
        "Failed to fetch data from API, using fallback data:",
        error
      );
      console.log("Fallback data:", nowPlayingMovies[0].results);
      dispatch(addNowPlayingMovie(nowPlayingMovies[0].results));
    }
  };

  useEffect(() => {
    loadNewMovies();
  }, []);
};

export default useNowPlayingMovie;
