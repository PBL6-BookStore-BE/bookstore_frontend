import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authReducer } from "./cases/auth/slice";
import { bookReducer } from "./cases/book/slice";
import { categoryReducer } from "./cases/category/slice";
import { filterReducer } from "./cases/filter/slice";
import { publisherReducer } from "./cases/publisher/slice";

const combinedReducer = combineReducers({
  auth: authReducer,
  book: bookReducer,
  filter: filterReducer,
  publisher: publisherReducer,
  category: categoryReducer,
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
