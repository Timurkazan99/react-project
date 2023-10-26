import { Attributes, ComponentType } from 'react';
import { Navigate } from 'react-router-dom';
import { SIGNIN } from '../utils';
import { getIsAuth, useAppSelector } from '../store';

function WithAuth <T extends Attributes>(
  WrappedComponent: ComponentType<T>,
) {
  function ComponentWithAuth(props: T) {
    const isAuth = useAppSelector(getIsAuth);

    if (isAuth) {
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <WrappedComponent {...(props as T)} />;
    }

    return <Navigate to={SIGNIN} replace />;
  }

  ComponentWithAuth.displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  return ComponentWithAuth;
}

export default WithAuth;
