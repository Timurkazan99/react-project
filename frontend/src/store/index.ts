import { useAppDispatch, useAppSelector } from './hooks/redux';
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
import { setupStore } from './store';

// coutryReduser
export { getCountriesPaginat };
export { getAllCoutries };
export { getOneCountry };
export { fetchAllCountry };
export { fetchOneCountry };
export { getMaxPage };

// historyReducer
export { setHistory, addHistory };
export { getAllHistory };

// favoriteReducer
export { addFavoriteCountry, setFavoriteCountry };
export { getFavoriteCountries };

// userReducer
export { deleteUser };
export { getUser };
export { setUser };

// redux
export { useAppDispatch, useAppSelector };
export { type RootState, type AppDispatch };
export { setupStore };
