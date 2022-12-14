import { createAsyncThunk } from "@reduxjs/toolkit";
import { addItemToCart, deleteAllCart, getCartItems, removeItem, updateItemtoCart } from "../../../apis/cart.api";

const listCartItems = createAsyncThunk("cart/getListCart", async () => getCartItems());

const saveItemToCart = createAsyncThunk("cart/postItemToCart", async (item) => addItemToCart(item));

const removeItemFromCart = createAsyncThunk("cart/removeItem", async (idBook) => removeItem(idBook));

const updateItem = createAsyncThunk("cart/updateItem", async (item) => updateItemtoCart(item));

const deleteCart = createAsyncThunk("cart/deleteCart", async () => deleteAllCart());

export { listCartItems, saveItemToCart, removeItemFromCart, updateItem, deleteCart };