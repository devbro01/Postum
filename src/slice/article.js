import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  articles: []
};

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    getArticlesStart: (state) => {
      state.isLoading = true;
    },
    getArticlesSuccess: (state, action) => {
      state.isLoading = false;
      state.articles = action.payload;
    }
  }
});

export const { action } = articleSlice.actions;
export default articleSlice.reducer;
