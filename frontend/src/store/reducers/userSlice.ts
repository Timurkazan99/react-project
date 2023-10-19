import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User, UserState } from '../../types/types';

const initialState: UserState = {
    user: null
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser(state, action: PayloadAction<User>) {
            state.user = action.payload;
        },
        deleteUser(state) {
            state.user = null
        }
    }
});

export default userSlice.reducer;