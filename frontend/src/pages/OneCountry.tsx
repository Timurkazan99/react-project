import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOneCountry, useAppDispatch, useAppSelector } from '../store';
import '../styles/OneCountry.scss';

function OneCountry() {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const item = useAppSelector((state) => state.country.oneCountry);

  useEffect(() => {
    dispatch(fetchOneCountry(String(id)));
  }, [id]);

  if (!item) {
    return null;
  }

  const showLangs = (langs: object): string => Object.values(langs).join(', ');

  return (
    <div className="one-country">
      <img className="one-country__pic--flag" src={item.flags.png} alt={item.flags.alt} />
      <div>Information about country:</div>
      <div>
        <span className="one-country__item-title">Official name: </span>
        <span className="one-country__item-info">{item.name.official}</span>
      </div>
      <div>
        <span className="one-country__item-title">Capital: </span>
        <span className="one-country__item-info">{item.capital.join(' , ')}</span>
      </div>
      <div>
        <span className="one-country__item-title">Area: </span>
        <span className="one-country__item-info">{`${item.area.toLocaleString('ru')} km2`}</span>
      </div>
      <div>
        <span className="one-country__item-title">Population: </span>
        <span className="one-country__item-info">{`${item.population.toLocaleString('ru')} people`}</span>
      </div>
      <div>
        <span className="one-country__item-title">Languages: </span>
        <span className="one-country__item-info">{showLangs(item.languages)}</span>
      </div>
      <div>
        <span className="one-country__item-title">Independent: </span>
        <span className="one-country__item-info">{`${item.independent ? 'Yes' : 'No'}`}</span>
      </div>
      <div>
        <span className="one-country__item-title">Continents: </span>
        <span className="one-country__item-info">{item.continents.join('and')}</span>
      </div>
      <div>
        <span className="one-country__item-title">Region: </span>
        <span className="one-country__item-info">{item.region}</span>
      </div>
      <div>
        <span className="one-country__item-title">Subregion: </span>
        <span className="one-country__item-info">{item.subregion}</span>
      </div>
      <img className="one-country__pic--coatOfArms" src={item.coatOfArms.png} alt={item.coatOfArms.alt} />
    </div>
  );
}

export default OneCountry;
