/* eslint-disable */
// countryReducer
export { fetchAllCountry, fetchOneCountry, fetchFavoritesCountries } from './thunks/country';
export {
  getAllCoutries, getCountriesPaginat, getOneCountry, getMaxPage,
} from './selectors/countrySelector';

// historyReducer
import fetchHistory from './thunks/history';
export { fetchHistory };
export { setHistory, addHistory } from './reducers/historySlice';
import getAllHistory from './selectors/historySelector';
export { getAllHistory };

// favoriteReducer
import getFavoriteCountries from './selectors/favoriteSelector';
export { getFavoriteCountries };
export { addFavoriteCountry, setFavoriteCountry } from './reducers/favoriteSlice';
import fetchFavorites from './thunks/favorites';
export { fetchFavorites };

// userReducer
import setUser from './thunks/user';
export { setUser };
export { deleteUser } from './reducers/userSlice';
export { getUser, getIsAuth } from './selectors/userSelector';

// redux
export { useAppDispatch, useAppSelector } from './hooks/redux';
export { type RootState, type AppDispatch, setupStore } from './store';
/* eslint-enable */
