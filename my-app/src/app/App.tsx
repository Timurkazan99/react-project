import React from 'react';
import { Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <div className='app__container'>
            <Routes>
                <Route path='/' element={''} >
                    <Route path='/favorite' element={''} />
                    <Route path='/history' element={''} />
                    <Route path='/' element={''} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;