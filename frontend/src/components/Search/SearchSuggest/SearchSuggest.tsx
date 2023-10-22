import { Link } from 'react-router-dom';
import { useCallback } from 'react';
import { useSearchContext } from '../SearchContext';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import { Props } from './type';

function SearchSuggest(props: Props) {
  const { searchRef } = props;
  const { results, setResults } = useSearchContext();

  const suggestClose = useCallback(() => {
    setResults([]);
  }, [setResults]);

  useOnClickOutside(searchRef, suggestClose);

  if (results.length === 0) {
    return null;
  }

  const suggests = results.map(({ cca3, name }) => (
    <Link
      key={cca3}
      to={`/${cca3}`}
    >
      {name.official}
    </Link>
  ));

  return (
    <div className="search__suggests">
      {suggests}
    </div>
  );
}

export default SearchSuggest;
