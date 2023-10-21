import { useCallback, useRef } from 'react';
import SearchInput from '../SearchInput';
import SearchSuggest from '../SearchSuggest';
import { SearchContext, useGetContextValue } from './hooks';
import { SearchSelectTypes } from '../../types';
import getEnumKeyByString from '../../utils/getEnumKeyByString';
import SearchSelect from '../SearchSelect';
import SearchSubmit from '../SearchSubmit';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import UseGetSearchParams from '../../hooks/useGetSearchParams';

function Search() {
  const { type, search } = UseGetSearchParams();

  const suggestsRef = useRef<HTMLDivElement>(null);

  const initType = getEnumKeyByString(SearchSelectTypes, type);

  const contextValue = useGetContextValue(initType, search);

  const suggestClose = useCallback(() => {
    contextValue.setResults([]);
  }, []);

  useOnClickOutside(suggestsRef, suggestClose);

  return (
    <div className="search__container" ref={suggestsRef}>
      <SearchContext.Provider
        value={contextValue}
      >
        <div className="search__group">
          <SearchSelect />
          <SearchInput />
          <SearchSubmit />
        </div>
        <SearchSuggest />
      </SearchContext.Provider>
    </div>
  );
}

export default Search;
