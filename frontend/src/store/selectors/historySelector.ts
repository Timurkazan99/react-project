import { RootState } from '../store';

// получить массив истории
const getAllHistory = (state: RootState) => state.history;

export default getAllHistory;
