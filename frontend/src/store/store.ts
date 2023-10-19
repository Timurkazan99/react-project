import { configureStore, combineReducers } from '@reduxjs/toolkit';
import countryReduser from './reducers/countrySlice';


const rootReduser = combineReducers({
    countryReduser
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReduser
    });
};

export type RootState = ReturnType<typeof rootReduser>
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
