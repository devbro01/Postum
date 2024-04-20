import { configureStore } from "@reduxjs/toolkit";
import auth from "../slice/auth";

export const store = configureStore({
  reducer: {
    auth,
  },
});
