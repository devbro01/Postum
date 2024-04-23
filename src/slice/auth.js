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
    //  LOGIN
    loginUserStart: (state) => {
      state.isLoading = true;
    },
    loginUserSuccess: (state) => {},
    loginUserfailure: (state) => {},
    //  REGISTER
    registerUserStart: (state) => {
      state.isLoading = true;
    },
    registerUserSuccess: (state) => {
      state.loggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    registerUserfailure: (state) => {
      state.isLoading = false;
      state.error = "Qandaydir Hatolik ):";
    },
  },
});

export default auth.reducer;
//  LOGIN
export const { loginUserStart, loginUserSuccess, loginUserfailure } =
  auth.actions;
//  REGISTER
export const { registerUserStart, registerUserSuccess, registerUserfailure } =
  auth.actions;
