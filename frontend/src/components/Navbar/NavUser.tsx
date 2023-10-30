import {
  setFavoriteCountry, deleteUser, getUser, useAppDispatch, useAppSelector,
} from '../../store';
import IconExit from '../Icons/IconExit';
import IconPerson from '../Icons/IconPerson';

function NavUser() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);
  const handleClick = () => {
    dispatch(setFavoriteCountry([]));
    dispatch(deleteUser());
    localStorage.removeItem('sessionStorage');
  };
  return (
    <>
      <span className="Nav__span_login">
        {user.login}
      </span>
      <span className="Nav__span_person">
        <IconPerson />
      </span>
      <button type="button" className="Nav__button_exit" onClick={handleClick}>
        <IconExit />
      </button>
    </>
  );
}

export default NavUser;
