import SearchForm from '../components/Search';
import CountryList from '../components/CountryList';
import PageList from '../components/PageList';
import { WithPagination, WithFetchData } from '../hoc';
import { fetchSearchedCountries } from '../store';
import UseGetSearchParams from '../hooks/useGetSearchParams';

const useAction = () => {
  const { type, search } = UseGetSearchParams();

  return fetchSearchedCountries({ type, search });
};

function Search() {
  return (
    <div className="main__container flex-col-100">
      <SearchForm />
      <CountryList />
      <PageList />
    </div>
  );
}

export default WithPagination(WithFetchData(Search, useAction));
