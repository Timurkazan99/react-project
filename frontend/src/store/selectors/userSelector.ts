import { RootState } from '../store';

// Получить юзера
const getUser = (state: RootState) => state.user;

export default getUser;
