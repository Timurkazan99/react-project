import Search from '../components/Search';
import CountryList from '../components/CountryList';
import PageList from '../components/PageList';
import { WithPagination, WithFetchData } from '../hoc';
import { AppDispatch, fetchAllCountry } from '../store';

const fetch = () => (dispatch: AppDispatch) => dispatch(fetchAllCountry());

function Main() {
  return (
    <div className="main__container flex-col-100">
      <Search />
      <CountryList />
      <PageList />
    </div>
  );
}

export default WithPagination(WithFetchData(Main, fetch));
