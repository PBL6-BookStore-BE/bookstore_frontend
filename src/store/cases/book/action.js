import { createAsyncThunk } from "@reduxjs/toolkit";
import { getListBook, getListBookTop10, getBookById } from "../../../apis/book.api";

const listBooks = createAsyncThunk("books", async () => getListBook());

const listTopRating = createAsyncThunk("topbook", async () =>
  getListBookTop10()
);

const BookById = createAsyncThunk("book", async (id) =>
  getBookById(id)
);
export { listBooks, listTopRating, BookById };
