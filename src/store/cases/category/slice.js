import { createSlice } from "@reduxjs/toolkit";
import { listCategories } from "./action"

const initialState = {
    isLoadingCategory: false,
    categories: [],
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(listCategories.pending, (state) => {
                state.isLoadingCategory = true;
            })
            .addCase(listCategories.fulfilled, (state, action) => {
                state.isLoadingCategory = false;
                state.categories = action.payload;
            })
            .addCase(listCategories.rejected, (state) => {
                state.isLoadingCategory = false;
            })
    }
});

export const categoryReducer = categorySlice.reducer;