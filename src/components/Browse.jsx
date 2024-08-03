import React from "react";
import Header from "./Header";
import useNowPlayingMovie from "../Hooks/useNowPlayingMovie";
import { MainContainer } from "./MainContainer";
import { SeconderyContainer } from "./SeconderyContainer";
import useTopRatedMovie from "../Hooks/useTopRatedMovie ";
import usePopularMovie from "../Hooks/usePopularMovie";
import useUpcomingMovie from "../Hooks/useUpcomingMovie";
import { GptSearch } from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovie();
  useTopRatedMovie();
  usePopularMovie();
  useUpcomingMovie();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SeconderyContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
