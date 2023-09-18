import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    status: 'idle',
    error: null,
}

export const getAllPosts = createAsyncThunk(
    'posts/getAllPosts',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        return data;
    }
);

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase('posts/getAllPosts/pending', (state) => {
                state.status = 'loading'
            })
            .addCase('posts/getAllPosts/fulfilled', (state, action) => {
                state.status = 'idle';
                state.posts = action.payload
            })
            .addCase('posts/getAllPosts/rejected', (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export const selectPosts = (state) => state.posts;

export default postsSlice.reducer;