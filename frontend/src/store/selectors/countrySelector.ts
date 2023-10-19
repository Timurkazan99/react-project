import { RootState } from '../store';

//пагинация
export const getCountiesPaginat = (state: RootState, page: number, LIMIT: number) => {
    if (page < 1) {
        return null;
    }
    const start = (page - 1) * LIMIT;
    const end = start + LIMIT;

    return state.countryReducer.countries.slice(start, end);
};

// выбор одной страны
export const getOneCountry = (state: RootState, cca3: string) => {
    return state.countryReducer.countries.find(c => c.cca3 === cca3);
};
