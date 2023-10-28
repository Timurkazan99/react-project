import {
  getUser, openModal, useAppDispatch, useAppSelector,
} from '../../store';
import NavUser from './NavUser';

function NavAuth() {
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  return user.login ? <NavUser /> : (
    <>
      <button
        className="sign__button"
        type="button"
        onClick={() => dispatch(openModal('signin'))}
      >
        SignIn
      </button>
      <button
        className="sign__button"
        type="button"
        onClick={() => dispatch(openModal('signup'))}
      >
        SignIn
      </button>
    </>
  );
}

export default NavAuth;
