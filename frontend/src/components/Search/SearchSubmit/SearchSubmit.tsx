import { createSearchParams, useNavigate } from 'react-router-dom';
import { addHistory } from '../../../store';
import { SEARCH } from '../../../utils/const';
import { useAppDispatch } from '../../../hooks/redux';
import { useSearchContext } from '../SearchContext';
import UseGetSearchParams from '../../../hooks/useGetSearchParams';
import useGetAuth from '../../../hooks/useGetAuth';

function SearchSubmit() {
  const { limit } = UseGetSearchParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { search, type } = useSearchContext();
  const auth = useGetAuth();

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
      Find
    </button>
  );
}

export default SearchSubmit;
