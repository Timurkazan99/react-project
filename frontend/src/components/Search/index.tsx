import { useRef } from 'react';
import SearchInput from './SearchInput';
import SearchSuggest from './SearchSuggest';
import SearchSelect from './SearchSelect';
import SearchSubmit from './SearchSubmit';
import SearchContext from './SearchContext';
import './Search.scss';

function Search() {
  const searchRef = useRef<HTMLDivElement>(null);

  return (
    <div className="search__container" ref={searchRef}>
      <SearchContext>
        <div className="search__group">
          <SearchSelect />
          <SearchInput />
          <SearchSubmit />
        </div>
        <SearchSuggest searchRef={searchRef} />
      </SearchContext>
    </div>
  );
}

export default Search;
