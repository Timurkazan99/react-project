import { RootState } from '../store';

//выборка любимых стран
export const getFavoriteCountries = (state: RootState) => {
    return state.favoriteReducer.countryId;
};

// //выборка одной любимой страны
// export const getOneFavoriteCountry = (state: RootState, cca3: string) => {
//     return state.favoriteReducer.favorite.find(c => c.cca3 === cca3);
// };