import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Country, CountryState } from '../../types/types';

const initialState: CountryState = {
    country: null,
    countries: [],
    isLoading: false,
    error: '',
};

export const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        countriesFetching(state) {
            state.isLoading = true;
        },
        countriesFetchingSuccess(state, action: PayloadAction<Country[]>) {
            state.isLoading = false;
            state.error = '';
            state.countries = action.payload;
        },
        countriesFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        countryFetchingById(state) {
            state.isLoading = true;
        },
        countryFetchingByIdSuccess(state, action: PayloadAction<Country | null>) {
            state.isLoading = false;
            state.error = '';
            state.country = action.payload;
        },
        countryFetchingByIdError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});

export default countrySlice.reducer;
