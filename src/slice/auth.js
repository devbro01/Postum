import { createSlice } from '@reduxjs/toolkit';
import { setItem } from '../helpers/storage';

// initial values
const initialState = {
  isLoading: false,
  loggedIn: false,
  error: null,
  user: null
};

// auth slice
export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUserStart: (state) => {
      state.isLoading = true;
    },
    signUserSuccess: (state, action) => {
      state.loggedIn = true;
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
      setItem('token', action.payload.token);
    },
    signUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
      state.loggedIn = false;
    }
  }
});

export default auth.reducer;
export const { signUserStart, signUserFailure, signUserSuccess, logoutUser } =
  auth.actions;
