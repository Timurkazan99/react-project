import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserState {
    login: string
    password: string
}

const initialState: UserState = {
    login: '',
    password: ''
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser(state, action: PayloadAction<UserState>) {
            state.login = action.payload.login;
            state.password = action.payload.password;
        },
        deleteUser(state){
            state.login = initialState.login;
            state.password = initialState.password;
        }
    }
});

export default userSlice.reducer;