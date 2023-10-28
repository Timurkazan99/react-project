/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Country, CountryState, FullCountry } from '../../types';
import { fetchAllCountry, fetchFavoritesCountries, fetchOneCountry } from '../thunks/country';
import { PayloadActionWithError } from '../../types/types';

const initialState: CountryState = {
  oneCountry: null,
  AllCountries: [],
  isLoading: false,
  error: '',
};

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllCountry.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchAllCountry.fulfilled.type]: (state, action: PayloadAction<Country[]>) => {
      state.isLoading = false;
      state.error = '';
      state.AllCountries = action.payload;
    },
    [fetchAllCountry.rejected.type]: (state, action: PayloadActionWithError) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [fetchOneCountry.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchOneCountry.fulfilled.type]: (state, action: PayloadAction<FullCountry | null>) => {
      state.isLoading = false;
      state.error = '';
      state.oneCountry = action.payload;
    },
    [fetchOneCountry.rejected.type]: (state, action: PayloadActionWithError) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [fetchFavoritesCountries.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchFavoritesCountries.fulfilled.type]: (state, action: PayloadAction<Country[]>) => {
      state.isLoading = false;
      state.error = '';
      state.AllCountries = action.payload;
    },
    [fetchFavoritesCountries.rejected.type]: (state, action: PayloadActionWithError) => {
      state.isLoading = false;
      state.error = action.error;
    },
  },
});

export default countrySlice.reducer;
