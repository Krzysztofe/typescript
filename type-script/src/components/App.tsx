import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home/Home'

const App: React.FC = () => {
    return (
        <BrowserRouter basename = '/type-script'>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </BrowserRouter>

    )
};

export default App;