import React from 'react';
import { useSearchParams } from 'react-router-dom';
import CountryItem from '../CountryItem';
import { useAppSelector } from '../../hooks/redux';
import { getCountriesPaginat } from '../../store';

function CountryList() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page'));
  const limit = Number(searchParams.get('limit'));

  const items = useAppSelector((state) => getCountriesPaginat(state, page, limit));

  // eslint-disable-next-line react/jsx-props-no-spreading
  const itemsComponents = items.map((item) => (<CountryItem key={item.cca3} {...item} />));

  return (
    <div className="countries__container">
      {itemsComponents}
    </div>
  );
}

export default CountryList;
