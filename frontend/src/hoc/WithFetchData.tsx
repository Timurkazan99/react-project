import { Attributes, ComponentType, useEffect } from 'react';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '../store';
import Loader from '../components/Loader';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UseAction = () => AsyncThunkAction<any, any, any>;

function WithFetchData <T extends Attributes>(
  WrappedComponent: ComponentType<T>,
  useAction: UseAction,
) {
  function ComponentWithFetchData(props: T) {
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector((state) => state.country.isLoading);
    const action = useAction();

    useEffect(() => {
      const promise = dispatch(action);

      return () => promise.abort();
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
