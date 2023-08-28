import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Studio from '../pages/Studio';
import Inbox from '../pages/Inbox';
import Library from '../pages/Library';
import NavBar from '../components/NavBar';
import UserSelection from '../pages/UserSelection';
import Landing from '../pages/Landing';
import StudentLoginForm from '../components/StudentLoginForm';
import SignupForm from '../components/SignupForm';
import Settings from '../pages/Settings';


const AppRouter = () => {

    const location = window.location.pathname;

    return (
        <>
            <Router>
                {/* Only shows Nav Bar under these URLs */}
                <div className={location === '/home' ||
                                location === '/studio' ||
                                location === '/inbox' ||
                                location === '/library' ||
                                location === '/settings'
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
                    <Route path='/login' element={<LoginForm />} />
                    <Route path='/signup' element={<SignupForm />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='*' element={<Landing />} />
                </Routes>
            </Router>
        </>
    );
}

export default AppRouter;