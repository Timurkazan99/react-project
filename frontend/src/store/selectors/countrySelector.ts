import { RootState } from '../store';

export const getAllCoutries = (state: RootState) => state.country.AllCountries;

export const getOneCountry = (state: RootState, cca3: string) => {
  state.country.AllCountries.find((c) => c.cca3 === cca3);
};

// пагинация
export const getCountriesPaginat = (state: RootState, page: number, limit: number) => {
  if (page < 1) {
    return [];
  }
  const start = (page - 1) * limit;
  const end = start + limit;

  return state.country.AllCountries.slice(start, end);
};

// eslint-disable-next-line  max-len
export const getMaxPage = ({ country }: RootState, limit: number) => Math.ceil(country.AllCountries.length / limit);
