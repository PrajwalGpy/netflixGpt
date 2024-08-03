import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    trailer: null,
    PopularMovie: [],
    TopRatedMovie: [],
    UpcomingMovie: [],
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.PopularMovie = action.payload;
    },
    addTopRatedMovie: (state, action) => {
      state.TopRatedMovie = action.payload;
    },
    addUpcomingMovie: (state, action) => {
      state.UpcomingMovie = action.payload;
    },
  },
});

export const {
  addNowPlayingMovie,
  addTrailer,
  addPopularMovie,
  addTopRatedMovie,
  addUpcomingMovie,
} = movieSlice.actions;
export default movieSlice.reducer;
