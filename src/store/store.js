import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authReducer } from "./cases/auth/slice";
import { bookReducer } from "./cases/book/slice";
import { cartReducer } from "./cases/cart/slice";
import { categoryReducer } from "./cases/category/slice";
import { filterReducer } from "./cases/filter/slice";
import { orderReducer } from "./cases/order/slice";
import { publisherReducer } from "./cases/publisher/slice";
import { userReducer } from "./cases/user/slice";

const combinedReducer = combineReducers({
  auth: authReducer,
  book: bookReducer,
  cart: cartReducer,
  filter: filterReducer,
  publisher: publisherReducer,
  category: categoryReducer,
  user: userReducer,
  order: orderReducer,
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
