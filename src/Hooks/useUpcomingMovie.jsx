import { useDispatch } from "react-redux";
import { API__OPTION } from "../utils/constencs";
import { addUpcomingMovie } from "../utils/MovieSlice";
import { useEffect } from "react";
import upcomingMovies from "../json/upcommingMovies"; // Adjust the path as necessary

const useUpcomingMovie = () => {
  const dispatch = useDispatch();

  const loadNewMovies = async () => {
    try {
      console.log("Fetching data from API...");
      let response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API__OPTION
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let data = await response.json();
      console.log("upcoming:", data);
      dispatch(addUpcomingMovie(data.results));
    } catch (error) {
      console.log("Fallback data:", upcomingMovies[0].results);
      dispatch(addUpcomingMovie(upcomingMovies[0].results));
    }
  };

  useEffect(() => {
    loadNewMovies();
  }, []);
};

export default useUpcomingMovie;
