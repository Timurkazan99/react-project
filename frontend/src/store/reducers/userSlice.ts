/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserState } from '../../types';

const initialState: UserState = {
  login: '',
  password: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      return action.payload;
    },
    deleteUser(state) {
      state.login = '';
      state.password = '';
    },
  },
});

export default userSlice.reducer;
export const { setUser, deleteUser } = userSlice.actions;
