import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import { addHistory } from '../../store';
import { SEARCH } from '../../utils/const';
import { useAppDispatch } from '../../hooks/redux';
import { useSearchContext } from '../Search/hooks';

function SearchSubmit() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { search, type } = useSearchContext();

  const submitHandler = () => {
    dispatch(addHistory({
      type,
      search,
      timestamp: Date.now(),
    }));

    navigate({
      pathname: SEARCH,
      search: createSearchParams({
        page: '1',
        limit: String(searchParams.get('limit')),
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
