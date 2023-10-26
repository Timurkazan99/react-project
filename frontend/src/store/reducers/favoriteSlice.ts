/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FavoriteState } from '../../types';
import initFavorites from '../thunks/favorites';

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
  extraReducers: {
    [initFavorites.fulfilled.type]: (state, action: PayloadAction<string[]>) => action.payload,
  },
});

export default favoriteSlice.reducer;
export const { setFavoriteCountry, addFavoriteCountry } = favoriteSlice.actions;
