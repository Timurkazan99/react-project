import WithAuth from '../hoc/WithAuth';
import HistoryList from '../components/HistoryList';

function History() {
  return (
    <HistoryList />
  );
}

export default WithAuth(History);
