import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  getUser, setFavoriteCountry, setHistory, setUser,
} from '../../store';
import IconExit from '../Icons/IconExit';
import IconPerson from '../Icons/IconPerson';

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
  return (
  // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {!user.login
        ? (
          <>
            <Link className="Nav__navlink" to="/signin">
              signIn
            </Link>
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
        )}
    </>
  );
}

export default NavAuth;
