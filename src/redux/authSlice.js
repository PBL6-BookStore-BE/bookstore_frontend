import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../apis/auth.api";

const initialState = {
  message: "",
  user: "",
  email: "",
  token: "",
  roles: "",
  loading: false,
  error: "",
};

export const register = createAsyncThunk("auth/register", async (data) => {
  const response = await authAPI.register(data);
  return response.data;
});

export const login = createAsyncThunk("auth/login", async (data) =>
  authAPI.login(data)
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addToken: (state) => {
      state.token = localStorage.getItem("token");
    },
    addUserName: (state) => {
      state.user = localStorage.getItem("userName");
    },
    logout: (state) => {
      state.token = null;
      localStorage.clear();
    },
  },
  extraReducers: {
    [register.pending]: (state) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.loading = false;
      if(!action.payload.isSuccess){
        state.error = action.payload.message;
      } else {
        state.error = '';
        state.message = action.payload.message;
      }
    },
    [register.rejected]: (state) => {
      state.loading = true;
    },
    // Login
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      if (!action.payload.data.isSuccess) {
        state.error = action.payload.data.message;
      } else {
        state.error = '';
        state.message = action.payload.data.message;
        state.token = action.payload.data.token;
        state.user = action.payload.data.userName;
        state.email = action.payload.data.email;
        state.roles = action.payload.data.roles;

        localStorage.setItem("message", action.payload.data.message);
        localStorage.setItem("user", action.payload.data.userName);
        localStorage.setItem("token", action.payload.data.token);
      }
    },
    [login.rejected]: (state) => {
      state.loading = true;
    },
  },
});

export const { addToken, addUserName, logout } = authSlice.actions;

export const authReducer = authSlice.reducer;
