import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Props } from './type';

function CountryItem(props: Props) {
  const {
    name, flags, capital, cca3, population,
  } = props;

  return (
    <div className="countries__item">
      <h5>{name.official}</h5>
      <img className="countries__item__flag" src={flags.png} width="160px" height="106.5px" alt={flags.alt} />
      <ul>
        <li>
          {name.common}
        </li>
        <li>
          {`г. ${capital[0]}` || 'Нету столицы'}
        </li>
        <li>
          {population}
          🧍
        </li>
      </ul>
      <Link className="countries__item__link" to={`/${cca3}`}>Подробнее</Link>
    </div>
  );
}

export default memo(CountryItem);
