import { useEffect } from 'react';
import Search from '../components/Search';
import CountryList from '../components/CountryList';
import PageList from '../components/PageList/PageList';
import { WithPagination, WithFetchData } from '../hoc';
import { fetchAllCountry, useAppDispatch } from '../store';

const useFetch = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllCountry());
  }, []);
};

function Main() {
  return (
    <div className="main__container flex-col-100">
      <Search />
      <CountryList />
      <PageList />
    </div>
  );
}

export default WithPagination(WithFetchData(Main, useFetch));
