/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FavoriteState } from '../../types';
import fetchFavorites from '../thunks/favorites';

const initialState: FavoriteState = [];

type FavoritePayload = {
  login: string,
  cca3: string
}

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setFavoriteCountry(state, action: PayloadAction<string[]>) {
      return action.payload;
    },
    addFavoriteCountry(state, action: PayloadAction<FavoritePayload>) {
      const { login, cca3 } = action.payload
      const newState = state.concat(cca3);
      localStorage.setItem(`${login}_favorite`, newState)
      return newState
    },
    deleteFavoriteCountry(state, action: PayloadAction<FavoritePayload>) {
      const { login, cca3 } = action.payload
      const newState = state.filter(item => item !== cca3);
      localStorage.setItem(`${login}_favorite`, newState)
      return newState
    },
  },
  extraReducers: {
    [fetchFavorites.fulfilled.type]: (state, action: PayloadAction<string[]>) => action.payload,
  },
});

export default favoriteSlice.reducer;
export const { setFavoriteCountry, addFavoriteCountry, deleteFavoriteCountry } = favoriteSlice.actions;
