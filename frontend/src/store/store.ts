import { configureStore, combineReducers } from '@reduxjs/toolkit';
import countryReducer from './reducers/countrySlice';
import userReducer from './reducers/userSlice';
import historyReducer from './reducers/historySlice';
import favoriteReducer from './reducers/favoriteSlice';


const rootReducer = combineReducers({
    countryReducer,
    userReducer,
    historyReducer,
    favoriteReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    });
};

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']


// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//     ReturnType,
//     RootState,
//     unknown,
//     Action<string>
// >;
