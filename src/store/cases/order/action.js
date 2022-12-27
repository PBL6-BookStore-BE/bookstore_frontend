import { createAsyncThunk } from "@reduxjs/toolkit";
import { createOrder, getOrderById, getOrderByUser, updateStatus } from "../../../apis/order.api";

const createNewOrder= createAsyncThunk("order/createOrder", async (data) => createOrder(data));

const getOrderByUserId= createAsyncThunk("order/getOrderByUser", async (data) => getOrderByUser(data));
const getDetailOrder= createAsyncThunk("order/getOrderByID", async (data) => getOrderById(data));

// export const getDetailOrderThunk = async (id, thunkAPI) => {
//   try {
//     const response = await getOrderById(id);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     return thunkAPI.rejectWithValue(error.response.data);
//   }
// }

export const updateStatusThunk = async (data, thunkAPI) => {
    try {
        const response = await updateStatus(data);
        return response.data;
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue(error.response.data);
    }
}

export {
    createNewOrder, getOrderByUserId, getDetailOrder,
}