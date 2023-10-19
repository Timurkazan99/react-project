import NavBar from '../Navbar/Navbar';
import AppRouter from '../AppRouter/AppRouter';




const App = () => {
       
    return (
        <div className='app__container'>
            <NavBar />
            <div className='app__body_container'>
                <AppRouter />
            </div>
        </div>
    );
};

export default App;