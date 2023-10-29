import {
  addHistory, getAllHistory, getUser, useAppDispatch, useAppSelector,
} from '../store';
import useGetAuth from './useGetAuth';

function useUpdateHistory() {
  const dispatch = useAppDispatch();
  const history = useAppSelector(getAllHistory);
  const { login } = useAppSelector(getUser);
  const auth = useGetAuth();

  return (type: string, search: string) => {
    if (auth) {
      const newValue = {
        type,
        search,
        timestamp: Date.now(),
      };
      dispatch(addHistory(newValue));

      localStorage.setItem(`${login}_history`, JSON.stringify([...history, newValue]));
    }
  };
}

export default useUpdateHistory;
