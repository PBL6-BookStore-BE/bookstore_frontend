import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCartItems } from "../../../apis/cart.api";

const listCartItems = createAsyncThunk("cart", async () => getCartItems());

export { listCartItems };