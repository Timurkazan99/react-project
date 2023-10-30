import Search from '../components/Search';
import CountryList from '../components/CountryList';
import PageList from '../components/PageList';
import { WithPagination, WithFetchData } from '../hoc';
import { fetchAllCountry } from '../store';

const useAction = () => fetchAllCountry();

function Main() {
  return (
    <div className="main__container flex-col-100">
      <Search />
      <CountryList />
      <PageList />
    </div>
  );
}

export default WithPagination(WithFetchData(Main, useAction));
