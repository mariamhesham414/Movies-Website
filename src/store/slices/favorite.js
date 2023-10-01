import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: JSON.parse(localStorage.getItem("favorite")) || [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: function (state, action) {
      const favMovie = action.payload;
      state.favorite.push(favMovie);
      localStorage.setItem("favorite", JSON.stringify(state.favorite));
    },
    removeFavorite: function (state, action) {
      const unfavMovie = action.payload;
      state.favorite = state.favorite.filter(
        (movie) => movie.id !== unfavMovie
      );
      localStorage.setItem("favorite", JSON.stringify(state.favorite));
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
