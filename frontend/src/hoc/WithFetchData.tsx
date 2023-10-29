import { Attributes, ComponentType } from 'react';
import { useAppSelector } from '../store';
import Loader from '../components/Loader';

type UseFetchData = () => void;

function WithFetchData <T extends Attributes>(
  WrappedComponent: ComponentType<T>,
  useFetchData: UseFetchData,
) {
  function ComponentWithFetchData(props: T) {
    const isLoading = useAppSelector((state) => state.country.isLoading);
    useFetchData();

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
