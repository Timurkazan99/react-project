import HistoryItem from '../HistoryItem';
import { useAppSelector } from '../../store';
import getAllHistory from '../../store/selectors/historySelector';
import './HistoryList.scss';

function HistoryList() {
  const history = useAppSelector(getAllHistory);
  const items = history.map((item) => (
    <HistoryItem
      key={item.timestamp}
      type={item.type}
      search={item.search}
      timestamp={item.timestamp}
    />
  ));

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
