import { RootState } from '../store';

//получить массив истории
export const getAllHistory = (state: RootState) => {
    return state.historyReducer.history;
};

