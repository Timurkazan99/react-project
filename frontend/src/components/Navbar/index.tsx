import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';
import NavAuth from './NavAuth';

function NavBar() {
  return (
    <div className="Nav__container">
      <div className="Nav__container_logo">
        <NavLink to="/">
          LOGOTYPE
        </NavLink>
      </div>
      <div className="Nav__container_left">
        <NavLinks />
      </div>
      <div className="Nav__container_right">
        <NavAuth />
      </div>
    </div>
  );
}

export default NavBar;
