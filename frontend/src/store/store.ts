import { configureStore, combineReducers } from '@reduxjs/toolkit';
import user from './reducers/userSlice';
import country from './reducers/countrySlice';
import modal from './reducers/modalSlice';

const rootReducer = combineReducers({
  country,
  user,
  modal,
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
