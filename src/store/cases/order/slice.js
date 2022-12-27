import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createNewOrder, getDetailOrder, getOrderByUserId, updateStatusThunk } from "./action";

const initialState = {
    isFetching: false,
    isFetching1: false,
    isFetching2: false,
    order: [],
    error: "",
    isModalOpen: false,
    orderId: '',
    orderDetails:{
        isLoading: false,
        data: [],
    },
    success: false,
}

export const updateStatus = createAsyncThunk('order/updateStatus', updateStatusThunk);

// export const getOrderById = createAsyncThunk('order/getOrderDetails', getDetailOrderThunk);

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        toggleModal: (state) => {
            state.isModalOpen = !state.isModalOpen;
        },
        setDetails: (state, { payload }) => {
            return { ...state, isModalOpen:true, ...payload };
        }
    },
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
            .addCase(getOrderByUserId.pending, (state) => {
                state.orderDetails.isLoading = true;
            })
            .addCase(getOrderByUserId.fulfilled, (state, action) => {
                state.orderDetails.isLoading = false;
                state.orderDetails.data = action.payload;
            })
            .addCase(getOrderByUserId.rejected, (state, action) => {
                state.orderDetails.isLoading = true;
            })
            .addCase(getDetailOrder.pending, (state) => {
                state.isFetching1 = true;
            })
            .addCase(getDetailOrder.fulfilled, (state, action) => {
                state.isFetching1 = false;
                // state.orders = action.payload;
            })
            .addCase(getDetailOrder.rejected, (state) => {
                state.isFetching1 = false;
            })
            .addCase(updateStatus.pending, (state) => {
                state.isFetching2 = true;
            })
            .addCase(updateStatus.fulfilled, (state) => {
                state.isFetching2 = false;
                state.isModalOpen = !state.isModalOpen;
                state.success = !state.success;
                toast.success('Thank you for your purchase!!');
            })
            .addCase(updateStatus.rejected, (state) => {
                state.isFetching2 = false;
                toast.error('Can not update status!');
            })
    }
});

export const { toggleModal, setDetails } = orderSlice.actions;

export const orderReducer = orderSlice.reducer;