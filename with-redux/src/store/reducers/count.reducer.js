export const INCREMENT_COUNT = 'INCREMENT';
export const DECREMENT_COUNT = 'DECREMENT';
export const RESET_COUNT = 'RESET';

const initialState = {
    count: 0,
}

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + action.payload,
            }
            break;
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - action.payload,
            }
            break;
        case 'RESET':
            return {
                ...state,
                count: 0,
            }
            break;
        default:
            return state
    }
}

export default countReducer;