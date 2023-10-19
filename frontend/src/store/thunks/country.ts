import { AppDispatch } from '../store';
import { countrySlice } from '../reducers/countrySlice';
import { getErrorMessage } from '../../utils/helper';
import { getAll, getById } from '../../API';


//выборка всех стран
export const fetchCountry = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(countrySlice.actions.countriesFetching());
        const data = await getAll();
        dispatch(countrySlice.actions.countriesFetchingSuccess(data));
    } catch (e) {
        dispatch(countrySlice.actions.countriesFetchingError(getErrorMessage(e)));
    }
};

//выборка одной страны
export const fetchCountryById = (id: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(countrySlice.actions.countryFetchingById());
        const data = await getById(id);
        dispatch(countrySlice.actions.countryFetchingByIdSuccess(data));
    } catch (e) {
        dispatch(countrySlice.actions.countryFetchingByIdError(getErrorMessage(e)));
    }
};
