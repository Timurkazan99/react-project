import {
  getUser, openModal, useAppDispatch, useAppSelector,
} from '../../store';
import NavUser from './NavUser';

function NavAuth() {
  const { login } = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  return login ? <NavUser /> : (
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
