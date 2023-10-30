import HistoryItem from '../HistoryItem';
import {getUser, useAppSelector} from '../../store';
import { getHistory } from '../../utils';
import './HistoryList.scss';

function HistoryList() {
  const { login } = useAppSelector(getUser);
  const history = getHistory(login);

  const items = history.map((item) => (
    <HistoryItem
      key={item.timestamp}
      type={item.type}
      search={item.search}
      timestamp={item.timestamp}
    />
  ));

  if (items.length === 0) {
    return (
      <div>List of history is empty</div>
    );
  }

  return (
    <div className="history__container">
      <div>
        <span>Type</span>
        <span>Search</span>
        <span>Time</span>
      </div>
      {items}
    </div>
  );
}

export default HistoryList;
