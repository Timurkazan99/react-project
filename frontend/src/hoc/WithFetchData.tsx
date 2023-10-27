import { Attributes, ComponentType, useEffect } from 'react';
import { AppDispatch, useAppDispatch, useAppSelector } from '../store';
import Loader from '../components/Loader';

type FetchData = (dispatch: AppDispatch) => void;

function WithFetchData <T extends Attributes>(
  WrappedComponent: ComponentType<T>,
  fetch: FetchData,
) {
  function ComponentWithFetchData(props: T) {
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector((state) => state.country.isLoading);

    useEffect(() => {
      fetch(dispatch);
    }, []);

    if (isLoading) {
      return (
        <Loader />
      );
    }

    return (
      <WrappedComponent {...(props as T)} />
    );
  }

  ComponentWithFetchData.displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  return ComponentWithFetchData;
}

export default WithFetchData;
