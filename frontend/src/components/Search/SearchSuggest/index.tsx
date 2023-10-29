import { Link } from 'react-router-dom';
import { MouseEvent, useCallback } from 'react';
import { useSearchContext } from '../SearchContext';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import { Props } from './type';
import useUpdateHistory from '../../../hooks/useUpdateHistory';

function SearchSuggest(props: Props) {
  const { searchRef } = props;
  const {
    type, search, results, setResults,
  } = useSearchContext();
  const updateHistory = useUpdateHistory();

  const suggestClose = useCallback(() => {
    setResults([]);
  }, [setResults]);

  const clickHandler = (event: MouseEvent<HTMLElement>) => {
    const { target } = event;
    console.log(target instanceof HTMLAnchorElement);
    if (target instanceof HTMLAnchorElement) {
      updateHistory(type, search);
    }
  };

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

  /* eslint-disable
  jsx-a11y/click-events-have-key-events,
  jsx-a11y/no-noninteractive-element-interactions,
  jsx-a11y/no-static-element-interactions
  */
  return (
    <div className="search__suggests" onClick={clickHandler}>
      {suggests}
    </div>
  );
  /* eslint-enable
  jsx-a11y/click-events-have-key-events,
  jsx-a11y/no-noninteractive-element-interactions,
  jsx-a11y/no-static-element-interactions
  */
}

export default SearchSuggest;
