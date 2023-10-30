import { Attributes, ComponentType, useEffect } from 'react';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import {
  useAppDispatch, useAppSelector,
} from '../store';
import Loader from '../components/Loader';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UseAction = () => AsyncThunkAction<any, any, any>;

function WithFetchData <T extends Attributes>(
  WrappedComponent: ComponentType<T>,
  useAction: UseAction,
) {
  function ComponentWithFetchData(props: T) {
    const dispatch = useAppDispatch();
    const countryIsLoading = useAppSelector((state) => state.country.isLoading);
    const userIsLoading = useAppSelector((state) => state.user.isLoading);
    const action = useAction();

    useEffect(() => {
      if (!userIsLoading) {
        const promise = dispatch(action);

        return () => promise.abort();
      }

      return () => {};
    }, [userIsLoading]);

    if (countryIsLoading) {
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
