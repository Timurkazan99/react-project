import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  getUser, setFavoriteCountry, setHistory, setUser,
} from '../../store';

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
            <NavLink className="Nav__navlink" to="/signin">
              signIn
            </NavLink>
            <div className="Nav__divider">/</div>
            <NavLink className="Nav__navlink" to="/signup">
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
