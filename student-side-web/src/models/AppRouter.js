import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Studio from '../pages/Studio';
import Inbox from '../pages/Inbox';
import Library from '../pages/Library';
import NavBar from '../components/NavBar';
import UserSelection from '../pages/UserSelection';
import Landing from '../pages/Landing';


const AppRouter = () => {

    const location = window.location.pathname;

    return (
        <>
            <Router>
                <div className={location === '/home' ||
                                location === '/studio' ||
                                location === '/inbox' ||
                                location === '/library'
                                ? '' : 'collapse'}>
                    <NavBar />
                </div>
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='/user-selection' element={<UserSelection />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/studio' element={<Studio />} />
                    <Route path='/inbox' element={<Inbox />} />
                    <Route path='/library' element={<Library />} />
                </Routes>
            </Router>
        </>
    );
}

export default AppRouter;