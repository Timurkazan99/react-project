import { Attributes, ComponentType, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { LIMIT } from '../utils';

function WithPagination <T extends Attributes>(
  WrappedComponent: ComponentType<T>,
) {
  function ComponentWithPagination(props: T) {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    useEffect(() => {
      let page = Number(searchParams.get('page'));
      let limit = Number(searchParams.get('limit'));

      page = page <= 0 ? 1 : page;
      limit = limit <= 0 ? LIMIT : limit;

      setSearchParams((prev) => {
        prev.set('page', String(page));
        prev.set('limit', String(limit));
        return prev;
      }, { replace: true, state: location.state });
    }, [searchParams]);

    return (
      <WrappedComponent {...(props as T)} />
    );
  }

  ComponentWithPagination.displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  return ComponentWithPagination;
}

export default WithPagination;
