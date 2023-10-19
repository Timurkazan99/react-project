import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface History {
    type: string
    search: string
    timeStamp: number
}

interface HistoryState {
    history: History[]
}

const initialState: HistoryState = {
    history: []
};

export const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        initHistory(state, action: PayloadAction<History[]>) {
            state.history = action.payload;
        },
        addHistory(state, action: PayloadAction<History>) {
            state.history = state.history.concat(action.payload);
        },
    }
});

export default historySlice.reducer;
