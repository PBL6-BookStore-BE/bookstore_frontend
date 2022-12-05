import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { listBookByFilterThunk } from "./action";


const initialState = {
    isLoading: false,
    data: [],
    category: 'All',
    publisher: 'All',
    lowest: 0,
    highest: 50,
    defaultValue: [0, 50],
};

export const listBookByFilter = createAsyncThunk('search/listBookByFilter', listBookByFilterThunk);

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        handleChange: (state, {payload: { name, value }}) => {
            state[name] = value;
        },
        clearValue: (state) => {
            state.defaultValue= [0, 50];
            state.category='All';
            state.publisher='All';
            state.lowest=0;
            state.highest=50;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(listBookByFilter.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(listBookByFilter.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(listBookByFilter.rejected, (state) => {
                state.isLoading = false;
            })
    }
});

export const { handleChange, clearValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;