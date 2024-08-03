import { useDispatch } from "react-redux";
import { API__OPTION } from "../utils/constencs";
import { addPopularMovie } from "../utils/MovieSlice";
import { useEffect } from "react";
import populerMovies from "../json/populer"; // Adjust the path as necessary

const usePopularMovie = () => {
  const dispatch = useDispatch();

  const loadNewMovies = async () => {
    try {
      console.log("Fetching data from API...");
      let response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API__OPTION
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let data = await response.json();
      console.log("popular:", data);
      dispatch(addPopularMovie(data.results));
    } catch (error) {
      console.error(
        "Failed to fetch data from API, using fallback data:",
        error
      );
      console.log("Fallback data:", populerMovies[0].results);
      dispatch(addPopularMovie(populerMovies[0].results));
    }
  };

  useEffect(() => {
    loadNewMovies();
  }, []);
};

export default usePopularMovie;
