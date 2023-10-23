import { Attributes, ComponentType, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LIMIT } from '../utils/const';

function WithPagination <T extends Attributes>(
  WrappedComponent: ComponentType<T>,
) {
  function ComponentWithPagination(props: T) {
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
      let page = Number(searchParams.get('page'));
      let limit = Number(searchParams.get('limit'));

      page = page <= 0 ? 1 : page;
      limit = limit <= 0 ? LIMIT : limit;

      setSearchParams((prev) => {
        prev.set('page', String(page));
        prev.set('limit', String(limit));
        return prev;
      }, { replace: true });
    }, []);

    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <WrappedComponent {...(props as T)} />
    );
  }

  ComponentWithPagination.displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  return ComponentWithPagination;
}

export default WithPagination;
