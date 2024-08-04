import { useDispatch } from "react-redux";
import { API__OPTION } from "../utils/constencs";
import { addTopRatedMovie } from "../utils/MovieSlice";
import { useEffect } from "react";
import topRatedMovies from "../json/topRatedMovies"; // Adjust the path as necessary

const useTopRatedMovie = () => {
  const dispatch = useDispatch();

  const loadNewMovies = async () => {
    try {
      let response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API__OPTION
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let data = await response.json();

      dispatch(addTopRatedMovie(data.results));
    } catch (error) {
      console.error(
        "Failed to fetch data from API, using fallback data:",
        error
      );

      dispatch(addTopRatedMovie(topRatedMovies[0].results));
    }
  };

  useEffect(() => {
    loadNewMovies();
  }, []);
};

export default useTopRatedMovie;
