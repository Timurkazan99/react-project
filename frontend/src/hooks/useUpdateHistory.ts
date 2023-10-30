import { getUser, useAppSelector } from '../store';
import { addHistory } from '../utils';

function useUpdateHistory() {
  const { login } = useAppSelector(getUser);

  return (type: string, search: string) => {
    if (login) {
      const newValue = {
        type,
        search,
        timestamp: Date.now(),
      };
      addHistory(login, newValue)
    }
  };
}

export default useUpdateHistory;
