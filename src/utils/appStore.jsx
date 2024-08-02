import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./useSlice"; // Corrected import statement
import MovieSlice from "./MovieSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movie: MovieSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // Correctly setting up middleware as a callback
});

export default appStore;
