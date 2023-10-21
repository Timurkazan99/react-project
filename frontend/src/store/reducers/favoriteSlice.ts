/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FavoriteState } from '../../types';

const initialState: FavoriteState = [];

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setFavoriteCountry(state, action: PayloadAction<string[]>) {
      return action.payload;
    },
    addFavoriteCountry(state, action: PayloadAction<string>) {
      return state.concat(action.payload);
    },
  },
});

export default favoriteSlice.reducer;
export const { setFavoriteCountry, addFavoriteCountry } = favoriteSlice.actions;
