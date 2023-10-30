/* eslint-disable */
// countryReducer
export { fetchAllCountry, fetchOneCountry, fetchFavoritesCountries, fetchSearchedCountries } from './thunks/country';
export {
  getAllCoutries, getCountriesPaginat, getOneCountry, getMaxPage, getError,
} from './selectors/countrySelector';

// userReducer
import setUser from './thunks/user';
export { setUser };
export { deleteUser } from './reducers/userSlice';
export { getUser } from './selectors/userSelector';

// modalReducer
import getModal from './selectors/modalSelector';
export { getModal };
export {closeModal, openModal } from './reducers/modalSlice';

// redux
export { useAppDispatch, useAppSelector } from './hooks/redux';
export { type RootState, type AppDispatch, setupStore } from './store';
/* eslint-enable */
