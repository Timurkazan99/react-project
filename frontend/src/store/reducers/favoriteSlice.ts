import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Country, CountryId, FavoriteState } from '../../types/types';

const initialState: FavoriteState = {
    countryId: []
};

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        initFavoriteCountry(state, action: PayloadAction<CountryId[]>) {
            state.countryId = action.payload;
        },
        addFavoriteCoutery(state, action: PayloadAction<CountryId>) {
            state.countryId = state.countryId.concat(action.payload);
        },
    }
});

export default favoriteSlice.reducer;
