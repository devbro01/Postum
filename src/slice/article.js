import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    articles: [],
    articleDetail: null,
    error: null,
}

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        getArticlesStart: (state) => {
            state.isLoading = true
        },
        getArticlesSuccess: (state, action) => {
            state.isLoading = false
            state.articles = action.payload
        },
        getArticlesFailure: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        // selected articles
        getArticleDetailStart: (state) => {
            state.isLoading = true
        },
        getArticleDetailSuccess: (state, action) => {
            state.isLoading = false
            state.articleDetail = action.payload
        },
        getArticleDetailFailure: (state) => {
            state.isLoading = false
        },
        // post atricle
        postArticleStart: (state) => {
            state.isLoading = true
        },
        postArticleSuccess: (state) => {
            state.isLoading = false
        },
        postArticleFailure: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
    },
})

export const {
    getArticlesStart,
    getArticlesSuccess,
    getArticlesFailure,
    getArticleDetailStart,
    getArticleDetailSuccess,
    getArticleDetailFailure,
    postArticleStart,
    postArticleSuccess,
    postArticleFailure,
} = articleSlice.actions
export default articleSlice.reducer
