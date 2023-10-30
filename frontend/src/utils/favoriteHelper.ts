import { RootState } from '../store';

export const getCountriesFromLocalStorage = (login: string): null | string[] => {
  const countriesId = localStorage.getItem(`${login}_favorite`);
  if (!countriesId) return null;
  return JSON.parse(countriesId) as string[];
};

export const getFavoriteCountries = (state: RootState) => {
  const countries = state.country.AllCountries;
  const favorites = state.favorite;
  return favorites.map((e) => countries.find((c) => c.cca3 === e));
};

export const addFavoriteCountry = (cca: string, login: string): void => {
  const countries = getCountriesFromLocalStorage(login);
  if (!countries) return;
  countries.push(cca);
  localStorage.setItem(`${login}_favorite`, JSON.stringify(countries));
};

export const deleteFavoriteCountry = (cca: string, login: string) => {
  const countries = getCountriesFromLocalStorage(login);
  if (!countries) return;
  const filtredCountry = countries.filter((e) => e !== cca);
  localStorage.setItem(`${login}_favorite`, JSON.stringify(filtredCountry));
};
