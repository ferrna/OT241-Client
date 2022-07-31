import { createSlice } from '@reduxjs/toolkit';

const user = localStorage.getItem('user')

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: user ? user : null,
    error: '',
  },
  reducers: {
    login: (state, payload) => {
      state.isLoggedIn = true;
      state.user = payload.user;
      state.error = '';
    },
    logout: (state, payload) => {
      state.isLoggedIn = false;
      state.user = null;
      state.error = payload.error;

    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;