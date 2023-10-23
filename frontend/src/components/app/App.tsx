import { useEffect } from 'react';
import NavBar from '../Navbar/Navbar';
import AppRouter from '../AppRouter/AppRouter';
import '../../styles/style.scss';
import { useAppDispatch } from '../../hooks/redux';
import { fetchAllCountry } from '../../store';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
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
