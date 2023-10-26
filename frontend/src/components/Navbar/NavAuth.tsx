import { useAppSelector } from '../../hooks/redux';
import { getUser } from '../../store';
import SignUp from '../Signup';
import NavUser from './NavUser';

function NavAuth() {
  const user = useAppSelector(getUser);
  return user.login ? <NavUser /> : <SignUp />;
}

export default NavAuth;
