import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import httpService from '../services/httpService';

const service = new httpService();

export const login = createAsyncThunk('auth/login', async (email, password, thunkAPI) => {
  try {
    return await service.post("auth/login", {email, password})
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null,
    error: '',
    isLoading: false
  },
  reducers: {
    logout: state => {
      state.isLoggedIn = false;
      state.user = null;
      state.error= '';
      state.isLoading= false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isLoggedIn = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
        state.user = null
      })
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;