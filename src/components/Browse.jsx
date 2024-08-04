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
import Shrimerui from "./Shrimerui";
import SkelitonVedio from "./SkelitonVedio";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const trailer = useSelector((state) => state.movies.trailer);
  useNowPlayingMovie();
  useTopRatedMovie();
  usePopularMovie();
  useUpcomingMovie();
  return (
    <div
      className=""
      style={{ backgroundColor: !showGptSearch ? "black" : "" }}
    >
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          {movies.length == 0 ? <SkelitonVedio /> : <MainContainer />}
          {movies.length == 0 ? <Shrimerui /> : <SeconderyContainer />}
        </>
      )}
    </div>
  );
};

export default Browse;
