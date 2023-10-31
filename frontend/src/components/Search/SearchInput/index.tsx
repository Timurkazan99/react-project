import { ChangeEvent } from 'react';
import { useSearchContext } from '../SearchContext';

function SearchInput() {
  const {
    search, setSearch, setResults,
  } = useSearchContext();

  const inputHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setResults([]);
    setSearch(value);
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
