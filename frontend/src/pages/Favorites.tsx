import CountryList from '../components/CountryList';
import PageList from '../components/PageList';
import { WithPagination, WithFetchData, WithAuth } from '../hoc';
import { fetchFavoritesCountries } from '../store';

const useAction = () => fetchFavoritesCountries();

function Favorites() {
  return (
    <div className="favorites__container flex-col-100">
      <CountryList />
      <PageList />
    </div>
  );
}

export default WithAuth(WithPagination(WithFetchData(Favorites, useAction)));
