import {
  createContext, useContext, useState,
} from 'react';
import { Context } from './type';
import { getEnumKeyByString, INPUT_DELAY } from '../../../utils';
import { Country, SearchSelectTypes, SearchSelectKeys } from '../../../types';
import useDebounce from '../../../hooks/useDebounce';
import { getSearchedCountries } from '../../../API';

/* eslint-disable @typescript-eslint/no-unused-vars */
const SearchContext = createContext<Context>({
  search: '',
  setSearch: (newValue) => {},
  type: 'name',
  setType: (newValue) => {},
  results: [],
  setResults: (newValue) => {},
});
/* eslint-enable @typescript-eslint/no-unused-vars */

const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('Error in creating the context');
  }
  return context;
};

const useGetContextValue = (initType: SearchSelectKeys, initStr: string) => {
  const [results, setResults] = useState<Country[]>([]);
  const [search, setSearch] = useState<string>(initStr);
  const [type, setType] = useState<SearchSelectKeys>(initType);

  const getResults = useDebounce(async (bindType: SearchSelectKeys, bindSearch: string) => {
    if (bindSearch) {
      try {
        const data = await getSearchedCountries(bindType, bindSearch);
        setResults(data.slice(0, 5));
      } catch (e) {
        setResults([]);
      }
    }
  }, INPUT_DELAY);

  const setSearchWithSuggest = (str: string) => {
    setSearch(str);
    getResults(type, str);
  };

  const setTypeWithCasting = (str: string) => {
    const newValue = getEnumKeyByString(SearchSelectTypes, str);
    setType(newValue);
    getResults(newValue, search);
  };

  return {
    results,
    setResults,
    search,
    setSearch: setSearchWithSuggest,
    type,
    setType: setTypeWithCasting,
  };
};

export { useSearchContext, SearchContext, useGetContextValue };
