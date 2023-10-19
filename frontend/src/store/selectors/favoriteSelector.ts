import { RootState } from '../store';

//выборка любимых стран
export const getFavoriteCountries = (state: RootState) => {
    return state.favoriteReducer.favorite;
};