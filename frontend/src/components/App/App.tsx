import { useEffect } from 'react';
import NavBar from '../Navbar';
import AppRouter from '../AppRouter';
import '../../styles/style.scss';
import { fetchAllCountry, useAppDispatch } from '../../store';

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
