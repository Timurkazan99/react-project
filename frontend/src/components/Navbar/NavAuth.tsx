import {
  getIsAuth, openModal, useAppDispatch, useAppSelector,
} from '../../store';
import NavUser from './NavUser';

function NavAuth() {
  const isAuth = useAppSelector(getIsAuth);
  const dispatch = useAppDispatch();
  return isAuth ? <NavUser /> : (
    <>
      <button
        className="sign__button"
        type="button"
        onClick={() => dispatch(openModal('SIGNIN'))}
      >
        Sign in
      </button>
      <button
        className="sign__button"
        type="button"
        onClick={() => dispatch(openModal('SIGNUP'))}
      >
        Sign up
      </button>
    </>
  );
}

export default NavAuth;
