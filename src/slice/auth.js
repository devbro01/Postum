import { createSlice } from "@reduxjs/toolkit";

// initial values
const initialState = {
  isLoading: false,
  loggedIn: false,
  user: null,
};

// auth slice
export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUserStart: (action) => {
      action.isLoading = true;
    },
    loginUserSuccess: (action) => {},
    loginUserfailure: (action) => {},
  },
});

export default auth.reducer;
export const { loginUserStart, loginUserSuccess, loginUserfailure } =
  auth.actions;
