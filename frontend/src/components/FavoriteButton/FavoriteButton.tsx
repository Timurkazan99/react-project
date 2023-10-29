import './FavoriteButton.scss'

function FavoriteButton({ id }) {

  const toggleFavorite = () => {
    console.log(id);
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
