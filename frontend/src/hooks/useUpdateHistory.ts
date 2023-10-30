import {
  addHistory, getUser, useAppDispatch, useAppSelector,
} from '../store';

function useUpdateHistory() {
  const dispatch = useAppDispatch();
  const { login } = useAppSelector(getUser);

  return (type: string, search: string) => {
    if (login) {
      const newValue = {
        type,
        search,
        timestamp: Date.now(),
      };
      dispatch(addHistory({ login, history: newValue }));
    }
  };
}

export default useUpdateHistory;
