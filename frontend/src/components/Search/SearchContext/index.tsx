import { getEnumKeyByString } from '../../../utils';
import { SearchSelectTypes } from '../../../types';
import UseGetSearchParams from '../../../hooks/useGetSearchParams';
import { useGetContextValue, SearchContext as Context } from './hooks';
import { Props } from './type';

export { useSearchContext } from './hooks';

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
