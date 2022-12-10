import { createSlice } from "@reduxjs/toolkit";
import { createNewOrder } from "./action";

const initialState = {
    isFetching: false,
    order: [],
    error: ""
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createNewOrder.pending, (state) => {
                state.isFetching = true;
            })
            .addCase(createNewOrder.fulfilled, (state) => {
                state.isFetching = false;
            })
            .addCase(createNewOrder.rejected, (state, action) => {
                state.isFetching = true;
                console.log(action);
            })
    }
});

export const orderReducer = orderSlice.reducer;