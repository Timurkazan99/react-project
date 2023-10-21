import { RootState } from '../store';

// выборка любимых стран
const getFavoriteCountries = (state: RootState) => {
  const countries = state.country.AllCountries;
  const favorites = state.favorite;
  return favorites.map((e) => countries.find((c) => c.cca3 === e));
};

export default getFavoriteCountries;
