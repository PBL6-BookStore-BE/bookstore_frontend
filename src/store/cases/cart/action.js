import { createAsyncThunk } from "@reduxjs/toolkit";
import { addItemToCart, getCartItems, removeItem } from "../../../apis/cart.api";

const listCartItems = createAsyncThunk("cart/getListCart", async () => getCartItems());

const saveItemToCart = createAsyncThunk("cart/postItemToCart", async (item) => addItemToCart(item));

const removeItemFromCart = createAsyncThunk("cart/removeItem", async (idBook) => removeItem(idBook));

export { listCartItems, saveItemToCart, removeItemFromCart };