import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./useSlice"; // Ensure this is the correct path
import movieSlice from "./MovieSlice"; // Ensure this is the correct path
import gptSlice from "./gptSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: movieSlice,
    // Make sure the key matches the slice name
    gpt: gptSlice,
  },
});

export default appStore;
