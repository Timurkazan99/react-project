import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';
import NavAuth from './NavAuth';
import './navstyle.scss';

function NavBar() {
  return (
    <div className="Nav__container">
      <div className="Nav__container_logo">
        <NavLink className="Nav__logo" to="/">
          LOGOTYPE
        </NavLink>
      </div>
      <div className="Nav__container__body">
        <div className="Nav__body_left">
          <NavLinks />
        </div>
        <div className="Nav__body_right">
          <NavAuth />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
