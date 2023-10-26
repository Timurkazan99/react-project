import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAll, getCountryByID } from '../../API';

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
    const data = await getCountryByID(id);
    return data;
  },
);
