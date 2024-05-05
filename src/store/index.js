import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../slice/auth';
import articleSlice from '../slice/article';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    article: articleSlice
  },
  devTools: process.env.NODE_ENV !== 'production'
});
