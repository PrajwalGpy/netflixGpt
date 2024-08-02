import React from "react";
import Header from "./Header";
import useNowPlayingMovie from "../Hooks/useNowPlayingMovie";
import { MainContainer } from "./MainContainer";
import { SeconderyContainer } from "./SeconderyContainer";

const Browse = () => {
  useNowPlayingMovie();
  return (
    <div>
      <Header />
      <MainContainer />
      <SeconderyContainer />
    </div>
  );
};

export default Browse;
