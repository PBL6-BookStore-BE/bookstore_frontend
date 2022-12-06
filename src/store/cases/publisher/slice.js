import { createSlice } from "@reduxjs/toolkit";
import { listPublishers } from "./action"

const initialState = {
    isLoadingPublisher: false,
    publishers: [],
}

export const publisherSlice = createSlice({
    name: 'publisher',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(listPublishers.pending, (state) => {
                state.isLoadingPublisher = true;
            })
            .addCase(listPublishers.fulfilled, (state, action) => {
                state.isLoadingPublisher = false;
                state.publishers = action.payload;
            })
            .addCase(listPublishers.rejected, (state) => {
                state.isLoadingPublisher = false;
            })
    }
});

export const publisherReducer = publisherSlice.reducer;