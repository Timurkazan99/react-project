import { Attributes, ComponentType, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MAIN } from '../utils';

function WithAuth <T extends Attributes>(
  WrappedComponent: ComponentType<T>,
) {
  function ComponentWithAuth(props: T) {
    const isAuth = localStorage.getItem('sessionStorage');
    const navigate = useNavigate();

    useEffect(() => {
      if (!isAuth) {
        navigate(MAIN, { state: { modalOpen: true }, replace: true });
      }
    }, [isAuth]);

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <WrappedComponent {...(props as T)} />;
  }

  ComponentWithAuth.displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  return ComponentWithAuth;
}

export default WithAuth;
