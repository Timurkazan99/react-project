import { createSearchParams, useNavigate } from 'react-router-dom';
import { SEARCH } from '../../../utils';
import { useSearchContext } from '../SearchContext';
import UseGetSearchParams from '../../../hooks/useGetSearchParams';
import useUpdateHistory from '../../../hooks/useUpdateHistory';

function SearchSubmit() {
  const { limit } = UseGetSearchParams();
  const { search, type } = useSearchContext();
  const navigate = useNavigate();
  const updateHistory = useUpdateHistory();

  const submitHandler = () => {
    updateHistory(type, search);

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
