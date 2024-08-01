import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./useSlice"; // Corrected import statement

const appStore = configureStore({
  reducer: {
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // Correctly setting up middleware as a callback
});

export default appStore;
