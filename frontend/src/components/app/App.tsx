import NavBar from '../Navbar';
import AppRouter from '../AppRouter/AppRouter';

function App() {
  return (
    <div className="app__container">
      <NavBar />
      <div className="app__body_container">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
