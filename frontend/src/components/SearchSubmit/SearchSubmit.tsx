import { createSearchParams, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { addHistory } from '../../store';
import { SEARCH } from '../../utils/const';
import { useAppDispatch } from '../../hooks/redux';
import { useSearchContext } from '../SearchContext';
import UseGetSearchParams from '../../hooks/useGetSearchParams';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { Props } from './type';
import useGetAuth from '../../hooks/useGetAuth';

function SearchSubmit(props: Props) {
  const { searchRef } = props;
  const { limit } = UseGetSearchParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { search, type, setResults } = useSearchContext();
  const auth = useGetAuth();

  const suggestClose = useCallback(() => {
    setResults([]);
  }, []);

  useOnClickOutside(searchRef, suggestClose);

  const submitHandler = () => {
    if (auth) {
      dispatch(addHistory({
        type,
        search,
        timestamp: Date.now(),
      }));
    }

    navigate({
      pathname: SEARCH,
      search: createSearchParams({
        page: '1',
        limit: String(limit),
        type,
        search,
      }).toString(),
    });
  };

  return (
    <button
      type="button"
      className="search__submit"
      onClick={submitHandler}
    >
      Найти
    </button>
  );
}

export default SearchSubmit;
