import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import netflixLoginBG from "../assets/netflix-Login-BG-img.jpg";

export const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10 w-full h-full">
        <img
          src={netflixLoginBG}
          alt=""
          className="w-full h-full object-cover "
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};
