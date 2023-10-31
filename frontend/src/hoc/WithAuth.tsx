import { Attributes, ComponentType, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MAIN } from '../utils';
import { getUser, useAppSelector } from '../store';

function WithAuth <T extends Attributes>(
  WrappedComponent: ComponentType<T>,
) {
  function ComponentWithAuth(props: T) {
    const { login } = useAppSelector(getUser);
    const navigate = useNavigate();

    useEffect(() => {
      const isAuth = localStorage.getItem('sessionStorage');
      if (!isAuth) {
        navigate(MAIN, { state: { modalOpen: true }, replace: true });
      }
    }, [login]);

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <WrappedComponent {...(props as T)} />;
  }

  ComponentWithAuth.displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  return ComponentWithAuth;
}

export default WithAuth;
