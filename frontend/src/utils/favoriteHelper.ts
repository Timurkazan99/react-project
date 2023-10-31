export const getCountriesFromLocalStorage = (login: string): string[] => {
  const countriesId = localStorage.getItem(`${login}_favorite`);
  if (!countriesId) return [];
  return JSON.parse(countriesId) as string[];
};

export const addFavoriteCountry = (cca: string, login: string): void => {
  const countries = getCountriesFromLocalStorage(login);
  countries.push(cca);
  localStorage.setItem(`${login}_favorite`, JSON.stringify(countries));
};

export const deleteFavoriteCountry = (cca: string, login: string) => {
  const countries = getCountriesFromLocalStorage(login);
  const filtredCountry = countries.filter((e) => e !== cca);
  localStorage.setItem(`${login}_favorite`, JSON.stringify(filtredCountry));
};
