import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { getUser } from '../../store';

function NavAuth() {
  const user = useAppSelector(getUser);
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {!user.login
        ? (
          <>
            <NavLink to="/signin">
              signIn
            </NavLink>
            <NavLink to="/signup">
              signUp
            </NavLink>
          </>
        )
        : (
          <button type="button">выйти</button>
        )}
    </>
  );
}

export default NavAuth;
