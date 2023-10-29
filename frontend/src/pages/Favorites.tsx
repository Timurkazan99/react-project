import { useEffect } from 'react';
import CountryList from '../components/CountryList';
import PageList from '../components/PageList';
import { WithPagination, WithFetchData, WithAuth } from '../hoc';
import { fetchFavoritesCountries, useAppDispatch } from '../store';

const useFetch = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavoritesCountries());
  }, []);
};

function Favorites() {
  return (
    <div className="favorites__container flex-col-100">
      <CountryList />
      <PageList />
    </div>
  );
}

export default WithAuth(WithPagination(WithFetchData(Favorites, useFetch)));
