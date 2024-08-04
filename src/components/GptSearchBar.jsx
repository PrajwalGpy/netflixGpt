import React, { useRef } from "react";
import { groq } from "../utils/Groq";
import { API__OPTION } from "../utils/constencs";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  let searchText = useRef(null);
  const dispatch = useDispatch();

  const serarchMovieTMDB = async (Movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        Movie +
        "&include_adult=false&language=en-US&page=1",
      API__OPTION
    );

    const json = await data.json();
    return json.results;
  };
  const handleGptSearch = async () => {
    console.log(searchText.current.value);
    const query =
      "Act as a Movie Recommendation system and suggest some movies for the query :" +
      searchText.current.value +
      "only give me name of 5 movies,comma seperated like the example given ahead.Example Result:The Shawshank Redemption,The Dark Knight,Inception,The Lord of the Rings: The Return of the King,Pulp Fiction ,Negative Prompt: No summaries, ratings, or extra text. Just the movie names, comma-separated.";

    let result = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: query,
        },
      ],
      model: "llama3-8b-8192",
    });
    console.log(result.choices[0]?.message?.content || "");
    const gpyMovies = result.choices[0]?.message?.content.split(",") || "";

    const promiseArray = gpyMovies.map((Movie) => serarchMovieTMDB(Movie));
    const tmdbResult = await Promise.all(promiseArray);
    console.log(tmdbResult);
    dispatch(
      addGptMovieResult({ movieNames: gpyMovies, movieResults: tmdbResult })
    );
  };
  return (
    <div className="pt-[20%]  md:pt-[10%] flex justify-center ">
      <form
        action=""
        className=" md:w-1/2 grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          name="q"
          placeholder="Search"
          className="p-4 m-4 col-span-9"
        />
        <button
          type="submit"
          className="w-full col-span-3  my-4  md:m-4 md:py-2 bg-red-600 px-4 rounded-lg text-white"
          onClick={handleGptSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
