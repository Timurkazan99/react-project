import { AppDispatch } from '../store';
import { countrySlice } from '../reducers/countrySlice';
import { Country } from '../../models/country';
import { getErrorMessage } from '../../utils/helper';

export const fetchCountry = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(countrySlice.actions.countriesFetching());
        const response =   [] as Country[];  // вместо этой строки - выборка Axios
        dispatch(countrySlice.actions.countriesFetchingSuccess(response));
    } catch (e) {
        dispatch(countrySlice.actions.countriesFetchingError(getErrorMessage(e)));
    }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const fetchCountryById = (_id: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(countrySlice.actions.countryFetchingById());
        const response =   null;  // вместо этой строки - выборка Axios
        dispatch(countrySlice.actions.countryFetchingByIdSuccess(response));
    } catch (e) {
        dispatch(countrySlice.actions.countryFetchingByIdError(getErrorMessage(e)));
    }
};
