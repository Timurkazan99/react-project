import { Link } from 'react-router-dom';
import { useSearchContext } from '../Search/hooks';

function SearchSuggest() {
  const { results } = useSearchContext();

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
