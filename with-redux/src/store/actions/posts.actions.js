import axios from 'axios';
import {
    GET_POSTS,
    POSTS_LOADING,
    POSTS_ERROR,
} from '../reducers/posts.reducer';

// Action creator
export const getPosts = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: POSTS_LOADING, payload: true });
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            dispatch({ type: GET_POSTS, payload: response.data });
        } catch (error) {
            dispatch({ type: POSTS_ERROR, payload: error });
        } finally {
            dispatch({ type: POSTS_LOADING, payload: false });
        }
    }
}