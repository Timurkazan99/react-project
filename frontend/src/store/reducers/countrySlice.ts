import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Country } from '../../models/country';


interface CountryState {
    countries: Country[]
    isLoading: boolean
    error: string
}

const initialState: CountryState = {
    countries: [],
    isLoading: false,
    error: '',
};

export const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        countryFetching(state) {
            state.isLoading = true;
        },
        countryFetchingSuccess(state, action: PayloadAction<Country[]>) {
            state.isLoading = false;
            state.error = '';
            state.countries = action.payload;
        },
        countryFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export default countrySlice.reducer;
