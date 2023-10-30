import { RootState } from '../store';

// Получить юзера
// eslint-disable-next-line import/prefer-default-export
export const getUser = (state: RootState) => state.user;
