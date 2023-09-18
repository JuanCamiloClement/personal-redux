import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    numberToIncrement: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        reset: (state) => {
            state.count = 0
        },
        defineNumberToIncrement: (state, action) => {
            state.numberToIncrement = action.payload
        },
        incrementByAmount: (state) => {
            const value = Number(state.numberToIncrement);
            state.count += value;
        },
    }
});

// console.log('COUNTER SLICE:', counterSlice);

export const {
    increment,
    decrement,
    reset,
    defineNumberToIncrement,
    incrementByAmount
} = counterSlice.actions;

export const selectCount = (state) => state.counter.count;
export const selectNumberToIncrement = (state) => state.counter.numberToIncrement;

export default counterSlice.reducer;