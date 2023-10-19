import { RootState } from '../store';

//пагинация
export const getCounties = (state: RootState, page: number, LIMIT: number) => {
    if (page < 1) {
        return null;
    }
    const start = (page - 1) * LIMIT;
    const end = start + LIMIT;

    return state.countryReducer.countries.slice(start, end);
};