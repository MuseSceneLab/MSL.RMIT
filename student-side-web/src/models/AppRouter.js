import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Studio from '../pages/Studio';
import Inbox from '../pages/Inbox';
import Library from '../pages/Library';
import NavBar from '../components/NavBar';

const AppRouter = () => {
    return (
        <>
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/studio' element={<Studio />} />
                    <Route path='/inbox' element={<Inbox />} />
                    <Route path='/library' element={<Library />} />
                </Routes>
            </Router>
        </>
    );
}

export default AppRouter;