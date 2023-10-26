// countryReducer
import getAllHistory from './selectors/historySelector';
import getFavoriteCountries from './selectors/favoriteSelector';
import getUser from './selectors/userSelector';

export { fetchAllCountry, fetchOneCountry } from './thunks/country';
export {
  getAllCoutries, getCountriesPaginat, getOneCountry, getMaxPage,
} from './selectors/countrySelector';

// historyReducer
export { setHistory, addHistory } from './reducers/historySlice';
export { getAllHistory };

// favoriteReducer
export { addFavoriteCountry, setFavoriteCountry } from './reducers/favoriteSlice';
export { getFavoriteCountries };

// userReducer
export { deleteUser, setUser } from './reducers/userSlice';
export { getUser };

// redux
export { useAppDispatch, useAppSelector } from './hooks/redux';
export { type RootState, type AppDispatch, setupStore } from './store';
