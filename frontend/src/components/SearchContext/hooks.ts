import {
  createContext, useCallback, useContext, useMemo, useState,
} from 'react';
import { Context } from './type';
import getEnumKeyByString from '../../utils/getEnumKeyByString';
import { Country, SearchSelectTypes, SearchSelectKeys } from '../../types';

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

  const memoSetResult = useCallback(setResults, []);
  const memoSetSearch = useCallback(setSearch, []);
  const memoSetType = useCallback((str: string) => {
    const newValue = getEnumKeyByString(SearchSelectTypes, str);
    setType(newValue);
  }, []);

  return useMemo(() => ({
    search,
    setSearch: memoSetSearch,
    type,
    setType: memoSetType,
    results,
    setResults: memoSetResult,
  }), [search, type, results]);
};

export { useSearchContext, SearchContext, useGetContextValue };
