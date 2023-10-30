import { useEffect } from 'react';
import NavBar from '../Navbar';
import AppRouter from '../AppRouter';
import '../../styles/style.scss';
import { setUser, useAppDispatch } from '../../store';
import Modal from '../Modal';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const token = localStorage.getItem('sessionStorage');
    if (!token) {
      return;
    }
    dispatch(setUser());
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
