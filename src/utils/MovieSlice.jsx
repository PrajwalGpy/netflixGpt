import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    trailer: null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export const { addNowPlayingMovie, addTrailer } = movieSlice.actions;
export default movieSlice.reducer;
