import { getUser, useAppSelector } from '../../store';
import Signin from '../Signin';
import SignUp from '../Signup';
import NavUser from './NavUser';

function NavAuth() {
  const user = useAppSelector(getUser);
  return user.login ? <NavUser /> : (
    <>
      <Signin />
      <SignUp />
    </>
  );
}

export default NavAuth;
