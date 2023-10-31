/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserState } from '../../types';
import setUser from '../thunks/user';

const initialState: UserState = {
  login: '',
  password: '',
  isLoading: true,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    deleteUser(state) {
      state.login = '';
      state.password = '';
    },
  },
  extraReducers: {
    [setUser.pending.type]: (state) => {
      state.isLoading = true;
    },
    [setUser.fulfilled.type]: (state, action: PayloadAction<UserState>) => (
      { ...action.payload, isLoading: false }
    ),
  },
});

export default userSlice.reducer;
export const { deleteUser } = userSlice.actions;
