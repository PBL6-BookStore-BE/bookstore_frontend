import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories } from "../../../apis/category.api";

export const listCategories = createAsyncThunk("categories", async () => getCategories());