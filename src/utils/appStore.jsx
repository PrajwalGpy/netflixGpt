import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./useSlice"; // Ensure this is the correct path
import movieSlice from "./MovieSlice"; // Ensure this is the correct path

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: movieSlice, // Make sure the key matches the slice name
  },
});

export default appStore;
