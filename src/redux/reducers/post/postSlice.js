import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPostsThunk } from "./postThunk";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  posts: [],
};

export const getPosts = createAsyncThunk("fetch/posts", getPostsThunk);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        state.posts = payload.data;
        state.loading = false;
      })
      .addCase(getPosts.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload);
      });
  },
});

export default postSlice.reducer;
