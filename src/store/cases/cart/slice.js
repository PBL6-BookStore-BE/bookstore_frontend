import { createSlice } from "@reduxjs/toolkit";
import { listCartItems } from "./action";

const initialCartState = {
    isFetching: false,
    items: [],
    totalAmount: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        AddToCart: (state,action) => {
            const updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.quantity;      
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            const existingCartItem = state.items[existingCartItemIndex];

            let updatedItems;
            if (existingCartItem) {
              const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + action.payload.quantity,
              };
              updatedItems = [...state.items];
              updatedItems[existingCartItemIndex] = updatedItem;
            } else {
              updatedItems = state.items.concat(action.payload)
            }
            state.items = updatedItems;
            state.totalAmount = updatedTotalAmount;

            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        RemoveFromCart: (state,action) => {
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            const existingCartItem = state.items[existingCartItemIndex];
            const updatedTotalAmount = state.totalAmount - existingCartItem.price;

            let updatedItems;
            if(existingCartItem.quantity===1){
              updatedItems = state.items.filter(item => item.id !== action.payload.id);
            } else {
              const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1
              };
              updatedItems = [...state.items];
              updatedItems[existingCartItemIndex] = updatedItem;
            }
            state.items = updatedItems;
            state.totalAmount = updatedTotalAmount;

            localStorage.setItem("carts", JSON.stringify(state.items));
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(listCartItems.pending, (state) => {
                state.isFetching = true;
            })
            .addCase(listCartItems.fulfilled, (state, action) => {
                state.isFetching = false;
                AddToCart(action.payload);
            })
            .addCase(listCartItems.rejected, (state) => {
                state.isFetching = false;
            })
    }
})
export const { AddToCart, RemoveFromCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer;