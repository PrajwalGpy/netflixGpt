import React from "react";
import Header from "./Header";
import useNowPlayingMovie from "../Hooks/useNowPlayingMovie";
import { MainContainer } from "./MainContainer";
import { SeconderyContainer } from "./SeconderyContainer";
import useTopRatedMovie from "../Hooks/useTopRatedMovie ";
import usePopularMovie from "../Hooks/usePopularMovie";
import useUpcomingMovie from "../Hooks/useUpcomingMovie";

const Browse = () => {
  useNowPlayingMovie();
  useTopRatedMovie();
  usePopularMovie();
  useUpcomingMovie();
  return (
    <div>
      <Header />
      <MainContainer />
      <SeconderyContainer />
    </div>
  );
};

export default Browse;
