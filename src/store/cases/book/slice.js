import { createSlice } from "@reduxjs/toolkit";
import { listBooks, listTopRating } from "./action";

const initialBookState = {
  list: {
    isFetching: false,
    data: [],
  },
  details: {
    isFetching: false,
  },
  topRating: {
    isFetching: false,
    data: [],
  },
  bestSeller: {
    isFetching: false,
    data: [],
  },
};

export const bookSlice = createSlice({
  name: "book",
  initialState: initialBookState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listBooks.pending, (state) => {
        state.list.isFetching = true;
      })
      .addCase(listBooks.fulfilled, (state, action) => {
        state.list.isFetching = false;
        state.list.data = action.payload;
      })
      .addCase(listBooks.rejected, (state) => {
        state.list.isFetching = false;
      })
      .addCase(listTopRating.pending, (state) => {
        state.topRating.isFetching = true;
      })
      .addCase(listTopRating.fulfilled, (state, action) => {
        state.topRating.isFetching = false;
        state.topRating.data = action.payload;
      })
      .addCase(listTopRating.rejected, (state) => {
        state.topRating.isFetching = false;
      });
  },
});

export const bookReducer = bookSlice.reducer;
