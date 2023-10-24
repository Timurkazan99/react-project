import { Link, useNavigate } from 'react-router-dom';
import {
  getUser, setFavoriteCountry, setHistory, setUser,
  useAppDispatch, useAppSelector,
} from '../../store';
import IconExit from '../Icons/IconExit';
import IconPerson from '../Icons/IconPerson';
import Signup from '../Signup/Signup';

function NavAuth() {
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(setFavoriteCountry([]));
    dispatch(setHistory([]));
    dispatch(setUser({ login: '', password: '' }));
    navigate('/');
  };
  return !user.login
    ? (
      <>
        <Link className="Nav__navlink" to="/signin">
          signIn
        </Link>
        <Signup />
        <Link className="Nav__navlink" to="/signup">
          signUp
        </Link>
      </>
    )
    : (
      <>
        <span className="Nav__span_login">
          {user.login}
        </span>
        <span className="Nav__span_person">
          <IconPerson />
        </span>
        <button type="button" className="Nav__button_exit" onClick={handleClick}>
          <IconExit />
        </button>
      </>
    );
}

export default NavAuth;
