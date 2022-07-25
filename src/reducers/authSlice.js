import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: {},
    error: ''
  },
  reducers: {
    login: state => {
      state.isLoggedIn = true;
      state.user = { email: 'email@email.com', password: '123456' };
    },
    logout: state => {
      state.isLoggedIn = false;
      state.user = {};
    }
  }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;