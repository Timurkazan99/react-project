import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import usePage from './hooks';
import './PageList.scss';

function PageList() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [activePage, lastPage, limit, pages] = usePage(searchParams);

  if (lastPage <= 1) {
    return null;
  }

  const navTo = (page: number) => () => {
    const newSearch = createSearchParams(searchParams);
    newSearch.set('page', String(page));
    newSearch.set('limit', String(limit));

    navigate({
      pathname: '.',
      search: newSearch.toString(),
    });
  };

  const pagesBtn = pages.map((page) => {
    const isActive = page === activePage;
    return (
      <button
        key={page}
        type="button"
        onClick={navTo(page)}
        className={isActive ? 'active' : ''}
        disabled={isActive}
      >
        {page}
      </button>
    );
  });

  return (
    <div className="page__container">
      <button
        type="button"
        disabled={activePage === 1}
        onClick={navTo(activePage - 1)}
      >
        {'<<'}
      </button>
      {pagesBtn}
      <button
        type="button"
        disabled={activePage === lastPage}
        onClick={navTo(activePage + 1)}
      >
        {'>>'}
      </button>
    </div>
  );
}

export default PageList;
