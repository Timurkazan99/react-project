import { RootState } from '../store';

//
export const getAllHistory = (state: RootState) => {
    return state.historyReducer.history;
};

// export const getHistory = (state: RootState, )