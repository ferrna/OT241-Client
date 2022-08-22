import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";

const token = localStorage.getItem("token");
const user = token ? jwt_decode(token) : null;

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: user ? true : false,
    user: user ? user : null,
    error: "",
    token: token ? token : null
  },
  reducers: {
    login: (state, { payload }) => {
      state.isLoggedIn = true;
      state.user = payload.user;
      state.error = "";
      state.token = payload.token;
      localStorage.setItem("token", payload.token);
    },
    logout: (state, payload) => {
      console.log('logout')
      state.isLoggedIn = false;
      state.user = null;
      state.error = payload.error;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
