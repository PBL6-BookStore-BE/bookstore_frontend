import { createAsyncThunk } from "@reduxjs/toolkit";
import { createOrder } from "../../../apis/order.api";

const createNewOrder= createAsyncThunk("order/createOrder", async (data) => createOrder(data));

export {
    createNewOrder,
}