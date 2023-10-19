import { RootState } from '../store';

//получить исторю массив
export const getAllHistory = (state: RootState) => {
    return state.historyReducer.history;
};

