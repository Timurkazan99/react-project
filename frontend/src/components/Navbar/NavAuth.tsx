import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  getUser, setFavoriteCountry, setHistory, setUser,
} from '../../store';

function NavAuth() {
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setFavoriteCountry([]));
    dispatch(setHistory([]));
    dispatch(setUser({ login: '', password: '' }));
  };
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {user.login
        ? (
          <>
            <NavLink className="Nav__link_auth" to="/signin">
              signIn
            </NavLink>
            <NavLink className="Nav__link_auth" to="/signup">
              signUp
            </NavLink>
          </>
        )
        : (
          <button type="button" onClick={handleClick}>выйти</button>
        )}
    </>
  );
}

export default NavAuth;
