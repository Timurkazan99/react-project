import { getUser, useAppSelector } from '../../store';
import SignUp from '../Signup';
import NavUser from './NavUser';
import SignIn from './Signin';

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
