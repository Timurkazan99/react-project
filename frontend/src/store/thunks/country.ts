import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAll, getById, getFavoritesCountries, getSearchedCountries,
} from '../../API';

export const fetchAllCountry = createAsyncThunk(
  'country/fetchAll',
  async () => {
    const data = await getAll();
    return data;
  },
);

export const fetchOneCountry = createAsyncThunk(
  'country/fetchOne',
  async (id: string) => {
    const data = await getById(id);
    return data;
  },
);

export const fetchFavoritesCountries = createAsyncThunk(
  'favorite/fetchFavoritesCountries',
  async (_, { getState }) => {
    const { favorite } = getState() as { favorite: string[] };
    const data = await getFavoritesCountries(favorite);
    return data;
  },
);

export const fetchSearchedCountries = createAsyncThunk(
  'country/fetchSearchedCountries',
  async (params: { type: string, search: string }) => {
    const { type, search } = params;
    const data = await getSearchedCountries(type, search);
    return data;
  },
);
