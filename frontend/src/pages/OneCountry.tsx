import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOneCountry, useAppDispatch, useAppSelector } from '../store';
import '../styles/OneCountry.scss';

function OneCountry() {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const item = useAppSelector((state) => state.country.oneCountry);

  const showLangs = (langs: object | undefined): string | undefined => {
    if (langs) {
      const values = Object.values(langs).join(', ');
      return `Languages: ${values}`;
    }
  };

  useEffect(() => {
    dispatch(fetchOneCountry(id));
  }, [id]);

  return (
    <div className="one-country">
      <img className="one-country__pic--flag" src={item?.flags.png} alt={item?.flags.alt} />
      <div className="one-country__title">Information about country:</div>
      <div>{'Official name: ' + item?.name.official}</div>
      <div>{'Capital: ' + item?.capital.join(' , ')}</div>
      <div>{'Area: ' + item?.area.toLocaleString('ru') + ' km2'}</div>
      <div>{'Population: ' + item?.population.toLocaleString('ru') + ' people'}</div>
      <div>{showLangs(item?.languages)}</div>
      <div>{'Independent: ' + `${item?.independent ? 'Yes' : 'No'}`}</div>
      <div>{'Continents: ' + item?.continents.join('and')}</div>
      <div>{'Region: ' + item?.region}</div>
      <div>{'Subregion: ' + item?.subregion}</div>
      <img className="one-country__pic--coatOfArms" src={item?.coatOfArms.png} alt={item?.coatOfArms.alt} />
    </div>
  );
}

export default OneCountry;
