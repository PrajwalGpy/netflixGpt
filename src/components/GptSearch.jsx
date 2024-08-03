import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import netflixLoginBG from "../assets/netflix-Login-BG-img.jpg";

export const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={netflixLoginBG} alt="" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};
