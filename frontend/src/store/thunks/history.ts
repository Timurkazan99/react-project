import { createAsyncThunk } from '@reduxjs/toolkit';
import { decodeToken } from '../../AUTH';

const fetchHistory = createAsyncThunk(
  'country/fetchHistory',
  async () => {
    const token = localStorage.getItem('sessionStorage');
    if (!token) {
      return [];
    }
    const { login } = decodeToken(token);
    const history = localStorage.getItem(`${login}_history`);
    if (!history) { return []; }
    return JSON.parse(history);
  },
);

export default fetchHistory;
