import { getUser, useAppSelector } from '../../store';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import NavUser from './NavUser';

function NavAuth() {
  const user = useAppSelector(getUser);
  return user.login ? <NavUser /> : (
    <>
      <SignIn />
      <SignUp />
    </>
  );
}

export default NavAuth;
