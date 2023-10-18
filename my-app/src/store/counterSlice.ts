import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState} from './store';


export interface CounterState {
    value: [];
}

const initialState: CounterState = {
    value: [],
};

export const counterSlice = createSlice({
    name: 'coutries',
    initialState,
    reducers: {

        initCountries: (state, action: PayloadAction<[]>) => {
            state.value = action.payload;
        },
    },  
});

export const { initCountries } = counterSlice.actions;

//функция для useSelector
export const selectCoutries = (state: RootState) => state.counter.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.


export default counterSlice.reducer;