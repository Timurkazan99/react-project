import {
  addFavoriteCountry, getUser, useAppSelector,
  deleteFavoriteCountry, useAppDispatch, getFavoriteCca3,
} from '../../store';
import { Props } from './type';
import './FavoriteButton.scss';

function FavoriteButton({ cca3 }: Props) {
  const { login } = useAppSelector(getUser);
  const favorites = useAppSelector(getFavoriteCca3);
  const dispatch = useAppDispatch();

  if (!login) return null;

  const isFavorites = !favorites.includes(cca3);
  const label = isFavorites ? 'Add to favorite' : 'Delete from favorite';
  const styles = isFavorites ? 'favorite-button__add' : 'favorite-button__delete';

  const toggleFavorite = () => {
    if (isFavorites) {
      dispatch(addFavoriteCountry({ cca3, login }));
    } else {
      dispatch(deleteFavoriteCountry({ cca3, login }));
    }
  };

  return (
    <button
      type="button"
      className={styles}
      onClick={toggleFavorite}
    >
      { label }
    </button>
  );
}

export default FavoriteButton;
