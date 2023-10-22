import React from 'react';
import getEnumKeyByString from '../../../utils/getEnumKeyByString';
import { SearchSelectTypes } from '../../../types';
import UseGetSearchParams from '../../../hooks/useGetSearchParams';
import { useGetContextValue, SearchContext as Context } from './hooks';
import { Props } from './type';

function SearchContext(props: Props) {
  const { children } = props;
  const { type, search } = UseGetSearchParams();
  const initType = getEnumKeyByString(SearchSelectTypes, type);
  const contextValue = useGetContextValue(initType, search);

  return (
    <Context.Provider
      value={contextValue}
    >
      {children}
    </Context.Provider>
  );
}

export default SearchContext;
