import { Link, createSearchParams } from 'react-router-dom';
import { memo } from 'react';
import { Props } from './type';
import { LIMIT, SEARCH } from '../../utils/const';
import getEnumKeyByString from '../../utils/getEnumKeyByString';
import { SearchSelectTypes } from '../../types';

function HistoryItem(props: Props) {
  const { type, search, timestamp } = props;
  const date = new Date(timestamp * 1000).toLocaleString('ru-RU');
  const key = getEnumKeyByString(SearchSelectTypes, type);

  return (
    <Link
      to={{
        pathname: SEARCH,
        search: createSearchParams({
          page: '1',
          limit: String(LIMIT),
          type: String(type),
          search: String(search),
        }).toString(),
      }}
      className="history__item"
    >
      <span>{SearchSelectTypes[key]}</span>
      <span>{search}</span>
      <span>{date}</span>
    </Link>
  );
}

export default memo(HistoryItem);
