export const GET_POSTS = 'GET_POSTS';
export const POSTS_LOADING = 'POSTS_LOADING';
export const POSTS_ERROR = 'POSTS_ERROR';

const initialState = {
    posts: [],
    loading: false,
    error: null,
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'POSTS_LOADING':
            return {
                ...state,
                loading: action.payload,
            }
            break;
        case 'GET_POSTS':
            return {
                ...state,
                posts: action.payload,
            }
            break;
        case 'POSTS_ERROR':
            return {
                ...state,
                error: action.payload,
            }
            break;
        default:
            return state
    }
}

export default postsReducer;