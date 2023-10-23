import { NavLink } from 'react-router-dom';

function NavLinks() {
  return (
    <>
      <NavLink className="Nav__navlink" to="/history">
        history
      </NavLink>
      <NavLink className="Nav__navlink" to="/favorites">
        favorites
      </NavLink>
    </>
  );
}

export default NavLinks;
