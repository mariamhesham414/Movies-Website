import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./slices/favorite";
import movieReducer from "./slices/movies";

const storeFav = JSON.parse(localStorage.getItem("favorite")) || [];

const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
    movies: movieReducer,
  },
  preloadedState: {
    favorite: { favorite: storeFav },
  },
});
export default store;
