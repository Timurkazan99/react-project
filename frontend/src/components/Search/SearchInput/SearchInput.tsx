import { ChangeEvent } from 'react';
import useDebounce from '../../../hooks/useDebounce';
import { useSearchContext } from '../SearchContext';
import { getSearchedCountries } from '../../../API';
import { INPUT_DELAY } from '../../../utils';

function SearchInput() {
  const {
    search, type, setSearch, setResults,
  } = useSearchContext();

  const getResults = useDebounce(async (bindSearch) => {
    if (bindSearch) {
      try {
        const data = await getSearchedCountries(type, bindSearch);
        setResults(data.slice(0, 4));
      } catch (e) {
        setResults([]);
      }
    }
  }, INPUT_DELAY);

  const inputHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setResults([]);
    setSearch(value);
    getResults(value);
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
