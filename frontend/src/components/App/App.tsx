import { useEffect } from 'react';
import NavBar from '../Navbar';
import AppRouter from '../AppRouter';
import '../../styles/style.scss';
import {
  fetchAllCountry, fetchFavorites, fetchHistory, setUser, useAppDispatch,
} from '../../store';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const token = localStorage.getItem('sessionStorage');
    if (!token) {
      return;
    }
    dispatch(setUser());
    dispatch(fetchHistory());
    dispatch(fetchFavorites());
    dispatch(fetchAllCountry());
  }, []);

  return (
    <>
      <NavBar />
      <div className="container">
        <AppRouter />
      </div>
    </>
  );
}

export default App;
