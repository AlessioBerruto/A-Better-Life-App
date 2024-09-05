
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    time: 0, 
    isActive: false, 
};

export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        setTime: (state, action) => {
            state.time = action.payload;
        },
        startTimer: (state) => {
            state.isActive = true;
        },
        stopTimer: (state) => {
            state.isActive = false;
        },
        decrementTime: (state) => {
            if (state.time > 0) {
                state.time -= 1;
            } else {
                state.isActive = false;
            }
        },
        resetTimer: (state) => {
            state.time = 0;
            state.isActive = false;
        },
    },
});

export const { setTime, startTimer, stopTimer, decrementTime, resetTimer } = timerSlice.actions;

export default timerSlice.reducer;
