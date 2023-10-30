/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HistoryState, History, HistoryPayload } from '../../types';
import fetchHistory from '../thunks/history';

const initialState: HistoryState = [];

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setHistory(state, action: PayloadAction<History[]>) {
      return action.payload;
    },
    addHistory(state, action: PayloadAction<HistoryPayload>) {
      const { login, history } = action.payload;
      const newState = state.concat(history);
      localStorage.setItem(`${login}_history`, JSON.stringify(newState));
      return newState;
    },
  },
  extraReducers: {
    [fetchHistory.fulfilled.type]: (state, action: PayloadAction<History[]>) => action.payload,
  },
});

export default historySlice.reducer;
export const { setHistory, addHistory } = historySlice.actions;
