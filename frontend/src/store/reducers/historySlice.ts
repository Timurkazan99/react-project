import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HistoryState } from '../../types/types';
import { History } from '../../types/types';

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
