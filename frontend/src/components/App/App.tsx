import { useEffect } from 'react';
import NavBar from '../Navbar';
import AppRouter from '../AppRouter';
import '../../styles/style.scss';
import {
  fetchAllCountry, fetchFavorites, fetchHistory, setUser, useAppDispatch,
} from '../../store';
import Modal from '../Modal';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllCountry());
    const token = localStorage.getItem('sessionStorage');
    if (!token) {
      return;
    }
    dispatch(setUser());
    dispatch(fetchHistory());
    dispatch(fetchFavorites());
  }, []);

  return (
    <>
      <NavBar />
      <div className="container">
        <AppRouter />
      </div>
      <Modal />
    </>
  );
}

export default App;
