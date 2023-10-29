import { addFavoriteCountry, getUser, useAppSelector, deleteFavoriteCountry, useAppDispatch } from '../../store';
import './FavoriteButton.scss'

function FavoriteButton({ id }) {
  const { login } = useAppSelector(getUser)

  const dispatch = useAppDispatch()

  const toggleFavorite = () => {
    console.log(id);
    localStorage.setItem(`${login}_favorite`, addFavoriteCountry())
  };

  return (
    <button className="favorite-button"
            onClick={toggleFavorite}
    >
      Добавить в избранное
    </button>
  );
};

export default FavoriteButton;
