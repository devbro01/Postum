import { createSlice } from "@reduxjs/toolkit";

// initial values
const initialState = {
  isLoading: false,
  loggedIn: false,
  error: null,
  user: null,
};

// auth slice
export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUserStart: (state) => {
      state.isLoading = true;
    },
    signUserSuccess: (state, action) => {
      state.loggedIn = true;
      state.isLoading = false;
      state.user = action.payload
    },
    signUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default auth.reducer;
export const { signUserStart, signUserFailure, signUserSuccess } = auth.actions;
