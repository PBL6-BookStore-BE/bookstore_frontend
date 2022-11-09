import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authReducer } from "./cases/auth/slice";
import { bookReducer } from "./cases/book/slice";
import { cartReducer } from "./cases/cart/slice";

const combinedReducer = combineReducers({
  auth: authReducer,
  book: bookReducer,
  cart: cartReducer,
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});
export default store;
