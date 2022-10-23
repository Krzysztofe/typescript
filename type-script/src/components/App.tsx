import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home/Home'
import NavBar from "./Home/NavBar/NavBar";
import Register from "./Login/Register";
import Login from './Login/Login'
import Logout from './Login/Logout'
import OddajMain from "./oddaj/OddajMain";
import GlobalContextProv from "./oddaj/oddajContext/GlobalContextProv";

const App = () => {
    return (
        <BrowserRouter basename= '/typescript'>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/rejestracja' element={<Register/>}/>
                <Route path='/logowanie' element={<Login/>}/>
                <Route path='/wylogowano' element={<Logout/>}/>
                <Route path='/oddaj' element={
                    <GlobalContextProv>
                        <OddajMain/>
                    </GlobalContextProv>
                }/>

                {/*<Route path='/oddaj'*/}
                {/*       element={*/}
                {/*           <GlobalContextProv>*/}
                {/*               <ProtectedRouteOddajMain/>*/}
                {/*           </GlobalContextProv>*/}
                {/*       }/>*/}
            </Routes>
        </BrowserRouter>
    )
};

export default App;