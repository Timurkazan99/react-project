import React from 'react';
import CountryItem from '../CountryItem';
import { getCountriesPaginat, useAppSelector } from '../../store';
import UseGetSearchParams from '../../hooks/useGetSearchParams';
import './CountryList.scss';

function CountryList() {
  const { page, limit } = UseGetSearchParams();

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
