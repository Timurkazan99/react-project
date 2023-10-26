import { useEffect } from 'react';
import NavBar from '../Navbar';
import AppRouter from '../AppRouter';
import '../../styles/style.scss';
import { useAppDispatch } from '../../hooks/redux';
import { fetchAllCountry, setUser } from '../../store';
import initHistory from '../../store/thunks/history';
import initFavorites from '../../store/thunks/favorites';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const token = localStorage.getItem('sessionStorage');
    if (!token) {
      return;
    }
    dispatch(setUser());
    dispatch(initHistory());
    dispatch(initFavorites());
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
