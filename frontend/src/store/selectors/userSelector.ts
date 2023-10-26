import { RootState } from '../store';

// Получить юзера
export const getUser = (state: RootState) => state.user;
export const getIsAuth = (state: RootState) => Boolean(state.user.login);
