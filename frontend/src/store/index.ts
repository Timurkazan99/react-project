import { addFavoriteCountry, setFavoriteCountry } from './reducers/favoriteSlice';
import { setHistory, addHistory } from './reducers/historySlice';
import { deleteUser } from './reducers/userSlice';
import {
  getAllCoutries, getCountriesPaginat, getOneCountry, getMaxPage,
} from './selectors/countrySelector';
import getFavoriteCountries from './selectors/favoriteSelector';
import getAllHistory from './selectors/historySelector';
import getUser from './selectors/userSelector';
import type { RootState, AppDispatch } from './store';
import { fetchAllCountry, fetchOneCountry } from './thunks/country';
import setUser from './thunks/user';

// coutryReduser
export { getCountriesPaginat };
export { getAllCoutries };
export { getOneCountry };
export { fetchAllCountry };
export { fetchOneCountry };
export { getMaxPage };

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
