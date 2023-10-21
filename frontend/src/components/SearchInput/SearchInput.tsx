import { ChangeEvent } from 'react';
import useDebounce from '../../hooks/useDebounce';
import { useSearchContext } from '../SearchContext';
import { findAll } from '../../API';
import { INPUT_DELAY } from '../../utils/const';

function SearchInput() {
  const {
    search, type, setSearch, setResults,
  } = useSearchContext();

  const getResults = useDebounce(async () => {
    const data = await findAll(type, search);
    setResults(data.slice(0, 4));
  }, INPUT_DELAY);

  const inputHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setResults([]);
    setSearch(value);
    getResults();
  };

  return (
    <input
      className="search__input"
      type="text"
      value={search}
      onChange={inputHandler}
    />
  );
}

export default SearchInput;
