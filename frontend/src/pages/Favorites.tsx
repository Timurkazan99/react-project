import CountryList from '../components/CountryList';
import PageList from '../components/PageList';
import { WithPagination, WithFetchData, WithAuth } from '../hoc';
import { fetchFavoritesCountries, AppDispatch } from '../store';

const fetch = (dispatch: AppDispatch) => dispatch(fetchFavoritesCountries());

function Favorites() {
  return (
    <div className="main__container">
      <CountryList />
      <PageList />
    </div>
  );
}

export default WithAuth(WithPagination(WithFetchData(Favorites, fetch)));
