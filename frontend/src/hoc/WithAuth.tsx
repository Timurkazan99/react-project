import { Attributes, ComponentType, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getIsAuth, openModal, useAppDispatch, useAppSelector,
} from '../store';
import { MAIN } from '../utils';

function WithAuth <T extends Attributes>(
  WrappedComponent: ComponentType<T>,
) {
  function ComponentWithAuth(props: T) {
    const dispatch = useAppDispatch();
    const isAuth = useAppSelector(getIsAuth);
    const navigate = useNavigate();

    useEffect(() => {
      if (!isAuth) {
        navigate(MAIN);
        dispatch(openModal('SIGNIN'));
      }
    }, [isAuth]);

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <WrappedComponent {...(props as T)} />;
  }

  ComponentWithAuth.displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  return ComponentWithAuth;
}

export default WithAuth;
