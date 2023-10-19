import { RootState } from '../store';

//Получить юзера
export const getUser = (state: RootState) => {
    return state.userReducer.user;
};