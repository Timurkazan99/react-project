import { useEffect } from 'react';
import SearchForm from '../components/Search';
import CountryList from '../components/CountryList';
import PageList from '../components/PageList/PageList';
import { WithPagination, WithFetchData } from '../hoc';
import { fetchSearchedCountries, useAppDispatch } from '../store';
import UseGetSearchParams from '../hooks/useGetSearchParams';

const useFetch = () => {
  const { type, search } = UseGetSearchParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchSearchedCountries({ type, search }));
  }, [type, search]);
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

export default WithPagination(WithFetchData(Search, useFetch));
