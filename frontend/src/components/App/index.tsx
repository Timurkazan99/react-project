import { useEffect } from 'react';
import NavBar from '../Navbar';
import AppRouter from '../AppRouter';
import '../../styles/style.scss';
import { setUser, useAppDispatch } from '../../store';
import Modal from '../Modal';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
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
