import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosConfig/instance";

export const MoviesAction = createAsyncThunk("movies/getall", async () => {
  const res = await axiosInstance.get("/movie/popular");
  return res.data.results;
});

const MoviesSlice = createSlice({
  name: "movies",
  initialState: { movies: [] },
  extraReducers: (builder) => {
    builder.addCase(MoviesAction.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export default MoviesSlice.reducer;
