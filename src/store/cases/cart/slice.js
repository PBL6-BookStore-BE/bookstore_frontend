import { createSlice } from "@reduxjs/toolkit";
import { deleteCart, listCartItems, removeItemFromCart, saveItemToCart, updateItem } from "./action";

const initialCartState = {
  isFetching: false,
  items: [],
  totalAmount: 0,
};

const initialListCartState = {
  isFetching: false,
  data: [],
  totalAmount: 0,
}
export const cartSlice = createSlice({
    name: "cart",
    initialState: {
      initialCartState,
      initialListCartState,
    },
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
        },
        RemoveAllItems: (state, action) => {
          const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.payload.id
          );
          console.log(existingCartItemIndex);
          const updatedTotalAmount = state.totalAmount - state.items[existingCartItemIndex].quantity*state.items[existingCartItemIndex].price;
          
          state.items.splice(existingCartItemIndex, 1);
          state.totalAmount = updatedTotalAmount;
    
          localStorage.setItem("carts", JSON.stringify(state.items));
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(listCartItems.pending, (state) => {
                state.initialListCartState.isFetching = true;
            })
            .addCase(listCartItems.fulfilled, (state, action) => {
                state.initialListCartState.isFetching = false;
                state.initialListCartState.data = action.payload;
                state.initialListCartState.totalAmount = action.payload.reduce((curNumber, item) => {
                  return curNumber + item.quantity;
                }, 0);
            })
            .addCase(listCartItems.rejected, (state) => {
                state.initialListCartState.isFetching = true;
            })
            .addCase(saveItemToCart.pending, (state) => {
              state.initialListCartState.isFetching = true;
            })
            .addCase(saveItemToCart.fulfilled, (state, action) => {
              state.initialListCartState.isFetching = false;
              const idCartItem = action.payload;
              state.initialListCartState.data.map((data) => {
                if (data.id === idCartItem) {
                  data.quantity += action.meta.arg.quantity;
                }
              })
              state.initialListCartState.totalAmount += action.meta.arg.quantity;
            })
            .addCase(removeItemFromCart.fulfilled, (state, action) => {
              state.initialListCartState.isFetching = false;
              const existingCartItemIndex = state.initialListCartState.data.findIndex(
                (item) => item.id === action.payload.data
              );
              state.initialListCartState.data.splice(existingCartItemIndex, 1);
              state.initialListCartState.totalAmount = state.initialListCartState.data.reduce((curNumber, item) => {
                return curNumber + item.quantity;
              }, 0);
            })
            .addCase(updateItem.fulfilled, (state, action) => {
              state.initialListCartState.isFetching = false;
              state.initialListCartState.data.map((data) => {
                if (data?.bookVM?.id === action.meta.arg.idBook) {
                  data.quantity -= 1;
                }
              })
              state.initialListCartState.totalAmount -= 1;
            })
            .addCase(deleteCart.fulfilled, (state) => {
              state.initialListCartState.isFetching = false;
              state.initialListCartState.data = [];
              state.initialCartState.totalAmount = 0;
            })
            .addCase(deleteCart.rejected, (state, action) => {
              state.initialListCartState.isFetching = true;
              console.log("Error: ", action);
            })
    }
})
export const { AddToCart, RemoveFromCart, RemoveAllItems } = cartSlice.actions
export const cartReducer = cartSlice.reducer;