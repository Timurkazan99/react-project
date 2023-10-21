import { useSearchParams } from 'react-router-dom';
import { useCallback, useRef } from 'react';
import SearchInput from '../SearchInput';
import SearchSuggest from '../SearchSuggest';
import { SearchContext, useGetContextValue } from './hooks';
import { SearchSelectTypes } from '../../types';
import getEnumKeyByString from '../../utils/getEnumKeyByString';
import SearchSelect from '../SearchSelect';
import SearchSubmit from '../SearchSubmit';
import useOnClickOutside from '../../hooks/useOnClickOutside';

function Search() {
  const [searchParams] = useSearchParams();

  const suggestsRef = useRef<HTMLDivElement>(null);

  const strType = String(searchParams.get('type'));
  const initType = getEnumKeyByString(SearchSelectTypes, strType);
  const initStr = searchParams.get('search') ?? '';

  const contextValue = useGetContextValue(initType, initStr);

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
