import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Country } from '../../models/country';


interface FavoriteState {
    favorite: Country[]
}

const initialState: FavoriteState = {
    favorite: []
};

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        initFavoriteCountry(state, action: PayloadAction<Country[]>) {
            state.favorite = action.payload;
        },
        addFavoriteCoutery(state, action: PayloadAction<Country>) {
            state.favorite = state.favorite.concat(action.payload);
        },
    }
});

export default favoriteSlice.reducer;
