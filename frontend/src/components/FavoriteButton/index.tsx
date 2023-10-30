import { useState } from 'react';
import { getUser, useAppSelector } from '../../store';
import { Props } from './type';
import './FavoriteButton.scss';
import { addFavoriteCountry, deleteFavoriteCountry, getCountriesFromLocalStorage } from '../../utils/favoriteHelper';

function FavoriteButton({ cca3 }: Props) {
  const { login } = useAppSelector(getUser);
  if (!login) return null;
  const [isFavorite, setIsFavorite] = useState(!getCountriesFromLocalStorage(login).includes(cca3));
  const label = isFavorite ? 'Add to favorite' : 'Delete from favorite';
  const styles = isFavorite ? 'favorite-button__add' : 'favorite-button__delete';

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      addFavoriteCountry(cca3, login);
    } else {
      deleteFavoriteCountry(cca3, login);
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
