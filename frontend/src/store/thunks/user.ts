import { createAsyncThunk } from '@reduxjs/toolkit';
import { decodeToken } from '../../AUTH';

const setUser = createAsyncThunk(
  'user/setUser',
  async () => {
    const token = localStorage.getItem('sessionStorage');
    if (!token) {
      return { login: '', password: '' };
    }
    const { login, password } = decodeToken(token);
    return { login, password };
  },
);

export default setUser;
