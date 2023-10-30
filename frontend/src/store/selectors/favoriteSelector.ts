import { RootState } from '../store';

// выборка любимых стран
export const getFavoriteCountries = (state: RootState) => {
  const countries = state.country.AllCountries;
  const favorites = state.favorite;
  return favorites.map((e) => countries.find((c) => c.cca3 === e));
};

// выборка cca3 любимы[й] стран
export const getFavoriteCca3 = (state: RootState) => state.favorite;
