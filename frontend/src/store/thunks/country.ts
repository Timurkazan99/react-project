import { AppDispatch } from '../store';
import { countrySlice } from '../reducers/countrySlice';
import { Country } from '../../models/country';
import { getErrorMessage } from '../../utils/helper';

export const fetchCountry = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(countrySlice.actions.countryFetching());
        const response =   [] as Country[];  // вместо этой строки - выборка Axios
        dispatch(countrySlice.actions.countryFetchingSuccess(response));
    } catch (e) {
        dispatch(countrySlice.actions.countryFetchingError(getErrorMessage(e)));
    }
};