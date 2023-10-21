import { configureStore, combineReducers } from '@reduxjs/toolkit';
import country from './reducers/countrySlice';
import user from './reducers/userSlice';
import history from './reducers/historySlice';
import favorite from './reducers/favoriteSlice';

const rootReducer = combineReducers({
  country,
  user,
  history,
  favorite,
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
