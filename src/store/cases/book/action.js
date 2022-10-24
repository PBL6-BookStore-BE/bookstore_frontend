import { createAsyncThunk } from "@reduxjs/toolkit";
import { getListBook, getListBookTop10 } from "../../../apis/book.api";

const listBooks = createAsyncThunk("book/list", async () => getListBook());

const listTopRating = createAsyncThunk("book/topRating", async () =>
  getListBookTop10()
);
export { listBooks, listTopRating };
