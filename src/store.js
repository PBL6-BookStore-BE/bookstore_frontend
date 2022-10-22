import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authReducer } from "./redux/authSlice";

const combinedReducer = combineReducers({
  auth: authReducer,
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
