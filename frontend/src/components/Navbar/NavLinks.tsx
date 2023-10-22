import { NavLink } from 'react-router-dom';

function NavLinks() {
  return (
    <>
      <NavLink className="Nav__navlink_left" to="/history">
        history
      </NavLink>
      <NavLink className="Nav__navlink_left" to="/favorites">
        favorites
      </NavLink>
    </>
  );
}

export default NavLinks;
