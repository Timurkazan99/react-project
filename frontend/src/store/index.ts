import { addFavoriteCountry, setFavoriteCountry } from './reducers/favoriteSlice';
import { setHistory, addHistory } from './reducers/historySlice';
import { deleteUser, setUser } from './reducers/userSlice';
import {
  getAllCoutries, getCountriesPaginat, getOneCountry, getMaxPage,
} from './selectors/countrySelector';
import getFavoriteCountries from './selectors/favoriteSelector';
import getAllHistory from './selectors/historySelector';
import getUser from './selectors/userSelector';
import type { RootState, AppDispatch } from './store';
import { fetchAllCountry, fetchOneCountry } from './thunks/country';

// coutryReduser
export { getCountriesPaginat };
export { getAllCoutries };
export { getOneCountry };
export { fetchAllCountry };
export { fetchOneCountry };
export { getMaxPage };

// historyReducer
export { getAllHistory };
export { setHistory };
export { addHistory };

// favoriteReducer
export { getFavoriteCountries };
export { setFavoriteCountry };
export { addFavoriteCountry };

// userReducer
export { getUser };
export { setUser };
export { deleteUser };

export type { RootState };
export type { AppDispatch };
