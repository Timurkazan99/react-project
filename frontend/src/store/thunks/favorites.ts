import { createAsyncThunk } from '@reduxjs/toolkit';
import { decodeToken } from '../../AUTH';

const fetchFavorites = createAsyncThunk(
  'favorite/initFavorites',
  async () => {
    const token = localStorage.getItem('sessionStorage');
    if (!token) {
      return [];
    }
    const { login } = decodeToken(token);
    const favorite = localStorage.getItem(`${login}_favorite`);
    if (!favorite) {
      return [];
    }
    return JSON.parse(favorite);
  },
);

export default fetchFavorites;
