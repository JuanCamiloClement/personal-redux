import {
    INCREMENT_COUNT,
    DECREMENT_COUNT,
    RESET_COUNT
} from '../reducers/count.reducer';

export const incrementCount = () => {
    return (dispatch) => {
        dispatch({ type: INCREMENT_COUNT, payload: 1 });
    }
}

export const decrementCount = () => {
    return (dispatch) => {
        dispatch({ type: DECREMENT_COUNT, payload: 1 });
    }
}

export const resetCount = () => {
    return (dispatch) => {
        dispatch({ type: RESET_COUNT });
    }
}