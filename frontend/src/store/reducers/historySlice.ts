/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HistoryState, History } from '../../types';
import fetchHistory from '../thunks/history';

const initialState: HistoryState = [];

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setHistory(state, action: PayloadAction<History[]>) {
      return action.payload;
    },
    addHistory(state, action: PayloadAction<History>) {
      return state.concat(action.payload);
    },
  },
  extraReducers: {
    [fetchHistory.fulfilled.type]: (state, action: PayloadAction<History[]>) => action.payload,
  },
});

export default historySlice.reducer;
export const { setHistory, addHistory } = historySlice.actions;
